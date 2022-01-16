import Text from "../typography/text";

const SideMenuOption = ({icon, text,active}) => {
    return (
        <div className={`flex flex-col items-center py-2 w-full mb-4 ${active ? 'bg-blue-deep' : ''}`}>
            {icon} 
            <Text attr="text-sm py-3" value={text}/>
        </div>
    );
}

export default SideMenuOption;