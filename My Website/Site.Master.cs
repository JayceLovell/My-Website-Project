using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace My_Website
{
    public partial class SiteMaster : MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ActivePage();
        }
        /// <summary>
        /// This method swithes the active title in Nav bar
        /// </summary>
        private void ActivePage()
        {
            switch (Page.Title)
            {
                case "Home":
                    home.Attributes.Add("class", "active");
                    break;
                case "Projects":
                    projects.Attributes.Add("class", "active");
                    break;
                case "Youtube":
                    youtube.Attributes.Add("class", "active");
                    break;
                case "Twitch":
                    twitch.Attributes.Add("class", "active");
                    break;
                case "Contact":
                    contact.Attributes.Add("class", "active");
                    break;
                case "About":
                    aboutMe.Attributes.Add("class", "active");
                    break;
                default:
                    break;
            }
        }
    }
}