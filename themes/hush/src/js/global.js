import "../sass/global.sass";
import "./modules/site_header/config.js";
import "./modules/home_page/config.js"
jQuery('.sendMail').click(function() {
  console.log('ss');
  let send = jQuery.ajax({
    url: "https://formspree.io/vlgutv@gmail.com",
    method: "POST",
    data: {
      message: "hello!"
    },
    dataType: "json"
  });
  send.then((result) => {
    console.log(result);
  });
});
