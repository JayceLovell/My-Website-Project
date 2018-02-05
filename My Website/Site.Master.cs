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
                case "Projects":
                    projects.Attributes.Add("class", "active");
                    break;
                default:
                    break;
            }
        }
    }
}