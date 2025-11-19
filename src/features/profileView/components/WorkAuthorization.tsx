import { MdAssuredWorkload } from 'react-icons/md'

const WorkAuthorization = () => {
  return (
    <div className="flex flex-wrap text-[11px] gap-1 self-end font-medium">
      <div className="flex flex-row gap-1 items-center bg-green-600 text-white rounded-[2px] px-1">
        <MdAssuredWorkload />
        <div className="text-[12px] text-white">Work Authorization</div>
      </div>
      <p>Authorized to work in the U.S. (GC-EAD valid through July 2030)</p>
    </div>
  )
}

export default WorkAuthorization
