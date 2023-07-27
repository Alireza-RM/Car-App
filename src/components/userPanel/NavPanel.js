import NavPanelChild from "../header/NavPanelChild"

const NavPanel = () => {
    return ( 
        <nav className="hidden lg:flex bg-white lg:w-1/5 py-6 px-3 lg:flex-col ">
            <NavPanelChild/>
        </nav>
     );
}
 
export default NavPanel;