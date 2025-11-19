// AITechViewLogo.tsx
import * as React from 'react'

type Props = {
  /** Width/height in pixels (scales via viewBox) */
  size?: number
  /** Override color; defaults to current text color */
  color?: string
  /** Optional title for accessibility */
  title?: string
  className?: string
  fontFamily?: string
}

const AITechViewLogo: React.FC<Props> = ({ size = 600, color, title = 'AITechView Logo', className, fontFamily }) => {
  // Use CSS currentColor by default, or a provided color (e.g. '#3DDCFF')
  const style = color ? { color } : undefined

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 500"
      width={size}
      height={(size * 500) / 2000}
      role="img"
      aria-label={title}
      className={className}
      style={style}
    >
      {/* Border (rounded rectangle) */}
      <rect x="40" y="40" width="1700" height="420" rx="60" ry="60" fill="none" stroke="currentColor" strokeWidth="6" />
      <text
        x="100"
        y="280"
        fontFamily={fontFamily}
        fontWeight={900}
        fontSize="200"
        fill="currentColor"
        dominantBaseline="middle"
      >
        AI
      </text>
      {/* Global/network icon */}
      <g transform="translate(320,100)" fill="none" stroke="currentColor" strokeWidth="10">
        <circle cx="180" cy="150" r="130" />
        <ellipse cx="180" cy="150" rx="120" ry="65" />
        <ellipse cx="180" cy="150" rx="120" ry="25" />
        <path d="M180,20 C240,20 290,85 290,150 C290,215 240,280 180,280" />
        <path d="M180,20 C120,20 70,85 70,150 C70,215 120,280 180,280" />
      </g>

      {/* Nodes */}
      <g transform="translate(320,100)" fill="currentColor">
        <circle cx="180" cy="20" r="10" />
        <circle cx="70" cy="150" r="10" />
        <circle cx="290" cy="150" r="10" />
        <circle cx="180" cy="280" r="10" />
        <circle cx="240" cy="95" r="9" />
        <circle cx="120" cy="205" r="9" />
      </g>

      {/* Text */}
      <text
        x="680"
        y="280"
        fontFamily={fontFamily}
        fontWeight={900}
        fontSize="200"
        fill="currentColor"
        dominantBaseline="middle"
      >
        TechView
      </text>
    </svg>
  )
}

export default AITechViewLogo
