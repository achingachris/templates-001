module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '201ef07f6943dca50d2bbc1ba9b98976'),
  },
});
