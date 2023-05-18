import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
  return (
    <>
      
      <h2> Error page{error}</h2>
    </>
  );
};

export default Error;
