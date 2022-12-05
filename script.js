var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response
    var result=JSON.parse(data);
    console.log(result[0].area);

    // for loop

    for (var i=0; i<result.length; i++){
        console.log(result[i].area, result[i].name.common)
    }
}

// for of loop

for ( var obj of result){
    console.log(obj.area,obj.name.common);

}

// for in loop

for (var index in result){
    console.log(result[index].area)
}
