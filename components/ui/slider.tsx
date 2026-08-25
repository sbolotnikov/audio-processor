"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange" | "type"> & {
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
}

function Slider({ className, value, defaultValue, min = 0, max = 100, step = 1, onValueChange, ...props }: SliderProps) {
  const current = value?.[0] ?? defaultValue?.[0] ?? Number(min)
  const percentage = Number(max) === Number(min) ? 0 : ((current - Number(min)) / (Number(max) - Number(min))) * 100
  return (
    <input
      {...props}
      type="range"
      className={cn(
        "h-4 w-full cursor-pointer appearance-none rounded-full disabled:pointer-events-none disabled:opacity-50",
        "[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent",
        "[&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ring [&::-webkit-slider-thumb]:bg-white",
        "[&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-muted",
        "[&::-moz-range-progress]:h-1 [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-primary",
        "[&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-ring [&::-moz-range-thumb]:bg-white",
        className,
      )}
      data-slot="slider"
      min={min}
      max={max}
      step={step}
      value={value?.[0]}
      defaultValue={value ? undefined : defaultValue?.[0]}
      onChange={(event) => onValueChange?.([event.currentTarget.valueAsNumber])}
      style={{
        ...props.style,
        background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${Math.max(0, Math.min(100, percentage))}%, var(--muted) ${Math.max(0, Math.min(100, percentage))}%, var(--muted) 100%)`,
      }}
    />
  )
}

export { Slider }
