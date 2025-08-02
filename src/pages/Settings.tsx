import EditUserInformation from "../features/settings/EditUserInformation";
import UserInformation from "../features/settings/UserInformation";

function Settings() {
  return (
    <>
      <h1 className="my-5 text-3xl font-medium tracking-wide">My Profile</h1>
      <UserInformation />
      <EditUserInformation />
    </>
  );
}

export default Settings;
