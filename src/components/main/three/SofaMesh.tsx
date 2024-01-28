import { useLayoutEffect, useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function SofaMesh() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const mesh = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mousePosition.y / window.innerHeight * Math.PI * 0.5;
      mesh.current.rotation.y = mousePosition.x / window.innerWidth * Math.PI * 0.5;
    }
  });

  const gltf = useLoader(GLTFLoader, '/models/sofa.glb');

  return <>
    {/* eslint-disable-next-line react/no-unknown-property */}
    <primitive object={gltf.scene} />
  </>;
}