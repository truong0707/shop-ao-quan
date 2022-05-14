/* import library */
import { FaBars } from "react-icons/fa";


/* import components */
import '../reuseComponents.css';

export default function DrawerToggleButton(props) {

    return (
        <>
            <FaBars onClick={props.drawerToggleClick} className="icon-drawer" />
        </>
    );
}