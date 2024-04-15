function flickSwitch(arr){
  let flip = true;
  return arr.map(e => (e === 'flick') ? flip = !flip : flip)
}