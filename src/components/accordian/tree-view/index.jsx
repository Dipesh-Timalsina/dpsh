import MenuList from "./menu-list";
import menus from "./data";
import "./styles.css"

export default function TreeView({ menus = [] }) {
    return (<div className="tree-view-container">
        <MenuList list={menus}/>

    </div>
    
    )
};