const year =  new Date().getFullYear()

const verify_account_mail = (newUser) => {
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
  <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
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
                    <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;"/>
                  
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
                      <h1
                        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">
                        Hello, you're a click away</h1>

                      <p>Hit the button to verify your email address 💪</p>

                      <div>
                        <button type="button" style="background-color: #056424; border-radius: 0.525rem; padding-left: 20px; padding-right: 20px; cursor: pointer; height: 3rem;"><a style='color: white; font-family: sans-serif; text-decoration: none;' href="http://localhost:3001/account/verification/${newUser.email}">Verify email</a></button>
                      </div>

                      <p style="font-size: 13px;">
                        <i>Eden is an online shopping destination. <br> We pride ourselves in having everything you could possibly need for your fashion lifestyle at the best prices than anywhere else.</i>
                      </p>
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
                        © ${year} Eden. All rights reserved.</p>

                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
    `
  )
}

const account_verified_mail = (savedUser) => {
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
                      <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;" />

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
                        <h1
                          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">
                          Hello ${savedUser.firstName}</h1>

                        <p>Your email address is confirmed! Sign into your account to make orders.</p>

                        <div>
                          <button id="btn" type="button"
                            style="background-color: #056424; color: white; font-family: sans-serif; border-radius: 0.525rem; padding-left: 20px; padding-right: 20px; cursor: pointer; height: 3rem;">
                            <a style="text-decoration: none; color: white;" target="_blank"
                              href="http://localhost:3000/auth/signin">Sign in</a>
                          </button>
                        </div>
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
                          © ${year} Eden. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>

    </html>
    `
  )
}

const paasword_reset_success_mail = (savedUser) => {
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
                      <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;" />

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
                        <h1
                          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">
                          Hello ${savedUser.firstName}</h1>

                        <p>Your password reset was successful. Have a nice day!</p>

                        <div>
                          <button id="btn" type="button"
                            style="background-color: #056424; color: white; font-family: sans-serif; border-radius: 0.525rem; padding-left: 20px; padding-right: 20px; cursor: pointer; height: 3rem;">
                            <a style="text-decoration: none; color: white;" target="_blank"
                              href="http://localhost:3000">Visit site</a>
                          </button>
                        </div>
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
                          © ${year} Eden. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>

    </html>
    `
  )
}

const otp_mail = (savedUser, token) => {
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
    <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
      <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #eff3e7; margin: 0; padding: 0; width: 100%;">
        <tr>
          <td align="center"
            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
              style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
              <tr>
              <tr>
                <td class="header"
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 35px 0; text-align: center;">
                  <a href="http://localhost:3000"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #056424; font-size: 1.5rem; font-weight: bold; text-decoration: none; display: inline-block;">
                    <div style="display: flex; justify-content: center;">
                      <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;"/>
                    
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
                        <h1
                          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">
                          Hello ${savedUser.firstName}</h1>

                          <p>We've recieved a request to reset the password for the Eden account associated with <span style="color: #3d4852">${savedUser.email}</span>. <br> <br> No changes have been made to your account yet. You can complete the process with the following code:</p>
                        <table class="panel" width="100%" cellpadding="0" cellspacing="0" role="presentation"
                          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-left: #2d3748 solid 4px; margin: 21px 0;">
                          <tr>
                            <td class="panel-content"
                              style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; background-color: #edf2f7; color: #718096; padding: 16px;">
                              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
                                <tr>
                                  <td class="panel-item"
                                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 0;">
                                    <p
                                      style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left; color: #718096; margin-bottom: 0; padding-bottom: 0;">
                                      <strong
                                        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><code>${token}</code></strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <p>If you did not make this request, please ignore this email and your password will remain unchanged. We are here to help you at any step of the way.</p>
                        <p>-The Eden team</p>
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
                          © ${year} Eden. All rights reserved.</p>

                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `
  )
}

