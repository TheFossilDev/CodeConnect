const FlatOutlineCard = props => {
  return (
    <div className={`border-2 border-gray-300 rounded-lg bg-white ${props.className || null}`}>{props.children}</div>
  );
};

export default FlatOutlineCard;