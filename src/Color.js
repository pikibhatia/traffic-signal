const Light = ({ color, active }) => (
    <div style={{ backgroundColor: color, opacity: active ? 1 : 0.2 }}></div>
);
export default Light;