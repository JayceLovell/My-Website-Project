<%@ Page Title="Projects" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Projects.aspx.cs" Inherits="My_Website.Projects" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="container">
        <div class="row">
            <h1>Projects</h1>
            <div class="Project_Div">
                <h2 class="center">HTML/Javascript Projects</h2>
                <img src="Assets/Images/Zoro_Game.JPG" alt="Zoro Game Preview" />
                <p>It is a clicking game, One Piece themed based. Where you are Zoro and you have to kill the Marines by clicking on them.</p>
                <asp:Button Class="btn btn-sm" runat="server" ID="ZoroPlayButton" OnClick="ZoroPlayButton_Click" Text="Click Here To Play" ToolTip="I will take you to the game."/>
                <div class="dropup">
                    <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown">Other HTML/Javascript Projects
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-header">HTML</li>
                        <li><a href="Project/HTML/Assignment2/Assignment2.html">Assignment 2</a></li>
                        <li><a href="Project/HTML/Assignment3/Assignment3-Styles.css">Assignment 3</a></li>
                        <li role="separator" class="divider"></li>
                        <li class="dropdown-header">Javascript</li>
                        <li><a href="Project/Javascript/Assignment4/Assignment04.html">Assignemnt 4</a></li>
                        <li><a href="Project/Javascript/Term Project/Home.html">Project</a></li>
                    </ul>
                </div>    
            </div>
            <hr />
            <div class="Project_Div">
                <h2 class="center">JQuery Projects</h2>
                <img src="Assets/Images/Snake_Game.JPG" />
                <p>Simple game of snake</p>
                <asp:Button Class="btn btn-sm" runat="server" ID="SnakeGamePlayButton" OnClick="SnakeGamePlayButton_Click" Text="Click Here To Play" ToolTip="I will take you to the game." />
                <div class="dropup">
                    <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown">Other Jquery Projects
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-header">Jquery</li>
                        <li><a href="Project/Jquery/Assignment01/assignment1.html">Assignment 1</a></li>
                        <li><a href="Project/Jquery/Assignment02/assignment2.html">Assignment 2</a></li>
                        <li><a href="Project/Jquery/Assignment03/assignment3.htm">Assignment 3</a></li>
                        <li><a href="Project/Jquery/Assignment04/Assignment04.html">Assignment 4</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
