import { HTMLAttributes } from 'react'

export const WhiteBadge = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        `bg-white px-[6px] py-[2px] rounded-lg text-center shadow-badge ` +
        (className ? `${className}` : '')
      }
    >
      <p className="text-white text-base font-semibold">{children}</p>
      
    </div>
  )
}
