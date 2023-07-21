import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate, useLocation } from "react-router-dom";
import { resetActivities } from "../redux/features/activitiesSlice";
import { Button } from 'primereact/button';


function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {pathname} = useLocation();
    
  const currentEmpresa = useSelector((state: RootState) => state.activities.selectEmpresa.name)
    
    const logOut = () => {
      dispatch(resetActivities())
      window.localStorage.removeItem("token");
		  navigate('/');
    }

    return (
      <>
      <nav className=" py-3 bg-blue-500 flex justify-center relative">
        <h1 className="text-3xl font-bold">{currentEmpresa ? currentEmpresa : 'Selecciona la empresa'}</h1>
        {pathname !== '/' && pathname !== '/login' ? <Button icon="pi pi-sign-out" className="absolute right-3 top-4" rounded severity="danger" 
        onClick={logOut}/> : '' }
      </nav>
      </>
    );
  }
  
  export default NavBar;