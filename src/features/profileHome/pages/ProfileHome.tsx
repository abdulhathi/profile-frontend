import { useRef, useState } from 'react'
import portfolioPhoto from '../../../assets/profile_photo.jpeg'
import Button from '../../../corecomponents/Button'
import PopupModel from '../../../components/PopupModel'
import { useReactToPrint } from 'react-to-print'
import ProfileForDownload from '../../profileView/pages/ProfileForDownload'

const ProfileHome = () => {
  const [isModelOpen, setModelOpen] = useState<boolean>(true)
  const closeModel = () => setModelOpen(false)
  const profileRef = useRef<HTMLDivElement>(null)
  const reactToPrint = useReactToPrint({
    contentRef: profileRef,
  })
  return (
    // Variant	Media   query
    // max-sm	  @media  (width < 40rem) { ... }
    // max-md	  @media  (width < 48rem) { ... }
    // max-lg	  @media  (width < 64rem) { ... }
    // max-xl	  @media  (width < 80rem) { ... }
    // max-2xl	@media  (width < 96rem) { ... }
    <div className="flex flex-row gap-8 items-center h-screen bg-gray-600 p-4 max-sm:flex-col">
      <img src={portfolioPhoto} className="rounded-full max-w-80"></img>
      <div className="flex flex-col gap-10 text-white">
        <div>
          <h3 className="font-medium">I'm</h3>
          <h1 className="text-8xl font-extrabold uppercase">Abdul Hathi</h1>
        </div>
        <h2 className="text-2xl font-bold">Senior Architect / Lead Engineer (AI/ML & Cloud Platform)</h2>
        <Button
          onClick={() => {
            setModelOpen(true)
            reactToPrint()
          }}
        >
          Download Profile
        </Button>
        <PopupModel isOpen={isModelOpen} onClose={closeModel}>
          <ProfileForDownload profileRef={profileRef} />
        </PopupModel>
      </div>
    </div>
  )
}

export default ProfileHome
