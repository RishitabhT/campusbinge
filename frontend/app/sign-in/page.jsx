"use client";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignInPage = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      console.log("User:", res.user);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/login`,
        {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        }
      );
      router.push("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #1e3a8a, #6b21a8, #312e81)",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          maxWidth: "400px",
          width: "100%",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
            background:'white',
            borderRadius: '2rem',
            width: '15rem',
            height: '5rem',
            padding: '2px',
            margin: '5rem auto'
        }}>
          <img
            src="https://campusbinge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0f1111cf.png&w=3840&q=75"
            alt="Logo"
            style={{ height: "64px", marginBottom: "20px" }}
          />
        </div>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "white",
            marginBottom: "30px",
          }}
        >
          Login to Your Account
        </h2>
        <button
          onClick={handleGoogleSignIn}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "12px 24px",
            backgroundColor: "white",
            color: "#1f2937",
            fontWeight: "500",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            margin: "0 auto",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#f3f4f6")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
        >
          <svg
            style={{ height: "20px", width: "20px" }}
            viewBox="0 0 488 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M488 261.8C488 403.3 391.3 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123.6 24.3 167.3 64.3l-67.8 65.5C318.3 109 285.6 96 248 96c-84.6 0-153.2 69.3-153.2 154S163.4 404 248 404c74.4 0 121.2-42.4 126.4-101.3H248v-81.6h240z" />
          </svg>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
