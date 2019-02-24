AppForm = null;

function ngMain()
{

  AppForm = new ngControls(maingui);
  AppForm.Update();
}

//add callback to after windows update (1 sec)