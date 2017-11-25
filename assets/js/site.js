$(function(){

  function start_step1_loading(){

  }
  function end_step1_loading(){

    $("#step2").slideIn();
    $("#step1").slideOut();
  }
  function start_step2_loading(){

  }
  function end_step2_loading(){

  }
  function get_themes(store, api_password){
    var api_password = $("#api_password").val();

    start_step1_loading();

    return $.ajax({
      url: "https://"+store+"/admin/themes.json",
      dataType: "json",
      headers: {
        "X-Shopify-Access-Token": api_password,
        "Content-Type": "application/json"
      }
    });
  }

  function render_themes(data){
    $("#theme_id").empty();
    $("#theme_id").append($("<option value=\"\">Create New Theme</option>"));
    for(var i in data.themes){
      var theme = data.themes[i];
      $("#theme_id").append($("<option value=\""+theme.id+"\">"+theme.name+"</option>"));
    }
    end_step1_loading();
  }

  function update_theme(store, api_password, theme_id, version, license_key){
    return $.ajax({
        url: "https://"+store+"/admin/themes.json",
        dataType: "json",
        headers: {
          "X-Shopify-Access-Token": api_password,
          "Content-Type": "application/json"
        }
    });
  }
  function theme_updated(data){
    end_step2_loading();
    //show message

  }

  function normalize_store_string(store){
    store = store.replace(/https:\/\/|http:\/\//i,"");
    if(store.indexOf(".") < 0){
      store = `${store}.myshopify.com`;
    }
    return store;
  }
  $("#button-next").click(function(){
    var store = normalize_store_string($("#store").val());
    var license_key = $("#license_key").val();

      get_themes(store, api_password)
        .then(render_themes);

  });
  $("#button-update").click(function(){

    update_theme(store, api_password, theme_id, version, license_key)
      .then(theme_updated);
  });

  $("#form-update").submit(function(e){e.preventDefault();return false;});

});
