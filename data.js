const test = { 
    '1': [ 'NR*KCOAHIHOKINARC*CIAH*RONKKHIRAC*ON*CNOIKHARRAONH*IKCI*CAONKRHANR*KHCIOOKHCRIN--', 'NR*KCOAHIHOKINARC*CIAH*RONKKHIRAC*ON*CNOIKHARRAONH*IKCI*CAONKRHANR*KHCIOOKHCRIN*A' ],
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
    1: [ '-5---------3-9--62----6-5389----134-------7---3-2--------9-5-8-5----7---1-96----4', "" ],
    2: [ '-9---43--3---8-5-1----1--4-8-1--693---63-5--7----9---5--5--92----416----------4-6', '' ],
    3: [ '-2-5----9---64-------8---3-4--9-2---73-------982---6-517-----2-------4----8-5--61', '' ],
    4: [ '--6-----1-3----8-----5-84---6--1--2---3--7----91---3-------517-15--26-------9-65-', '' ],
    5: [ '-------------9-74-7-3----96---67---4--9---25----54--1--62-1-3--18-76----------5--', '' ],
    6: [ '98----6-2--7-4-----1------956-4----------17----8-6-41---2---1---458----6-----72--', '' ],
    7: [ '49-----------4-3-675--9----9-2-----5---4---6--7---1---5--98-6---49--7----2---35--', '' ],
    8: [ '4-------89-5---3-------21---3--74-8-59---1----6--3----3--6---5-----439---5--9--7-', '' ],
    9: [ '36-9-41---------7---4--3-6-9-5-1-8-7---75---9-------3-7----8-9---354---8---------', '' ],
    10: [ '4--6--3----28--4--3--59-----7------2-2--3--151--9----4---17-9---------28-9------3', '' ],
}
const expertWithNumbers = {
    1: [ '-----4--2-6-2---3--8---35-9-4----1--1--7-5---5-3-------9-3-------4-61-----5---7--', '' ],
    2: [ '8653----------5-21--9----------7-13-4--1-----9----6----9-----5-5--4--26---3-6----', '' ],
    3: [ '-13---------5----45---27--3-5--6----73---5-2-9---------7--9-8-22-----19-----1----', '' ],
    4: [ '--4-5------39----5-6-34-----8-----7-7-2---83--1---2-4-2--4----------1--6---7---8-', '' ],
    5: [ '9623-------5--2-4-43-8-9--------5---3--6---1--8----42------7------12---8------7--', '' ],
    6: [ '-------27-8----5-----831-------9--1------7-9---628----4--7--18-37-4-5-------2----', '' ],
    7: [ '---65------84--91--------83-6-------35------1-197---5---7-----21------------2976-', '' ],
    8: [ '-6----3----2---7--1-7-8-4-----46---3---2----77-4--52------5--89-5-9--6-----------', '' ],
    9: [ '-4-----1-8----9---6-2-3---4---9-----7-3--5--------4561-57---83----2--7---8-------', '' ],
    10: [ '----6--27--------5--4-91-8---8-----4---43-----7--8--3-3----9--172-1------9----2--', '' ],
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
    '1': [ '-N---------R-K--HI----H-NRCK----*RO-------A---R-I--------K-N-C-N----A---*-KH----O', '' ],
    '2': [ '-K---OR--R---C-N-*----*--O-C-*--HKR---HR-N--A----K---N--N--KI----O*H----------O-H', '' ],
    '3': [ '-I-N----K---HO-------C---R-O--K-I---AR-------KCI---H-N*A-----I-------O----C-N--H*', '' ],
    '4': [ '--H-----*-R----C-----N-CO---H--*--I---R--A----K*---R-------N*A-*N--IH-------K-HN-', '' ],
    '5': [ '-------------K-AO-A-R----KH---HA---O--K---IN----NO--*--HI-*-R--*C-AH----------N--', '' ],
    '6': [ 'KC----H-I--A-O-----*------KNH-O----------*A----C-H-O*---I---*---ONC----H-----AI--', '' ],
    '7': [ 'OK-----------O-R-HAN--K----K-I-----N---O---H--A---*---N--KC-H---OK--A----I---RN--', '' ],
    '8': [ 'O-------CK-N---R-------I*---R--AO-C-NK---*----H--R----R--H---N-----ORK---N--K--A-', '' ],
    '9': [ 'RH-K-O*---------A---O--R-H-K-N-*-C-A---AN---K-------R-A----C-K---RNO---C---------', '' ],
    '10': [ 'O--H--R----IC--O--R--NK-----A------I-I--R--*N*--K----O---*A-K---------IC-K------R', '' ]
}
const expert = {
    '1': [ '-----O--I-H-I---R--C---RN-K-O----*--*--A-N---N-R-------K-R-------O-H*-----N---A--', '' ],
    '2': [ 'CHNR----------N-I*--K----------A-*R-O--*-----K----H----K-----N-N--O--IH---R-H----', '' ],
    '3': [ '-*R---------N----ON---IA--R-N--H----AR---N-I-K---------A--K-C-II-----*K-----*----', '' ],
    '4': [ '--O-N------RK----N-H-RO-----C-----A-A-I---CR--*---I-O-I--O----------*--H---A---C-', '' ],
    '5': [ 'KHIR-------N--I-O-OR-C-K--------N---R--H---*--C----OI------A------*I---C------A--', '' ],
    '6': [ '-------IA-C----N-----CR*-------K--*------A-K---HIC----O--A--*C-RA-O-N-------I----', '' ],
    '7': [ '---HN------CO--K*--------CR-H-------RN------*-*KA---N---A-----I*------------IKAH-', '' ],
    '8': [ '-H----R----I---A--*-A-C-O-----OH---R---I----AA-O--NI------N--CK-N-K--H-----------', '' ],
    '9': [ '-O-----*-C----K---H-I-R---O---K-----A-R--N--------ONH*-NA---CR----I--A---C-------', '' ],
    '10': [ '----H--IA--------N--O-K*-C---C-----O---OR-----A--C--R-R----K--*AI-*------K----I--', '' ]
}

// const loseImages = ['https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif','https://media.giphy.com/media/suCJQGchI6oBW/giphy.gif', 'https://media.giphy.com/media/dkuZHIQsslFfy/giphy.gif'];
// const winImages = ['https://media.giphy.com/media/K3RxMSrERT8iI/giphy.gif', 'https://media.giphy.com/media/9wcu6Tr1ecmxa/giphy.gif', 'https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif'];
const loseImages = ['lose1.gif','lose2.gif', 'lose3.gif'];
const winImages = ['win1.gif', 'win2.gif', 'win3.gif'];


