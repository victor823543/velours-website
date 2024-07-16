import { FC, useState, useEffect, useRef } from 'react';

interface HoverEffectTextProps {
  text: string;
}

const HoverEffectText: FC<HoverEffectTextProps> = ({ text }) => {
    const [mousePos, setMousePos] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });
    const textRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const getFontWeight = (letterIndex: number) => {
        if (mousePos.x === null || mousePos.y === null || !textRef.current) return 400;
        const element = textRef.current.children[letterIndex] as HTMLElement;
        const letterRect = element.getBoundingClientRect();
        const letterCenterX = (letterRect.left + letterRect.right) / 2;
        const letterCenterY = (letterRect.top + letterRect.bottom) / 2;
        const distanceX = Math.abs(mousePos.x - letterCenterX);
        const distanceY = Math.abs(mousePos.y - letterCenterY);
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = Math.sqrt((window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2);
        const weight = Math.max(100, 700 - (distance / maxDistance) * 900);
        return weight;
    };
  

  return (
    <span ref={textRef}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            fontWeight: getFontWeight(index),
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default HoverEffectText;
