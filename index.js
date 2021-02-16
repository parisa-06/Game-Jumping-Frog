 var  i, j, k=1;
 var lenght_home   = prompt("Enter your number home : ");
 var number_waterWell   = prompt("Enter your number_waterWell   : ");
 var number_jump = prompt("Enter your number_jump: ");
 var home = new Array();
 var jump  = new Array();
 var Well=new Array()
 var p = 0;
 var w =0;

 for(i=1; i<= number_waterWell; i++){
  
    random_holds = Math.floor(Math.random() * (98)+2);
    if(home[random_holds] == null)
      home[random_holds]= "waterWell"
    else
      (i--)
      document.getElementById("demo1").innerHTML= home
}

 for(j=0; j<lenght_home && k<=number_jump ; j+=4){
   
     if( home[j] == "waterWell" ){
        Well[w] =j;
        document.getElementById("demo2").innerHTML = Well;
        w++; }
       
     else{
        jump[p]=j;
         document.getElementById("demo3").innerHTML=jump;
        p++;
    }
    
   k++
}

