const config = {
  SENTRY_DSN:
    "https://3474d9a33d474066a85de1ad294b3be1@o1108636.ingest.sentry.io/6136448",
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51K5oedF4Abdf3ZQAZuHaXgSMC0Q3nkG42bCbzS6UlzWujTNxpOr4NpUxCErQh9KFXkaOHgk9ZBWoOAGkyDLOIPBc00O5wj6Jv7",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
