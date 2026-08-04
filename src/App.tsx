import RegisterPage from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";
import DashboardPage from "./component/DashboardPage";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <LoginPage />;
  }

  if (path === "/dashboard") {
    return <DashboardPage />;
  }

  return <RegisterPage />;
}

export default App;