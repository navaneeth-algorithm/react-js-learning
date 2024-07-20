import useNavigationContext from "../hooks/navigation-hook";


function Route({children,to}){

    const {currentPath} = useNavigationContext();
    if(currentPath===to){
        return children;
    }

    return null;
}

export default Route;