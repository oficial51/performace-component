
const Skills = ({icon, color, bg, number}) => {
  return (
    <div className={`h-[57px] mb-[18px] md:w-[290px] flex items-center rounded-xl ${bg} w-full`}>
    <div className="mx-[20px] flex w-full text-[16px] justify-between">
      <div className="flex gap-2">
        <img src={icon} alt="icon-reaction" />
        <p className={`${color}`}>Reaction</p>
      </div>
      <div className="flex">
        <p className="text-[#0C1427]">
          {number} <span className="text-[#9A97A0]">/100</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Skills