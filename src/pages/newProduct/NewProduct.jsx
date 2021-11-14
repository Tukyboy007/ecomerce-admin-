import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Шинэ бараа</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Зураг</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Нэр</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Нөөц</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Идэвхтэй</label>
          <select name="active" id="active">
            <option value="yes">Тийм</option>
            <option value="no">Үгүй</option>
          </select>
        </div>
        <button className="addProductButton">Үүсгэх</button>
      </form>
    </div>
  );
}
