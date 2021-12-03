const cargoInfoMail = () => {
  ` <table class="w-full h-full font-sans">
            <tr>
                <td align="center" class="bg-gray-100">
                    <table class="w-600 sm:w-full bg-white">
                        <tr>
                            <td class="text-center">
                                <h1 class="font-semibold text-black text-2xl">Paketiniz kargoya verildi</h1>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" class="sm:px-24">
                                <table class="w-3/4 sm:w-full">
                                    <tr>
                                        <td class="bg-white pt-8 pb-40 sm:px-24 text-center">
                                            <img src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/28.1.6.png" alt="PTT Kargo">
                                            <p class="text-lg font-semibold m-0">Kargo Takip Numaraası</p>
                                            <p class="text-gray-700 text-base">@{{page.cargo_number}}</p>
                                            <div class="leading-24 sm:h-32">&zwnj;</div>
                                            <a href="https://gonderitakip.ptt.gov.tr/Track/Verify?q=@{{page.cargo_number}}%2C&as_sfid=AAAAAAXlfB3KswkFeUMculs8B3uHiXsLH_nJptocrK8x5OLM7s9YYMdV5_EdXaYbArYYtyaAYkXGCyE8XGVLZ_vj0CIQHbyzse5VSRLD1cHD3WfDp4jePXt_Gafi4n3cPv093hs%3D&as_fid=db2a8a21b3ed069e2e8924491e11db64261b33b0"
                                                class="inline-block py-20 px-24 text-sm leading-none no-underline text-white font-semibold uppercase rounded bg-blue-500 hover:bg-blue-600">
                                                <!--[if mso]><i style="letter-spacing: 24px; mso-font-width: -100%; mso-text-raise: 26pt;">&nbsp;</i><![endif]-->
                                                <span style="mso-text-raise: 13pt;">Takip Sayfasını Aç &rarr;</span>
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
        </table>
   `;
};
export default cargoInfoMail;
