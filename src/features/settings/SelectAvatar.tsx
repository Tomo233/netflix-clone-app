import { useNavigate } from "react-router";
import Avatar from "../../assets/avatar.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function SelectAvatar() {
  const navigate = useNavigate();

  return (
    <div className="mt-5 mb-64">
      <div
        className="my-5 flex cursor-pointer items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon />
        <p>Back To Settings</p>
      </div>

      <h1 className="pb-3 text-3xl font-medium tracking-wide">
        Choose Profile Avatar
      </h1>

      <div className="flex items-center gap-1">
        <p>For Tomo</p>
        <img src={Avatar} className="w-8 rounded-full" alt="" />
      </div>

      <h2 className="pt-5 text-2xl font-medium">Avatars List</h2>
      <div className="mt-5 flex gap-10">
        <img src={Avatar} className="w-36 rounded-md" alt="User Avatar" />
        <img src={Avatar} className="w-36 rounded-md" alt="User Avatar" />
        <img src={Avatar} className="w-36 rounded-md" alt="User Avatar" />
        <img src={Avatar} className="w-36 rounded-md" alt="User Avatar" />
        <img src={Avatar} className="w-36 rounded-md" alt="User Avatar" />
      </div>
    </div>
  );
}

export default SelectAvatar;
