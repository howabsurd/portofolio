import { featuredData } from '@/data'
import React, { useState } from 'react'
import { FeaturedCard } from '../cards/featured/featured-card'
import { cn } from '@/lib/utils'
import Link from 'next/link';

function ExpandableFeatured() {
    const [hoveredIndex , setHoveredIndex] = useState<number | null>(null);
    const handleMouseEnter = (index : number)=>{
        setHoveredIndex(index);
    }
    const handleMouseLeave = () =>{
        setHoveredIndex(null);
    }
    return (
        <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
            {featuredData.map((featured, i) => (
                <Link
                    key={i}
                    href={featured.link}
                    target='_blank'
                    className={cn(
                        'relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out',
                        i === hoveredIndex ? 'lg:w-[40%]' : 'lg:w-[33%]'
                    )}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    style={{ textDecoration: 'none' }} // Optional: to remove underline
                >
                    <FeaturedCard
                        active={i === hoveredIndex}
                        title={featured.title}
                        tag={featured.tag}
                        video={featured.video}
                    />
                </Link>
            ))}
        </div>
    );
}

export default ExpandableFeatured