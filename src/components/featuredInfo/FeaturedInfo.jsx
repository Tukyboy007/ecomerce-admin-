import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Орлого</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₮</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Өнгөрсөн сартай харьцуулсан дүн</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Борлуулалт</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₮</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Өнгөрсөн сартай харьцуулсан дүн</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Зардал</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₮</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Өнгөрсөн сартай харьцуулсан дүн</span>
      </div>
    </div>
  );
}
