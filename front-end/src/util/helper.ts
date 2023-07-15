import { storageService } from "./storage";

const parseJwt = (token: string): any => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const isTokenValid = () => {
  let token = storageService.getToken();

  if (!token) return false;

  let parsed = parseJwt(token);

  return parsed.exp * 1000 >= Date.now();
};

export const helper = {
  isTokenValid,
};
