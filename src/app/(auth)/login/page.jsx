import { handleGithubLogin, login } from "@/lib/action";
// import { auth } from "@/lib/auth";

const LoginPage = () => {
  // const session = await auth();

  // console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
