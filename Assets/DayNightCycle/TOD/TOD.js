var slider : float;
var slider2 : float;
var Hour : float;
private var Tod: float;

var sun: Light;

var speed = 50;

var NightFogColor : Color;
var DuskFogColor : Color;
var MorningFogColor : Color;
var MiddayFogColor : Color;

var NightAmbientLight : Color;
var DuskAmbientLight : Color;
var MorningAmbientLight : Color;
var MiddayAmbientLight : Color;

var NightTint : Color;
var DuskTint : Color;
var MorningTint : Color;
var MiddayTint : Color;

var SkyBoxMaterial1 : Material;
var SkyBoxMaterial2 : Material;

var SunNight : Color;
var SunDay : Color;

function OnGUI () 
{
if(slider >= 1.0)
{
	slider = 0;
}

slider= GUI.HorizontalSlider( Rect(20,20,200,30), slider, 0,1.0);
Hour= slider*24;
Tod= slider2*24;
sun.transform.localEulerAngles = Vector3((slider*360)-90, 0, 0);
slider = slider +Time.deltaTime/speed;
sun.color = Color.Lerp (SunNight, SunDay, slider*2);

if(slider<0.5)
{
	slider2= slider;
}
if(slider>0.5)
{
	slider2= (1-slider);
}
	sun.intensity = (slider2-0.2)*1.7;


if(Tod<4)
{
//Tampilan Malam
RenderSettings.skybox=SkyBoxMaterial1;
RenderSettings.skybox.SetFloat("_Blend", 0);
SkyBoxMaterial1.SetColor ("_Tint", NightTint);
RenderSettings.ambientLight = NightAmbientLight;
RenderSettings.fogColor = NightFogColor;
}
if(Tod>4&&Tod<6)
{
RenderSettings.skybox=SkyBoxMaterial1;
RenderSettings.skybox.SetFloat("_Blend", 0);
RenderSettings.skybox.SetFloat("_Blend", (Tod/2)-2);
SkyBoxMaterial1.SetColor ("_Tint", Color.Lerp (NightTint, DuskTint, (Tod/2)-2) );
RenderSettings.ambientLight = Color.Lerp (NightAmbientLight, DuskAmbientLight, (Tod/2)-2);
RenderSettings.fogColor = Color.Lerp (NightFogColor,DuskFogColor, (Tod/2)-2);
//Tampilan Senja

}
if(Tod>6&&Tod<8)
{
RenderSettings.skybox=SkyBoxMaterial2;
RenderSettings.skybox.SetFloat("_Blend", 0);
RenderSettings.skybox.SetFloat("_Blend", (Tod/2)-3);
SkyBoxMaterial2.SetColor ("_Tint", Color.Lerp (DuskTint,MorningTint,  (Tod/2)-3) );
RenderSettings.ambientLight = Color.Lerp (DuskAmbientLight, MorningAmbientLight, (Tod/2)-3);
RenderSettings.fogColor = Color.Lerp (DuskFogColor,MorningFogColor, (Tod/2)-3);
//Tampilan Pagi

}
if(Tod>8&&Tod<10)
{
RenderSettings.ambientLight = MiddayAmbientLight;
RenderSettings.skybox=SkyBoxMaterial2;
RenderSettings.skybox.SetFloat("_Blend", 1);
SkyBoxMaterial2.SetColor ("_Tint", Color.Lerp (MorningTint,MiddayTint,  (Tod/2)-4) );
RenderSettings.ambientLight = Color.Lerp (MorningAmbientLight, MiddayAmbientLight, (Tod/2)-4);
RenderSettings.fogColor = Color.Lerp (MorningFogColor,MiddayFogColor, (Tod/2)-4);

//Tampilan Tengah Hari

}
}