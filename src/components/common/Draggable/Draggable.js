import React, { useState, useRef, useEffect } from 'react';

import { PropTypes } from 'prop-types';
import clsx from 'clsx';

import styles from './Draggable.module.scss';

const Draggable = ({ children, additionalOffsetX }) => {
  const idRef = useRef();

  useEffect(() => {
    idRef.current = Math.ceil(Math.random() * 1000000); // replace this with your ID generation logic
  }, []);

  if (typeof additionalOffsetX === 'undefined') {
    additionalOffsetX = 0;
  }

  const isDescendantOf = (child, parentId) => {
    let node = child;
    while (node !== null) {
      // console.log(node.id, parentId);
      if (Number(node.id) === Number(parentId)) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  const [dragging, setDragging] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [justReleased, setJustReleased] = useState(false);

  const handleMouseDown = e => {
    e.preventDefault();
    // console.log('handleMouseDown', e.clientX, e.clientY, e.target);
    if (hovering) {
      setDragging(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };
  const handleMouseUp = e => {
    e.preventDefault();
    setDragging(false);
    setTimeout(() => {
      setJustReleased(false);
    }, 100);
  };

  const handleMouseMove = e => {
    if (dragging) {
      // console.log('dragging');
      setPosition({
        x: position.x + e.clientX - startPosition.x,
        y: position.y + e.clientY - startPosition.y,
      });
      setStartPosition({ x: e.clientX, y: e.clientY });
      setJustReleased(true);
    }
  };

  const handleTouchStart = e => {
    // e.preventDefault();
    // console.log('handleTouchStart', e.touches[0], e.clientY, e.target);
    // console.log('idRef.current', idRef.current);
    const onDraggable = isDescendantOf(e.touches[0].target, idRef.current);
    // console.log('onDraggable', onDraggable);
    if (onDraggable) {
      setDragging(true);
      setStartPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };
  const handleTouchEnd = e => {
    // console.log('handleTouchEnd');
    e.preventDefault();
    setDragging(false);
    setTimeout(() => {
      setJustReleased(false);
    }, 100);
  };

  const handleTouchMove = e => {
    // console.log('handleTouchMove', dragging, e.touches[0]);

    if (dragging) {
      // console.log('dragging');
      // console.log('position', position);
      setPosition({
        x: position.x + e.touches[0].clientX - startPosition.x,
        y: position.y + e.touches[0].clientY - startPosition.y,
      });
      setStartPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      setJustReleased(true);
    }
  };

  return (
    <div
      ref={idRef}
      id={idRef.current}
      style={{
        transform: `translateX(clamp(-100% - 50px, calc(${position.x +
          additionalOffsetX}px), calc(50px)))`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onClickCapture={e => {
        console.log('click on draggable');
        if (dragging || justReleased) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={clsx(
        styles.root,
        dragging ? styles.dragging : '',
        justReleased ? styles.noPointerEvents : ''
      )}
    >
      {children}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
  additionalOffsetX: PropTypes.number,
};

export default Draggable;
