import { RiAiGenerate2 } from 'react-icons/ri'
import './Logo.css'

const Logo = () => {
  return (
    <div className="flex flex-row justify-center items-center text-3xl uppercase font-semibold">
      <RiAiGenerate2 className="text-[#ff7300]" />
      <div className="text-[20px]">TechView</div>
    </div>
  )
}

export default Logo
