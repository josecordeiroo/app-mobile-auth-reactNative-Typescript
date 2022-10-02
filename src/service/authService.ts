import { AuthData } from "../contexts/Auth";

function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123") {
        resolve({
          token: "fake-token",
          email,
          name: "Antonio Cordeiro",
        });
      } else {
        reject(new Error('Credenciais Invalidas'))
      }
    }, 500);
  });
}

export const authService = {signIn}