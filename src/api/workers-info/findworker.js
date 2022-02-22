module.exports = {
    async findCustom(ctx) {
      const rawBuilder = strapi.db.connection.raw(
        "SELECT * FROM public.workers_inf"
      );
      const resp = await rawBuilder.then();
      return resp.rows;
    },
  };
