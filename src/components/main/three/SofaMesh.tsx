import { Plane, TorusKnot } from '@react-three/drei';

export function SofaMesh() {
  return (
    <>
      <Plane args={[40, 40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial/>
      </Plane>
      <TorusKnot args={[1, 0.2, 128, 128, 2, 3]} position={[-3, 1.6, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={0xffffff} />
      </TorusKnot>
    </>
  );
}