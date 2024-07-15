const prepareHateoas = async (entity, data) => {
  let stocktotal = 0;
    const results = data
      .map((v) => {
        stocktotal = stocktotal + v.stock;
        return {
          nombre: v.nombre,
          href: `/api/v1/${entity}/joya/${v.id}`,
        };
      });
      // .slice(0, 4);
    const total = data.length;
    const HATEOAS = {
      total,
      stocktotal,
      results,
    };
    return HATEOAS;
  };
  
  export default prepareHateoas;