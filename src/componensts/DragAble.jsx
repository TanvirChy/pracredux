import React, { useEffect, useRef, useState } from "react";

const DragAble = ({ classCard, oneItem }) => {
  const visibleRef = useRef(null);
  const [{ x, y }, setItem] = useState({ x: 0, y: 0 });
  console.log(`state x=${x} y=${y}`);

  console.log(oneItem);

  const handleDrag = (e) => {
    console.log(`onDrag x = ${e.pageX} ---- y=${e.pageY}`);
  };

  const handleDrageEnd = (e) => {
    console.log(`onDragEnd x = ${e.pageX} ---- y=${e.pageY}`);
    setItem({ x: e.pageX, y: e.pageY });
    console.log(e);
  };

  useEffect(() => {
    visibleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, [x, y]);

  return (
    <div
      draggable
      onDrag={handleDrag}
      onDragEnd={handleDrageEnd}
      ref={visibleRef}
      className={classCard}
    >
      hello
    </div>
  );
};

export default DragAble;
