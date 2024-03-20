import { sayHello } from "@/lib/action";

// const actionInComponent = async () => {
//   "user server";
//   console.log("Hello");
// };

const serverActionTest = () => {
  return (
    <div>
      <form action={sayHello}>
        <button>Test Action</button>
      </form>
    </div>
  );
};

export default serverActionTest;
