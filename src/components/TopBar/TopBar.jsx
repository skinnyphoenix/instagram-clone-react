import "./TopBar.css";
import { CameraIcon, IGTVIcon, LogoIcon, MessangerIcon } from "../../assets";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="TopBar__Camera">
        <CameraIcon />
      </div>
      <div className="TopBar__Logo">
        <LogoIcon />
      </div>

      <div className="TopBar__Actions">
        <IGTVIcon />
        <MessangerIcon />
      </div>
    </div>
  );
};

export default TopBar;
