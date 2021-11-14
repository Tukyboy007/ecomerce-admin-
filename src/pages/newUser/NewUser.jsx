import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Шинэ хэрэглэгч</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Хэрэглэгчийн нэр</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Овог</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Мэйл хаяг</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Нууц үг</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Утас</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Хаяг</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Хүйс</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Эрэгтэй</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Эмэгтэй</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Идэвхтэй</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Тийм</option>
            <option value="no">Үгүй</option>
          </select>
        </div>
        <button className="newUserButton">Үүсгэх</button>
      </form>
    </div>
  );
}
