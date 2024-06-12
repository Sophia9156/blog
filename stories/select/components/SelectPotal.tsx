import React from "react";
import ReactDOM from "react-dom";

interface SelectPortalProps {
  children: React.ReactNode;
}

const SelectPortal: React.FC<SelectPortalProps> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(children, document.body);
};

export default SelectPortal;
