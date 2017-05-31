// @flow

type Repository= {
  id: string,
  name: string,
  url: string
}

type Edge = {
  node: Repository
}

type Repositories = {
  edges: Array<Edge>,
  totalCount: number
}

type Viewer = {
  starredRepositories: Repositories
}
