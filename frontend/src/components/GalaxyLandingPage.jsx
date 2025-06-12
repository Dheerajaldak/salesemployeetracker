import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const StarField = ({ count = 5000, scrollFactor }) => {
  const meshRef = useRef();
  const [particlePositions, setParticlePositions] = useState([]);

  const starsGeometry = useMemo(() => {
    const positions = [];
    const colors = [];
    const colorInside = new THREE.Color('#ffffff');
    const colorOutside = new THREE.Color('blue');

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 300;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);

      const color = colorInside.clone().lerp(colorOutside, radius / 300);
      colors.push(color.r, color.g, color.b);
    }

    setParticlePositions(positions);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }, [count]);

  useFrame(() => {
    if (meshRef.current && particlePositions.length > 0) {
      const angleFactor = scrollFactor * 0.02;
      const radiusFactor = 1 + Math.min(scrollFactor, 1) * 0.5;

      const offsetX = 400 + scrollFactor * 50;
      const offsetZ = -100;

      for (let i = 0; i < particlePositions.length; i += 3) {
        const x = particlePositions[i];
        const y = particlePositions[i + 1];
        const z = particlePositions[i + 2];

        const radius = Math.sqrt(x * x + y * y + z * z);
        const theta = Math.atan2(y, x) + angleFactor;
        const phi = Math.acos(z / radius) + angleFactor;

        particlePositions[i] = offsetX + radiusFactor * radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[i + 1] = radiusFactor * radius * Math.sin(phi) * Math.sin(theta);
        particlePositions[i + 2] = offsetZ + radiusFactor * radius * Math.cos(phi);
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef} geometry={starsGeometry}>
      <pointsMaterial size={1.2} vertexColors sizeAttenuation depthWrite={false} />
    </points>
  );
};

const GalaxyLandingPage = () => {
  const [scrollFactor, setScrollFactor] = useState(0);
  const [currentWord, setCurrentWord] = useState('Growth');
  const words = ['Growth', 'Performance', 'Success', 'Revenue', 'Efficiency'];
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollFactor(window.scrollY / 1000);
    };

    const interval = setInterval(() => {
      setCurrentWord(prev => {
        const index = words.indexOf(prev);
        return words[(index + 1) % words.length];
      });
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: 'black' }}>
      <Canvas camera={{ position: [0, 0, 300], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <StarField count={5000} scrollFactor={scrollFactor} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          color: 'white',
          textAlign: 'center',
          width: '90%',
          maxWidth: '800px',
          padding: '1rem',
        }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Track Your Sales in <span style={{ color: 'blue' }}>{currentWord}</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '1rem',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          color: 'white',
          margin: '0 auto',
        }}>
          Monitor KPIs, analyze performance, and unlock opportunities with our powerful sales tracking dashboard.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              padding: '0.8rem 2rem',
              backgroundColor: hovered ? '#0D47A1' : 'transparent',
              backdropFilter: 'blur(10px)',
              borderRadius: '999px',
              color: '#fff',
              fontWeight: 'bold',
              border: hovered ? 'none' : '2px solid #0D47A1',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              transition: 'all 0.3s ease',
            }}
          >
            Get Started
            <span style={{
              display: 'inline-block',
              transition: 'all 0.3s ease',
              transform: hovered ? 'translateX(8px) scale(1.2)' : 'translateX(0) scale(1)',
            }}>
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalaxyLandingPage;
