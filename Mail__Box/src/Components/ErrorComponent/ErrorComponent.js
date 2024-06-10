
import { useRouteError } from "react-router-dom";


const ErrorComponent = ()=>{

    const err = useRouteError();


    return <div>
        <h1>OOps</h1>
        <h2>Something went Wrong!!</h2>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
}

export default ErrorComponent;