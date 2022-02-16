module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-157-15-228.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd9j00c2v7ah9cu'),
      user: env('DATABASE_USERNAME', 'boaibsmriypgak'),
      password: env('DATABASE_PASSWORD', '093287858de5eeb54712f700cbb91aa8124d3b202ec0513ef5ed48d9ad7c284b'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
/****
connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'vacationdb'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '12345678'),
      ssl: env.bool('DATABASE_SSL', false),
    },
	***/