$(function(){
  function ajax(options) {
    return new Promise(function(resolve, reject){$.ajax(options).then(resolve).catch(reject)});
  }

  function show_error(event){
    console.log("show_error()", event);
    $("#message").attr("class", "notice--danger");

    var message = "";
    var status = "";
    if(event.statusText !== "OK") status = event.statusText;
    if(event.responseJSON) message = event.responseJSON.errors;
    else message = "No response received";

    $("#message").html("<strong>" + status + "</strong> " + message);

  }
  function hide_message(){
    $("#message").html("");
    $("#message").attr("class", "");
  }
  function show_success(message){
        $("#message").attr("class", "notice--success");
        $("#message").text(message);

  }
  function start_loading(){
    $(".spinner").addClass("loading");
    hide_message();
    $("#button-next").attr("disabled", "disabled");
    $("#button-update").attr("disabled", "disabled");
    console.log("start_loading()");
    return true;
  }
  function stop_loading(){
    $(".spinner").removeClass("loading");
    $("#button-next").removeAttr("disabled", "");
    $("#button-update").removeAttr("disabled", "");
    console.log("stop_loading()");
    return true;
  }

  function get_themes(store, api_password){
    return $.ajax({
      method: "post",
      url: "https://designsuitepro.com/themex/theme.php",
      data: {
        action: "list",
        store: store,
        api_password: api_password
      },
      dataType: "json"
    });
  }


  function update_theme(store, api_password, theme_id, version){
    console.log("update_theme");
    let url = "https://islkq4mpv9.execute-api.us-east-1.amazonaws.com/dev/theme/update";
    return $.ajax({
      method: "post",
        url: url,
        dataType: "json",
        data: {
          action: "update",
          store: store,
          api_password: api_password,
          theme_id: theme_id,
          version: version
        }
      });
      // }).then(function(result){
      //   console.log("install_script");
      //   return install_script(store, api_password, theme_id)
      //     .then(() => result);
      // });
  }

  function install_theme(store, api_password, version){
    console.log("install_theme");
    let url = "https://designsuitepro.com/themex/theme.php";
    url = "https://islkq4mpv9.execute-api.us-east-1.amazonaws.com/dev/theme/install";
    return $.ajax({
      method: "post",
        url: url,
        dataType: "json",
        data: {
          action: "install",
          store: store,
          api_password: api_password,
          version: version
        }
      });
      // }).then(function(result){
      //   let theme_id = result.theme.id;
      //   let deferred = $.Deferred();
      //   setTimeout(function(){
      //     install_script(store, api_password, theme_id)
      //       .then(deferred.resolve.bind(this, result))
      //       .catch(deferred.reject);
      //   }, 1000*60*2);
      //   return deferred;
      // });
  }

  function install_script(store, api_password, theme_id){
    console.log("install_script");
    let url = "https://islkq4mpv9.execute-api.us-east-1.amazonaws.com/dev/theme/install_script";
    return $.ajax({
      method: "post",
      url: url,
      dataType: "json",
      data: {
        action: "install_script",
        store: store,
        api_password: api_password,
        theme_id: theme_id
      }
    });
  }

  function populate_themes(data){
    $("#theme_id").empty();
    $("#theme_id").append($("<option value=\"\">Install New Theme</option>"));

    for(var i in data.themes){
      var theme = data.themes[i];
      $("#theme_id").append($("<option value=\""+theme.id+"\">"+theme.name+" ("+theme.role+")</option>"));
    }

  }
  function show_step2(){
    $("#step2").slideDown();
    $("#step1").slideUp();
  }

  function theme_updated(data){
    // data should include the version updated and previous version ?
    console.log("theme_updated", data);

    if(data.updated_assets){

    }else{
      if(data.data){
        data = data.data;
      }
      if(!$("#theme_id option[value='"+data.theme.id+"']").length){
        $("#theme_id").append($("<option value=\""+data.theme.id+"\">"+data.theme.name+" ("+data.theme.role+")</option>"));
        $("#theme_id").val(data.theme.id);
      }
    }

    swal("Theme Updated!", "Theme Updated Successfuly", "success");
    //show message

  }

  function script_installed(data){
    swal("Script Installed", "Script Installed Successfuly", "success");
  }
  function normalize_store_string(store){
    store = store.replace(/https:\/\/|http:\/\//i,"");
    if(store.indexOf(".") < 0){
      store = `${store}.myshopify.com`;
    }
    return store;
  }

  function step1_submit(){

      var store = normalize_store_string($("#store").val());
      var api_password = $("#api_password").val();

      start_loading();

      get_themes(store, api_password)
        .then(populate_themes)
        .then(show_step2)
        .catch(show_error)
        .then(stop_loading);

  }

  function step2_submit(){

    let store = normalize_store_string($("#store").val());
    let api_password = $("#api_password").val();
    let theme_id = $("#theme_id").val();
    let version = $("#version").val();

    let confirm_promise;
    let update_or_install_promise;

    if(theme_id){
      swal({
        title: "Are you sure?",
        text: "This action will overwite any changes you have made to the theme, make sure to make a backup first. (Your settings will be preserved)",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function(confirmed) {
        if(confirmed){
          start_loading();
          update_theme(store, api_password, theme_id, version)
            .then(theme_updated)
            .catch(show_error)
            .then(stop_loading);
        }
      })
    }else{
        start_loading();
        install_theme(store, api_password, version)
          .then(theme_updated)
          .catch(show_error)
          .then(stop_loading);
    }

  }


  function script_submit(){
    let store = normalize_store_string($("#store").val());
    let api_password = $("#api_password").val();
    let theme_id = $("#theme_id").val();


    if(theme_id){
      start_loading();
      install_script(store, api_password, theme_id)
        .then(script_installed)
        .catch(show_error)
        .then(stop_loading);
    }else{
      show_error({statusText: "", responseJSON: {errors: "You need to pick a theme"}});
    }
  }


  function submit_form(name, email, store){
    return $.ajax({
      method: "post",
      url: "https://designsuitepro.com/themex/theme.php",
      data: {
        action: "form",
        name, email, store
      },
      dataType: "json"
    });
  }

  function form_success(){
    swal("Form Sent", "Form Sent Successfuly", "success");
  }

  function form_submit(){
    let email = $("#email").val();
    let name = $("#name").val();
    let store = normalize_store_string($("#store").val());

    if(store && name && email){
      start_loading();
      submit_form(name, email, store)
        .then(form_success)
        .catch(show_error)
        .then(stop_loading);
    }else{
      show_error({statusText: "", responseJSON: {errors: "All fields are required"}});
    }

  }

  $("#theme_id").change(function(e){
    if($(this).find("option:selected").val() === ""){
      $("#button-update").val("Install");
      $("#install-time-warning").show();
    }else{
      $("#install-time-warning").hide();
      $("#button-update").val("Update");
    }

  });

  $("#button-next").click(step1_submit);
  $("#button-update").click(step2_submit);
  $("#button-script").click(script_submit);
  $("#form-update").submit(function(e){e.preventDefault();return false;});

  $("#button-send").click(form_submit);

});
