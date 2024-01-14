import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Lights, SofaMesh } from '@components/main/three';

export function FurnitureCanvas() {
  return (
    <Canvas gl={{ antialias: true }}
      shadows={'soft'}
      camera={{
        aspect: window.innerWidth / (window.innerHeight / 2),
        far: 100,
        fov: 75,
        near: 0.1,
        position: [0, 0, 3],
      }}>
      <OrbitControls />
      <Lights />
      <SofaMesh />
    </Canvas>
  );
}