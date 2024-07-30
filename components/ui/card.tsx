'use client'

import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface CardProps{
    title?: string;
    children: ReactNode;
    className? : string 
}

export const Card  :FC<CardProps> = ({title, className, children}) =>{
    return (
        <div className={cn('flex relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground', className)}>
            <div className="flex flex-col gap-y-6">
                {/* Title */}
                {
                title ? 
                <div className="font-lancelot">
                    {title}
                    <p className="uppercase text-lg"></p>
                </div>  
             : null}
             {children}
            </div>
        </div>
    )
}