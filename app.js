let order = [];
function addToCart(productName){
    order.push(productName);
    alert(`${productName} added to your order`);
}

document.getElementById('view-orders').addEventListener('click', () =>{
    const orderlist = document.getElementById('order-list');
    orderlist.innerHTML = "";
    if(order.length === 0){
        orderlist.innerHTML = '<li>no order yet</li>';
    }
    else{
    order.forEach((order) =>{
        const li = document.createElement('li');
        li.textContent = order;
        orderlist.appendChild(li);
    });
}
document.getElementById('order-popup').classList.remove('hidden');
});