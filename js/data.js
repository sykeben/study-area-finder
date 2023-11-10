/*
 * Format:
 *
 *  {
 * 
 *      'School': {
 * 
 *          map: {
 *              file: 'Map Image',
 *              size: { rows: #Rows, cols: #Cols }
 *          },
 * 
 *          buildings: [
 *              {
 *                  code: 'Building Code',
 *                  name: 'Building Name',
 *                  tips: [
 *                      'Building Tips',
 *                      ...(cont)...
 *                  ],
 *                  link: 'Maps/Geo Link',
 *                  cell: { row: #Row, col: #Col }
 *              },
 *              ...(cont)...
 *          ],
 * 
 *      },
 *      ...(cont)...
 * 
 *  }
 */

// Building data.
const data = {

    'Purdue University': {

        map: {
            file: 'purdue.jpg',
            size: { rows: 12, cols: 9 }
        },
    
        buildings: [
            {
                code: 'LAMB',
                name: 'Ward L. Lambert Field House & Gymnasium',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Lambert%20Fieldhouse&auid=3755593249576241834&address=800%20W%20Stadium%20Ave,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4323186582456,-86.9159781467211',
                cell: { row: 4.25, col: 6.5 }
            },
            {
                code: 'ARMS',
                name: 'Neil Armstrong Hall of Engineering',
                tips: [
                    'Lobby on 1st & Ground Floors',
                    'Nooks at Ends'
                ],
                link: 'https://maps.apple.com/place?q=Neil%20Armstrong%20Hall%20of%20Engineering&auid=15792873004716321052&address=701%20W%20Stadium%20Ave,%20West%20Lafayette,%20IN%2047907,%20United%20States&ll=40.431007637986156,-86.91485345363617',
                cell: { row: 4.825, col: 6.825 }
            },
            {
                code: 'HAMP',
                name: 'Delon & Elizabeth Hampton Hall of Civil Engineering',
                tips: [
                    'Lobbies',
                    'Green Roof Available'
                ],
                link: 'https://maps.apple.com/place?q=Delon%20and%20Elizabeth%20Hampton%20Hall%20of%20Civil%20Engineering&auid=2985495732344072652&address=550%20Stadium%20Mall%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4303183214898,-86.9149597651378'
            },
            {
                code: 'FRNY',
                name: 'Forney Hall of Chemical Engineering',
                tips: [
                    'Giant Open Space in Center'
                ],
                link: 'https://maps.apple.com/place?q=Forney%20Hall%20of%20Chemical%20Engineering&auid=618726429462900394&address=480%20Stadium%20Mall%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.429521834745906,-86.91401499483618'
            },
            {
                code: 'RHPH',
                name: 'Robert E. Heine Pharmacy Building',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Robert%20Heine%20Pharmacy%20Building&auid=11483484089128947575&address=575%20Stadium%20Mall%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4297857850647,-86.9160116436572'
            },
            {
                code: 'JNSN',
                name: 'Helen R. Johnson Hall of Nursing',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Helen%20R.%20Johnson%20Hall%20of%20Nursing&auid=16910544801209743464&address=502%20N%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4294054978942,-86.9155071029044'
            },
            {
                code: 'PHYS',
                name: 'Physics Building',
                tips: [
                    'Student Commons on 1st Floor'
                ],
                link: 'https://maps.apple.com/place?q=Purdue%20University%20-%20Department%20of%20Physics%20and%20Astronomy&auid=10857719627909359804&address=525%20Northwestern%20Ave,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.43011283884391,-86.91354033355309'
            },
            {
                code: 'WANG',
                name: 'Seng-Liang Wang Hall',
                tips: [
                    '5th Floor is all Study/Work Areas'
                ],
                link: 'https://maps.apple.com/place?q=Seng%20Liang%20Wang%20Hall&auid=8029647363426688817&address=516%20Northwestern%20Ave,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.430170822830505,-86.91246280061021'
            },
            {
                code: 'MSEE',
                name: 'Materials and Electrical Engineering',
                tips: [
                    'Lobby on 1st Floor',
                    'Tables on 2nd Floor'
                ],
                link: 'https://maps.apple.com/place?q=Purdue%20University&auid=1984151223246801971&address=501%20Northwestern%20Ave,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42932741724,-86.9126458353805'
            },
            {
                code: 'BHEE',
                name: 'Max W. & Maileen Brown Family Hall',
                tips: [
                    'Open Areas at Elevators'
                ],
                link: 'https://maps.apple.com/place?q=Max%20W%20&%20Maileen%20Brown%20Family%20Hall%20(BHEE)&auid=3411214609294710331&address=465%20Northwestern%20Ave,%20West%20Lafayette,%20IN%2047907,%20United%20States&ll=40.4287316,-86.9119392'
            },
            {
                code: 'ME',
                name: 'Mechanical Engineering Building',
                tips: [
                    'Lobby on 1st Floor',
                    'Tables on 2nd Floor'
                ],
                link: 'https://maps.apple.com/place?q=Mechanical%20Engineering%20Building&auid=14271631775706085433&address=585%20Purdue%20Mall,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4282253769489,-86.9126588911595'
            },
            {
                code: 'CHAS',
                name: 'Chaney-Hale Hall of Science',
                tips: [
                    'Tables & Collab Areas on All Floors'
                ],
                link: 'https://maps.apple.com/place?q=Chaney-Hale%20Hall%20of%20Science&auid=5838817576984861457&address=150%20N%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42855351329469,-86.91549718379974'
            },
            {
                code: 'WALC',
                name: 'Thomas S. & Harvey D. Wilmeth Active Learning Center',
                tips: [
                    'Study Rooms on 3rd Floor'
                ],
                link: 'https://maps.apple.com/place?q=Wilmeth%20Active%20Learning%20Center&auid=10482427986563468581&address=340%20Centennial%20Mall%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4272963334535,-86.9133941653966'
            },
            {
                code: 'LMBS',
                name: 'Lambertus Hall (FKA: Gateway, Same as DUDL)',
                tips: [
                    'Open Spaces on Most Floors',
                    'Nooks at Ends'
                ],
                link: 'https://maps.apple.com/place?q=Dudley%20Hall%20And%20Lambertus%20Hall&auid=14362079107496656608&address=401%20N%20Grant%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42755305407332,-86.91110372543335'
            },
            {
                code: 'DUDL',
                name: 'Dudley Hall (FKA: Gateway, Same as LMBS)',
                tips: [
                    'Open Spaces on Most Floors',
                    'Nooks at Ends'
                ],
                link: 'https://maps.apple.com/place?q=Dudley%20Hall%20And%20Lambertus%20Hall&auid=14362079107496656608&address=401%20N%20Grant%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42755305407332,-86.91110372543335'
            },
            {
                code: 'KNOY',
                name: 'Marice G. Knoy Hall of Technology',
                tips: [
                    'Study Spaces on 3rd & 4th Floors'
                ],
                link: 'https://maps.apple.com/place?address=401%20N%20Grant%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&auid=16597599311210736881&ll=40.427757,-86.911171&lsp=9902&q=Knoy%20Hall%20of%20Technology&t=m'
            },
            {
                code: 'WTHR',
                name: 'Richart B. Wetherill Lab. of Chemistry (Linked to BRWN)',
                tips: [
                    'Lobby on 2nd Floor',
                    'Study Nook on 1st Floor'
                ],
                link: 'https://maps.apple.com/place?q=Richard%20Benbridge%20Wetherill%20Laboratory%20of%20Chemistry&auid=1589083147625434279&address=560%20Oval%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4264928,-86.9131112'
            },
            {
                code: 'BRWN',
                name: 'Herbert C. Brown Lab. of Chemistry (Linked to WTHR)',
                tips: [
                    'Classrooms on 2nd & 3rd Floors (After Hours)'
                ],
                link: 'https://maps.apple.com/place?q=Herbert%20C.%20Brown%20Laboratory%20of%20Chemistry&auid=5136866216924238482&address=560%20Oval%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.426498585304934,-86.91182513263982'
            },
            {
                code: 'HEAV',
                name: 'Heavilon Hall',
                tips: [
                    'Classrooms on 2nd & 4th Floors (After Hours)'
                ],
                link: 'https://maps.apple.com/place?q=Heavilon%20Hall&auid=3902395757862637733&address=500%20Oval%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4262328680081,-86.9118904569885'
            },
            {
                code: 'GRIS',
                name: 'Grissom Hall',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Grissom%20Hall&auid=6533593418293718694&address=315%20N%20Grant%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4264093469563,-86.9107871702524'
            },
            {
                code: 'STEW',
                name: 'Stewart Center',
                tips: [
                    'HSSE Library',
                    'Study Spaces on Ground & Lower'
                ],
                link: 'https://maps.apple.com/place?q=Stewart%20Center&auid=17813050697143091795&address=128%20Memorial%20Mall,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4250165826896,-86.9129446782149'
            },
            {
                code: 'HIKS',
                name: 'John W. Hicks Undergraduate Library',
                tips: [
                    'Study Rooms',
                    'Computer Labs',
                    'Open Spaces'
                ],
                link: 'https://maps.apple.com/place?q=Hicks%20Undergraduate%20Library&ll=40.4245258161303%2C-86.9126316672825&auid=15639192529196823633&lsp=9902&address=504%20W%20State%20St%2C%20West%20Lafayette%2C%20IN%20%2047907%2C%20United%20States'
            },
            {
                code: 'PMU',
                name: 'Purdue Memorial Union',
                tips: [
                    'Tables Ground, 1st, & Second Floors'
                ],
                link: 'https://maps.apple.com/place?q=Purdue%20Memorial%20Union&auid=11505910234298704831&address=101%20N%20Grant%20St,%20West%20Lafayette,%20IN%2047906,%20United%20States&ll=40.425057966443674,-86.91074430942535'
            },
            {
                code: 'RAWL',
                name: 'Jerry S. Rawls Hall',
                tips: [
                    'Nooks all Floors',
                    'Open Area on 2nd Floor'
                ],
                link: 'https://maps.apple.com/place?q=Rawls%20Hall&ll=40.4237649767543%2C-86.9099260859327&auid=12011523158894312844&lsp=9902&address=100%20S%20Grant%20St%2C%20West%20Lafayette%2C%20IN%20%2047907%2C%20United%20States'
            },
            {
                code: 'KRAN',
                name: 'Krannert Building',
                tips: [
                    'Lobbies on 1st and Some Other Floors'
                ],
                link: 'https://maps.apple.com/place?q=Krannert%20Graduate%20School%20of%20Management&ll=40.42355591785487%2C-86.91089987754822&auid=15716963774865216654&lsp=9902&address=403%20W%20State%20St%2C%20West%20Lafayette%2C%20IN%2047907%2C%20United%20States'
            },
            {
                code: 'YONG',
                name: 'Ernest C. Young Hall',
                tips: [
                    'Lobbies on 1st and Some Other Floors'
                ],
                link: 'https://maps.apple.com/place?q=Ernest%20C.%20Young%20Hall&auid=11751667482706022835&address=155%20S%20Grant%20St,%20West%20Lafayette,%20IN%2047907,%20United%20States&ll=40.42290582797254,-86.91068530082703'
            },
            {
                code: 'DAUC',
                name: 'Dick & Sandy Dauch Alumni Center',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Dauch%20Alumni%20Center&auid=3712042927441440310&address=403%20W%20Wood%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4218237817299,-86.9108432811367'
            },
            {
                code: 'PAO',
                name: 'Yue-Kong Pao Hall of Visual & Performing Arts',
                tips: [
                    'Small Areas Available'
                ],
                link: 'https://maps.apple.com/place?q=Yue-Kong%20Pao%20Hall%20of%20Visual%20and%20Performing%20Arts&auid=17330930855416183974&address=552%20W%20Wood%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4225744178505,-86.9130228684725'
            },
            {
                code: 'PSYC',
                name: 'Psychological Sciences Building',
                tips: [
                    'Nooks in Some Places'
                ],
                link: 'https://maps.apple.com/place?q=Psychological%20Sciences%20Building&auid=5683511036668342947&address=Purdue%20University,%20703%20Third%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4270337134804,-86.9149278010193'
            },
            {
                code: 'PRCE',
                name: 'Pierce Hall',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Peirce%20Hall&auid=6851087590247985384&address=701%20Third%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4266632258297,-86.9150803153994'
            },
            {
                code: 'SC',
                name: 'Stanley Coulter Hall',
                tips: [
                    'Space on Ground Floor'
                ],
                link: 'https://maps.apple.com/place?q=Stanley%20Coulter%20Hall&auid=7283105943521455532&address=640%20Oval%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.426376985020326,-86.91432237625122'
            },
            {
                code: 'SCHM',
                name: 'Helen B. Schleman Hall (FKA: Recitation Hall)',
                tips: [
                    'Most Classrooms Open (After Hours)'
                ],
                link: 'https://maps.apple.com/place?q=Helen%20B.%20Schleman%20Hall&auid=3794552488204547081&address=656%20Oval%20Dr,%20FL%202,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4257932,-86.9152272'
            },
            {
                code: 'UNIV',
                name: 'Unversity Hall',
                tips: [
                    'Most Classrooms Open (After Hours)'
                ],
                link: 'https://maps.apple.com/place?q=University%20Hall&auid=1396980644011663419&address=672%20Oval%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.425211785236584,-86.91515958300442'
            },
            {
                code: 'STON',
                name: 'Winthrop E. Stone Hall',
                tips: [
                    'Lobby & Student Space on 1st Floor'
                ],
                link: 'https://maps.apple.com/place?q=Winthrop%20E.%20Stone%20Hall&auid=1399201453738210824&address=700%20W%20State%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4244885616641,-86.9152448856155'
            },
            {
                code: 'BRNG',
                name: 'Steven C. Beering Hall of Liberal Arts & Education',
                tips: [
                    'Areas on Some Floors',
                    'Tables on Ground Floor'
                ],
                link: 'https://maps.apple.com/place?q=Steven%20C.%20Beering%20Hall%20of%20Liberal%20Arts%20&%20Education&auid=9350417890401704058&address=100%20N%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4256184337032,-86.9163433763824'
            },
            {
                code: 'MTHW',
                name: 'Matthews Hall',
                tips: [
                    'Tables in Lobby on 1st Floor'
                ],
                link: 'https://maps.apple.com/place?q=Matthews%20Hall&auid=6507612550496456798&address=812%20W%20State%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4246519576914,-86.9164130588947'
            },
            {
                code: 'MRRT',
                name: 'Marriott Hall',
                tips: [
                    'Tables in Lobby on 1st Floor'
                ],
                link: 'https://maps.apple.com/place?q=Marriott%20Hall&auid=13107000132556562697&address=900%20W%20State%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42440103380874,-86.9170083400968'
            },
            {
                code: 'LWSN',
                name: 'Richard & Patricia Lawson Computer Science Building',
                tips: [
                    'Open Area on 1st Floor',
                    'Patio on 3rd Floor'
                ],
                link: 'https://maps.apple.com/place?q=The%20Richard%20and%20Patricia%20Lawson%20Computer%20Science%20Building&ll=40.427776%2C-86.9170092&auid=16706255158163892161&lsp=9902&address=305%20N%20University%20St%2C%20West%20Lafayette%2C%20IN%20%2047907%2C%20United%20States'
            },
            {
                code: 'HAAS',
                name: 'Felix Haas Hall',
                tips: [
                    'May Have Classrooms Open (After Hours)'
                ],
                link: 'https://maps.apple.com/place?q=Felix%20Haas%20Hall&auid=7813394412530667101&address=250%20N%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4268166277436,-86.9164077066949'
            },
            {
                code: 'MATH',
                name: 'Mathematical Sciences Building',
                tips: [
                    'MATH Library',
                    'Daytime Lobbies'
                ],
                link: 'https://maps.apple.com/place?q=Mathematical%20Sciences%20Building&auid=14628162189963641138&address=150%20N%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42616518150194,-86.91572087976965'
            },
            {
                code: 'PFEN',
                name: 'David C. Pfendler Hall of Agriculture',
                tips: [
                    'Lobby on 1st Floor',
                    'Table & Couches on 2nd Floor'
                ],
                link: 'https://maps.apple.com/place?q=Pfendler%20Hall%20of%20Agriculture&auid=2511405701186568272&address=715%20W%20State%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42357175951241,-86.91540786610858'
            },
            {
                code: 'NLSN',
                name: 'Philip E. Nelson Hall of Food Science',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Philip%20E.%20Nelson%20Hall%20of%20Food%20Science&auid=17086249448795876049&address=745%20Agriculture%20Mall%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4215406746931,-86.9155161443255'
            },
            {
                code: 'LYNN',
                name: 'Charles J. Lynn Hall of Veterinary Medicine',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Lynn%20Hall%20of%20Veterinary%20Medicine&auid=5576440160509226274&address=625%20Harrison%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4195034677805,-86.9146469635726'
            },
            {
                code: 'LYLE',
                name: 'Lyles-Porter Hall',
                tips: [
                    'Some Open Spaces',
                    'Nook on 4th Floor'
                ],
                link: 'https://maps.apple.com/place?q=Lyles-Porter%20Hall&auid=14503830569584125640&address=231%20S%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.421011453531555,-86.91686886522803'
            },
            {
                code: 'CRTN',
                name: 'Hobart & Russel Creigton Hall of Animal Sciences',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Hobart%20and%20Russel%20Creighton%20Hall%20of%20Animal%20Sciences&auid=4887443324135755902&address=270%20S%20Russell%20St,%20West%20Lafayette,%20IN%2047907,%20United%20States&ll=40.42131311949553,-86.9189465045929'
            },
            {
                code: 'HLAB',
                name: 'Herrick Laboratories',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Herrick%20laboratories&auid=8047606745607414496&address=177%20S%20Russell%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42240079370567,-86.91993105407164'
            },
            {
                code: 'ABE',
                name: 'Agricultural and Biological Eningineering',
                tips: [
                    'Lobby on 1st Floor',
                    'Conference Rooms'
                ],
                link: 'https://maps.apple.com/place?q=Agricultural%20and%20Biological%20Engineering&auid=16672655436561728434&address=225%20S%20University%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4216749889621,-86.9166201978891'
            },
            {
                code: 'DRUG',
                name: 'Drug Discovery Facility',
                tips: [
                    'Lobby on 1st Floor',
                    'Porch on 3rd Floor'
                ],
                link: 'https://maps.apple.com/place?q=Purdue%20Institute%20for%20Drug%20Discovery&auid=12997486984372551130&address=720%20Clinic%20Dr,%20West%20Lafayette,%20IN%2047907,%20United%20States&ll=40.421708,-86.9175452'
            },
            {
                code: 'LILY',
                name: 'Lily Hall of Life Sciences',
                tips: [
                    'Lobby on 1st Floor'
                ],
                link: 'https://maps.apple.com/place?q=Lilly%20Hall%20of%20Life%20Sciences&auid=8172653591613721151&address=915%20Mitch%20Daniels%20Boulevard,%20West%20Lafayette,%20IN%2047907,%20United%20States&ll=40.4235384909667,-86.9181162030875'
            },
            {
                code: 'MJIS',
                name: 'Martin C. Jischke Hall of Biomedical Engineering',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Martin%20C.%20Jischke%20Hall%20of%20Biomedical%20Engineering&auid=14675647052507520946&address=206%20S%20Martin%20Jischke%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.422126881112,-86.9210461466662'
            },
            {
                code: 'HOCK',
                name: 'Hockmeter Hall of Structural Biology',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Hockmeyer%20Hall%20of%20Structural%20Biology&auid=6096922648208791931&address=249%20S%20Martin%20Jischke%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4211435,-86.921074'
            },
            {
                code: 'DLR',
                name: 'Hall for Discovery and Learning Research',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Hall%20for%20Discovery%20and%20Learning%20Research&auid=12185629649419230450&address=207%20S%20Martin%20Jischke%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.42114268382543,-86.92248380131787'
            },
            {
                code: 'FLEX',
                name: 'Flex Laboratories',
                tips: [
                    'Spaces on All Floors (May be Locked)'
                ],
                link: 'https://maps.apple.com/place?q=Flex%20Lab&auid=8214421334325820791&address=205%20Gates%20Rd,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4218698,-86.9236075'
            },
            {
                code: 'MANN',
                name: 'Gerald D. and Edna E. Mann Hall',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Gerald%20D.%20and%20Edna%20E.%20Mann%20Hall&auid=7695402581950136108&address=203%20S%20Martin%20Jischke%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4229844888441,-86.9227176176798'
            },
            {
                code: 'BIND',
                name: 'Bindley Bioscience Center',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Bindley%20Bioscience%20Center&auid=10604300633726028755&address=1203%20W%20State%20St,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4228760064276,-86.9234873936363'
            },
            {
                code: 'MRGN',
                name: 'Burton D. Morgan Center for Entrepreneurship',
                tips: [
                    'Large Lobby Area'
                ],
                link: 'https://maps.apple.com/place?q=Burton%20D.%20Morgan%20Center%20for%20Entrepreneurship&auid=2101825397958389941&address=1201%20Mitch%20Daniels%20Blvd.,%20West%20Lafayette,%20IN%2047907-2057&ll=40.4237746,-86.9228968'
            },
            {
                code: 'KRCH',
                name: 'Krach Leadership Center',
                tips: [
                    'Lobby on 1st Floor',
                    'Spaces on All Floors'
                ],
                link: 'https://maps.apple.com/place?q=Krach%20Leadership%20Center&ll=40.4275565%2C-86.9212361&auid=13505389596559916144&lsp=9902&address=1198%20Third%20St%2C%20Unit%20365%2C%20West%20Lafayette%2C%20IN%20%2047907%2C%20United%20States'
            },
            {
                code: 'NISW',
                name: 'Niswonger Aviation Technology Building',
                tips: [
                    'No tips for this building'
                ],
                link: 'https://maps.apple.com/place?q=Niswonger%20Aviation%20Technology%20Building&auid=4214908642520482457&address=1401%20Aviation%20Dr,%20West%20Lafayette,%20IN%20%2047907,%20United%20States&ll=40.4162708329056,-86.9293914150969'
            }
        ]

    }

}