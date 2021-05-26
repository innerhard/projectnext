import React, { FC, SVGProps } from 'react'

export const Cat: FC<SVGProps<SVGSVGElement>> = props => (
    <svg viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M38.5452 26.1429L6.42631 6C6.42583 74 -4.20264 147 80.7101 147C158.797 147 147.967 76.5 147.967 6L115.84 26.1429C109.65 23.5226 95.7974 18 77.7974 18C59.7974 18 44.7355 23.5226 38.5452 26.1429Z"
            stroke="black"
            stroke-width="12"
            stroke-linejoin="round"
        />
        <ellipse cx="44.7974" cy="77.5" rx="11" ry="13.5" fill="black" />
        <ellipse cx="112.797" cy="77.5" rx="11" ry="13.5" fill="black" />
        <path
            d="M87.7974 94.5484C87.7974 91.7097 81.0666 91 77.7012 91C74.0666 91 66.7974 91.7097 66.7974 94.5484C66.7974 98.0968 74.4704 102 77.7012 102C80.932 102 87.7974 98.0968 87.7974 94.5484Z"
            fill="black"
            stroke="black"
        />
    </svg>
)
