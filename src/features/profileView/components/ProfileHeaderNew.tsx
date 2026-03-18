import { FaPhone } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import SocialMedias from '../pages/SocialMedias'
import Headline from '../../../components/Headline'
import WorkAuthorization from './WorkAuthorization'

const ProfileHeaderNew = () => {
  // const headlines = ['Senior staff / Lead Full-Stack Engineer | Cloud & AI/ML | React, Node.js, .NET, Python | AWS, Azure']
  // const headlines = ['Principal Architect | Senior Staff Engineer | Cloud & AI/ML | Full-Stack Leader | AWS, Azure']
  const headlines = [
    'Senior Engineer / Architect | Cloud & AI Platforms | GCP, AWS | Full-Stack Leader | Distributed Systems | FastAPI, React, Angular | Microservices',
  ]
  return (
    <div className="flex flex-row gap-2 self-start">
      <div className="flex flex-col gap-2 w-[80%]">
        <div className="text-3xl uppercase font-bold leading-6">Abdul Hathi Mohamed Hussain</div>
        <div className="flex gap-1 items-center">
          {headlines.map((headline, index) => (
            <div className="flex gap-1 items-center" key={index}>
              <Headline className="font-bold text-[13px] text-[#458EF7]">{headline}</Headline>
              {index < headlines.length - 1 && <Headline className="text-[11px]">|</Headline>}
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
        <SocialMedias />
      </div>
      <div className="w-[20%]">
        <WorkAuthorization />
      </div>
    </div>
  )
}

export default ProfileHeaderNew
