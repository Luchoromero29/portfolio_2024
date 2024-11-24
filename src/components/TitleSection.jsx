import PropTypes from "prop-types"
import Typography from "./Typography"


const TitleSection = ({title}) => {
  return (
    <div className="w-full flex justify-center items-center">
        <Typography variant="h2">{title}</Typography>
    </div>
  )
}

export default TitleSection

TitleSection.propTypes = {
    title: PropTypes.string,
}