import {
    getJoyas,
    joyasFilter
  } from "../models/joyasModel.js";

  import pagination from "../helpers/paginator.js";
  import prepareHateoas from "../helpers/hateoas.js";
  
  const filterJoyas = async (req, res) => {
    try {
      const { items, page, filters } = req.body;
      const joyas = await joyasFilter(filters);
      const paginationData = pagination(joyas, items, page);
      res.status(200).json(paginationData);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const getJoyasWithHateoas = async (req, res) => {
    try {
      const {order_by, page, limits} = req.query;
      const joyas = await getJoyas(order_by,limits,page);
      const joyasWithHateoas = await prepareHateoas("joyas", joyas);
      res.status(200).json(joyasWithHateoas);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  export { filterJoyas,getJoyasWithHateoas };