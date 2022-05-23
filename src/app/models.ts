import type { User, Expense } from "./features";

export default interface Model {
  User: React.FC<User> | undefined;
  Expense: React.FC<Expense> | undefined;
}
