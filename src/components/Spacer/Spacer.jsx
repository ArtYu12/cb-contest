const styles = {
  spacer: {
    height: 0,
    minHeight: 0,
  },
};

const Spacer = ({ size }) => {
  return <div style={{ ...styles.spacer, height: size }} />;
};

export default Spacer;
