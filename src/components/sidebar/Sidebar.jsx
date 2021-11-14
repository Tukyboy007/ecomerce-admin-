import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Хянах самбар</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Нүүр хуудас
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Анализ
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Борлуулагдсан
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Хэрэглэгчийн цэс</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Хэрглэгчид
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Бараа
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Гүйлгээ
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Тайлангууд
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Мэдэгдэлүүд</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Мэйл хаяг
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Санал хүсэлт
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Мессеж
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Ажилчид</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Удирдах
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Анализ
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Тайлангууд
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
