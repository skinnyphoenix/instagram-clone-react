import "./TopBar.css";
import { CameraIcon, IGTVIcon, LogoIcon, MessangerIcon } from "../../assets";

const TopBar = ({ setSection }) => {
  const onHandleClick = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div className="TopBar">
      <div className="TopBar__Camera" onClick={() => onHandleClick("camera")}>
        <CameraIcon />
      </div>
      <div className="TopBar__Logo" onClick={() => onHandleClick("home")}>
        <LogoIcon />
      </div>

      <div className="TopBar__Actions">
        <span onClick={() => onHandleClick("igtv")}>
          <IGTVIcon />
        </span>
        <span onClick={() => onHandleClick("messanger")}>
          <MessangerIcon />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
