const verification_page = () => {
  return(
    `
    <!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="color-scheme" content="light">
      <meta name="supported-color-schemes" content="light">
      <title>Email verification</title>
      <link rel="shortcut icon" href="https://i.dlpng.com/static/png/6999891_preview.png" />
      <style>
        @media only screen and (max-width: 600px) {
          .inner-body {
            width: 100% !important;
          }

          .footer {
            width: 100% !important;
          }
        }

        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
          }
        }
      </style>
    </head>
    <body
      style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
      <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #eff3e7; margin: 0; padding: 0; width: 100%;">
        <tr>
          <td align="center"
            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
              style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
              <tr>
                <td class="header"
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 35px 0; text-align: center;">
                  <a href="http://localhost:3000"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #056424; font-size: 1.5rem; font-weight: bold; text-decoration: none; display: inline-block;">
                    <div style="display: flex; justify-content: center;">
                      <img src="https://i.dlpng.com/static/png/6999891_preview.png" style="width: 40px; height: 40px;" />

                      <span style="margin-left: 0.5rem; margin-top: 3px; font-family: sans-serif;"><i>eden</i></span>
                    </div>
                  </a>
                </td>
              </tr>
              <!-- Email Body -->
              <tr>
                <td class="body" width="100%" cellpadding="0" cellspacing="0"
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; border-bottom: 1px solid #edf2f7; border-top: 1px solid #edf2f7; margin: 0; padding-top: 50px; padding-bottom: 50px; width: 100%;">
                  <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 570px;">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell"
                        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                        <h1 id="message" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">Your email is being verified...</h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
                  <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;">
                    <tr>
                      <td class="content-cell" align="center"
                        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                        <p
                          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; color: #2d3748; font-size: 12px; text-align: center;">
                          © 2022 Eden. All rights reserved.</p>

                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <script>
        window.onload = function(){
          function verifyEmail() {
            let email = window.location.href.split('/').pop()
      
            fetch('http://localhost:3001/api/auth/verify_user_account', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ email })
            }).then(res => res.json()).then((res) => {
                if (res.success) {
                  document.getElementById('message').innerHTML = 'Success! email verification complete'
                } else{
                  document.getElementById('message').innerHTML = res.message
                }
              }
            ).catch((error) => {
              document.getElementById('message').innerHTML = 'Error! Try again'
            })
          }
          verifyEmail()
        }
      </script>
    </body>
    </html>    
    `
  )
}

module.exports = { verification_page }