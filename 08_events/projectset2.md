# Projects related to async

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Project 5 Solution code
```javascript
const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key==" "?"space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

```

# Project 6 Solution code


```javascript
const randomColor=function(){
  const hex='0123456789ABCDEF';
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return(color)
};
console.log(randomColor());
let intervalId;
const startChangingColor=function(){
  intervalId=setInterval(changeBgColor,1000);
  function changeBgColor(){
    document.body.style.background=randomColor();
  }
};

const stopChangingColor=function(){
  clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);

```

