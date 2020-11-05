const test = {
    '1': [ 'NR*KCOAHIHOKINARC*CIAH*RONKKHIRAC*ON*CNOIKHARRAONH*IKCI*CAONKRHANR*KHCIOOKHCRIN--', 'NR*KCOAHIHOKINARC*CIAH*RONKKHIRAC*ON*CNOIKHARRAONH*IKCI*CAONKRHANR*KHCIOOKHCRIN*A' ]
}

const easyWithNumbers = {
    1: [ '--198476-6---57---8-7-1----96-3-81-5185-2--733-----2-821-----36---1----4-96--251-', '531984762649257381827613459962378145185429673374561298218745936753196824496832517' ], 
    2: [ '6-3--4--142-913-65-1---7----3--7----7----8--2--816---787-3-5-293497--1--2-68--3-4', '683254791427913865915687243132479586764538912598162437871345629349726158256891374' ], 
    3: [ '---4---87-8-7--49-3--92--1---167--4-64-83-275-27549-3---6-5--2-218---7---53--4---', '062415387185763492374928516531672948649831275827549631496157823218396754753284169' ], 
    4: [ '-2-5-3--1-5----349-7-19--56------7--73-2--5-8--5-7413---83-9---3-2--69--197-526-3', '026543871851627349473198256219835764734261598685974132568319427342786915197452683' ], 
    5: [ '32168----64721-58-----3-1-65---7----49---176----9---5--74--8-311--34--7883-19----', '321685497647219583985734126562473819493851762718926354274568931159342678836197245' ], 
    6: [ '--9218---17--968---4--5---6451-6-37------5--99-237-5--6--5-1-------49257-948---13', '069218745175496832248753196451962378736185429982374561627531984813649257594827613' ], 
    7: [ '--6---3----19-376-473---8---6-72-93-34-5---781--38-24--8-2-14--73----1---194-75--', '026178354851943762473652819568724931342519678197386245685231497734895126219467583' ], 
    8: [ '49657---2218-6374-75-----9-5-1-26---6--3-8-5--2-4--6139----43----5--74--3--2---6-', '496571832218963745753842196531726984649318257827495613962154378185637429374289561' ], 
    9: [ '28754---6-5---2849-6--3--7---6-573--1-8---4-7-73---9616--4-------57-3-9-7--92--15', '287549136351672849469831572946157328128396457573284961692415783815763294734928615' ], 
    10: [ '13-865-49-9837--1---4-29--83-95-1-76-7-2-6---2-674---142----1----5-------8-9---24', '132865749598374612764129358349581276871296435256743981427658193915432867683917524' ]
};
const mediumWithNumbers = { 
    1: [ '----35--2-1-7-85--25-----3137-26---5--95-1-63--1-7-----4-81-----96------8----4---', '984135672613728549257946831378269415429581763561473928745812396196357284832694157' ],
    2: [ '-96-----8---3---4----24------1----89---8-37----759------2451---1-5--69--37-98-16-', '496175238218369547753248691531627489649813752827594316962451873185736924374982165' ],
    3: [ '4---5-8-2---6-------34--196----76-8---9--------7--56-3---514----748-9-6-1--3---29', '496751832218693745753482196531276984649138257827945613962514378374829561185367429' ],
    4: [ '-8--7-1-2--4----9-2-9----64---9---27-4-6-791---7-5--8--2---------17-63-----89-2-6', '685479132734162598219538764568913427342687915197254683926345871851726349473891256' ],
    5: [ '-3------9---8----2-27--4---9--45-8--1----69--374--2-6-496-7-2-----36-----5-2---91', '531627489649813752827594316962451873185736924374982165496175238218369547753248691' ],
    6: [ '6-2489--------26----9-1--2-4-58-3-6--2----3-4--39-4--51-----4----65---18-8------3', '672489531831752649549316827415873962928165374763924185157238496396547218284691753' ],
    7: [ '15--9---22-4-5---63-6----45----31-8---------75------1---5-62---7--1--42-92---45-1', '157496832284753196396218745672531984831649257549827613415962378763185429928374561' ],
    8: [ '3-84-5-264-9-----856---83---8--7--13----4--7--5783-------1-7-6---539----1--------', '378415926429763158561928347984672513613549872257831694832157469745396281196284735' ],
    9: [ '685-79--221-5-8-6-7-4--2------3-58--85--2------3-9---6--8---42----6-7---1-------3', '685479132219538764734162598926345871851726349473891256568913427342687915197254683' ],
    10: [ '-8-5-3-7-2-7--4---6138-2-----2469-------8--9---6----------2--15429-----3--1--792-', '984513672257694831613872549832469157745281396196735284378926415429158763561347928' ] 
};
const hardWithNumbers = {
    1: [ '-5---------3-9--62----6-5389----134-------7---3-2--------9-5-8-5----7---1-96----4', '658132479743598162291764538962871345815349726437256891324915687586427913179683254' ],
    2: [ '-9---43--3---8-5-1----1--4-8-1--693---63-5--7----9---5--5--92----416----------4-6', '197254368342687591568913742851726934926345187473891625685479213734162859219538476' ],
    3: [ '-2-5----9---64-------8---3-4--9-2---73-------982---6-517-----2-------4----8-5--61', '627531849813649572594827136451962783736185294982374615175496328369218457248753961' ],
    4: [ '--6-----1-3----8-----5-84---6--1--2---3--7----91---3-------517-15--26-------9-65-', '586479231437162895912538467865913724243687519791254386629345178158726943374891652' ],
    5: [ '-------------9-74-7-3----96---67---4--9---25----54--1--62-1-3--18-76----------5--', '496157832218396745753284196531672984649831257827549613962415378185763429374928561' ],
    6: [ '98----6-2--7-4-----1------956-4----------17----8-6-41---2---1---458----6-----72--', '984135672257946831613728549561473928429581763378269415832694157745812396196357284' ],
    7: [ '49-----------4-3-675--9----9-2-----5---4---6--7---1---5--98-6---49--7----2---35--', '496832157218745396753196284962378415185429763374561928531984672649257831827613549' ],
    8: [ '4-------89-5---3-------21---3--74-8-59---1----6--3----3--6---5-----439---5--9--7-', '427319568915786342683452197132974685598261734764835219349627851871543926256198473' ],
    9: [ '36-9-41---------7---4--3-6-9-5-1-8-7---75---9-------3-7----8-9---354---8---------', '367924185829165374514873962945316827138752649276489531751238496693547218482691753' ],
    10: [ '4--6--3----28--4--3--59-----7------2-2--3--151--9----4---17-9---------28-9------3', '489627351752813469316594287873451692924736815165982734238175946547369128691248573' ],
}
const expertWithNumbers = {
    1: [ '-----4--2-6-2---3--8---35-9-4----1--1--7-5---5-3-------9-3-------4-61-----5---7--', '351984672469257831287613549946832157128745396573196284692378415734561928815429763' ],
    2: [ '8653----------5-21--9----------7-13-4--1-----9----6----9-----5-5--4--26---3-6----', '865321794374985621129647385658274139432159876917836542296718453581493267743562918' ],
    3: [ '-13---------5----45---27--3-5--6----73---5-2-9---------7--9-8-22-----19-----1----', '813649257627531984594827613451962378736185429982374561175496832248753196369218745' ],
    4: [ '--4-5------39----5-6-34-----8-----7-7-2---83--1---2-4-2--4----------1--6---7---8-', '924158763873926415165347928489513672752694831316872549238469157547281396691735284' ],
    5: [ '9623-------5--2-4-43-8-9--------5---3--6---1--8----42------7------12---8------7--', '962354871815762349437819256179245683324678915586931427658497132743126598291583764' ],
    6: [ '-------27-8----5-----831-------9--1------7-9---628----4--7--18-37-4-5-------2----', '613549827984672531257831649745396218832157496196284753429763185378415962561928374' ],
    7: [ '---65------84--91--------83-6-------35------1-197---5---7-----21------------2976-', '931658427678432915245917683762581349354296871819743256497865132126374598583129764' ],
    8: [ '-6----3----2---7--1-7-8-4-----46---3---2----77-4--52------5--89-5-9--6-----------', '568724391342519768197386425219467853685231947734895216473652189851943672926178534' ],
    9: [ '-4-----1-8----9---6-2-3---4---9-----7-3--5--------4561-57---83----2--7---8-------', '549728613831496257672531984415962378763815429928374561257149836196283745384657192' ],
    10: [ '----6--27--------5--4-91-8---8-----4---43-----7--8--3-3----9--172-1------9----2--', '913865427687243915254791683538912764162437598479586132345629871726158349891374256' ],
};

