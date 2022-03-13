const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener('click',() => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click',() =>{
    sideMenu.style.display ='none';
})

//change theme
themeToggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//Fill orders in table
/*Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.times}</td>
                        <td>${order.rooms}</td>
                        <td>${order.foods}</td>
                        <td class="${order.shipping === 'Declined'
                        ? 'danger': order.shipping == 'pending' 
                        ? 'warning' : 'primary'}">${order.status}</td>
                        <td class="primary">Chi tiết</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//Code doc du lieu va xu ly form
$(document).ready(function(){
    //code xu ly form
    $(document).on('submit','#form', function(){
      $.post("updateData.php",$('#form').serialize());
    });
    updateTable();
  });
  setInterval(updateTable,100);
  function updateTable(){
    $.post("getData.php",
    function(data){
        var time = [];
        var room = [];
        var food = [];
        var status = [];
        // cap nhat database vao bien tam
        for(var i in data){
            time.push(data[i].times);
            room.push(data[i].rooms);
            food.push(data[i].foods);
            status.push(data[i].status);
        }
        // cap nhat database cho table 
        for (var i=0; i<2; i++){
            document.getElementById("time["+i+"]").innerHTML = time[i];
            document.getElementById("room["+i+"]").innerHTML = room[i];
            document.getElementById("food["+i+"]").innerHTML = food[i];
            document.getElementById("status["+i+"]").innerHTML = status[i];
        }
    })
}