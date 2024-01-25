import { plateforms } from "./GameGrid";
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface platforms {
    platforms:plateforms[]
}

const IconsList = ({platforms}:platforms) => {
    const IconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        mac:FaApple,
        nintendo:SiNintendo,
        linux:FaLinux,
        android:FaAndroid,
        ios:MdPhoneIphone,
        web:BsGlobe
    }
    const GamePlatformIcon = ({ platform}:{platform:string}) => {
        const IconComponent = IconMap[platform];
      
        if (!IconComponent) {
          return null;
        }
      
        return <IconComponent />;
      };
    return(
        <div className="d-flex">
            {platforms.map(p => <p className="opacity-75 m-0 p-0"><GamePlatformIcon platform={p.platform.slug}/></p>)}
        </div>
    );
}

export default IconsList