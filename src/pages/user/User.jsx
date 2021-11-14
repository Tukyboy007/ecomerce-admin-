import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Засвар хийх</h1>
        <Link to="/newUser">
          <button className="userAddButton">Үүсгэх</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Хэрэглэгчийн нэр</span>
              <span className="userShowUserTitle">Мэргэжил</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Хэрэглэгчийн тухай</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Бүртгэлийн нэр</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">Он сар өдөр</span>
            </div>
            <span className="userShowTitle">Холбогдох</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">Утас</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Мэйл хаяг</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Хаяг</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Засварлах</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Нэр</label>
                <input
                  type="text"
                  placeholder="нэр"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Овог</label>
                <input
                  type="text"
                  placeholder="Овог"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Мэйл хаяг</label>
                <input
                  type="text"
                  placeholder="Мэйл хаяг"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Утас</label>
                <input
                  type="text"
                  placeholder="Утас"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Хаяг</label>
                <input
                  type="text"
                  placeholder="Хаяг"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Шинэчлэх</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
