import { config, connector, graph } from '@grafbase/sdk'

const g = graph.Standalone()

const mongodb = connector.MongoDB('MongoDB', {
  url: 'https://data.mongodb-api.com/app/data-asdf/endpoint/data/v1',
  apiKey: 'SECRET',
  dataSource: 'myDatasource',
  database: 'blogPlatform',
})

g.datasource(mongodb)


const User = mongodb.model("User",{
  name: g.string().length({min:2,max:20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkdInUrl: g.url().optional(), 
 })

const Project = mongodb.model("Project",{
  title: g.string().length({min:3}),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url()
  
})

  export default config({
    graph: g,
  })