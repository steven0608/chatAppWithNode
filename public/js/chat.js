const socket = io();

socket.on('countUpdated', (count)=>{
  console.log('The count has been updated!', count);
});

document.querySelector('#increment').addEventListener('Click', ()=>{
  console.log("Clicked");
  socket.emit('increment');
})
