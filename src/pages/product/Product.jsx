import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Бараа</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Үүсгэх</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Зарагдсан:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Идэвхтэй:</span>
              <span className="productInfoValue">Тийм</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Дууссан:</span>
              <span className="productInfoValue">Үгүй</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Барааны нэр</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>Дууссан</label>
            <select name="inStock" id="idStock">
              <option value="yes">Тийм</option>
              <option value="no">Үгүй</option>
            </select>
            <label>Идэвхтэй</label>
            <select name="active" id="active">
              <option value="yes">Тийм</option>
              <option value="no">Үгүй</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Шинэчлэл хийх</button>
          </div>
        </form>
      </div>
    </div>
  );
}
