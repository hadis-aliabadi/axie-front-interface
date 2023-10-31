import { HTMLAttributes } from "react"

export const ForestBackground = ({ children}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg_light_pattern_background w-full">
        <div className='bg_forest'></div>
        <div className="bg_gradiant"></div>
          {children}
    </div>
  )
}
