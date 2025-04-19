const searchEmoji = e =>{
  e.preventDefault()
  const val = document.getElementById('search-bar').value
  displayResults(val) //passing argument
  return false
}

const autoSearch = e=>{
  const value = e.target.value
  displayResults(value)
}

const displayResults = (searchQuery = " ")=>{   //if not passing anything empty string will be argument // if passed that value will be argument
  const filterAns = emojiList.filter(e=>{
    if(e.description.indexOf(searchQuery) != -1){
      return true
    }
    if(e.aliases.some(ele => ele.startsWith(searchQuery))){
      return true
    }
    if(e.tags.some(ele => ele.startsWith(searchQuery))){
      return true
    }
  })
  const parent = document.getElementById('emoji-result')
  parent.innerHTML = ``
  filterAns.forEach(item=>{
    let new_row = document.createElement('tr')
    let emojii = document.createElement('td')
    let alice = document.createElement('td')
    let about = document.createElement('td')

    emojii.innerText = item.emoji
    alice.innerText = item.aliases.join("")
    about.innerText = item.description

    alice.innerText = alice.innerText.replaceAll('_', " ")
    emojii.classList.add("emojis") //giving class names for css
    alice.classList.add("another")
    about.classList.add("desc")

    new_row.appendChild(emojii)
    new_row.appendChild(alice)
    new_row.appendChild(about)
    parent.appendChild(new_row)
  })
}
document.getElementById('search-emoji').addEventListener('submit', searchEmoji)
document.getElementById('search-bar').addEventListener("keyup",autoSearch)
window.onload = ()=> displayResults()