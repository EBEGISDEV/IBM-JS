product1 = parseFloat(document.getElementById('input1').value);
product2 = parseFloat(document.getElementById('input2').value);
product3 = parseFloat(document.getElementById('input3').value);


function calculateTotal( product1, product2, product3) {



    let total = product1 = product2 + product3;
    document.getElementById('result').innerText = `The toal amount is : : ${total}`;

}

calculateTotal(product1,product2,product3)