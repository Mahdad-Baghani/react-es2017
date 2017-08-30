class Random {

  constructor(max = 100, allowNegatives = true) {
    this.max = max
    this.allowNegatives = allowNegatives
  } //end constructor function

  randomInt(min, max) {
    if (max > this.max) {
      max = this.max
    }
    if (min < 0 && !this.allowNegatives) {
      min = 0
    }
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
  } //end randomInt method

} //end Random class

class colorGenerator extends Random {
  constructor(max, allowNegatives, type = 'rgb') {
    super(max, allowNegatives)
    if (this.typeList  .includes(type)) {
      this.type = type
    } else {
      this.type = 'rgb'
    }
  }

  typeList = ['hex', 'rgb']

  get types() {
    return this.typeList
  } //end get types

  set types(types = [ 'hex', 'rgb' ]) {
    if (Array.isArray(types)) {
      this.typeList = types.map(type => type)
    }
  } //end set types

  color() {
    let r = super.randomInt(0,255)
    let g = super.randomInt(0,255)
    let b = super.randomInt(0,255)
    if (this.type === 'hex') {
      return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    } else {
      return `rgb(${r}, ${g}, ${b})`
    }
  } //end color method

} //end colorGenerator

export const rando = new colorGenerator()

const shakespeareApi = "https://api.graph.cool/simple/v1/shakespeare"

let options = () => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      //we'll write this object later
      query: `{
        allPoems(
          first: 1,
          skip: ${rando.randomInt(0, 160)}
        ) {
          title
          author
          lines
          text
        }
      }`
    })
  }
} //end options

fetch(shakespeareApi, options()).then( res => res.json()).then(json =>
{
  console.log('json =>', json)
})
