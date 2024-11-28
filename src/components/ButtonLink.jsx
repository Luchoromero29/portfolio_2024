import PropTypes from "prop-types";
import Typography from "./Typography";

const ButtonLink = ({ href, imgSrc, altText, text }) => {
  return (
    <a
      className="p-2 h-12 rounded-3xl flex gap-2 items-center justify-center border-2 w-fit dark:border-dark-secondary border-dark-secondary/20  cursor-pointer"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt={altText} className="w-8" />
      <Typography variant="span">{text}</Typography>
    </a>
  );
};

ButtonLink.propTypes = {
    href: PropTypes.string,
    imgSrc: PropTypes.string, 
    altText: PropTypes.string, 
    text: PropTypes.string, 
  };

export default ButtonLink;