"use client"
import { FC, ReactNode } from "react"
// @ts-ignore
import WaterWave from "react-water-wave";
interface WaterwaveWrapperProps{
    imageUrl : string,
    dropRadius : string,
    perturbance : string,
    resolution : string,
    children : () => ReactNode
}


export const WaterWaveWrapper : FC<WaterwaveWrapperProps> = ({imageUrl, dropRadius, perturbance, resolution, children}) =>{
    return (
    <WaterWave
    imageUrl={imageUrl}
    dropRadius= {dropRadius}
    perturbance = {perturbance}
    resolution = {resolution}
  >
    {children}
  </WaterWave>
);
}