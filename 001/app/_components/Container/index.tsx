import Styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <main className={Styles.container}>{children}</main>;
};

export default Container;
