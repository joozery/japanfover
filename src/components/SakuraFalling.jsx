import React, { useEffect, useRef } from 'react';

const SakuraFalling = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Sakura petal class
    class SakuraPetal {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Start at random positions initially
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 8 + 4; // 4-12px
        this.speedY = Math.random() * 1 + 0.5; // 0.5-1.5px per frame
        this.speedX = Math.random() * 0.5 - 0.25; // -0.25 to 0.25px per frame
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1; // -1 to 1 degrees per frame
        this.opacity = Math.random() * 0.6 + 0.4; // 0.4-1.0
        this.swingSpeed = Math.random() * 0.02 + 0.01;
        this.swingDistance = Math.random() * 30 + 20;
      }

      update(time) {
        // Falling motion
        this.y += this.speedY;
        
        // Swinging motion (sine wave)
        this.x += Math.sin(time * this.swingSpeed) * 0.5;
        this.x += this.speedX;
        
        // Rotation
        this.rotation += this.rotationSpeed;

        // Reset when off screen
        if (this.y > canvas.height + 20) {
          this.reset();
        }
        if (this.x < -20 || this.x > canvas.width + 20) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        
        // Draw sakura petal shape
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for petal
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, '#FFB7D5');
        gradient.addColorStop(0.5, '#FFA0C9');
        gradient.addColorStop(1, '#FF8FB8');
        
        ctx.fillStyle = gradient;
        
        // Draw 5-petal sakura
        for (let i = 0; i < 5; i++) {
          ctx.rotate((Math.PI * 2) / 5);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(
            this.size * 0.5,
            this.size * 0.3,
            this.size * 0.8,
            this.size
          );
          ctx.quadraticCurveTo(
            this.size * 0.3,
            this.size * 0.7,
            0,
            this.size * 0.5
          );
          ctx.closePath();
          ctx.fill();
        }
        
        // Draw center
        ctx.fillStyle = '#FFE4E1';
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create petals
    const petalCount = 30;
    const petals = [];
    for (let i = 0; i < petalCount; i++) {
      petals.push(new SakuraPetal());
    }

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.1;
      
      petals.forEach(petal => {
        petal.update(time);
        petal.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default SakuraFalling;


