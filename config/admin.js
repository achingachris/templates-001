module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad9239664990aa59e186a99acd8097dd'),
  },
});
