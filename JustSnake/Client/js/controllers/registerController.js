import { contentLoader } from "contentLoader";
import { data } from "data";

class RegisterController {
    initialize() {
        setTimeout(function(){ 
            $("#register-button").click(function() {
            var name = $("#user").val();
            var password = $("#pwd").val();         
            alert(name + " " + password);           
            data.register(name, password).then(
                (result) => {
                    contentLoader.addContent(result);
                    console.log(result);
                }
            );          
            $("#play-btn").css({"display":"block"});
        })}, 100);
     }
}

const registerController = new RegisterController();
export { registerController };