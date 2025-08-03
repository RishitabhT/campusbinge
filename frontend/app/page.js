'use client';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import Dashboard from "./components/Dashboard";
import Homepage from "./pages/Homepage";
export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const logout = () => {
    signOut(auth);
    // sessionStorage.removeItem("user");
    router.push("/sign-in");
  }
  // const userSession = sessionStorage.getItem("user");
  if (!user ) {
    router.push("/sign-in");
  }
  return (
    <div>
      {/* <Dashboard  title="Hello" ></Dashboard> */}
      <Homepage logout={logout}/>
      {/* abc
      <button onClick={()=>{
        signOut(auth)
        sessionStorage.removeItem("user")
        }}>Sign Out</button> */}
    </div>
  );
}
