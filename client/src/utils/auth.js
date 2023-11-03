import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    //token k sakhte shode bood dar local storage ro b komak getToken az local storage migire va behesh esm token mide
    const token = this.getToken();
    //age tokeni bashe va expire nashode bashe in phrase (!!token && !this.isTokenExpired(token))barabar true hast k yani user loggedin shode____!! in alamat token variable ro tabdil b bolean true false tor mikone
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    //token sakhte shode ro az local storage migire
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves user token to localStorage___ "id_token" esm token idToken token i k az back bargashte ro migire dar vaqe toke k az back bargashte ro migire behesh esm id_token mide va ba set item st ash mikone to local storage
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
