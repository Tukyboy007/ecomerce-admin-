import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Шинэ хэрэглэгчид</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Алтанбаяр Жаргал</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Идэвхтэй
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Алтанбаяр Жаргал</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Идэвхтэй
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Алтанбаяр Жаргал</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Идэвхтэй
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Алтанбаяр Жаргал</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Идэвхгүй
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Алтанбаяр Жаргал</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Идэвхгүй
          </button>
        </li>
      </ul>
    </div>
  );
}
