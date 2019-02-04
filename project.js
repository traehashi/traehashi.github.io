var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
  if(this.readyState==4&&this.status==200){
    var mydata=JSON.parse(this.responseText);
      document.getElementById("food1").innerHTML=mydata.food[0].name;
      document.getElementById("price1").innerHTML="$"+mydata.food[0].price;
      document.getElementById("amount1").innerHTML=mydata.food[0].quantity;
      document.getElementById("sides1").innerHTML=mydata.food[0].sides;
        document.getElementById("food2").innerHTML=mydata.food[1].name;
        document.getElementById("price2").innerHTML="$"+mydata.food[1].price;
        document.getElementById("amount2").innerHTML=mydata.food[1].quantity;
        document.getElementById("sides2").innerHTML=mydata.food[1].sides;
          document.getElementById("food3").innerHTML=mydata.food[2].name;
          document.getElementById("price3").innerHTML="$"+mydata.food[2].price;
          document.getElementById("amount3").innerHTML=mydata.food[2].quantity;
          document.getElementById("sides3").innerHTML=mydata.food[2].sides;
            document.getElementById("food4").innerHTML=mydata.food[3].name;
            document.getElementById("price4").innerHTML="$"+mydata.food[3].price;
            document.getElementById("amount4").innerHTML=mydata.food[3].quantity;
            document.getElementById("sides4").innerHTML=mydata.food[3].sides;
              document.getElementById("food5").innerHTML=mydata.food[4].name;
              document.getElementById("price5").innerHTML="$"+mydata.food[4].price;
              document.getElementById("amount5").innerHTML=mydata.food[4].quantity;
              document.getElementById("sides5").innerHTML=mydata.food[4].sides;
                document.getElementById("food6").innerHTML=mydata.food[5].name;
                document.getElementById("price6").innerHTML="$"+mydata.food[5].price;
                document.getElementById("amount6").innerHTML=mydata.food[5].quantity;
                document.getElementById("sides6").innerHTML=mydata.food[5].sides;
  }
};

var subtotal=[];
var sum=0;
var tax=0.04712;
function subt1() {
  var option1=document.getElementById("option1").value;
  var c = Mydata.food[1].price;
  var subtotal1=c*option1;
  subtotal.push(subtotal11);
  for (var i = 0; i < subtotal.length; i++) {
    sum += numbers[i]}
      window.alert(sum);
     var tp1=document.getElementById("totalPrice");
     tp1.innerHTML=subtotal[0];
  }

xmlhttp.open("GET","foods.json",true);
xmlhttp.send();