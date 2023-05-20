import { ResourceType } from '../resources/Resources'

export const CLIENT_PATH = {
  app: {
    $: 'app',
    listAndSearch: 'list-and-search',
    detailMode: {
      view: 'view'
    }
  }
}

export const FULL_CLIENT_PATH = {
  root: '/',
  filmsListAndSearch: `/${CLIENT_PATH.app.$}/${ResourceType.Films}/${CLIENT_PATH.app.listAndSearch}`,
  filmsView$: `/${CLIENT_PATH.app.$}/${ResourceType.Films}`,
  peopleListAndSearch: `/${CLIENT_PATH.app.$}/${ResourceType.People}/${CLIENT_PATH.app.listAndSearch}`,
  peopleView$: `/${CLIENT_PATH.app.$}/${ResourceType.People}`,
  planetsListAndSearch: `/${CLIENT_PATH.app.$}/${ResourceType.Planets}/${CLIENT_PATH.app.listAndSearch}`,
  planetsView$: `/${CLIENT_PATH.app.$}/${ResourceType.Planets}`,
  speciesListAndSearch: `/${CLIENT_PATH.app.$}/${ResourceType.Species}/${CLIENT_PATH.app.listAndSearch}`,
  speciesView$: `/${CLIENT_PATH.app.$}/${ResourceType.Species}`,
  starshipsListAndSearch: `/${CLIENT_PATH.app.$}/${ResourceType.Starships}/${CLIENT_PATH.app.listAndSearch}`,
  starshipsView$: `/${CLIENT_PATH.app.$}/${ResourceType.Starships}`,
  vehiclesListAndSearch: `/${CLIENT_PATH.app.$}/${ResourceType.Vehicles}/${CLIENT_PATH.app.listAndSearch}`,
  vehiclesView$: `/${CLIENT_PATH.app.$}/${ResourceType.Vehicles}`
}
