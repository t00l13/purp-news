export default class UserInfo {
    constructor({selectorName, selectorJob}) {
      this._elementName = document.querySelector(selectorName);
      this._elementJob = document.querySelector(selectorJob);
    }
  
    getUserInfo() {
      return this._profileData = {
        nickname: this._elementName.textContent,
        job: this._elementJob.textContent,
      };
    }
  
    setUserInfo ({ nickname, job }) {
      this._elementName.textContent = nickname;
      this._elementJob.textContent = job;
    }
  }