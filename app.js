function roll()
{
     
    var d1 = Math.round(Math.random()*6)
    var d2 = Math.round(Math.random()*6)    
    var v1=document.getElementById("d1").value
    v1=eval(v1)+eval(d1)
    console.log(d1)
    document.getElementById("d1").value=v1
    var v2=document.getElementById("d2").value
    v2=eval(v2)+eval(d2)
    document.getElementById("d2").value=v2
    if(v1>=30 || v2>=30)
    {
        if(v1==v2)
        {
            document.getElementById("result").innerHTML="The Game has been Tied"
        }
        else if(v1>v2)
        {
            document.getElementById("result").innerHTML="Player 1 Has Won the Game !"
            document.getElementById("buttond").style.visibility="hidden"
            document.body.style.backgroundImage="red"

        }
        else if(v2>v1)
        {
            document.getElementById("result").innerHTML="Player 2 has Won the Game !"
            document.getElementById("buttond").style.visibility="hidden"
            document.body.style.backgroundImage="red"

        }
        document.body.style.backgroundImage="red"

    } 



}
