import { CircularProgress } from "@mui/material";
import Error from "./Error";

const LoadManager = ({children,status})=>{
    return (
        status==="loading" ? <CircularProgress/>
        :status==="error" ? <Error/>
        :<>{children}</>
    )
}
export default LoadManager;