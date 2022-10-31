module.exports = {
  client: {
    service: {
      name: "allkit-backend",
      url: "http://localhost:3000/graphql",
    },
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
  },
};
