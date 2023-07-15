import { api } from "../../../../util/api";
import { storageService } from "../../../../util/storage";
import { getAuthPath } from "../../PublicRoutes";
import { Auth, Credentials, Signup } from "../model/auth.model";
import { signInPath } from "../screen/Signin";

const authBaseUrl = "/uaa";

async function signin(credentials: Credentials): Promise<Auth> {
  let auth: Auth = await api.post(`${authBaseUrl}/signin`, credentials);
  storageService.setToken(auth.accessToken);

  return auth;
}

function signup(register: Signup) {
  return api.post(`${authBaseUrl}/signup`, register);
}

function logout() {
  storageService.clear();
  window.location.href = getAuthPath(signInPath);
}

export const authService = {
  signin,
  signup,
  logout,
};
