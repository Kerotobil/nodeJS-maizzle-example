export const confirmMail = (name, url) => {
  return ` <table class="w-full h-full font-sans">
      <tr>
        <td align="center" class=" pb-12">
          <table class="bg-white w-600 sm:w-full">
            <tr>
              <td class="text-center pb-24 sm:pb-12">
                <h1 class="font-semibold text-black text-2xl">Üyeliğinizi Onaylayın</h1>
              </td>
            </tr>
            <tr>
              <td align="center" class="sm:px-24">
                <table class="w-3/4 sm:w-full">
                  <tr>
                    <td class="bg-white p-48 sm:px-24 text-center">
                      <p class="text-lg font-semibold m-0">Merhaba ${name},</p>
                      <p class="text-gray-700 text-base">Hesabınızı doğrulamak için bu bağlantıyı tıklayın:</p>
                      <div class="leading-24 sm:h-32">&zwnj;</div>
                      <a href="${url}"
                        class="inline-block py-20 px-24 text-sm leading-none no-underline text-white font-semibold uppercase rounded bg-blue-500 hover:bg-blue-600">
                        <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%; mso-text-raise: 26pt;">&nbsp;</i><![endif]-->
                        <span style="mso-text-raise: 13pt;">Doğrula &rarr;</span>
                        <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%;">&nbsp;</i><![endif]-->
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="h-2 bg-gray-300"></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
};
export default confirmMail;
