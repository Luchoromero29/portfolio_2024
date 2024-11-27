import PropTypes from "prop-types"
import Typography from "./Typography"


const ItemSkill = ({img, name}) => {
    
  return (
    <div className="rounded-full p-2 border-2 border-dark-secondary w-fit">
        <div className="flex items-center justify-center gap-2 h-5 text-nowrap">
            <img className="w-8" src={img} alt={name} />
            <Typography variant="span">{name}</Typography>
        </div>
    </div>
  )
}

export default ItemSkill

ItemSkill.propTypes= {
    img: PropTypes.string,
    name: PropTypes.string,
}
