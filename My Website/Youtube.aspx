<%@ Page Title="Youtube" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Youtube.aspx.cs" Inherits="My_Website.Youtube" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="contain,center">
        <div class="row,center">
            <div class="col-mid-offset-4 col-md-12">
                <h1 class="youtube">My Youtube Channel</h1>
                <div class="embed-responsive embed-responsive-16by9">
                     <iframe id="YoutubeVideos" runat="server" title="Waynell_17 Channel Video" class="embed-responsive-item" src="blank"></iframe>
                </div>
                <br />
                <div class="center">
                    <div class="g-ytsubscribe" data-channelid="UCmdnoHC7EngDvvRWQL-xiNw" data-layout="full" data-theme="dark" data-count="hidden">

                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
        <br />
    </div>
</asp:Content>
