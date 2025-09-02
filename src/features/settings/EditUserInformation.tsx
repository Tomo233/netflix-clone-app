import SaveAltIcon from "@mui/icons-material/SaveAlt";
import AuthInput from "../authentication/AuthInput";

function EditUserInformation() {
  return (
    <section className="mb-10 rounded-lg border border-red-500 p-3 pt-8 pb-14 pl-7">
      <div className="flex items-center justify-between">
        <h2 className="py-7 text-3xl font-bold">Edit User Information</h2>
        <button className="flex cursor-pointer gap-2 rounded-3xl border border-red-500 px-12 py-3">
          <SaveAltIcon />
          Save
        </button>
      </div>
      <form className="grid grid-cols-2 items-end gap-y-6">
        <AuthInput type="text" placeholder="UserName" variant="login" />
        <AuthInput type="email" placeholder="Email" variant="login" />
        <AuthInput type="password" placeholder="Password" variant="login" />
        <AuthInput
          type="password"
          placeholder="ConfirmPassword"
          variant="login"
        />
      </form>
    </section>
  );
}

export default EditUserInformation;
