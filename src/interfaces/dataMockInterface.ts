export interface Pizzas {
    name: string
    toppings: string[]
    precio: number
    size: string[]
}[]

export interface dataSodas {
  name: string
  sizeMedium: sodasSizes[]
  sizeLiter: sodasSizes[]
}

export interface sodasSizes {
  volume: number, 
  url: string, 
  price: number, 
  typeSoda: string
}