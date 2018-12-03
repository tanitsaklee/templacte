<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Index
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        Manage Login</h2>
    <div class="col-sm-12" id="dvpageLogin">
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="scriptpage" runat="server">
    <script src="../../Scripts/jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="../../Js/ManageLogin.js" type="text/javascript"></script>
</asp:Content>
