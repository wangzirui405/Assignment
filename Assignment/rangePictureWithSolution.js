function range()
{
  timerTime=0;
  document.getElementById("timerNumber").value="已用时间："+timerTime+'s';
  judgeForFinish=true;
  lastId="#img9";
  lastNumber=15;

  allFadeOut();


  function restorePicture()
  {
    for (var i = 1; i <=9; i++) 
    {
      $("#img"+i).attr("src",""+i+".png");
    }
  }

  restorePicture(); 

  
  function ran()
  {
    var ranNum=Math.random();
    for (var i = 1; i <= 8; i++) 
    {
      if (i*0.125-0.125 < ranNum<= i*0.125) 
        {
          return "#img"+i
        };
      if (ranNum==0) 
        {
          return "#img1"
        };

    }
  
  }

  function change(a)
  {
    for (var i = 1; i <= 8; i++) 
    {
      if (a=="#img"+i) 
        {
          return 'img'+i
        };

    }

  }

  while(exchanged<32)
  {
    exchanged+=1;
    var ranNum2=ran();
    var ranNum3=ran();
    if (ranNum2==ranNum3) {exchanged=exchanged-1};
    var record1=document.getElementById(change(ranNum2)).src;
    var record2=document.getElementById(change(ranNum3)).src;
        $(ranNum2).attr("src",record2);
        $(ranNum3).attr("src",record1);

  }

  allFadeIn();

  exchanged=0; 
}