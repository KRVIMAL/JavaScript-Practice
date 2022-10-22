const items=[
  {id:'🍔',name:'Super Burger',price:399},

  
  {id:'🍟',name:'Jumbo Burger',price:299},
  
  
  {id:'🍕',name:'italian Pizza',price:499}
];

const app=document.querySelector('#app');
items.forEach((item)=>{
  app.innerHTML +=`
  <li>
  ${item.id} ${item.name}-${(item.price/100).toFixed(2)} 
  </li>
  `;
});
