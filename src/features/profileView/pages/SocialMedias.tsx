import SocialMedia from '../components/SocialMedia'
import socialMedia from '../data/socialMedia.json'

const SocialMedias = () => {
  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {socialMedia.map((media, index) => (
        <SocialMedia key={index} name={media.name} link={media.link} icon={media.icon} />
      ))}
    </div>
  )
}

export default SocialMedias
