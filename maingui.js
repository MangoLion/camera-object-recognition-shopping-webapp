maingui = {
    paneCamera: {
      Type: 'wePanel',
      L: 0,
      T: 0,
      R: 250,
      B: 0,
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
    listItems: {
      Type: 'weList',
      T: 32,
      W: 250,
      R: 0,
      H: 200,
      Data: {
        HTMLEncode: true,
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
  
  GUI = {};
  GUI.setItems = function(items){
      AppForm.listItems.setItems(items);
      Appform.Update();
  }