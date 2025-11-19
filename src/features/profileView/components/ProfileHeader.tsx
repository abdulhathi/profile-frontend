import { FaPhone } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import SocialMedias from '../pages/SocialMedias'
import WorkAuthorization from './WorkAuthorization'
import Headline from '../../../components/Headline'

const ProfileHeader = () => {
  const headlines = ['Senior Staff Engineer | Cloud & AI/ML | Full-Stack Leader']
  return (
    <div>
      <div className="flex flex-row gap-1">
        <div className="flex flex-col justify-start w-[88%] gap-0.5">
          <div className="text-3xl uppercase font-bold leading-6">Abdul Hathi Mohamed Hussain</div>
          <div className="flex gap-1 items-center">
            {headlines.map((headline, index) => (
              <div className="flex gap-1 items-center" key={index}>
                <Headline className="font-bold text-[15px] text-[#458EF7]">{headline}</Headline>
                {index < headlines.length - 1 && <Headline className="text-[12px]">|</Headline>}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-6 text-[11px]">
            <div className="flex flex-row gap-1 items-center">
              <FaPhone className="text-[#458EF7] text-[10px]" />
              <p className="font-medium">562-606-8314</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdAlternateEmail className="text-[#458EF7] text-[10px]" />
              <a className="font-medium" href="mailto:abdulhathi@gmail.com">
                abdulhathi@gmail.com
              </a>
            </div>
            <div className="flex gap-1 items-center font-medium">
              <FaLocationDot className="text-[#458EF7] text-[10px]" />
              28 Hayes Street, Irvine, CA - 92620
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <WorkAuthorization />
        </div>
      </div>
      <SocialMedias />
    </div>

    
  )
}

export default ProfileHeader
