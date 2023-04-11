import { GeneralProps } from "@/types";
import "./Content.scss";

const Content = ({ children }: GeneralProps) => {
  return <main className="main">{children}</main>;
};

export default Content;
