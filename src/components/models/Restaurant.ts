class Restaurant {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  rating: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    rating: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.rating = rating
  }
}

export default Restaurant
