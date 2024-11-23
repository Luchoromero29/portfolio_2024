import PropTypes from "prop-types"
import Typography from "./Typography"

const ItemEducation = ({ title, description, institution }) => {



    return (
        <div className="flex flex-col dark:text-white">
            <Typography variant="span-bold">{title}</Typography>
            <Typography variant="span-italic">{institution}</Typography>
            <Typography variant="span">{description}</Typography>
        </div>
    )
}

export default ItemEducation

ItemEducation.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    institution: PropTypes.string,
};