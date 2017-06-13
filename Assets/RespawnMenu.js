#pragma strict
var lookAround01 : MouseLook;
var lookAround02 : MouseLook;
var charController : CharacterController;
var respawnTransform : Transform ;


static var playerIsDead = false;

function Start () 
{

lookAround01 = gameObject.GetComponent (MouseLook);
lookAround02 = gameObject.Find("MainCamera").GetComponent(MouseLook);
charController = gameObject.GetComponent (CharacterController);
}

function Update ()

{
if (playerIsDead == true)
  {
    lookAround01.enabled = false ;
    lookAround02.enabled = false ;
    charController.enabled =false ;
  }
	
}

function OnGUI ()
{
    if (playerIsDead == true)
    {
      if (GUI.Button(Rect(Screen.width*0.5-50,200-20,100,40), "Respawn"))
      {
        RespawnPlayer();
      }
      if (GUI.Button(Rect(Screen.width*0.5 -50,240,100,40),"Menu"))
      {
        Debug.log("Return to menu");
      }
    }
}

function respawnPlayer ()
{
  transform.position = respawnTransform.position;
  transform.rotation = respawnTransform.rotation;
  gameObject.SendMessage ("RespawnStats");
  lookAround01.enabled =true;
  lookAround02.enabled = true;
  charControlle.enabled = true;
  playerIsDead = false ;
  Debug.Log ("Player telah muncul kembali");
}

