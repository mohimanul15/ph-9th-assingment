import { useContext } from "react";
import { ApiContext } from "../../../../AppContext/AppContext";

const LoginHeader = () => {
    const data = useContext(ApiContext);

    console.log(data);
    return (
        <div>
            This Is header            
        </div>
    );
};

export default LoginHeader;