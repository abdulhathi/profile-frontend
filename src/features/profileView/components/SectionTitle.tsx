import { type PropsWithChildren } from 'react'
import './SectionTitle.css'

type SectionTitleProps = PropsWithChildren & {}
const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="sectionTitle-font-family">
      <p className="text-[15px] font-medium uppercase">{children}</p>
      <div className="h-[2px] w-full bg-black"></div>
    </div>
  )
}

export default SectionTitle
