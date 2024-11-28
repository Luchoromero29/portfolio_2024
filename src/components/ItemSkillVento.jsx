import PropTypes from "prop-types"
import Typography from "./Typography"

const ItemSkillVento = ({name, img}) => {


    return (
        <div className="rounded-md  p-2 border-2 dark:border-dark-secondary border-dark-secondary/10 
        h-full w-full flex justify-center items-center hover:scale-105  duration-150 hover:bg-primary hover:dark:bg-secondary">
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