import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHeroBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfce7f3); // Pink-50 background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xec4899, 1, 100);
    pointLight1.position.set(-5, 3, -5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf43f5e, 1, 100);
    pointLight2.position.set(5, -3, -5);
    scene.add(pointLight2);

    // Create Japanese-inspired floating elements
    const elements = [];
    
    // Create cherry blossom-like particles
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xfda4af,
      emissive: 0xfda4af,
      emissiveIntensity: 0.2
    });

    for (let i = 0; i < 50; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.x = (Math.random() - 0.5) * 20;
      particle.position.y = (Math.random() - 0.5) * 20;
      particle.position.z = (Math.random() - 0.5) * 20;
      particle.userData = {
        speedX: (Math.random() - 0.5) * 0.01,
        speedY: (Math.random() - 0.5) * 0.01,
        speedZ: (Math.random() - 0.5) * 0.01
      };
      scene.add(particle);
      elements.push(particle);
    }

    // Create floating geometric shapes
    const geometries = [
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.5),
      new THREE.IcosahedronGeometry(0.5)
    ];

    const shapesMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xf472b6,
      metalness: 0.5,
      roughness: 0.2
    });

    for (let i = 0; i < 5; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const shape = new THREE.Mesh(geometry, shapesMaterial);
      shape.position.x = (Math.random() - 0.5) * 10;
      shape.position.y = (Math.random() - 0.5) * 10;
      shape.position.z = (Math.random() - 0.5) * 10;
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };
      scene.add(shape);
      elements.push(shape);
    }

    // Animation
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Animate particles
      elements.forEach((element, index) => {
        if (index < 50) { // Particles
          element.position.x += element.userData.speedX;
          element.position.y += element.userData.speedY;
          element.position.z += element.userData.speedZ;

          // Wrap around
          if (Math.abs(element.position.x) > 10) element.position.x *= -1;
          if (Math.abs(element.position.y) > 10) element.position.y *= -1;
          if (Math.abs(element.position.z) > 10) element.position.z *= -1;
        } else { // Shapes
          element.rotation.x += element.userData.rotationSpeed.x;
          element.rotation.y += element.userData.rotationSpeed.y;
          element.rotation.z += element.userData.rotationSpeed.z;
        }
      });

      // Gentle camera movement
      const time = Date.now() * 0.0001;
      camera.position.x = Math.sin(time) * 0.5;
      camera.position.y = Math.cos(time * 0.7) * 0.3;
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
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Dispose geometries and materials
      elements.forEach(element => {
        if (element.geometry) element.geometry.dispose();
        if (element.material) element.material.dispose();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
};

export default ThreeHeroBackground;


