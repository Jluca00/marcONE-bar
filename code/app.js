var app = {
    init : function() {
        console.log("init inside app!");
        $("title").text("Bar prof");
        $.get("data.json")
        .done(app.onSuccess)
        .fail(app.onError);
        
    },
    onSuccess:function(jsonData){
        // processa i dati qui!!!
        console.log(jsonData);
    },
    
    onError:function(e){
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};
