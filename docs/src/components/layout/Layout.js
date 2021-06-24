import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const c = classes;

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={c.main}>{children}</main>
    </div>
  );
}

export default Layout;
