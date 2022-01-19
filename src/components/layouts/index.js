import Input from "../forms/input";
import SideMenuOption from "../menu/sideMenuOption";
import Text from "../typography/text";
import "./index.css"
import { SettingsIcon, PhotoIcon } from "../../assets/api/svg";

const Layout = ({children}) => {
    
    return (
        <div className="flex flex-wrap">
            <div  style={{ minHeight: '100vh'}} className="lg:w-1/12 md:w-1/12 lg:flex md:flex hidden relative w-full bg-blue text-white">
                <aside className="lg:flex md:flex hidden flex-col items-center fixed top-0 py-14">
    
                    <SideMenuOption active={true} text="Photos" icon={<PhotoIcon />}/>

                    <SideMenuOption text="Settings" icon={<SettingsIcon />}/>


                </aside>
            </div>
            <main className="lg:w-11/12 md:w-11/12 w-full bg-gray-100" style={{minHeight: '100vh'}}>
                {/* <Input placeholder="Search all photos" attr="text-dark py-3 px-3 w-full text-sm border-none focus:outline-none rounded-sm"/> */}
                <div className="lg:px-14 px-8">
                    <Text attr="text-3xl font-bolder my-4" value="Photos"/>
                </div>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Layout;