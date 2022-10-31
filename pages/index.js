// TODO: Add automatic redirect to /login OR /projects

import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth"
import { firebaseAuth } from "../firebase/clientApp";
import { useEffect } from "react";


const Home = () => {
  const router = useRouter()
  const [user, loading, error] = useAuthState(firebaseAuth);

  useEffect(() => {
    if (!loading && error != null) {
      console.error(error);
    }
    else if (!loading && user != null) {
      console.log(user);
      router.push("/projects");
    }
    else if (!loading) {
      router.push("/login")
    }
  }, [user, loading, error])

  return (
    <>
    </>
  );
};

export default Home;
