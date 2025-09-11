import Input from "../Ui/Input";
import Button from "../Ui/Button";

const LoginPage = () => {
  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Input type="email" placeholder="Email address" />
        <Input type="password" placeholder="Password" />

        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
