import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { DirectionalLight, Object3D, Object3DEventMap } from 'three';

export const Lights = () => {
  const lightRef = useRef<DirectionalLight | null>(null);
  // const targetRef = useRef(null);
  const [, setState] = useState<null | Object3D<Object3DEventMap>>(null);
  useHelper(lightRef as MutableRefObject<DirectionalLight>, THREE.DirectionalLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.PointLightHelper, 1, 0xffff00);
  // useHelper(lightRef, THREE.HemisphereLightHelper, 1, 0xffffff);
  // useHelper(lightRef as MutableRefObject<DirectionalLight>, THREE.SpotLightHelper, 0xffffff);

  useEffect(() => {
    setState(lightRef.current);
  }, []);

  return (
    <>
      <directionalLight
        ref={lightRef}
        castShadow={true}
        args={[0xffffff, 4]}
        position={[0, 5, 20]}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-camera-near={0.1}
        shadow-camera-far={100}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096} />
      {/*<ambientLight args={[0xffffff, 5]} />*/}
      {/*<pointLight args={[0xffffff, 10, 10, 1]} position-y={2} cashShadow />*/}
      {/*<hemisphereLight args={[0xffffff, 0xffffff, 5]} position-y={2} />*/}
      {/*<rectAreaLight args={[0xffffff, 5, 4, 4]} position-y={1} rotation-x={-Math.PI / 2} />*/}
      {/*<spotLight args={[0xffffff, 10, 100, Math.PI/4, 1, 0.5]} castShadow position={[3, 3, 3]}/>*/}
      {/*<SpotLight color={0xffffff} intensity={10} distance={100} angle={Math.PI/4} penumbra={1} decay={0.5} anglePower={100} attenuation={5} radiusTop={1} radiusBottom={10} opacity={1} volumetric debug position={[3, 3, 3]} />*/}
    </>
  );
};