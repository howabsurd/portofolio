import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, ReactNode } from "react";


interface ButtonProps {
    children : ReactNode;
    link? : string;
    isIcon? : boolean;
    className?: string
}


export const Button : FC<ButtonProps> = ({children, link, isIcon, className}) =>{
    return ( 
        <div>
            {
                link ? (<Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
                    <ButtonBody className={className} isIcon={isIcon}>{children}</ButtonBody>
                </Link>) : (
                    <div>

                    </div>
                )
            }
        </div>
    )   
}


interface ButtonBodyProps{
    children : ReactNode;
    isIcon?: boolean;
    className?: string;
}

export const ButtonBody : FC<ButtonBodyProps> = ({children , isIcon, className}) =>{
    return <div className="cursor-pointer flex-none w-auto h-full">
        <div className={cn('flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100',
            className,
            isIcon? "h-10 w-10" : "h-full w-max px-3 py-2")
            }>
            {children}
        </div>
    </div>
}