import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../features/login/store/useLoginStore'
import useAuthUser from '../features/login/hooks/useAuthUser'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const { jwtToken, setToken, reset } = useAuthStore()
  const { data: user, isSuccess } = useAuthUser(jwtToken)
  const navigate = useNavigate()
  return (
    // <header className="bg-[#275AB6] text-white p-2 w-full">
    <header className="w-full p-2 header">
      <nav className="flex justify-between items-center">
        <div className="flex gap-4 self-start items-center justify-center">
          <Link to="/">
            {/* <img src={aitechviewLogo} alt="AI-TechView" width={200}></img> */}
            {/* <AITechViewLogo size={200} color="black" /> */}
            <Logo />
          </Link>
        </div>
        <div className="flex gap-4 text-[18px]">
          <Link to="/profilesidebyside">Profile</Link>
          <Link to="/certifications/pythonForDataScienceAIAndDevelopment">Certifications</Link>
          <Link to="/socialmedias">Social Media</Link>
          {jwtToken && user?.admin && (
            <div className="flex gap-4">
              <Link to="/mynewprofile">New-Profile</Link>
              <Link to="/document">Export to Document</Link>
              <Link to="/summary">Summary</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/download">Download</Link>
            </div>
          )}
          {jwtToken !== '' ? (
            <div className="flex flex-row gap-2">
              <div>{isSuccess && user.name}</div>
              <button
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  reset()
                  setToken('')
                  navigate('/login')
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
