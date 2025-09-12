import React from "react";

interface AvatarProps {
  src: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = "User Avatar", fallback, className }) => {
  return (
    <div className={`relative ${className}`}>
      <img src={src} alt={alt} className="rounded-full" onError={(e) => { e.currentTarget.src = fallback || ""; }} />
    </div>
  );
};

export default Avatar;