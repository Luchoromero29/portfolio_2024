import PropTypes from "prop-types"
import Typography from "./Typography"

const ItemSkillVento = ({name, img}) => {


    return (
        <div className="rounded-full p-2 border-2 dark:border-dark-secondary border-dark-secondary/10 w-fit">
            <div className="flex flex-col items-center justify-center gap-2  text-nowrap">
                <img className="w-8" src={img} alt={name} />
                <Typography variant="span">{name}</Typography>
            </div>
        </div>
    )
}

ItemSkillVento.propTypes= {
    img: PropTypes.string,
    name: PropTypes.string,
}

export default ItemSkillVento