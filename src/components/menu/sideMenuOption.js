import Text from "../typography/text";

const SideMenuOption = ({icon, text,active}) => {
    return (
        <div className={`flex flex-col items-center p-6 w-full mb-4 ${active ? 'bg-blue-deep' : ''}`}>
            {icon} 
            <Text attr="text-sm mt-2" value={text}/>
        </div>
    );
}

export default SideMenuOption;