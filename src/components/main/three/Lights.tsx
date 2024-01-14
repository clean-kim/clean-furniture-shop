import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { SpotLight, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { Object3D, Object3DEventMap } from 'three';

export const Lights = () => {
  const lightRef = useRef<Object3D<Object3DEventMap> | null>(null);
  // const targetRef = useRef(null);
  const [, setState] = useState<null | Object3D<Object3DEventMap>>(null);
  // useHelper(lightRef, THREE.DirectionalLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.PointLightHelper, 1, 0xffff00);
  // useHelper(lightRef, THREE.HemisphereLightHelper, 1, 0xffffff);
  useHelper(lightRef as unknown as MutableRefObject<Object3D<Object3DEventMap>>, THREE.SpotLightHelper, 0xffffff);

  useEffect(() => {
    setState(lightRef.current);
  }, []);

  return (
    <>
      {/* position: default 0 */}
      {/*<directionalLight
      ref={lightRef}
        castShadow
        args={[0xffffff, 5]}
        position={[4,4,4]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096} />*/}
      {/*<ambientLight args={[0xffffff, 10]} />*/}
      {/*<pointLight ref={lightRef} args={[0xffffff, 10, 10, 1]} position-y={2} cashShadow />*/}
      {/*<hemisphereLight ref={lightRef} args={[0x0000ff, 0xf00ff0, 5]} position-y={2} />*/}
      {/*<rectAreaLight ref={lightRef} args={[0xffffff, 5, 4, 4]} position-y={1} rotation-x={-Math.PI / 2} />*/}
      {/*<spotLight ref={lightRef} args={[0xffffff, 10, 100, Math.PI/4, 1, 0.5]} castShadow position={[3, 3, 3]}/>*/}
      <SpotLight color={0xffffff} intensity={10} distance={100} angle={Math.PI/4} penumbra={1} decay={0.5} anglePower={100} attenuation={5} radiusTop={1} radiusBottom={10} opacity={1} volumetric debug position={[3, 3, 3]} />
      <SpotLight color={0xff0000} intensity={10} distance={100} angle={Math.PI/4} penumbra={1} decay={0.5} anglePower={100} attenuation={5} radiusTop={1} radiusBottom={10} opacity={1} volumetric debug position={[1, 1, 1]} />
    </>
  );
};