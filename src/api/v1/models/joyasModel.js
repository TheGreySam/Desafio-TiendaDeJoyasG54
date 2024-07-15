import pool from  "../../../../config/db/connections.js";
import format from "pg-format";
import createQuery from "../helpers/filter.js"; 

const getJoyas = async ( 
  order_by = "id_ASC",
  limits = 3,
  page = 0
  ) => {

  try {

    const [attribute, direction] = order_by.split("_");
    const offset = page * limits;
    const formattedQuery = format(
      "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
      attribute,
      direction,
      limits,
      offset
    );
  
    const response = await pool.query(formattedQuery);
    return response.rows;

  } catch (error) {
    console.log(error);
  }
};


const joyasFilter = async (filters) => {
  try {
    const { query, values } = createQuery("inventario", filters);
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
};

export { getJoyas,joyasFilter };