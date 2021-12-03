export const header = () => {
  return `<!DOCTYPE {{{ page.doctype || 'html' }}}>
<html lang="{{ page.language || 'en' }}" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
  <meta charset="{{ page.charset || 'utf-8' }}">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <style>
    td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
  </style>
  <![endif]-->
  <if condition="page.title">
    <title>{{{ page.title }}}</title>
  </if>
  <if condition="page.css">
    <style>{{{ page.css }}}</style>
  </if>
  <block name="head"></block>
</head>

<body class="bg-gray-200">
  
  <if condition="page.preheader">
    <div class="hidden">{{{ page.preheader }}}&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
      &#160;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
      &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
      &#160;&#847; &#847; &#847; &#847; &#847; </div>
  </if>
  <table class="pt-10 mx-auto w-600 sm:w-full " role="article" aria-roledescription="email" aria-label="{{{ page.title || '' }}}"
    lang="{{ page.language || 'en' }}">
    <tr class="w-96 bg-white">
        <td align="center" class=" bg-white mx-auto">
          <img class="w-96" src="https://kozresim.s3.us-west-002.backblazeb2.com/kurumsal+_logo_AFM.png" alt="Logo">
        </td>
    </tr>
    <table >
  <block name="template"></block>
</body>

</html>`;
};
