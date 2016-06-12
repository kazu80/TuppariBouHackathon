/**
 * Created by kawakamikazuyoshi on 2016/05/27.
 */
require("../../../node_modules/ncmb/ncmb.min.js");

// 2. mobile backendアプリとの連携
var ncmb = new NCMB(
    "f3041f782ac8bf4f6f41ed1c82102c5af47a690025745d8dce75478592abf546",
    "1baa96e91c97a1e522f6a2f679a56375f3eedfa7f6ce17fc2296cc2b5c770d48"
);

// TestClassの作成
var TestClass = ncmb.DataStore("TestClass");
// 3.TestClassへの入出力
TestClass.equalTo("message", "Hello, NCMB!")
    .fetchAll()
    .then(function(results){
        if(results[0] != null){
            alert(results[0].get("message"));
        }else{
            var testClass = new TestClass();
            testClass.set("message", "Hello, NCMB!");
            testClass.save()
                .then(function(){
                    alert("message is saved.");
                })
                .catch(function(err){
                    console.log("error");
                    alert(err.text);
                });
        }
    })
    .catch(function(err){
        alert(err.text);
    });


