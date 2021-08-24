/* eslint-disable no-undef */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'echarts'], factory)
  } else if (
    typeof exports === 'object' &&
    typeof exports.nodeName !== 'string'
  ) {
    factory(exports, require('echarts'))
  } else {
    factory({}, root.echarts)
  }
})(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg)
    }
  }
  if (!echarts) {
    log('ECharts is not Loaded')
    return
  }
  if (!echarts.registerMap) {
    log('ECharts Map is not loaded')
    return
  }
  echarts.registerMap(
    '中国七大区',
    {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: { name: '东北' },
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              ['@@ƨĶTLÇyqpÇÛqe{~oyen}s`qiXGù]Ëp½©lÉÁp]Þñ´FĂ^fäîºkàz¼BUvÈ@'],
              [
                '@@kOƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|Ĕĕsv|s}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Þ]I]nPs­lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFIQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GMehccďÏd©ÑW_ÏYƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ýqT^rme\\PpZZbyuybQefµ]UhĿDCmûvaÙNSkCwncćfv~YÇGpä³PClFbbÍzwBGĭZÅi»lY­ċ²SgkÇ£^Sqd¯R©é£¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏÑ·¨ÍOt¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ģÁFıĉĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EżĀdQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|Əlĳ¥ãn·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÃA@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅÎcPqńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCF`÷GÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUuP@vRY¾\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðævxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ò'
              ],
              ['@@otBHny@A'],
              ['@@ª¹ÁbX'],
              ['@@L@@sa'],
              ['@@eÀC@b'],
              ['@@fXwkbrÄ`qg'],
              ['@@^jtWQ'],
              ['@@~ Y]c'],
              ['@@G`ĔN^_¿ZÃM'],
              ['@@iX¶BY'],
              ['@@L_{Epf'],
              ['@@^WqCT\\'],
              ['@@\\[§t|¤_'],
              ['@@Ïxǌ{q_×^Giip']
            ],
            encodeOffsets: [
              [[127123, 51780]],
              [[126157, 47367]],
              [[133723, 43502]],
              [[133723, 43502]],
              [[123686, 41445]],
              [[126117, 39963]],
              [[125322, 40140]],
              [[126686, 40700]],
              [[126041, 40374]],
              [[125584, 40168]],
              [[125453, 40165]],
              [[125280, 40291]],
              [[125774, 39997]],
              [[125976, 40496]],
              [[125509, 40217]]
            ]
          }
        },
        {
          type: 'Feature',
          properties: { name: '西南' },
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                '@@ƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMûƱ½~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƅġ^ÖÛbÙŽŏml½SêqDu[RãË»ÿw`»y¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg`d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVCgG^Ic´ecGĹÞ½sëĬhxW}KÓe­XsbkF¦LØgTkïƵNï¶}Gyw\\oñ¡nmĈzj@aµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxŪÒ¢@£ÀEîôruńb[§nWuMÆLl¿]x}ĳ­½hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǕĦÅk°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ë}ǝeďºȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZï`[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞk­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥cc¡ÙaSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó´ÇĊµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eǞJmHāæ·HĽîôNÔ~^¤Ɗu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞŒQìÛÐ@ĞǎRS¤Á§di´ezÝúØã]HqkIþËQÇ¦ÃsÇ¤[E¬ÉŪÍxXƒ·ÖƁİlƞ¹ª¹|XÊwnÆƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§áCNęÎ[ĀÕĪgÖÉªXøx¬½Ů¦¦[NÎLÜUÖ´òrÙŠxR^JkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmD'
              ],
              ['@@@A@@@B'],
              ['@@FE'],
              ['@@ifjN@s'],
              ['@@G\\lY£in'],
              ['@@SÎq|mc¯tÏV']
            ],
            encodeOffsets: [
              [[111114, 32975]],
              [[111395, 30369]],
              [[111395, 30369]],
              [[111725, 31320]],
              [[112158, 27383]],
              [[112115, 27403]]
            ]
          }
        },
        {
          type: 'Feature',
          properties: { name: '西北' },
          geometry: {
            type: 'Polygon',
            coordinates: [
              '@@ïjcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹Aëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qĉ¶³ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbČªǷ¼ĩÞáB¹ÆÑUwŕĽw[mG½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³àjĨoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãØQØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpPAĪX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjÕKëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčSjp¢ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYǠȰÌTÎ¨ÂW|fcă§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷY¹W@µ÷Kãï³ÛIcñ·VȋÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ċcEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOÿEËßŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ßå¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙgBƕŀrÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|§hoĕ@E±iYd¥OĻ¹S|}F@¾oAO²{t`'
            ],
            encodeOffsets: [[108044, 33701]]
          }
        },
        {
          type: 'Feature',
          properties: { name: '华东' },
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                '@@iEEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏFlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbtHĔ~BmlRV_ħTLnñH±DL¼Lªl§Ťa¸ĚlK²\\RòvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóZ ň¶vHrľ\\ÊJuxAT|dmÀO[ÃÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálwKhïgA¢ųÆ©Þ¤OÈmv¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛWp[Ľč{fzƤîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞEzVL®öØBkŖÝĐĖ¹ŧ̄±ÀbÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµ¾ZVXS¨Mf~C¿`à_RÇzwƌfQnny´INoƬèôº|sTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ïWuøCǷë¡ąuhÛ¡^KxC`C\\b½vyi¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£Č×GDyÃ¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gfåqm¿QûùŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yxcitğ®jű¢KOķCoy`å®VTa­_Ā]ŐÝɞï²ʯÊ^]afYǸÃĆēĪȣJđbŝÕÕEȣÚƥêImXJƬįǜûȬɋŭ×^sYɍDŋŽąñCyƳí¾×ŸīàLłčŴǝĂíÀBŖÕªÁŖHŗŉåqûõi¨hÜ·ñt»¹ýv_[«¸mYL¯QªmĉÅdMggNL¡v@`CVcº«ę¬­K­´B«Âącoċ\\xKd¡gěŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfåÂŧįƋǝÊĕġć£g³ne­ą»@Ë»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³¹¶[muGCÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮck\\_k¡¹Eh~c®wBkUplÀ¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧSW¥Qûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġftçUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[×zkKN¶Õ»lčÓ{XSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyáV¼Ã~­`gsÙfIƋlę¹e|~udjuTlXµf`¿Jd[\\L²ĢĨƐgļ¼ÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢûXD®QgÄWiØPÞìºr¤ǆNĠ¢lĄtZoCƞÔºCxrpĠV®Ê{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwȈĐ'
              ],
              [
                '@@SHK@MEO@¥º¢­KtO^KVil|[^KbPbJ^KhUjevcG`BVLZBPCJIFIJEPUdENO¢GlMZ]\\fXTlGfqFIKGYMQY@IPDrER_NQOMSUEUREZFXHPXL\\BXHHVIJR@N~@ERa\\UVF\\TLTFLRG\\IVHVJZRTCPDPZLLTF[PL^^BZJJCEXQKMDS@@XTh\\Bj@[_zNZ@NWJDLNPFR`fCA~ddA¶FTbvJR~JVpzHTFJl^FLFJNrHVxpPTTx`vn´T`XVTLPHLJFVHRh^JVDHTTR FDFXZTPlV²VZf¨¨xzN\\HpPfnNnLRtNNPJRJR`^dXlJxGGfVZ\\ZPjFL\\NBHJ^jRTFLALCLGPJVNL@BLPFZFTPVTNTFAJFTRjPX¤vzxlÐjbT\\VdRVÜZNdNpdNFRDX@\\GNSJQLKZJ[hkjWNFRNLPFFFPdXjtjbRIdW¡\\uHDVFXBPC@EGIGK@OHGRKLEFGLK^IQŎ{XMKYCUFcT}T[PEvF\\AbG\\MPQ]ikaÑßUaQoKuCuBsZ­A[K[ByZkt[|I@KYBWASEMITcJmEgmWCQFSLSFSSOoYwwAWDoGSIOGUCmCKGGCIHKBAFEFIFIBGKOkiq{cYIMDOEIscSQUiUyI_@aNcLOJGHI@UGY]gEYAmY³o·ŝcȉcûQcuUcOkI@GeOOcWQOGOKie{UQi©IS«Y[ASDkASGWQWcke_»UIOSgScWiOc¹·IgK³B©FƳKuSiYQ_[B{JAicpsf}Z{NCoQQYF[XAPJrkAR@NBX@FXRZDTÙƶMTiraOTnWNIBGFG\\CHaVbcVe^OJCB'
              ],
              ['@@BCB@@CLMCC@CSKCAKIWQEVJTVZP@FD'],
              ['@@CIQNM^DJD@HGDMROAE'],
              ['@@Uq@B^ BAD@KcAI'],
              ['@@A@\\FB@M_y'],
              ['@@AQDDAEw'],
              ['@@B@PAFKFCEO]@IFCDINHATJ@BB@'],
              ['@@OIATRI'],
              ['@@MICHRVHRHJFC@GKMIU'],
              ['@@EG@NPZHDCMMU'],
              ['@@@^DA@SCG'],
              ['@@CKAB@ACPHCB@'],
              ['@@CIGLADLC@AB@'],
              ['@@YK^h¬¤¢RD§a_WY[YWOaY'],
              ['@@EIIHFJJG'],
              ['@@iMyVsb]\\HR@TGPMPÚ@@MCGGOAUHQdYPOCS'],
              ['@@@GEBM@GBADUHUbI^DFDJCDME[EKCKDK'],
              ['@@MEIJKbHH\\JVEBMAKIGKO'],
              ['@@KUQDORARJHXCNU'],
              ['@@A@A@@BGHDBADN@BBDADCACDEG@@AG@'],
              ['@@A@@FBC@A'],
              ['@@BAR@CGD@GKEKCJEJBLB@@B'],
              ['@@@EB@@CCBC@@BB@DF'],
              ['@@MEHNFG'],
              ['@@DA@CA@A@ADBB'],
              ['@@AAABADD@BC'],
              ['@@ALFC@GC@'],
              ['@@EAE@WKABBJHLFDLBLGAG'],
              ['@@BQDIFCFEEIGG@GDEKCWBKDJVA^ECOCCPPdLDV[D@DC'],
              ['@@FABBJCACBGCEOCCDEDHPB@BB'],
              ['@@SKCAAAC@KCQGABEBCLBBDBNABBHBDBRHRCB@'],
              [
                '@@EI`HXARBLRd{J]CUMPSLUD_OUCICEKG[EGcSeEeNebJRVU^EbH\\TSHMHKLKNCE@AAAGCA^B\\N@PCzbdJG]'
              ],
              ['@@[@DPJHNDTBPFFN@bZXV`YQIMYU{@ODMAIWCO@KAICIG'],
              ['@@QCGJEZOTa^l^XKZSJUQOFYIO'],
              ['@@AGADGRBDCFNJHPDFDC@CTICKOIOO'],
              ['@@gIUHfJJPDR@NINKAUIOK@IGCGIE'],
              [
                '@@BCnqOC]CCGaí\\o`Q@SFGPBDRTFJ@N@RE^M^ANLF|\\iJCrDH~RhzJNIDB\\[JI'
              ],
              ['@@UIKHFVRJNABKEO'],
              ['@@@OOMMEQGTfRABFHB'],
              ['@@\\HLCH@AADCMEQSQ\\'],
              ['@@AFK@@V@@ALCSMMMMEcYALCASLEPDTHNB@'],
              ['@@LFdWMGAGAGDGAEIHELsBFGDCJD^DLHDTFFFPJH@'],
              ['@@GAC@CBEAEE@@D@jSwUadLBA@HLCJHDPNVKDGHG'],
              ['@@DFDDFBB@FEDCBCAEIAGBEFAB'],
              ['@@AJFJJHTFJAFAJ@NKAEICI@M@IEMCKAAD'],
              ['@@HFB@@ADGDAAC@AGA@DEHA@@B'],
              ['@@DBHBHAHE@ACAC@KDI@BD'],
              ['@@F@BAG@@B'],
              ['@@D@B@BD@BDCGCC@@B'],
              ['@@B@BB@A@AA@AB'],
              ['@@Xjd]{K'],
              ['@@itbFHy'],
              ['@@TGy'],
              ['@@K¬U'],
              ['@@LnXhc'],
              ['@@ppVu]Or'],
              ['@@cdzAUa'],
              ['@@udRhnCI'],
              ['@@oIpR'],
              ['@@U[F\\P@'],
              ['@@PRZWiF'],
              ['@@zht´]'],
              ['@@aj^~ĆG©O'],
              ['@@ed¨C}}i'],
              ['@@@vPGsQ'],
              ['@@NVucW'],
              ['@@qptBAq'],
              ['@@eXª~'],
              ['@@AjvFso'],
              ['@@wJIx«¼AoNe{M­'],
              ['@@K±¡ÓČäeZ'],
              ['@@E^dQ]K'],
              ['@@jX^j'],
              ['@@sfbU'],
              ['@@qP\\xz[ck'],
              ['@@R¢FX}°[s_'],
              ['@@Cb\\}'],
              ['@@e|v\\la{u'],
              ['@@QxÂF¯}'],
              ['@@¹nvÞs¯o'],
              ['@@rSkUEj'],
              ['@@bi­ZP'],
              ['@@p[}INf'],
              ['@@¹dnb'],
              ['@@rSBnR'],
              ['@@FjâL~wyoo~sµL\\'],
              ['@@¬e¹aN'],
              ['@@\\nÔ¡q]L³ë\\ÿ®QÖ'],
              ['@@ÊA­©[¬'],
              ['@@Kxv­'],
              ['@@@hlIk]'],
              ['@@pW{o||j'],
              ['@@MdrWFVtH¢X£ÏylD¼Nj_C'],
              ['@@hlÜ[LykAvyfw^E¤'],
              ['@@fp¤MusR'],
              ['@@®_ma~LÁ¬Z'],
              ['@@iMxZ'],
              ['@@Z~dOSo|A¿qZv'],
              ['@@|TY{'],
              ['@@XWkCT\\'],
              ['@@ºwZRkĕWO¢'],
              ['@@X®±GrÆª\\ÔáXq{'],
              ['@@ůTG°ĄLHm°UC'],
              ['@@o\\VzRZ}y'],
              ['@@@°¡mÛGĕ¨§Ianá[ýƤjfæØLäGr'],
              ['@@ɧư¬EpƸÁxc'],
              ['@@MA'],
              ['@@QpİE§ÉC¾']
            ],
            encodeOffsets: [
              [[118944, 30539]],
              [[123302, 23023]],
              [[123261, 22893]],
              [[122927, 23603]],
              [[122929, 23701]],
              [[122943, 23747]],
              [[122967, 23828]],
              [[124869, 25450]],
              [[125010, 26246]],
              [[122989, 23871]],
              [[122997, 23916]],
              [[123016, 23949]],
              [[123022, 23983]],
              [[123017, 24005]],
              [[122901, 24001]],
              [[124525, 22481]],
              [[124506, 22543]],
              [[124413, 23182]],
              [[122292, 23752]],
              [[122287, 23795]],
              [[122477, 23806]],
              [[122482, 23815]],
              [[122532, 23823]],
              [[122524, 23825]],
              [[122373, 23830]],
              [[122192, 23880]],
              [[122179, 23883]],
              [[122192, 23880]],
              [[122401, 23929]],
              [[122368, 23953]],
              [[122176, 23973]],
              [[122404, 24062]],
              [[122480, 24162]],
              [[122324, 24128]],
              [[122456, 24192]],
              [[122466, 24301]],
              [[121078, 24999]],
              [[121293, 25094]],
              [[122342, 25581]],
              [[122870, 26593]],
              [[122807, 26601]],
              [[122799, 26798]],
              [[122878, 26863]],
              [[123400, 27009]],
              [[126644, 26546]],
              [[126422, 26354]],
              [[126503, 26350]],
              [[126509, 26342]],
              [[126469, 26354]],
              [[126505, 26399]],
              [[126532, 26374]],
              [[123806, 39303]],
              [[123821, 39266]],
              [[123702, 39203]],
              [[123649, 39066]],
              [[123894, 37288]],
              [[123043, 36624]],
              [[123344, 38676]],
              [[123522, 38857]],
              [[123628, 38858]],
              [[122010, 38175]],
              [[122010, 38175]],
              [[123250, 27563]],
              [[122541, 27268]],
              [[123020, 27189]],
              [[122916, 27125]],
              [[122568, 25912]],
              [[122778, 26197]],
              [[122450, 26243]],
              [[122578, 25962]],
              [[122339, 25802]],
              [[121042, 25093]],
              [[125592, 31553]],
              [[125785, 31436]],
              [[125729, 31431]],
              [[125513, 31380]],
              [[125223, 30438]],
              [[125115, 30114]],
              [[124815, 29155]],
              [[124095, 28635]],
              [[124005, 28609]],
              [[125000, 30713]],
              [[125111, 30698]],
              [[125078, 30682]],
              [[124014, 28103]],
              [[125008, 31331]],
              [[125254, 30976]],
              [[125199, 30997]],
              [[125095, 31058]],
              [[125083, 30915]],
              [[124885, 31015]],
              [[125218, 30798]],
              [[124867, 30838]],
              [[124755, 30788]],
              [[125267, 30657]],
              [[125218, 30578]],
              [[125200, 30562]],
              [[124968, 30474]],
              [[124955, 29879]],
              [[124762, 29462]],
              [[123990, 28459]],
              [[125366, 31477]],
              [[125115, 30363]],
              [[125369, 31139]],
              [[125329, 30690]],
              [[125192, 30787]],
              [[124702, 32062]],
              [[124808, 31991]],
              [[124726, 32110]]
            ]
          }
        },
        {
          type: 'Feature',
          properties: { name: '华中' },
          geometry: {
            type: 'Polygon',
            coordinates: [
              '@@Ñ¾Q{°fLÔ~wXgītêÝ¾ĺHd³fJd]HDhoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤¾«}{ra®p³gR^TdÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÀ«ìUMhTº¨¸ǡîSÔDruÂÇZÖEvPZW~ØÐtĄE¢¦Ðy¸bô´oŬ¬²Ês~]®tªapŎJ¨Öº_Ŕ`Ŗ^Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lGlRjsp¢ED}Fio~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼Pk|mýLùµP³swIÓxcŢĞð´E®ÚPtĴXØxÂ¶@«ŕŕQGYfa[şußǩđš_X³ĳÕčC]kbc¥CS¯ëÍB©÷³­Si_}mYTt³xlàcČzÀD}ÂOQ³ÐTĨ¯ƗòËŖ[hłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`Ƴĕg}V¡om½faY®@gÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§A@D@pēXhÃRC­üWGġuTé§ŎÑ©ò³I±³}_EÃħg®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþ¨[]f]Ņ©C}ÁN»hĻħƏĩ©KA·³CQ±Á«³BUƑ¹AtćOwD]JiØSm¯b£ylXHËÑ±H«C^õľAÅ§¤É¥ïyuǙuA¢^{ÌC´­¦ŷJ£^[ª¿ĕ~ƇN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąMąıuZmZcÒ ĲĪ²SÊǄŶ¨ƚCÖŎªQØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕLjÅÑĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_QqZffmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐbH'
            ],
            encodeOffsets: [[111865, 29816]]
          }
        },
        {
          type: 'Feature',
          properties: { name: '华北' },
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                '@@ó{YıëNĿk©ïËZŏR§òoY×ÓgcRıÒ¾ùƀ^juųœK­UFyƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qáµ§g¤o^á¾ZE¤i`ĳ{nOl»WÝĔįhgF[¿¡ßkOüš_ūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{Ãmï@F]ď«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ·Wµ|¡¥ăFÏs×¥ŅxÊdÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGmLMOsKCGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯YȵƓñǙµïċĻ|Düȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmǐnǔĎȆÞǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂc|ÀtƐK f{ĘFĒƌXƲąo½Ę\\¥o}Ûu£ç­kX{uĩ«āíÓUŅßŢqŤ¥lyň[oi{¦LńðFȪȖĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ġu¦öČ^â£ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\̀ʉÌÛMĀ[bÓEn}¶Vcês¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARë£_sgÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉ{t uĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYLq§IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃOrÍdÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUi·[DOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ȭµu¯b{ÍDěïÿȧuT£ġěŗƃĝQ¨fVƋƅn­a@³@ďyÃ½IĹÊKŭfċŰóxV@H',
                '@@Ç@Vu»Aylßí¹ĵêÝlISò³C¹Ìâ²i¶Ìoú^H²CxÒm~zf}pf|ÜroÈzrKÈĵSƧ'
              ],
              ['@@J@^UgV'],
              ['@@©ME°y'],
              ['@@MdV_GC'],
              ['@@FO¿mº~']
            ],
            encodeOffsets: [
              [
                [120899, 40177],
                [127123, 51780]
              ],
              [[126317, 48099]],
              [[126317, 48099]],
              [[121612, 39979]],
              [[121612, 39979]]
            ]
          }
        },
        {
          type: 'Feature',
          properties: { name: '华南' },
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                '@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐŘÎ°H¨Ƣb²_Ġ '
              ],
              ['@@H TQ§A'],
              [
                '@@ē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡y¦CezYwa[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ¯TbÜÈk¡ĠvàhÂƄ¢Jî¶²ĨÊªLƊDÎĹĐCǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVlo¤ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³ºDÎńĀìCĜº¦Ċ~nS|gźvZkCÆj°zVÈÁƔ]LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖopa´Ĝ°RÖpMƂªFbwEÀ©\\¤]ŸI®¥D³|Ë]CöAŤ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºV¸@¾ªR²ĨN]´_eavSivc}p}Đ¼ƌkJÚe th_¸ ºx±ò_xNË²@ă¡ßH©Ùñ}wkNÕ¹ÇO½¿£ĕ]ly_WìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƞV}³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAx»HO£|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEá²\\ķÍ}jYàÙÆſ¿ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHn¿LßÇţʄ¡XgWÀǇğ·¿ÃOj YÇ÷Qěiwđógĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGO|KPȏŹãŝIŕŭŕ@Óoo¿ē±ß}ŭĲWÈCő`Cb~^cA¦MâǙIğŉ©IĳE×Á³AówXJþ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵl'
              ],
              ['@@QdAua'],
              ['@@lxDLo'],
              ['@@sbhNLo'],
              ['@@WltO[['],
              ['@@Kr]S'],
              ['@@eI]y'],
              ['@@I|Mym'],
              ['@@Û³LS¼Y'],
              ['@@nvºBëui©`¾'],
              ['@@zdÛJw®'],
              ['@@a yAª¸ËJIxØ@ĀHAmÃV¡ofuo'],
              ['@@sŗÃÔėAƁZÄ ~°ČPäh'],
              ['@@¶ÝÌvmĞh­ıQ'],
              ['@@HdSjĒ¢D}waru«ZqadYM'],
              ['@@el\\LqqU'],
              ['@@~rMo\\'],
              ['@@øPªoj÷ÍÝħXČx°Q¨ıXNv'],
              ['@@gÇƳo[~tly'],
              ['@@EÆC¿'],
              ['@@rMUwAS®e']
            ],
            encodeOffsets: [
              [[112750, 20508]],
              [[111707, 21520]],
              [[112421, 21972]],
              [[117381, 22988]],
              [[116552, 22934]],
              [[116790, 22617]],
              [[116444, 22536]],
              [[116931, 22515]],
              [[116496, 22490]],
              [[116453, 22449]],
              [[113301, 21439]],
              [[118726, 21604]],
              [[118709, 21486]],
              [[115482, 22082]],
              [[113171, 21585]],
              [[113199, 21590]],
              [[115232, 22102]],
              [[115739, 22373]],
              [[115134, 22184]],
              [[119573, 21271]],
              [[119957, 24020]],
              [[115859, 22356]],
              [[116882, 22747]]
            ]
          }
        },
        {
          id: '460300',
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                '@@^XRFbFjRZBFKAIICS@MEKGGMKG[BKBCEDYHEPBRDVH\\RrPPLHL@LGTONSHQBYAWEeU[IIAQGUECCAIBIPKLD'
              ],
              ['@@QGBGDGNKNBFLAHEFEDGD'],
              ['@@FBJDDHDNCJQ^ad]RWFCACCAG@GDEJEHIHITMHITgFELC'],
              ['@@TKVCP@NNHXEPd[BMUBWl]'],
              ['@@BILAFBAHIDGA'],
              ['@@BCD@BBADA@CA'],
              ['@@\\`XRVJZFn^PZCLQLWK{YIMGGOBUDKPGBB'],
              ['@@RGTAZPJZEZMPYJQMMaDc'],
              ['@@PE^APH@XG\\WLQGM]BY'],
              ['@@FINGHGPGNATDtHfBLDLJPHLPBNGPGH_LWJMEQAMASEMAKAiYGIGS'],
              ['@@MCaOMO@QHEdEV@nP\\RZJ`H°EPHDTGZOLK@[AUEeEwGoIgM'],
              ['@@þT\\HPHNJ\\`DRETERC@QFQBMeK©UKAOCSMKSCMBWFGzG'],
              ['@@ObSDUQCSJ_TeTBLJBtAF'],
              ['@@@JeFSYLihAFb@T'],
              ['@@j`HXDXQPUC[OaWMM@SJQXCVBFB'],
              ['@@EBaOQaZSb@PbQb'],
              ['@@GCCEAe@CHCPADDTVBFAF[REB'],
              ['@@CFEBIG@AJAJD'],
              ['@@AFGBIEBCJAHD'],
              ['@@cBc_FkdahFLpUv'],
              ['@@iLaQDk^ShB^`[d'],
              ['@@EDG@@ILCBJ'],
              ['@@SHcFKMFYXUVGVLH\\MP'],
              ['@@UQFUlkTLFJE^]XQH'],
              ['@@EiXMPDBpGHQHECCG'],
              ['@@H_JKRIVD`T@bwPUAKQ'],
              ['@@HURBPDGXI@GBOI'],
              ['@@EI@IHCLCHNILKB'],
              ['@@AIJUVILBFDDJCNINMJKAKI'],
              ['@@EUHEJEJDJJDHILMFKC@A'],
              ['@@iH_[FgpM`bKh'],
              ['@@AMFATHHLAHMBIEEG'],
              ['@@GebOlEnDRdUhcPiEa]'],
              ['@@AaBSR_jRNpQbwM'],
              ['@@]BQCOBECGCICOIEIA[jm^EfBRJVJJTALmz'],
              ['@@ICGGAMPCNDVJPLFLAHWB[Q'],
              ['@@eL[BWMKMJUBQFKpARLRx'],
              ['@@ID[XQBUYMI@QNMPWPKR@NFHNGZJDBFDNAD'],
              ['@@IAOOAK@[GOFUVEr@HJDLBP@XSfCB_@'],
              ['@@EAe_O_GSAM@E\\SF@rHLLFLBARCD[F'],
              ['@@GAMGUQGS@SDMHCx@FBVPDN@LCJQVOHIB'],
              ['@@_QGefQ\\TRfkP'],
              ['@@BODGHA~@HBFDJVBL@JQ^QDMBMCOEQMCG@['],
              ['@@DMFGLIJENCJ@VJNP@LC`AHMLSFG@YMMUCQ'],
              ['@@DERGbDJFHJBNALERQLE@EBOEQMACAg'],
              ['@@BaFWJKXE^DJJFZ@hANOdGDKA[QSWAM'],
              ['@@BEJA^CFBBDDx@VCB[CIEGUCi'],
              ['@@BENMJCT@\\LHJBLE^EDmACCECOa'],
              ['@@DWHUHKZUHANFTX@lGtKPQPM@QCEGK'],
              ['@@pP©FGFBfdHTGtm®KHMFUBSS@I'],
              ['@@TcfCdLxdL^@jaJ{CkOU[Ai'],
              ['@@FcLcFEjBJDbbFXENSTqBcMCG'],
              ['@@DFIlML@^BLANKFoQGK'],
              ['@@HCxAJD`|AdENEF]FQA]MGIE'],
              ['@@DUJKNGRFPNFTCZIPY@KGKOCO'],
              ['@@DsFMJSXQhUZC\\APHDRAXCTQXSbU^QFqAKCIKAM'],
              ['@@@iBAPAHBf\\DNBVAFADODE@[OMMAC'],
              ['@@@IBGJINGR@VlNpXJPBTQLgDMWO_ImQEEAK'],
              ['@@DMTURObCXBnLBPOPOJe@WHQHWCKK'],
              ['@@BQ\\iLCVEJ@FDZlDPCVK`KFUDU@G@[gAQ'],
              ['@@XqHEbKR@nRFHFfA`EFwHqQWMCI'],
              [
                '@@BOrRK iRAÔBĊpŐ´àjHNBZXÐ\\l~xÜ \\dBX]°ORkXFKsUūçGG«ãGGaÛWOwwIEm[WÕe]OO[CU'
              ],
              ['@@FM@IC[FGTU°q~QZALFCJEJKFÛ`uXeBKCKGII'],
              ['@@@iBEROFA\\HJJPjAJcVE@[KEEAG'],
              ['@@BIXsFAP@lDHDFFPpMzAHCBsBgICA@EEq'],
              ['@@@{FIXGPDvX¸®èĘ²lJ¼R^@I¤QZEzGXRCTWVURkR±^NF·@I{WÑÑÍāCS'],
              ['@@BqVOzGZB¾RNdtLf@ATGRQDWDqQSMÏ¥KMMUGm'],
              ['@@DYTNGVBtLfzz\\lH\\IbIDY@SEû]MCW'],
              ['@@@KJSJEJ@NBLDpnBNCNePEBGAmkCM'],
              ['@@BiFErEHBDF@bAtCJCHGBWBGIQeAM'],
              ['@@HgX@XHb^V`f@NKPcFmGGEgGk'],
              ['@@LMXA^DJHVlEbCHeLaIe[[aIUC'],
              ['@@hNIJD`vf@LMZEFK@iYyAI'],
              ['@@DErapAf@JBFDR`BHQbEDuRG@wCGCYs'],
              ['@@DKPM^M`GnANBlZDDBHEpEHZGBoA_IWYCc'],
              ['@@BQJObC^DJRDTA`ELWA]GYQAS'],
              ['@@HGNE\\@LFHHL\\BLCHGH_DQCKIGKAa'],
              [
                '@@DEHCFBJVRPZXJFHEDEW]mYaMMACDMRJJJZV^vl@¨ALS\\EDSAICGGGsHKDSEsAGEEweiIM[oGSOUEK'
              ],
              ['@@BGPGJF¢@HEDKFI@QEe]II_i@E'],
              ['@@@MN[NOF@FJFLNDLFBPW^IFOAWW'],
              ['@@FKLMPCbRR@LDLLTRVHfX@HITMFcQ³kIMCK'],
              ['@@HuFST_JGNDHFE\\GXO`BHDDL@HGRFGHARNBNOv[jKNSFKAQKEOAQ'],
              ['@@DKFEVAPZPXTXhAF_`I@oIg[IIUcEY'],
              ['@@@EDCVUNSfWb{DQD[DEDCPCH@FDFFL\\BHALEVQ`SZIHc`SL]NQFKCCCAE'],
              ['@@BCHCLDBF@DABCBI@CCCE'],
              ['@@D_JAJBHHBL@NCFKDI@ECAG'],
              ['@@HGJBDDGHME'],
              ['@@@EL@HDBHGBME@A'],
              ['@@@KPCDBBHALADEBKC@G'],
              ['@@@EFCPA\\DLBHDX`DF@JCFg@WEEEWg'],
              ['@@LQDAPARBHDL\\AXGHO@IAIIGIIGCGAE'],
              ['@@DG^_XEJBHDR\\@JCXEHMDM@MCgYAC'],
              ['@@@ELYHCVARBNHVNDT@NKTGBmEKEKGIU'],
              ['@@DOT[ZMREzBZAzHFBDF@FQXiRWVKDIQ@KCMDECGK'],
              ['@@BEb[dINBFBHLDNCJgXUDQ@IAGEAO'],
              ['@@BQnMDMBMCMLoNCTBVRL\\\\JdHjCbHbMRULM@MGKIcQKMOWSSa'],
              ['@@BIFGdiFCLBLJ^p@HStSPEBECq}AG'],
              ['@@DULKh@RDLJDRQbY@ID]IEY'],
              ['@@LSH]JEHCHB`RBNANcdEBC@[ICO'],
              ['@@FUHGPILCHDLNCNAVFENALJDJFFRBDNGROPOBMAQSGEGCECAGWW@K'],
              ['@@FOBAN@JDDD@DATCLABOCKU@A'],
              ['@@BEh_HADBZZDH@H[\\OBK@GESW@C'],
              ['@@@SFEFALDDDDTEJGDGAGGAC'],
              ['@@@E^GFI@EES@OHUFGFAZBDBBHDDPAFBDFJXN\\Dn@FaJaAMEqGEAAE@M'],
              ['@@@CJEDAVFzl`NndGXUHeM[O]UkiAY'],
              ['@@BgFKJADIDCDAFDBDHHF@FAP@FFTdH\\DHDDBZCFWHODQ@[KK[IGEM@G'],
              ['@@BEDEL@H@FBHFBNCBEBM@EAKK'],
              ['@@DQBALEJ@F@HJ@PITABSBCCES'],
              ['@@BAREHDÜÎNJPp@HCBSDYLK@IE±ÏQmIY'],
              ['@@BEPUD@`LBD@FCTQTE@E@U]@C'],
              ['@@LkFCFB\\TftFBnHZMTQHCfFTdJAFSTK@eIOEi_aSgaygAE'],
              ['@@BCDAfPhbhfR`BJK^EFG@UCEEWoswAEKg'],
              ['@@FYHSLM\\ONER@FFDLDtMfGNMFKBUAMEIGEM@Q'],
              ['@@BIHAFBDHAFIDCACE'],
              ['@@@GBADAF@FH@LCFEAGE@E'],
              ['@@@GL]FEPAHBPNLPLRRxDLAHEFGFKBIAIAGGi}CIAI'],
              ['@@BYJIXETAH@FDFFBFAFUV]^EBMAACAY'],
              ['@@BGHELBZLZ^BHGHIDI@OAUOEEACAU'],
              ['@@HMVUNAHDFPAJILSJOBGEAI'],
              ['@@@CZU^AxCVBHBBDHZ@DSRGBs@iBOEMU'],
              ['@@DIBAZEN@VLHHHZEHGBkEUQCG@E'],
              ['@@BKLOLG\\BLDJHHHDPClIR[JKBMEMSEq'],
              ['@@@ILmDCHAtHDFHvALED[LI@]CGGCU'],
              ['@@TMÔY²CJBNLDt]ndDmIQIsAQ'],
              ['@@BiJAlBrjZ|BJBTIfADID]HMCGEwCSAm'],
              ['@@BCJ@VFZLDFJZSFGBGAaWC['],
              ['@@DKDYDMZaJU^eLJBVOfMfgIAKY'],
              ['@@jc`KrJb\\@d_`qBkQ_i'],
              ['@@F{VaJEVBXFFHRd@EJUNQDMAWUOUGM'],
              [
                '@@@B[FSLORKV@¦A|BTDDBBDCD·VDKDKJEdA|@dLdJJPBJChuRYNKJE|W`IHINkDADDDZEVGRmVqTSNSZMVchKHMDQEOGGKM'
              ],
              ['@@rT^J¦L^FRJFH@JEJIDOBÅK[GgKA{'],
              ['@@HE\\AfJlFHAHSLiDWAaEQOO[@Y'],
              ['@@DArG@pCHBNLDFAF[XoD[AQgMAE'],
              ['@@@a^[hBNjSZaB]I'],
              ['@@DeFCHBbLDFDZATAFMBQAIAKSAG'],
              ['@@DCNIFAjD^LBDGNCDYHE@cAKKEI@E'],
              ['@@BEXYjFFBBFBTERGFCBcBWW@E'],
              ['@@BA|SF@NBBDDT@BSNkHEAIEGO@C'],
              ['@@@EDAVCH@XZBF@D]VE@EAKQEY'],
              ['@@BERgDAHANBDBXV@HCD[RG@]ACC'],
              ['@@AK@IPcPYJMJCp@LBFF@HEHKNMJGJMZOTGDKBSCEC'],
              ['@@CICWBIFQDEFCJCLATBjFZPLJHTAXCHEHSDaBYAMAMESK'],
              ['@@CEAIDGJCJ@PDHHDF@DCHCDGBGBIAKG'],
              ['@@X^@HABCDUBQCGCECKOOICCCGAEBCDCNIPCJDRNJN'],
              ['@@@MBELM^ML@FBBDBH@HCVCHIJMBSAGEEG'],
              ['@@GgBIBCHAPAN@DDDbAHENCFEDG@E@ECCG'],
              ['@@@KBiFMFCLALAF@DFBvCNIHGDIBE@ECCCAC'],
              ['@@NEXA`LVNTZ@ZMZYTYFOA]IQWIeJ]RQ'],
              ['@@lMh@jLj^R^LfQd\\sAkGkQOqXwlY'],
              ['@@AWBSLILAPBTHFJBNGTCHMHW@MGCE'],
              ['@@gMKEGEEIBOBGNIZCLp@bDFDFF@FEHQJiTWDQBO@KA'],
              ['@@YUIUDMNEbLRRHRARGFSAKE'],
              ['@@CGBIDMJIXGNBHJBLAHSRIDKBOE'],
              ['@@EM@IFILCRBLBTNHNATGJG@_KSK'],
              ['@@GICGBKN@RDL@PCZIJ@JFJTARCHGFKBI@YEkM'],
              ['@@EY@MFQFMHEdMRBJBDNGbIRWZELGDICGEGI'],
              ['@@BGBAF@DB@JADE@EE'],
              ['@@CEBGDCHARBFDJJLDHHBH@DCFG@]GWQ'],
              ['@@CEDENGJADD@FZRBFAHEDEBGAaW'],
              ['@@BCBB@BABAA'],
              ['@@FGPKFGTILKHEHAHDBFIhILKJODYCICAI'],
              ['@@BKHARHRRLL`vL`CPQRKHYZSJIDGGCCDOf_HGDMBaK[QKOCEICU'],
              ['@@CAIDEACCAGBCPCRALDBD@DGHCBK@'],
              ['@@EC@ABGZOFAF@BP@JCHEDI@OE'],
              ['@@@CBCBCF@LDJJFDDFADCBMAIAKM'],
              ['@@AIDADAFBFDDH@HCDCBIGCE'],
              ['@@CWBCDAL@JDDBBFABGFADHN@BADE@ICCCCE'],
              ['@@BGFCPCFEDAF@DBDF@LCFIFS@IACE'],
              ['@@FCTBZAJEF@FDANEDKBIBANEDGA]UBI'],
              ['@@DECEBCDAB@LJ@JCBEBE@CA@C'],
              ['@@@CCGBCDA\\FBBBFAFEHEBEBE@CCCI'],
              ['@@OI@IJEhENBJFFHXRFXAJIHKPIBUGMGGUOW'],
              ['@@KEACBAPCJ@RL@BEHCBUG'],
              ['@@@GDGDCN@DHAFCHGDE@EE'],
              ['@@fEJEFBJJ@FCDWFWAMCAEDC'],
              ['@@EqNIVDJX@ATFVF~@TJbERUHII@wOcG_B'],
              ['@@AEDGJIPDDD@FEHKFIBCE'],
              ['@@CC@GHGLAHDBFCHEDGBGA'],
              ['@@NSDALHBB@DKNGNCBCACI@I'],
              ['@@CQDIFCH@HBJHJNHP@NCJIJAFGFMAKOAIDKAM'],
              ['@@HMFAD@HDJH@DMRG@GAEE@I'],
              ['@@FKD@DBBDADGHA@CA@C'],
              ['@@CEBCHADBDFHD@DCDEBEAEG'],
              ['@@ACDADAFDDF@HADEBCACC@I'],
              ['@@GYBCF@HBJFNP@B@BIBQBCA'],
              ['@@NWAODAXD\\N\\\\HNAFC@[IOAi\\G@EKB['],
              ['@@AeDMLQJI^G\\ANGLDTJPN\\\\@LAPEPQJYJQAeLQDK@GCOOIO'],
              ['@@GUGIAEJUFYJGTELDLJRNAFGJCJAf@LEPCTAFEBEAKYKKEG'],
              ['@@wCODoLQWvD|J°bp\\FRC`OL¿YIi@QDATPddrFhOLOB'],
              ['@@DEDALDZ@BDCFWFMCCAAE'],
              ['@@KCAE@EJOXWD@THLAD@LBBD@HITKLMFIA[@'],
              ['@@G@@CBEHCBAAGBCFADEBGJADD@FAFQZID'],
              ['@@GK@EZiHINEJ@JDHFNXFJ@JANITGHGBMAgOEC'],
              ['@@IQEYBQDQJKPIT@RFrARGZGHWHs@SCII'],
              ['@@AGB@HHCBCA'],
              ['@@EECIBMHK`WNCPB`L^TNJFLBN@LEFKDO@iEO'],
              ['@@CGBIFCF@D@HNAHCBEBE@CC'],
              ['@@CG@E@CFCJADBBB@L@DGFE@CA'],
              ['@@]YQSSYBCBAH@FB@FB@H@BANFBJ@BEB@LFDZRLDHDDHCDG@G@GA'],
              ['@@@CBCBCJAL@HL@FEDC@K@KG'],
              ['@@AABCVGTATEL@\\F`P@D@BKNiBCAGCMCMCIBK@QI'],
              ['@@HIFCHIFADDDF@HANEHKFGCGE@I'],
              ['@@GBIACIAEECCEBGREH@HFDHBTGF'],
              ['@@BQDGLCJ@JFFFDJEJIFGHGBKACE@I'],
              ['@@CACGDIDEB@HBJH@DCHEDC@E@'],
              ['@@EACGCMDMH@ZFDF@FONEDEB'],
              ['@@KOFODCF@PNFTEFEDC@IG'],
              ['@@BGDENE\\BLHDJDJH¨JGJYFqWAEDC'],
              ['@@AOBUDIHELAL@JDnbVVFN@PKJMDOBsGGEQc'],
              ['@@@EBEFC^@D@BD@HAFMFM@GAEE'],
              [
                '@@ksOYGqDQRKZElFXJr\\TR\\LjFTLBDCPGFIAmGaISOQSSISCMBKFKRHRxlpb\\FTNRPBLCDWEMGEFG@KE'
              ],
              [
                '@@VGNAVBbHjVb`J^ANObMLOJODOA±WqDY@KC@CBEBALAZIXCDVDHFT@VCJGJMBMCSEKSKaIKAmAEAEIBEHA'
              ],
              ['@@@GDED@BDBAFB@DCBAFE@EA'],
              ['@@FMFILKNCNBFJGVIJKDO@IEAA'],
              ['@@FEFAJDBDCJEFGBECACBI'],
              ['@@@EDCJ@FBFDBHEFEBIEEE'],
              ['@@DIHEJALDHDBHADCFUBKACA@E'],
              ['@@JUFGVEP@DDLXDJ@N@DUNUBI@CAMQAO'],
              ['@@JBl^DHENEDE@YWSQAEBEFC'],
              ['@@XRRX@DSFEKU@MCAC@CJUHCDA'],
              [
                '@@໾ཽᄘơ῔৲ᦂಸᕎ@ࢬนڐบૈ@@Ƣ籵@ેܫ',
                '@@ೠ̆ڏนૅ̅Ѷบ',
                '@@Ѷಷɜ@ѵಸɛ@',
                '@@ࢫ୓ɜ@૆୔ѵ@',
                '@@Ѷ୕ɜ@ɛୖѵ@',
                '@@ೢ׌ɜ@ે׋ѵ@',
                '@@ೢრɚ@ૅჟѵ@',
                '@@ڒ୔Ѷ@ڑ୓ѵ@',
                '@@@ಸѶ@@ಷѵ@',
                '@@ڒ৴ɚ@ڏ৳ɛ@',
                '@@ࢬ୔ɚ@ڏ୓ѵ@',
                '@@@놏蛾@@롼ɛ@@뜙苅@@뀮ɛ@'
              ]
            ],
            encodeOffsets: [
              [[114139, 17488]],
              [[114143, 17487]],
              [[115046, 17318]],
              [[114920, 17162]],
              [[115340, 16968]],
              [[114402, 16941]],
              [[115208, 16862]],
              [[115350, 16779]],
              [[115376, 16724]],
              [[114662, 16716]],
              [[115108, 16687]],
              [[115177, 16386]],
              [[117685, 16422]],
              [[117546, 16276]],
              [[114928, 16073]],
              [[117361, 16025]],
              [[117008, 15924]],
              [[120664, 15498]],
              [[120647, 15482]],
              [[120115, 11344]],
              [[120516, 11315]],
              [[117327, 11037]],
              [[120028, 10993]],
              [[118561, 10794]],
              [[118504, 10717]],
              [[118537, 10713]],
              [[116768, 10265]],
              [[117331, 10198]],
              [[117292, 10125]],
              [[117334, 10121]],
              [[117468, 9971]],
              [[115666, 9869]],
              [[115213, 9774]],
              [[116907, 9610]],
              [[118761, 9546]],
              [[114208, 9500]],
              [[119552, 9274]],
              [[116674, 9088]],
              [[117547, 8357]],
              [[117611, 7419]],
              [[116327, 7130]],
              [[115256, 6123]],
              [[114700, 3943]],
              [[114916, 3974]],
              [[114943, 4040]],
              [[115229, 5934]],
              [[115172, 5878]],
              [[115047, 5757]],
              [[115224, 5792]],
              [[115286, 5696]],
              [[115315, 5497]],
              [[115259, 5233]],
              [[115355, 5230]],
              [[115618, 5113]],
              [[115935, 6458]],
              [[116629, 8198]],
              [[116840, 8294]],
              [[117257, 8316]],
              [[117423, 8408]],
              [[117626, 8176]],
              [[117708, 7690]],
              [[116631, 7790]],
              [[117932, 8588]],
              [[118025, 8714]],
              [[118282, 8695]],
              [[112092, 7521]],
              [[112575, 8037]],
              [[113111, 8312]],
              [[113112, 7987]],
              [[113264, 8204]],
              [[114217, 7726]],
              [[114351, 7835]],
              [[114232, 7996]],
              [[114319, 8097]],
              [[114612, 8265]],
              [[115602, 8033]],
              [[115656, 8612]],
              [[115985, 8322]],
              [[115940, 8268]],
              [[116389, 9453]],
              [[116366, 9193]],
              [[116935, 8975]],
              [[117350, 9059]],
              [[116713, 9086]],
              [[115582, 9803]],
              [[115601, 9815]],
              [[115638, 9855]],
              [[115647, 9865]],
              [[115714, 9887]],
              [[114139, 8730]],
              [[114901, 9048]],
              [[114939, 9088]],
              [[115043, 9141]],
              [[115239, 9059]],
              [[115532, 9125]],
              [[118618, 9943]],
              [[118831, 10338]],
              [[118941, 9810]],
              [[119266, 10046]],
              [[119065, 9093]],
              [[116999, 10061]],
              [[116324, 10487]],
              [[117089, 9988]],
              [[117369, 10205]],
              [[116985, 10488]],
              [[117443, 10595]],
              [[117318, 10662]],
              [[117608, 11086]],
              [[117450, 11269]],
              [[117320, 11593]],
              [[117217, 11097]],
              [[117241, 10975]],
              [[117442, 11745]],
              [[117311, 11010]],
              [[116929, 11294]],
              [[117669, 11124]],
              [[119985, 10861]],
              [[120455, 10884]],
              [[118622, 11107]],
              [[119438, 10757]],
              [[119637, 10729]],
              [[120073, 10569]],
              [[120165, 10333]],
              [[120082, 10949]],
              [[120598, 11033]],
              [[120269, 11331]],
              [[119529, 11778]],
              [[118131, 14284]],
              [[119496, 16738]],
              [[120534, 15547]],
              [[117457, 16559]],
              [[117196, 16419]],
              [[116955, 16426]],
              [[116674, 16216]],
              [[116627, 16047]],
              [[116445, 15975]],
              [[116594, 15849]],
              [[116718, 15790]],
              [[116977, 15806]],
              [[117205, 15974]],
              [[116691, 9053]],
              [[116500, 7821]],
              [[117302, 10182]],
              [[114910, 9080]],
              [[118496, 10787]],
              [[118482, 10760]],
              [[119225, 10034]],
              [[115706, 19940]],
              [[116565, 19619]],
              [[116844, 16389]],
              [[114927, 17405]],
              [[115597, 17187]],
              [[115428, 17077]],
              [[113865, 16169]],
              [[114176, 16847]],
              [[114254, 16879]],
              [[114265, 16901]],
              [[114280, 16933]],
              [[114336, 16963]],
              [[114371, 16963]],
              [[114372, 16986]],
              [[114421, 16854]],
              [[114392, 16849]],
              [[117134, 11742]],
              [[117095, 11726]],
              [[117075, 11704]],
              [[117044, 11663]],
              [[117543, 11420]],
              [[117058, 11319]],
              [[117000, 11341]],
              [[117026, 11320]],
              [[116805, 11180]],
              [[117110, 10628]],
              [[117226, 10628]],
              [[117094, 10421]],
              [[116579, 10260]],
              [[117138, 10138]],
              [[117073, 10127]],
              [[116997, 10004]],
              [[117019, 9946]],
              [[117142, 10031]],
              [[117240, 10088]],
              [[118603, 11077]],
              [[118583, 10988]],
              [[118135, 10502]],
              [[118050, 10437]],
              [[118274, 10155]],
              [[118207, 9620]],
              [[119285, 10646]],
              [[119315, 9976]],
              [[119355, 9980]],
              [[119394, 9970]],
              [[119253, 9395]],
              [[114338, 8881]],
              [[114610, 8852]],
              [[114444, 16448]],
              [[117283, 10971]],
              [[117171, 10929]],
              [[117097, 10989]],
              [[115689, 9883]],
              [[116524, 7551]],
              [[117267, 10171]],
              [[117254, 10160]],
              [[117205, 10142]],
              [[117261, 10110]],
              [[117209, 10077]],
              [[119734, 9690]],
              [[117371, 11707]],
              [[117418, 7773]],
              [[114385, 16599]],
              [[114330, 16646]],
              [[114417, 16587]],
              [[115732, 9895]],
              [[115730, 9909]],
              [[117049, 10113]],
              [[116962, 10456]],
              [[116960, 11327]],
              [[117745, 11345]],
              [[115591, 9763]],
              [[115037, 17225]],
              [
                [108544, 23690],
                [112048, 20498],
                [111778, 16420],
                [112856, 12519],
                [110161, 8264],
                [114742, 3653],
                [118515, 6668],
                [121479, 11633],
                [122288, 15711],
                [122557, 18902],
                [124174, 21385],
                [108544, 23690]
              ]
            ]
          },
          properties: {
            cp: [112.34882, 16.831039],
            name: '南海诸岛',
            childNum: 220
          }
        }
      ],
      UTF8Encoding: true
    },
    { 南海诸岛: { left: 126, top: 20, width: 10 }}
  )
})
