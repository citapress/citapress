// Points the IDE's GraphQL plugin at the schema Gatsby generates
// (run `npm run develop` once after a clean checkout to create it).
module.exports = {
  schema: ".cache/typegen/schema.graphql",
  documents: ["src/**/*.{js,jsx}"],
}
