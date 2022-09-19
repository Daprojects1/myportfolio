import { useRef } from "react";

import { useFrame } from "react-three-fiber";
/* eslint-disable react/no-unknown-property */
const Box = () => {
  const boxRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    boxRef.current.rotation.y = elapsedTime;
  });
  return (
    <mesh ref={boxRef} position={[0, 0, 3]}>
      <torusGeometry />
      {/* <boxGeometry args={[1, 32, 32]} /> */}
      <meshPhongMaterial wireframe color="black" />
    </mesh>
  );
};

export default Box;
