var name_of_guest_array=[];
function go(){
    guestName=document.getElementById("enter").value;
    name_of_guest_array.push(guestName);
    document.getElementById("name").innerHTML= name_of_guest_array;
    console.log( name_of_guest_array);
    var length_of_array= name_of_guest_array.length;
    console.log(length_of_array);
}
function done(){
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("guest").innerHTML=i.toString();
}
function sorted(){
    name_of_guest_array.sort();
    var i=name_of_guest_array.join("<br>");
    console.log(name_of_guest_array);
    document.getElementById("sorting").innerHTML=i.toString();
}
function search(){
    var s=document.getElementById("sorting").value;
    var found=0;
    var j;
    for(j=0; j<name_of_guest_array.length; j++){
        if(s==name_of_guest_array[j]){
            found=found+1;
        }
    }
    document.getElementById("sorting").innerHTML="Name Found"+found+"time/s";
    console.log("Found Name"+found+"time/s");
}