const order_confirmed = (
    date_placed, 
    order_id, 
    shipping_fee, 
    order_total, 
    paid, 
    reference, 
    payment_provider, 
    payment_method, 
    balance,
    items
  ) => {
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
        .item-title{
          display: grid; 
          grid-template-columns: repeat(4, minmax(0, 1fr)); 
          border-bottom: solid 1px #3d4852;
        }
      </style>
    </head>
    <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
      <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #eff3e7; margin: 0; padding: 0; width: 100%;">
        <tr>
          <td align="center"
            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
              style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
              <tr>
              <tr>
                <td class="header"
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 35px 0; text-align: center;">
                  <a href="http://localhost:3000"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #056424; font-size: 1.5rem; font-weight: bold; text-decoration: none; display: inline-block;">
                    <div style="display: flex; justify-content: center;">
                      <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;"/>
                    
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
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 670px;">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell"
                        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                        <h1
                          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 40px; text-align: center;">
                          ORDER CONFIRMATION</h1>

                          <p style="text-align: center;">We've recieved your order and will contact you as soon as package is shipped. You can find your order summary below.</p>

                        <hr/> 

                        <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                          Order Items</h3>

                        <div>
                          <div class="item-title">
                            <div>
                              <p>Image</p>
                            </div>

                            <div>
                              <p>Name</p>
                            </div>

                            <div>
                              <p>Quantity</p>
                            </div>

                            <div>
                              <p>Total Price</p>
                            </div>
                          </div>

                          <div>
                            ${items}
                          </div>
                        </div>


                        <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                          Order Summary</h3>

                        <p style="text-align: center;">Date Placed: ${date_placed}</p>
                        <p style="text-align: center;">Order ID: ${order_id}</p>

                        <div>
                          <div style="display: flex; justify-content: space-between;">
                            <p>Shipping fee:</p>

                            <p>#${shipping_fee}</p>
                          </div>

                          <div style="display: flex; justify-content: space-between;">
                            <p>Order total (+ shipping):</p>

                            <p>#${order_total}</p>
                          </div>

                          <div style="display: flex; justify-content: space-between;">
                            <p>Paid:</p>

                            <p>${paid}</p>
                          </div>

                          <div style="display: flex; justify-content: space-between;">
                            <p>Reference:</p>

                            <p>${reference}</p>
                          </div>

                          <div style="display: flex; justify-content: space-between;">
                            <p>Payment Provider:</p>

                            <p>${payment_provider}</p>
                          </div>

                          <div style="display: flex; justify-content: space-between;">
                            <p>Payment Method:</p>

                            <p>${payment_method}</p>
                          </div>

                          <div style="display: flex; justify-content: space-between;">
                            <p>Balance (on delivery):</p>

                            <p>#${balance}</p>
                          </div>
                        </div>
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
                          © ${year} Eden. All rights reserved.</p>

                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`
  )
}

const order_for_delivery = (
  date_placed, 
  order_id, 
  shipping_fee, 
  order_total, 
  paid, 
  reference, 
  payment_provider, 
  payment_method, 
  balance,
  items,
  firstName,
  lastName,
  email,
  phone_number,
  shipping_address
) => {
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
    .item-title{
      display: grid; 
      grid-template-columns: repeat(4, minmax(0, 1fr)); 
      border-bottom: solid 1px #3d4852;
    }
  </style>
</head>
<body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
  <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #eff3e7; margin: 0; padding: 0; width: 100%;">
    <tr>
      <td align="center"
        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
        <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
          <tr>
          <tr>
            <td class="header"
              style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 35px 0; text-align: center;">
              <a href="http://localhost:3000"
                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #056424; font-size: 1.5rem; font-weight: bold; text-decoration: none; display: inline-block;">
                <div style="display: flex; justify-content: center;">
                  <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;"/>
                
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
                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 670px;">
                <!-- Body content -->
                <tr>
                  <td class="content-cell"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                    <h1
                      style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 40px; text-align: center;">
                      OUT FOR DELIVERY</h1>

                      <p style="text-align: center;">Hello, your order is out for delivery. Our delivery agent will contact you soon. Find your order summary below</p>

                    <hr/> 

                    <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                      Order Items</h3>

                    <div>
                      <div class="item-title">
                        <div>
                          <p>Image</p>
                        </div>

                        <div>
                          <p>Name</p>
                        </div>

                        <div>
                          <p>Quantity</p>
                        </div>

                        <div>
                          <p>Total Price</p>
                        </div>
                      </div>

                      <div>
                        ${items}
                      </div>
                    </div>


                    <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                      Order Summary</h3>

                    <p style="text-align: center;">Date Placed: ${date_placed}</p>
                    <p style="text-align: center;">Order ID: ${order_id}</p>

                    <div>
                      <div style="display: flex; justify-content: space-between;">
                        <p>Shipping fee:</p>

                        <p>#${shipping_fee}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Order total (+ shipping):</p>

                        <p>#${order_total}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Paid:</p>

                        <p>${paid}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Reference:</p>

                        <p>${reference}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Payment Provider:</p>

                        <p>${payment_provider}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Payment Method:</p>

                        <p>${payment_method}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Balance (on delivery):</p>

                        <p>#${balance}</p>
                      </div>
                    </div>

                    <hr/> 

                    <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                      Shipping Details</h3>

                    <div>
                      <div style="display: flex; justify-content: space-between;">
                        <p>Full Name: </p>

                        <p>${firstName} ${lastName}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Email Address: </p>

                        <p>${email}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Phone Number: </p>

                        <p>${phone_number}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Shipping Address: </p>

                        <p>${shipping_address}</p>
                      </div>
                    </div>
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
                      © ${year} Eden. All rights reserved.</p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
)
}

const order_completed = (
  date_placed, 
  order_id, 
  shipping_fee, 
  order_total, 
  paid, 
  reference, 
  payment_provider, 
  payment_method, 
  balance,
  items,
  firstName,
  lastName,
  email,
  phone_number,
  shipping_address
) => {
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
      .item-title{
        display: grid; 
        grid-template-columns: repeat(4, minmax(0, 1fr)); 
        border-bottom: solid 1px #3d4852;
      }
    </style>
  </head>
  <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
    <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
      style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #eff3e7; margin: 0; padding: 0; width: 100%;">
      <tr>
        <td align="center"
          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
          <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
            <tr>
            <tr>
              <td class="header"
                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 35px 0; text-align: center;">
                <a href="http://localhost:3000"
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #056424; font-size: 1.5rem; font-weight: bold; text-decoration: none; display: inline-block;">
                  <div style="display: flex; justify-content: center;">
                    <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;"/>
                  
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
                  style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 670px;">
                  <!-- Body content -->
                  <tr>
                    <td class="content-cell"
                      style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                      <h1
                        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 40px; text-align: center;">
                        ORDER COMPLETED</h1>

                        <p style="text-align: center;">Thank you for shopping with us, your order has been completed!</p>

                      <hr/> 

                      <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                        Order Items</h3>

                      <div>
                        <div class="item-title">
                          <div>
                            <p>Image</p>
                          </div>

                          <div>
                            <p>Name</p>
                          </div>

                          <div>
                            <p>Quantity</p>
                          </div>

                          <div>
                            <p>Total Price</p>
                          </div>
                        </div>

                        <div>
                          ${items}
                        </div>
                      </div>


                      <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                        Order Summary</h3>

                      <p style="text-align: center;">Date Placed: ${date_placed}</p>
                      <p style="text-align: center;">Order ID: ${order_id}</p>

                      <div>
                        <div style="display: flex; justify-content: space-between;">
                          <p>Shipping fee:</p>

                          <p>#${shipping_fee}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Order total (+ shipping):</p>

                          <p>#${order_total}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Paid:</p>

                          <p>${paid}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Reference:</p>

                          <p>${reference}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Payment Provider:</p>

                          <p>${payment_provider}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Payment Method:</p>

                          <p>${payment_method}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Balance (on delivery):</p>

                          <p>#${balance}</p>
                        </div>
                      </div>

                      <hr/> 

                      <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                        Shipping Details</h3>

                      <div>
                        <div style="display: flex; justify-content: space-between;">
                          <p>Full Name:</p>

                          <p>${firstName} ${lastName}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Email Address</p>

                          <p>${email}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Phone Number:</p>

                          <p>${phone_number}</p>
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                          <p>Shipping Address:</p>

                          <p>${shipping_address}</p>
                        </div>
                      </div>
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
                        © ${year} Eden. All rights reserved.</p>

                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`
)
}

