export const environment = {
  production: true,
  sentry:{
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  }
};
