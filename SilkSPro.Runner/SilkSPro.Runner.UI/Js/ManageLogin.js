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

    html += " <div class='ibox float-e-margins'>";
    html += " 	<div class='ibox-title'>";
    html += " 		<h5>Login</h5>";
    html += " 		<div class='ibox-tools'>";
    html += " 		</div>";
    html += " 	</div>";
    html += " 	<div class='ibox-content'>";
    html += "       <div class='form-group'>";
    html += "           ";
    html += "       </div>";
    html += " 	</div>";
    html += " </div>";
    $("#dvpageLogin").html(html);
}

