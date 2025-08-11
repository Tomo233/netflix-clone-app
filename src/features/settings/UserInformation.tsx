import Avatar from "../../assets/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router";

function UserInformation() {
  return (
    <section className="mb-10 flex items-center justify-between rounded-lg border border-red-500 p-7">
      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer">
          <Link to="select-avatar">
            <EditIcon
              className="bg-border-color/70 absolute top-1/2 left-1/2 -translate-1/2 rounded-full p-1"
              fontSize="large"
            />
          </Link>
          <img src={Avatar} className="w-20 rounded-xl" alt="User Avatar" />
        </div>
        <div>
          <p className="text-xl font-semibold">Tomo12</p>
          <p className="text-md font-semibold">tomobratic23@gmail.com</p>
        </div>
      </div>
      <button className="flex gap-2 rounded-3xl border border-red-500 px-9 py-3">
        <LogoutIcon />
        Sign out
      </button>
    </section>
  );
}

export default UserInformation;
