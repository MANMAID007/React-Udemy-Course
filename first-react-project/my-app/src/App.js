import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Redmi Note 6 Pro",
      amount: 14000,
      date: new Date(2020, 2, 31),
    },
    { id: "e2", title: "JBL Flip 5", amount: 9000, date: new Date(2021, 6, 12) },
    {
      id: "e3",
      title: "Dell G5",
      amount: 82000,
      date: new Date(2022, 7, 5),
    },
    {
      id: "e4",
      title: "Fuji Flim X-T200",
      amount: 50000,
      date: new Date(2022, 4, 1),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
