import "./App.css";
import { useState } from "react";

function App() {
  const [customerName, setCustomerName] = useState("Dev");
  const [items, setItems] = useState([
    { product: "cup", quantity: 2, price: 100 },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...items];
    list[index][name] = value;
    setItems(list);
  };

  const addItem = () => {
    setItems([...items, { product: "", quantity: 0, price: 0 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = { customerName, items };
      await axios.post("/api/orders", orderData);
      alert("Order submitted successfully!");
      // You can reset the form here if needed
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Error submitting order. Please try again later.");
    }
  };
  return (
    <>
      <div>
        <h1>Order Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <br />
          <br />

          <label>Items:</label>
          <br />
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="product"
                      value={item.product}
                      onChange={(e) => handleChange(index, e)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleChange(index, e)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleChange(index, e)}
                      required
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addItem}>
            Add Item
          </button>
          <br />
          <br />
          <input type="submit" value="Submit Order" />
        </form>
      </div>
      );
    </>
);
}

export default App;
