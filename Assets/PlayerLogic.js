#pragma strict
var MaxHealth = 100 ;
var Health : int ;

function Start ()

{
  Health = MaxHealth ;

}



function ApplyDammage (Damage : int)
  { 
    Health -= Damage ;
    if (Health < 0)
    {
      Dead();
    }
  }
function Dead()
  {
  
    RespawnMenu.playerIsDead = true ;
    Debug.Log("Karakter Terbunuh");
  }
function RespawnStats ()
{
  Health = MaxHealth ;
}
