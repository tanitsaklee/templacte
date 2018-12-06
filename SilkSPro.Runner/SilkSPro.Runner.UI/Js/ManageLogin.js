$(document).ready(function () {
    OnInitPageLoadLogin()
});

function OnInitPageLoadLogin() {
    var html = "";
    var strmanage = "manage";
    var strlogin = "login";
    html += " <div class='col-sm-3'></div>";
    html += " <div class='col-sm-3'>";
    html += "   <div class='contact-box'>";
    html += "   	<a onclick='chooseManagement(\"" + strmanage + "\");'>";
    html += "   	<div class='col-sm-4'>";
    html += "   		<div class='text-center'>";
    html += "   			<div class='m-t-xs font-bold'></div>";
    html += "   		</div>";
    html += "   	</div>";
    html += "   	<div class='col-sm-8'>";
    html += "   		<h3><strong>Manage</strong></h3>";
    html += "   	</div>";
    html += "   	<div class='clearfix'></div>";
    html += "   		</a>";
    html += "   </div>";
    html += " </div>";
    html += " <div class='col-sm-3'>";
    html += "   <div class='contact-box'>";
    html += "   	<a onclick='chooseManagement(\"" + strlogin + "\");'>";
    html += "   	<div class='col-sm-4'>";
    html += "   		<div class='text-center'>";
    html += "   			<div class='m-t-xs font-bold'></div>";
    html += "   		</div>";
    html += "   	</div>";
    html += "   	<div class='col-sm-8'>";
    html += "   		<h3><strong>Login</strong></h3>";
    html += "   	</div>";
    html += "   	<div class='clearfix'></div>";
    html += "   		</a>";
    html += "   </div>";
    html += " </div>";
    html += " <div class='col-sm-3'></div>";


    $("#dvpageLogin").html(html);
}

function chooseManagement(_type) {
    if (_type.indexOf("manage") != -1) {
        console.log(1);
    } else if (_type.indexOf("login") != -1) {
        OnInitBeforeLogin();
    }
}

function OnInitBeforeLogin() {
    var html = "";
    html += "<div class='row'>";
    html += " <div class='ibox-content'>";
    html += " 	<div class='row'>";
    html += " 		<div class='col-sm-6 b-r'><h3 class='m-t-none m-b'>Sign in</h3>";
    html += " 			<p>Sign in today for more expirience.</p>";
    html += " 			<form role='form' id='loginform'>";
    html += " 				<div class='form-group'><input type='text' name='Username' id='Username' placeholder='UserName: Email' class='form-control'></div>";
    html += " 				<div class='form-group'><input type='password' name='Password'  id='Password'   placeholder='Enter: Password' class='form-control'></div>";
    html += " 				<div>";
    html += " 					<button class='btn btn-sm btn-primary pull-right m-t-n-xs' type='button' id='btnLoginPage'><strong>Log in</strong></button>";
    html += " 				</div>";
    html += " 			</form>";
    html += " 		</div>";
    html += " 		<div class='col-sm-6'><h4>Not a member?</h4>";
    html += " 			<p>You can create an account:</p>";
    html += " 			<p class='text-center'>";
    html += " 				<a href=''><i class='fa fa-sign-in big-icon'></i></a>";
    html += " 			</p>";
    html += " 		</div>";
    html += " 	</div>";
    html += " </div>";
    html += "</div>";

    $("#dvpageLogin").html(html);

    $("#btnLoginPage").on("click", function () {
        //        var ManageVM = new Object();
        //        ManageVM.Username = $("#Username").val();
        //        ManageVM.Password = $("#Password").val();
        //        /*
        //        var strUserName = $("input[name$='Username']").val();
        //        var strPassword = $("input[name$='Password']").val();
        //        */
        //        var strUserName = $("input[name$='Username']").val();
        //        var strPassword = $("input[name$='Password']").val();
        //        var data = {};

        //        data.Username = strUserName;
        //        data.Password = strPassword;
                
        var x = $('#loginform').serializeArray();
        var webMethod = '/ManageLogin/Index';
        var res = AjaxWebMVC(webMethod, x);
    });
}

