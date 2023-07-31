class User {
  constructor(user) {
    this.avatar = user.picture.medium;
    this.name = `${user.name.first} ${user.name.last}`;
    this.age = user.dob.age;
    this.gender = user.gender;
    this.country = user.location.country;
    this.email = user.email;
    this.login = user.login.username;
    this.password = user.login.password;
  }

  setUserData() {
    document.querySelector('[data-user="avatar"]').setAttribute("src", this.avatar);
    document.querySelector('[data-user="name"]').innerText = this.name;
    document.querySelector('[data-user="age"]').innerText = this.age;
    document.querySelector('[data-user="gender"]').innerText = this.gender;
    document.querySelector('[data-user="country"]').innerText = this.country;
    document.querySelector('[data-user="email"]').innerText = this.email;
    document.querySelector('[data-user="login"]').innerText = this.login;
    document.querySelector('[data-user="password"]').innerText = this.password;
  }

  static getUser() {
    return fetch(
      "https://randomuser.me/api/",
      {
        method: "GET",
      })
      .then((res) => res.json())
      .then(({ results }) => {
        return new User(results[0]);
      });
  }
}

User.getUser().then((user) => user.setUserData());