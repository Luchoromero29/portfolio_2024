import PropTypes from "prop-types";

const Typography = ({ variant, children, }) => {
  return (
    <span className={`typography-${variant} text-wrap`}>
      {children}
    </span>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node, 
};

export default Typography;
