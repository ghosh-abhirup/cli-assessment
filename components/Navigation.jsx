import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-[90%]">
      <div className="navigationDivLinks">
        <FontAwesomeIcon size="lg" icon={faUser} />
        <p className="navigationText">My Feed</p>
      </div>
      <div className="navigationDivLinks">
        <FontAwesomeIcon size="lg" icon={faMessage} />
        <p className="navigationText">My Post</p>
      </div>
      <div className="navigationDivLinks">
        <FontAwesomeIcon icon={faEnvelopesBulk} />
        <p className="navigationText">My Team Post</p>
      </div>
      <div className="navigationDivLinks">
        <FontAwesomeIcon size="lg" icon={faPeopleGroup} />
        <p className="navigationText">My Following Post</p>
      </div>
      <div className="navigationDivLinks">
        <FontAwesomeIcon icon={faShareNodes} />
        <p className="navigationText">Shared Post</p>
      </div>
    </div>
  );
};

export default Navigation;
