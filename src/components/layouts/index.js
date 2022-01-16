import Input from "../forms/input";
import SideMenuOption from "../menu/sideMenuOption";
import Text from "../typography/text";
import "./index.css"
import { SettingsIcon, PhotoIcon } from "../../assets/api/svg";

const Layout = ({children}) => {
    
    return (
        <div className="flex flex-wrap">
            <aside style={{ minHeight: '100vh'}} className="lg:w-1/12 md:w-1/12 w-full bg-blue flex flex-col items-center py-14 text-white">
 
                <SideMenuOption active={true} text="Photos" icon={<PhotoIcon />}/>

                <SideMenuOption text="Settings" icon={<SettingsIcon />}/>


            </aside>
            <main className="lg:w-11/12 md:w-11/12 w-full bg-gray-100" style={{minHeight: '100vh'}}>
                <Input placeholder="Search all photos" attr="text-dark py-3 px-3 w-full text-sm border-none focus:outline-none rounded-sm"/>
                <div className="px-14">
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