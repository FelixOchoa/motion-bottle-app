export const cleanState = (
  firstState: any,
  secondState: any,
  thirdState: any,
  fourthState: any
) => {
  firstState("");
  secondState("");
  thirdState("");
  fourthState("");
};

const Login = (password: string) => {
  const passwordAdmin = "123456";

  if (password === passwordAdmin) {
    return true;
  }
  return false;
};

export const isLogin = (password: string) => {
  const isLogin = Login(password);

  if (isLogin) {
    localStorage.setItem("isLogin", "true");
    window.location.reload();
  }
};

export const isLogout = () => {
  localStorage.removeItem("isLogin");
  window.location.reload();
};