const order_canceled = (
  date_placed, 
  order_id, 
  shipping_fee, 
  order_total, 
  paid, 
  reference, 
  payment_provider, 
  payment_method, 
  balance,
  items
) => {
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
    .item-title{
      display: grid; 
      grid-template-columns: repeat(4, minmax(0, 1fr)); 
      border-bottom: solid 1px #3d4852;
    }
  </style>
  </head>
  <body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #eff3e7; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
  <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #eff3e7; margin: 0; padding: 0; width: 100%;">
    <tr>
      <td align="center"
        style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
        <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
          style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
          <tr>
          <tr>
            <td class="header"
              style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 35px 0; text-align: center;">
              <a href="http://localhost:3000"
                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #056424; font-size: 1.5rem; font-weight: bold; text-decoration: none; display: inline-block;">
                <div style="display: flex; justify-content: center;">
                  <img src="https://www.kindpng.com/picc/m/1-15146_image-result-for-leaf-vector-origins-pinterest-vector.png" style="width: 40px; height: 40px;"/>
                
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
                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 670px;">
                <!-- Body content -->
                <tr>
                  <td class="content-cell"
                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                    <h1
                      style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 40px; text-align: center;">
                      ORDER CANCELED</h1>

                      <p style="text-align: center;">Your order has been canceled on your request. (If you did not cancel this order then please be notified that your order could not be processed at this time. We apologize for the inconveniences) Have a great day!</p>

                    <hr/> 

                    <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                      Order Items</h3>

                    <div>
                      <div class="item-title">
                        <div>
                          <p>Image</p>
                        </div>

                        <div>
                          <p>Name</p>
                        </div>

                        <div>
                          <p>Quantity</p>
                        </div>

                        <div>
                          <p>Total Price</p>
                        </div>
                      </div>

                      <div>
                        ${items}
                      </div>
                    </div>


                    <h3 style="margin-top: 30px; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 15px; font-weight: bold; text-align: center;">
                      Order Summary</h3>

                    <p style="text-align: center;">Date Placed: ${date_placed}</p>
                    <p style="text-align: center;">Order ID: ${order_id}</p>

                    <div>
                      <div style="display: flex; justify-content: space-between;">
                        <p>Shipping fee:</p>

                        <p>#${shipping_fee}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Order total (+ shipping):</p>

                        <p>#${order_total}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Paid:</p>

                        <p>${paid}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Reference:</p>

                        <p>${reference}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Payment Provider:</p>

                        <p>${payment_provider}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Payment Method:</p>

                        <p>${payment_method}</p>
                      </div>

                      <div style="display: flex; justify-content: space-between;">
                        <p>Balance (on delivery):</p>

                        <p>#${balance}</p>
                      </div>
                    </div>
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
                      © ${year} Eden. All rights reserved.</p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  </body>
  </html>`
)
}

module.exports = {
  verify_account_mail,
  account_verified_mail,
  paasword_reset_success_mail,
  otp_mail,
  order_confirmed,
  order_for_delivery,
  order_completed,
  order_canceled
}