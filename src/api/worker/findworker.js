module.exports = {
    async findCustom(ctx) {
      const rawBuilder = strapi.db.connection.raw(
        "SELECT * FROM public.workers ORDER BY id ASC"
      );
      const resp = await rawBuilder.then();
      return resp.rows;
    },
  };
