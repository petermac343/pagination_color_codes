const ColoredDiv = ({ color }) => {
  const divStyle = {
    backgroundColor: color,
    width: '13rem',
    height: '16rem',
    margin: '.5rem',
    borderRadius: '3px', 
  };

  return <div style={divStyle}></div>;
};

export default ColoredDiv;
