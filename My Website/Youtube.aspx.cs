using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace My_Website
{
    public partial class Youtube : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Random random = new Random();
            switch (random.Next(0,15))
            {
                case 0:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/M6kBB50BvQY?autoplay=1&rel=0&showinfo=0";
                break;
                case 1:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/36mI3xVJ-Pw?autoplay=1&rel=0&showinfo=0";
                    break;
                case 2:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/Sxa-iv_iFWc?autoplay=1&rel=0&showinfo=0";
                    break;
                case 3:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/sxEn-Cztejk?autoplay=1&rel=0&showinfo=0";
                    break;
                case 4:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/wzG8gjUdALs?autoplay=1&rel=0&showinfo=0";
                    break;
                case 5:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/ZpY0KfISJ4k?autoplay=1&rel=0&showinfo=0";
                    break;
                case 6:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/SAvXqQRb06o?autoplay=1&rel=0&showinfo=0";
                    break;
                case 7:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/kK8MvTxClHc?autoplay=1&rel=0&showinfo=0";
                    break;
                case 8:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/2BHYMwwULmk?autoplay=1&rel=0&showinfo=0";
                    break;
                case 9:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/mNQYCWylcwM?autoplay=1&rel=0&showinfo=0";
                    break;
                case 10:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/ZH_bDItP_zg?autoplay=1&rel=0&showinfo=0";
                    break;
                case 11:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/GuPhHyUTpX8?autoplay=1&rel=0&showinfo=0";
                    break;
                case 12:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/fjA92IW5GUM?autoplay=1&rel=0&showinfo=0";
                    break;
                default:
                    YoutubeVideos.Src = "https://www.youtube.com/embed/3bbq5E2LY0U?autoplay=1&rel=0&showinfo=0";
                break;
            }
        }
    }
}