const easy = {
    '1': [ '--*KCOAH-H---NA---C-A-*----KH-R-C*-N*CN-I--ARR-----I-CI*-----RH---*----O-KH--IN*-', 'NR*KCOAHIHOKINARC*CIAH*RONKKHIRAC*ON*CNOIKHARRAONH*IKCI*CAONKRHANR*KHCIOOKHCRIN*A' ],
    '2': [ 'H-R--O--*OI-K*R-HN-*---A----R--A----A----C--I--C*H---ACA-R-N-IKROKA--*--I-HC--R-O', 'HCRINOAK*OIAK*RCHNK*NHCAIOR*RIOAKNCHAHONRCK*INKC*HIORACA*RONHIKROKAIH*NCINHCK*RAO' ],
    '3': [ '---O---CA-C-A--OK-R--KI--*---*HA--O-HO-CR-IAN-IANOK-R---H-N--I-I*C---A---NR--O---', '0HIO*NRCA*CNAHROKIRAOKICN*HNR*HAIKOCHOKCR*IANCIANOKHR*OKH*NACIRI*CRKHANOANRICO*HK' ],
    '4': [ '-I-N-R--*-N----ROK-A-*K--NH------A--AR-I--N-C--N-AO*R---CR-K---R-I--HK--*KA-NIH-R', '0IHNORCA*CN*HIAROKOAR*KCINHI*KCRNAHOAROIH*NKCHCNKAO*RINHCR*KOIAROIACHK*N*KAONIHCR' ],
    '5': [ 'RI*HC----HOAI*-NC-----R-*-HN---A----OK---*AH----K---N--AO--C-R**--RO--ACCR-*K----', 'RI*HCNOKAHOAI*KNCRKCNARO*IHNHIOARC*KOKRCN*AHIA*CKIHRNOIAONHCKR**NKROIHACCRH*KAION' ],
    '6': [ '--KI*C---*A--KHC---O--N---HON*-H-RA------N--KK-IRA-N--H--N-*-------OKINA-KOC---*R', '0HKI*CAON*ANOKHCRIIOCANR*KHON*KHIRACARH*CNOIKKCIRAONH*HIANR*KCOC*RHOKINANKOCIAH*R' ],
    '7': [ '--H---R----*K-RAH-OAR---C---H-AI-KR-RO-N---AC*--RC-IO--C-I-*O--AR----*---*KO-AN--', '0IH*ACRNOCN*KORAHIOARHNIC*KNHCAIOKR*ROIN*KHAC*KARCHIONHCNIR*OKAAROCKN*IHI*KOHANCR' ],
    '8': [ 'OKHNA---II*C-HRAO-AN-----K-N-*-IH---H--R-C-N--I-O--H*RK----OR----N--AO--R--I---H-', 'OKHNA*CRII*CKHRAONANRCOI*KHNR*AIHKCOHOKR*CINACIAOKNH*RKHI*NORAC*CNHRAOIKRAOICKNH*' ],
    '9': [ 'ICANO---H-N---ICOK-H--R--A---H-NAR--*-C---O-A-AR---KH*H--O-------NA-R-K-A--KI--*N', 'ICANOK*RHRN*HAICOKOHKCR*NAIKOH*NARIC*ICRKHONANARICOKH*HKIO*NACRC*NAHRIKOAROKICH*N' ],
    '10': [ '*R-CHN-OK-KCRA--*---O-IK--CR-KN-*-AH-A-I-H---I-HAO---*OI----*----N-------C-K---IO', '*RICHNAOKNKCRAOH*IAHO*IKRNCROKNC*IAHCA*IKHORNINHAORKC*OIAHNC*KRK*NORICHAHCRK*ANIO' ]
}
const medium = {
    '1': [ '----RN--I-*-A-CN--IN-----R*RA-IH---N--KN-*-HR--*-A-----O-C*-----KH------C----O---', 'KCO*RNHAIH*RAICNOKINAKOHCR*RACIHKO*NOIKNC*AHRNH*OARKICAONC*IRKH*KHRNAICOCRIHKO*NA' ],
    '2': [ '-KH-----C---R---O----IO------*----CK---C-RA----ANK------ION*---*-N--HK--RA-KC-*H-', 'OKH*ANIRCI*CRHKNOAANRIOCHK*NR*HIAOCKHOKC*RANICIANKOR*HKHION*CAR*CNARHKIORAOKCI*HN' ],
    '3': [ 'O---N-C-I---H-------RO--*KH----AH-C---K--------A--NH-R---N*O----AOC-K-H-*--R---IK', 'OKHAN*CRII*CHKRAONANROCI*KHNR*IAHKCOHOK*RCINACIAKONH*RKHIN*ORACRAOCIKNH**CNRHAOIK' ],
    '4': [ '-C--A-*-I--O----K-I-K----HO---K---IA-O-H-AK*---A-N--C--I---------*A-HR-----CK-I-H', 'HCNOAK*RIARO*HINKCI*KNRCAHONHCK*ROIAROIHCAK*N*KAINOHCRKIHRONCA*CN*AIHROKOARCK*INH' ],
    '5': [ '-R------K---C----I-IA--O---K--ON-C--*----HK--RAO--I-H-OKH-A-I-----RH-----N-I---K*', 'NR*HIAOCKHOKC*RANICIANKOR*HKHION*CAR*CNARHKIORAOKCI*HNOKH*ANIRCI*CRHKNOAANRIOCHK*' ],
    '6': [ 'H-IOCK--------IH----K-*--I-O-NC-R-H--I----R-O--RK-O--N*-----O----HN---*C-C------R', 'HAIOCKNR*CR*ANIHOKNOKR*HCIAO*NCARKHIKIC*HNRAOAHRKIO*CN*NAIRCOKHRKHNOAI*CICOHK*ANR' ],
    '7': [ '*N--K---II-O-N---HR-H----ON----R*-C---------AN------*---N-HI---A--*--OI-KI---ON-*', '*NAOKHCRIICOANR*KHRKHI*CAONHAINR*KCOCR*HOKINANOKCIAH*RO*NKHIRACAHR*CNOIKKICRAONH*' ],
    '8': [ 'R-CO-N-IHO-K-----CNH---CR---C--A--*R----O--A--NACR-------*-A-H---NRK----*--------', 'RACO*NKIHOIKAHR*NCNH*KICROAKCOHAIN*RH*RNOKCAIINACR*HKOCRI*NAOHKAONRKHIC**KHICOARN' ],
    '9': [ 'HCN-AK--II*-N-C-H-A-O--I------R-NC--CN--I------R-K---H--C---OI----H-A---*-------R', 'HCNOAK*RII*KNRCAHOARO*HINKCKIHRONCA*CN*AIHROKOARCK*INHNHCK*ROIAROIHCAK*N*KAINOHCR' ],
    '10': [ '-C-N-R-A-I-A--O---H*RC-I-----IOHK-------C--K---H----------I--*NOIK-----R--*--AKI-', 'KCON*RHAIINAHKOCR*H*RCAINOKCRIOHK*NAAONIC*RKH*KHARNICORACKIHO*NOIK*NCAHRNH*ROAKIC' ]
}
const hard = {
    '1': [ '-N---------R-K--HI----H-NRCK----*RO-------A---R-I--------K-N-C-N----A---*-KH----O', 'HNC*RIOAKAORNKC*HIIK*AHONRCKHICA*RONC*NROKAIHORAINHCK*RIOK*NHCANCHOIAK*R*AKHCRINO' ],
    '2': [ '-K---OR--R---C-N-*----*--O-C-*--HKR---HR-N--A----K---N--N--KI----O*H----------O-H', '*KAINORHCROIHCANK*NHCK*RAOICN*AIHKROKIHRON*CAOARCK*HINHCNOAKI*RARO*HICNKI*KNRCOAH' ],
    '3': [ '-I-N----K---HO-------C---R-O--K-I---AR-------KCI---H-N*A-----I-------O----C-N--H*', 'HIANR*COKC*RHOKNAINKOCIA*RHON*KHIACRARH*CNIKOKCIRAOH*N*ANOKHRICRHKI*CONAIOCANRKH*' ],
    '4': [ '--H-----*-R----C-----N-CO---H--*--I---R--A----K*---R-------N*A-*N--IH-------K-HN-', 'NCHOAKIR*ORA*HICKNK*INRCOHACHNK*RAIOIORHCAN*KAK*INORCHHIKRON*AC*NCAIHKORRAOCK*HNI' ],
    '5': [ '-------------K-AO-A-R----KH---HA---O--K---IN----NO--*--HI-*-R--*C-AH----------N--', 'OKH*NACRII*CRKHAONANRICO*KHNR*HAIKCOHOKCR*INACIANOKH*RKHIO*NRAC*CNAHROIKRAOKICNH*' ],
    '6': [ 'KC----H-I--A-O-----*------KNH-O----------*A----C-H-O*---I---*---ONC----H-----AI--', 'KCO*RNHAIINAKOHCR*H*RAICNOKNH*OARKICOIKNC*AHRRACIHKO*NCRIHKO*NAAONC*IRKH*KHRNAICO' ],
    '7': [ 'OK-----------O-R-HAN--K----K-I-----N---O---H--A---*---N--KC-H---OK--A----I---RN--', 'OKHCRI*NAI*CAONRKHANR*KHICOKHIRACO*N*CNOIKAHRRAONH*KICNR*KCOHAIHOKINACR*CIAH*RNOK' ],
    '8': [ 'O-------CK-N---R-------I*---R--AO-C-NK---*----H--R----R--H---N-----ORK---N--K--A-', 'OIAR*KNHCK*NACHROIHCRONI*KA*RIKAOHCNNKCIH*AROAHOCRNI*KROKHIACN*CA*NORKIHINH*KCOAR' ],
    '9': [ 'RH-K-O*---------A---O--R-H-K-N-*-C-A---AN---K-------R-A----C-K---RNO---C---------', 'RHAKIO*CNCIK*HNRAON*OCARKHIKONR*HCIA*RCANIHOKIAHOCKNR*AN*IRCOKHHKRNOAI*COCIHK*ANR' ],
    '10': [ 'O--H--R----IC--O--R--NK-----A------I-I--R--*N*--K----O---*A-K---------IC-K------R', 'OCKHIARN*ANIC*ROHKR*HNKOICACARON*HKIKIOARHC*N*HNKCIAROIRC*ANKOHNOARHK*ICHK*IOCNAR' ]
}  
const expert = {
    '1': [ '-----O--I-H-I---R--C---RN-K-O----*--*--A-N---N-R-------K-R-------O-H*-----N---A--', 'RN*KCOHAIOHKINACR*ICAH*RNOKKOHCRI*NA*ICAONRKHNAR*KHICOHKIRACO*NARONH*KICC*NOIKAHR' ],
    '2': [ 'CHNR----------N-I*--K----------A-*R-O--*-----K----H----K-----N-N--O--IH---R-H----', 'CHNRI*AKORAOKCNHI**IKHOARCNHNCIAO*RKORI*NKCAHK*ACRHNOIIKHA*CONRNC*OKRIHAAORNHIK*C' ],
    '3': [ '-*R---------N----ON---IA--R-N--H----AR---N-I-K---------A--K-C-II-----*K-----*----', 'C*RHOKINAHIANR*KCONKOCIAH*RON*KHIRACARH*CNOIKKCIRAONH**ANOKHCRIIOCANR*KHRHKI*CAON' ],
    '4': [ '--O-N------RK----N-H-RO-----C-----A-A-I---CR--*---I-O-I--O----------*--H---A---C-', 'KIO*NCAHRCARKIHO*N*HNROAKICOCKN*RHAIANIHKOCR*R*HCAINOKIRCOHK*NANOAIC*RKHHK*ARNICO' ],
    '5': [ 'KHIR-------N--I-O-OR-C-K--------N---R--H---*--C----OI------A------*I---C------A--', 'KHIRNOCA*C*NAHIROKORAC*KINH*AKIONHCRRIOHACK*NNCHKR*OIAHNCOKA*RIAOR*IHNKCIK*NCRAHO' ],
    '6': [ '-------IA-C----N-----CR*-------K--*------A-K---HIC----O--A--*C-RA-O-N-------I----', 'H*RNOKCIAKCOHAINR*INACR*HOKAONRKHI*CCRI*NAOKH*KHICOANROIKAHR*CNRACO*NKHINH*KICRAO' ],
    '7': [ '---HN------CO--K*--------CR-H-------RN------*-*KA---N---A-----I*------------IKAH-', 'KR*HNCOIAHACORIK*NIONK*AHCRAHINC*ROKRNOIKHCA*C*KAORINHOKACHN*RI*IHRAONKCNCR*IKAHO' ],
    '8': [ '-H----R----I---A--*-A-C-O-----OH---R---I----AA-O--NI------N--CK-N-K--H-----------', 'NHCAIORK*ROIN*KAHC*KARCHOINI*KOHACNRHCNIR*KOAAROCKNI*HOARHNI*CKCN*KORHAIKIH*ACNRO' ],
    '9': [ '-O-----*-C----K---H-I-R---O---K-----A-R--N--------ONH*-NA---CR----I--A---C-------', 'NOKAICH*RCR*OKHINAHAINR*KCOO*NKHIRACAHRC*NOIKKICRAONH*INA*OKCRH*KHICRAONRCOHNA*KI' ],
    '10': [ '----H--IA--------N--O-K*-C---C-----O---OR-----A--C--R-R----K--*AI-*------K----I--', 'K*RCHNOIAHCAIORK*NINOAK*HCRNRCK*IAHO*HIORANKCOAKNCH*RIRONHIKCA*AIH*NCROKCK*RAOINH' ]
  }

const loseImages = ['lose1.gif','lose2.gif', 'lose3.gif'];
const winImages = ['win1.gif', 'win2.gif', 'win3.gif'];