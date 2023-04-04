export const winUrl = () => {
  return {
    host: window.location.host,
    href: window.location.href,
    pathname: window.location.pathname,
  };
};
