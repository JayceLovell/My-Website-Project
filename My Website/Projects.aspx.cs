using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace My_Website
{
    public partial class Projects : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void ZoroPlayButton_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Project/Jquery/Project/Project.html");
        }

        protected void SnakeGamePlayButton_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Project/Jquery/Snake_Game/snake.html");
        }
    }
}