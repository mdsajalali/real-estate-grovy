import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import google_logo from "../assets/images/google.png";

import { app } from "../firebase";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const GoogleSignIn = () => {
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={googleLogin}
        className="flex items-center gap-3 rounded-md border bg-gray-300 px-4 py-3 transition-all hover:bg-[#E1E4E7] "
      >
        <img className="w-10" src={google_logo} alt="" />
        <p className="text-[17px] font-semibold">Continue with Google</p>
      </button>
    </div>
  );
};

export default GoogleSignIn;
