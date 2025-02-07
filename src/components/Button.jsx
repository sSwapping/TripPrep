export const Button = ({ type, children }) => {
  return <button className={`${type ? "" : ""}`}>{children}</button>;
};
