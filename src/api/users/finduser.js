module.exports = {
    async findUser(ctx) {
      const rawBuilder = strapi.db.connection.raw(
        "SELECT * FROM public.users"
      );
      const resp = await rawBuilder.then();
      return resp.rows;
    },
  };
