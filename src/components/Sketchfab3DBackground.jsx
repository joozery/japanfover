import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const Sketchfab3DBackground = ({ 
  modelUrl = '/models/scene.gltf', // Path to your downloaded GLTF/GLB file
  cameraDistance = 5,
  autoRotate = true 
}) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    // ไม่ต้องมีพื้นหลัง - ให้โปร่งใส
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, cameraDistance);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true, // ทำให้พื้นหลังโปร่งใส
      premultipliedAlpha: false // ป้องกันปัญหาสีที่ขอบ
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // ปิด shadow เพื่อความชัดเจน
    renderer.shadowMap.enabled = false;
    renderer.outputEncoding = THREE.sRGBEncoding;
    // ล้างสีพื้นหลังให้โปร่งใส
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced Lighting for better model visibility (เพิ่มความสว่างให้ชัดขึ้น)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); // เพิ่มจาก 0.6 → 1.2
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // เพิ่มจาก 1 → 1.5
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = false; // ปิด shadow
    scene.add(directionalLight);

    // เพิ่ม directional light อีกด้าน สำหรับความสมดุล
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(-5, 5, 5);
    scene.add(directionalLight2);

    // Pink accent lights for Japanese aesthetic (ลดความเข้ม)
    const pointLight1 = new THREE.PointLight(0xfda4af, 0.5, 50); // ลดความเข้มลง
    pointLight1.position.set(-5, 3, -5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xfce7f3, 0.5, 50); // เปลี่ยนเป็นสีอ่อนกว่า
    pointLight2.position.set(5, 3, 5);
    scene.add(pointLight2);

    // Hemisphere light for natural lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.8); // เพิ่มความสว่าง
    scene.add(hemisphereLight);

    // Load 3D Model
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Scale model to fit scene
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim; // Adjust scale as needed
        model.scale.setScalar(scale);
        
        // Center the model
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale;
        model.position.z = -center.z * scale;
        
        // ปรับ materials ให้ชัดขึ้น
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            
            // Enhance materials สำหรับความชัด
            if (child.material) {
              // เพิ่มความสว่างของ material
              if (child.material.emissive) {
                child.material.emissiveIntensity = 0.1;
              }
              child.material.needsUpdate = true;
            }
          }
        });

        scene.add(model);
        modelRef.current = model;

        // Setup animation mixer if the model has animations
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;
          
          // Play all animations
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });
        }

        console.log('✅ 3D Model loaded successfully from Sketchfab!');
      },
      (progress) => {
        const percentComplete = (progress.loaded / progress.total) * 100;
        console.log(`Loading model: ${percentComplete.toFixed(2)}%`);
      },
      (error) => {
        console.error('❌ Error loading 3D model:', error);
        console.log('💡 Make sure to download the model from Sketchfab and place it in /public/models/');
      }
    );

    // Animation
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const delta = clockRef.current.getDelta();

      // Update animations
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      // Auto-rotate model
      if (modelRef.current && autoRotate) {
        modelRef.current.rotation.y += 0.003;
      }

      // Gentle camera sway
      const time = Date.now() * 0.0001;
      camera.position.x = Math.sin(time * 0.5) * 0.5;
      camera.position.y = 2 + Math.cos(time * 0.3) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Dispose model
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
    };
  }, [modelUrl, cameraDistance, autoRotate]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ 
        touchAction: 'none',
        background: 'transparent' // พื้นหลังโปร่งใส
      }}
    />
  );
};

export default Sketchfab3DBackground;

