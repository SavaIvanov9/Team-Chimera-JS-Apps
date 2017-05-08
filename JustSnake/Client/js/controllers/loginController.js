import { contentLoader } from "contentLoader";
import { data } from "data";

class LoginController {
    initialize() {
        setTimeout(function(){ 
            $("#log-in-button").click(function() {
                var name = $("#user").val();
                //var email = $("#pwd").val();
                var password = $("#pwd").val();
                //var cpassword = $("#cpassword").val();

                alert(name + " " + password);

                data.login(name, password).then(
                    (result) => {
                        contentLoader.addContent(result);
                        console.log(result);
                    }
                );

                $("#play-btn").css({"display":"block"});
        })}, 100);
            
                //$("#play-btn").show();

                // if (name == '' || email == '' || password == '' || cpassword == '') {
                //     alert("Please fill all fields...!!!!!!");
                // } else if ((password.length) < 8) {
                //     alert("Password should atleast 8 character in length...!!!!!!");
                // } else if (!(password).match(cpassword)) {
                //     alert("Your passwords don't match. Try again?");
                // } else {
                //     $.post("register.php", {
                //         name1: name,
                //         email1: email,
                //         password1: password
                //         }, function(data) {
                //             if (data == 'You have Successfully Registered.....') {
                //             $("form")[0].reset();
                //             }
                //         alert(data);
                //     });
                // }
            //});
        //});

        // $(document).ready(function() {
        //     $("#register").click(function() {
        //         var name = $("#name").val();
        //         var email = $("#email").val();
        //         var password = $("#password").val();
        //         var cpassword = $("#cpassword").val();

        //         if (name == '' || email == '' || password == '' || cpassword == '') {
        //             alert("Please fill all fields...!!!!!!");
        //         } else if ((password.length) < 8) {
        //             alert("Password should atleast 8 character in length...!!!!!!");
        //         } else if (!(password).match(cpassword)) {
        //             alert("Your passwords don't match. Try again?");
        //         } else {
        //             $.post("register.php", {
        //                 name1: name,
        //                 email1: email,
        //                 password1: password
        //                 }, function(data) {
        //                     if (data == 'You have Successfully Registered.....') {
        //                     $("form")[0].reset();
        //                     }
        //                 alert(data);
        //             });
        //         }
        //     });
        // });
    }
}

const loginController = new LoginController();
export { loginController };