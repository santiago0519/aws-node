const express = require("express");
const cors = require("cors");
const User = require("./config");
const bodyparser = require('body-parser');
var nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());


app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/create", async (req, res) => {
 // const data = req.body;
  const data ={
    nombre: req.body.nombres,
    apellido: req.body.apellidos,
    correo: req.body.correo,
    curso: req.body.cursos,
    persona: req.body.personas,
    costo: req.body.costo ,
    descuento: req.body.descuento ,
    valor: req.body.valor
  }

  await User.add({ data });
  res.send({ msg: "User Added" });


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: "soporte.livey@gmail.com", 
      pass: "livey2022" 
    },
});
var mailOptions = {
    from: `${data.nombre}`,
    to: `${data.correo}`,
    subject: `"Inscripcion Curso - Espe"`,
    html: `
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0;">
       <meta name="format-detection" content="telephone=no"/>
    
    
    
      <style>
    /* Reset styles */ 
    body { margin: 0; padding: 0; min-width: 100%; width: 100% !important; height: 100% !important;}
    body, table, td, div, p, a { -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; border-spacing: 0; }
    img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    #outlook a { padding: 0; }
    .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; }
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
    
    /* Rounded corners for advanced mail clients only */ 
    @media all and (min-width: 560px) {
      .container { border-radius: 8px; -webkit-border-radius: 8px; -moz-border-radius: 8px; -khtml-border-radius: 8px;}
    }
    
    /* Set color for auto links (addresses, dates, etc.) */ 
    a, a:hover {
      color: #127DB3;
    }
    .footer a, .footer a:hover {
      color: #999999;
    }
    
       </style>
    
      <!-- MESSAGE SUBJECT -->
      <title>Get this responsive email template</title>
    
    </head>
    
    <!-- BODY -->
    <!-- Set message background color (twice) and text color (twice) -->
    <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
      background-color: #F0F0F0;
      color: #000000;"
      bgcolor="#F0F0F0"
      text="#000000">
    
    <!-- SECTION / BACKGROUND -->
    <!-- Set message background color one again -->
    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background"><tr><td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;"
      bgcolor="#F0F0F0">
    
    <!-- WRAPPER -->
    <!-- Set wrapper width (twice) -->
    <table border="0" cellpadding="0" cellspacing="0" align="center"
      width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
      max-width: 560px;" class="wrapper">
    
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
          padding-top: 20px;
          padding-bottom: 20px;">
    
          <!-- PREHEADER -->
          <!-- Set text color to background color -->
          <div style="display: none; visibility: hidden; overflow: hidden; opacity: 0; font-size: 1px; line-height: 1px; height: 0; max-height: 0; max-width: 0;
          color: #F0F0F0;" class="preheader">
          CURSOS DE PROGRAMACIÓN DE LA ESPE SEDE STO DOMINGO.</div>
    
          <!-- LOGO -->
          <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2. URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content=logo&utm_campaign={{Campaign-Name}} -->
         
    
        </td>
      </tr>
    
    <!-- End of WRAPPER -->
    </table>
    
    <!-- WRAPPER / CONTEINER -->
    <!-- Set conteiner background color -->
    <table border="0" cellpadding="0" cellspacing="0" align="center"
      bgcolor="#FFFFFF"
      width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
      max-width: 560px;" class="container">
    
      <!-- HEADER -->
      <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
          padding-top: 25px;
          color: #000000;
          font-family: sans-serif;" class="header">
            CURSOS DE PROGRAMACIÓN DE LA ESPE SEDE STO DOMINGO
        </td>
      </tr>
      
      <!-- SUBHEADER -->
      <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 18px; font-weight: 300; line-height: 150%;
          padding-top: 5px;
          color: #000000;
          font-family: sans-serif;" class="subheader">
            Confirmación de Registro.
        </td>
      </tr>
    
      <!-- HERO IMAGE -->
      <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 (wrapper x2). Do not set height for flexible images (including "auto"). URL format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Ìmage-Name}}&utm_campaign={{Campaign-Name}} -->
      
    
      <!-- PARAGRAPH -->
      <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
          padding-top: 25px; 
          color: #000000;
          font-family: sans-serif;" class="paragraph">
            “Gracias por inscribirte a nuestro curso de ${data.curso} el cual tiene un el costo
    de $${data.costo}, por ser un  ${data.persona} tiene un descuento de  ${data.descuento}% por lo que
    pagará únicamente el valor de $${data.valor}”
        </td>
      </tr>
    
      <!-- BUTTON -->
      <!-- Set button background color at TD, link/text color at A and TD, font family ("sans-serif" or "Georgia, serif") at TD. For verification codes add "letter-spacing: 5px;". Link format: http://domain.com/?utm_source={{Campaign-Source}}&utm_medium=email&utm_content={{Button-Name}}&utm_campaign={{Campaign-Name}} -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
          padding-top: 25px;
          padding-bottom: 5px;" class="button"><a
          href="" target="_blank" style="text-decoration: underline;">
            <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;"><tr><td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: underline; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
              bgcolor="#E9703E"><a target="_blank" style="text-decoration: underline;
              color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;"
              href="">
                Confirmar Correo
              </a>
          </td></tr></table></a>
        </td>
      </tr>
    
      <!-- LINE -->
      <!-- Set line color -->
      <tr>	
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
          padding-top: 25px;" class="line"><hr
          color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
        </td>
      </tr>
    
      <!-- LIST -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%;" class="list-item"><table align="center" border="0" cellspacing="0" cellpadding="0" style="width: inherit; margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0;">
          
          <!-- LIST ITEM -->
          <tr>
    
            <!-- LIST ITEM IMAGE -->
            <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 -->
            <td align="left" valign="top" style="border-collapse: collapse; border-spacing: 0;
              padding-top: 30px;
              padding-right: 20px;"></td>
    
            <!-- LIST ITEM TEXT -->
            <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
            <td align="left" valign="top" style="font-size: 17px; font-weight: 400; line-height: 160%; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;
              padding-top: 25px;
              color: #000000;
              font-family: sans-serif;" class="paragraph">
                <b style="color: #333333;">Curso de ${data.curso} </b><br/>
                Un curso de preparación con proyectos reales, apoyo integral, y garantía de aprendizaje. Duración de 100h
            </td>
    
          </tr>
    
          <!-- LIST ITEM -->
          
        </table></td>
      </tr>
    
      <!-- LINE -->
      <!-- Set line color -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
          padding-top: 25px;" class="line"><hr
          color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
        </td>
      </tr>
    
      <!-- PARAGRAPH -->
      <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
          padding-top: 20px;
          padding-bottom: 25px;
          color: #000000;
          font-family: sans-serif;" class="paragraph">
            ¿Necesitas Ayuda? <a href="mailto:support@ourteam.com" target="_blank" style="color: #127DB3; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 160%;">soporte.livey@gmail.com</a>
        </td>
      </tr>
    
    <!-- End of WRAPPER -->
    </table>
    
    <!-- WRAPPER -->
    <!-- Set wrapper width (twice) -->
    <table border="0" cellpadding="0" cellspacing="0" align="center"
      width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
      max-width: 560px;" class="wrapper">
    
      <!-- SOCIAL NETWORKS -->
      <!-- Image text color should be opposite to background color. Set your url, image src, alt and title. Alt text should fit the image size. Real image size should be x2 -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
          padding-top: 25px;" class="social-icons"><table
          width="256" border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse: collapse; border-spacing: 0; padding: 0;">
          <tr>
    
          </tr>
          </table>
        </td>
      </tr>
    
      <!-- FOOTER -->
      <!-- Set text color and font family ("sans-serif" or "Georgia, serif"). Duplicate all text styles in links, including line-height -->
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #999999;
          font-family: sans-serif;" class="footer">
    
            Le enviamos esta plantilla de correo electrónico porque queremos hacer del mundo un lugar mejor. Puede cambiar la configuración de su suscripción en cualquier momento. <a href="https://github.com/konsav/email-templates/" target="_blank" style="text-decoration: underline; color: #999999; font-family: sans-serif; font-size: 13px; font-weight: 400; line-height: 150%;">subscription settings</a> anytime.
    
            <!-- ANALYTICS -->
            <!-- https://www.google-analytics.com/collect?v=1&tid={{UA-Tracking-ID}}&cid={{Client-ID}}&t=event&ec=email&ea=open&cs={{Campaign-Source}}&cm=email&cn={{Campaign-Name}} -->
            <img width="1" height="1" border="0" vspace="0" hspace="0" style="margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;"
            src="https://raw.githubusercontent.com/konsav/email-templates/master/images/tracker.png" />
    
        </td>
      </tr>
    
    <!-- End of WRAPPER -->
    </table>
    
    <!-- End of SECTION / BACKGROUND -->
    </td></tr></table>
    
    </body>
    </html>`
}

transporter.sendMail(mailOptions, (error,info)=>{
    if(error){
        res.status(500).send(error.message);
    }else{
        console.log("Email enviado.");
        res.status(200).jsonp(req.body);
    }
});









});


app.listen(4000, () => console.log("Up & RUnning *4000"));
