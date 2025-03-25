export function KlixLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* 3D Box - Back face */}
        <polygon points="5,10 35,5 35,25 5,30" fill="#e6f0ff" stroke="#2563eb" strokeWidth="0.5" />

        {/* 3D Box - Right face */}
        <polygon points="35,5 38,8 38,28 35,25" fill="#93c5fd" stroke="#2563eb" strokeWidth="0.5" />

        {/* 3D Box - Bottom face */}
        <polygon points="5,30 35,25 38,28 8,33" fill="#60a5fa" stroke="#2563eb" strokeWidth="0.5" />

        {/* 3D Box - Front face */}
        <polygon points="5,10 8,13 8,33 5,30" fill="#bfdbfe" stroke="#2563eb" strokeWidth="0.5" />

        {/* 3D Box - Top face */}
        <polygon points="5,10 35,5 38,8 8,13" fill="#dbeafe" stroke="#2563eb" strokeWidth="0.5" />

        {/* 2D Cursor */}
        <path d="M16,15 L22,21 L25,18 L26,23 L21,22 L24,19 L18,13 Z" fill="#2563eb" />

        {/* Subtle shadow */}
        <path
          d="M16,15 L22,21 L25,18 L26,23 L21,22 L24,19 L18,13 Z"
          fill="rgba(0,0,0,0.1)"
          transform="translate(1,1)"
        />
      </svg>
    </div>
  )
}

