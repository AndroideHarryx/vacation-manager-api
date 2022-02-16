module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc025c34075b1aedecd072cd683f8fa0'),
  },
});
