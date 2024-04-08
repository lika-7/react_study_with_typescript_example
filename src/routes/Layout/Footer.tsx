import * as D from "../../data";

const Footer = () => {
  return (
    <footer className="p-4 footer fotter-center bg-primary text-primary-content">
      <div>
        <p>Copyright 2022 -All right reserved by {D.randomCompanyName()}</p>
      </div>
    </footer>
  );
};

export default Footer;
