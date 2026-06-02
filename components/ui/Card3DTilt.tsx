import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface Card3DTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export function Card3DTilt({ children, className, intensity = 15, ...props }: Card3DTiltProps) {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  const [glarePos, setGlarePos] = React.useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position inside element
    const y = e.clientY - rect.top;  // y position inside element
    
    // Percentage positions
    const percentX = x / rect.width;
    const percentY = y / rect.height;
    
    // Degrees of rotation
    const rotX = (percentY - 0.5) * -intensity;
    const rotY = (percentX - 0.5) * intensity;
    
    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({ x: percentX * 100, y: percentY * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-300 ease-out",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(5, 150, 105, 0.15), 0 0 40px rgba(5, 150, 105, 0.05)" 
          : "0 10px 30px -15px rgba(0, 0, 0, 0.08)"
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
      {...props}
    >
      {/* Glare spotlight layer */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 120px at ${glarePos.x}% ${glarePos.y}%, rgba(16, 185, 129, 0.12) 0%, transparent 100%)`
          }}
        />
      )}
      
      {/* Content wrapper */}
      <div style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
