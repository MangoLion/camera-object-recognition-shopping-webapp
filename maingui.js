maingui = {
    paneCamera: {
      Type: 'wePanel',
      L: 0,
      T: 0,
      R: 250,
      B: 0,
      Data:{
        Visible:false 
      },
      style: {
          
        borderStyle: 'dashed',
        borderColor: 'gray'
      }
    },
    btScanItems: {
      Type: 'weButton',
      T: 0,
      W: 250,
      R: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Scan Items'
      }
    },
    Event:{
        OnClick:function(){
            console.log("CLICKED");
            GUI.currentItems.forEach(item=>{
                AppForm.listItems.AddItem(item);
            })

            AppForm.Update();
        }
    },
    listItems: {
      Type: 'weList',
      T: 32,
      W: 250,
      R: 0,
      H: 200,
      Data: {
        HTMLEncode: true,
        SelectType: nglSelectSingle,
        Items: []
      },
      style: {
        borderBottom: ' dashed green',
        borderTop: ' dashed green'
      }
    },
    btCheckout: {
      Type: 'weButton',
      T: 238,
      W: 250,
      R: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Checkout'
      }
    }
  }
  
  GUI = {
      currentItems:[],
      capturing: false,
      prices:{
          "person": "N/A",
          "cell phone": "$200",
          "toothbrush": "$2",
          "cup":"$1",
        "remote": "$5"
      }
  };
  GUI.SetItems = function(items){
      AppForm.listItems.setItems(items);
      Appform.Update();
  }