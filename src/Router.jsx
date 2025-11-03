import React, { createContext, useContext, useState } from "react";

const RouterContext = createContext();

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState("/");

  const navigate = (path) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useNavigate() {
  const { navigate } = useContext(RouterContext);
  return navigate;
}

export function Link({ to, children, className }) {
  const { navigate } = useContext(RouterContext);

  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export function Routes({ children }) {
  const { currentPath } = useContext(RouterContext);

  let element = null;
  React.Children.forEach(children, (child) => {
    if (child.props.path === currentPath) {
      element = child.props.element;
    }
  });

  return element;
}

export function Route({ element }) {
  return element;
}
