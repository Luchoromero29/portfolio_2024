import PropTypes from "prop-types"
import Typography from "./Typography"

const ItemExperience = ({ title, description, institution }) => {



    return (
        <div className="flex flex-col dark:text-white">
            <Typography variant="span-bold">{title}</Typography>
            <Typography variant="span-italic">{institution}</Typography>
            <Typography variant="span">{description}</Typography>
        </div>
    )
}

export default ItemExperience

ItemExperience.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    institution: PropTypes.string,
};