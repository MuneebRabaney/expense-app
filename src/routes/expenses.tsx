import { Heading } from "src/components";
import { List } from "src/features/expense";

function Expenses() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Heading title="Expenses Page" />
      <List />
    </div>
  );
}

export default Expenses;
