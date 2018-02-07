<%@ Page Title="Twitch" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Twitch.aspx.cs" Inherits="My_Website.Twitch" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="contain,center">
        <div class="row,center">
            <div class="col-mid-offset-4 col-md-12,center">

                <h1 class="twitchheader">My Twitch Channel</h1>

                <!-- A placeholder for the Twitch embed -->
                <div class="twitchvideo">
                    <div id="twitch-embed">

                    </div>
                </div>
                <div class="responsive">
                    <iframe frameborder="10" scrolling="yes" id="chat_embed" src="http://www.twitch.tv/embed/Waynell_17/chat" height="300" width="350git"> </iframe>
                </div>
             </div>
        </div>
    </div>
</asp:Content>
