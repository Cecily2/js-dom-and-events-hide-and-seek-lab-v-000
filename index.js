function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let listItems = document.querySelectorAll(".ranked-list li")

  for (let i = 0; i < listItems.length; i++){
    let value = parseInt(listItems[i].innerHTML, 10)
    value += n
    listItems[i].innerHTML = value
  }
}


function deepestChild(){
  let doc = document.querySelector("#grand-node")
  while (doc.children[0]) {
    doc = doc.children[0]
  }
  return doc
}