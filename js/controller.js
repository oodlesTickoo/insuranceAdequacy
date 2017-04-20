app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $timeout, AgeCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {


    $scope.privateSchoolObjects = [{ id: 0, name: "Sydney Grammar School Darlinghurst", address: "College St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 5489, annualFee: 32644 },
        { id: 1, name: "PLC Sydney", address: "Boundary St- Croydon NSW 2132", state: "NSW", upfrontFee: 3415, annualFee: 24411 },
        { id: 2, name: "SCEGGS Darlinghurst", address: "215 Forbes St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 4950, annualFee: 28348 },
        { id: 3, name: "The Scotts College Sydney", address: "Victoria Rd- Bellevue Hill NSW 2023", state: "NSW", upfrontFee: 5500, annualFee: 33925 },
        { id: 4, name: "Pymble Ladies College", address: "Avon Rd- Pymble NSW 2073", state: "NSW", upfrontFee: 3430, annualFee: 24002 },
        { id: 5, name: "Ascham School", address: "188 New South Head Rd- Edgecliff- NSW 2027", state: "NSW", upfrontFee: 6300, annualFee: 32000 },
        { id: 6, name: "Abbotsleigh", address: "1666 Pacific Highway- Wahroonga- NSW 2076", state: "NSW", upfrontFee: 1970, annualFee: 28640 },
        { id: 7, name: "St Aloysius College", address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia", state: "NSW", upfrontFee: 2650, annualFee: 16278 },
        { id: 8, name: "Meridan School", address: "10-12 Redmyre Road- Strathfield NSW 2135", state: "NSW", upfrontFee: 1825, annualFee: 28340 },
        { id: 9, name: "Sydney Church of England Grammar School (SHORE)", address: "Blue Street- North Sydney- NSW- 2060- Australia", state: "NSW", upfrontFee: 2400, annualFee: 24126 },
        { id: 10, name: "Cranbrook School", address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia", state: "NSW", upfrontFee: 7300, annualFee: 28325 },
        { id: 11, name: "Knox Grammar School", address: "7 Woodville Ave- Wahroonga 2076 NSW Australia", state: "NSW", upfrontFee: 3000, annualFee: 29430 },
        { id: 12, name: "The Kings School", address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA", state: "NSW", upfrontFee: 3850, annualFee: 25345 },
        { id: 13, name: "ST Ignatius' College", address: "1 Tambourine Bay Road- NSW Lane Cove", state: "NSW", upfrontFee: 4530, annualFee: 23880 },
        { id: 14, name: "St Joseph's College", address: "Mark Street- Hunters Hill- NSW 2110", state: "NSW", upfrontFee: 3300, annualFee: 29040 },
        { id: 15, name: "Loreto Normanhurst", address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076", state: "NSW", upfrontFee: 3330, annualFee: 19179 },
        { id: 16, name: "Loreto Kirribilli", address: "85 Carabella Street- Kirribilli NSW 2061- Australia", state: "NSW", upfrontFee: 3220, annualFee: 15645 },
        { id: 17, name: "Queenswood School for Girls", address: "47 Mandolong Rd- Mosman NSW 2088", state: "NSW", upfrontFee: 4220, annualFee: 25171 },
        { id: 18, name: "Roseville College", address: "27 Bancroft Avenue Roseville NSW 2069 Australia", state: "NSW", upfrontFee: 1220, annualFee: 20735 },
        { id: 19, name: "Parramatta Marist High School", address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145", state: "NSW", upfrontFee: 1220, annualFee: 4473 },
        { id: 20, name: "Barker College", address: "91 Pacific Highway Hornsby NSW 2077", state: "NSW", upfrontFee: 3800, annualFee: 25140 },
        { id: 21, name: "Ruyton Girls' School, Kew.", address: "12 Selbourne Rd- Kew VIC 3101", state: "VIC", upfrontFee: 1610, annualFee: 22360 },
        { id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: "3 Hood Cres- Caulfield VIC 3161", state: "VIC", upfrontFee: 1100, annualFee: 25518 },
        { id: 23, name: "Fintona Girls' School, Balwyn.", address: "79 Balwyn Rd- Balwyn VIC 3103", state: "VIC", upfrontFee: 1150, annualFee: 20399 },
        { id: 24, name: "Lauriston Girls' School, Aramadale.", address: "38 Huntingtower Rd- Armadale VIC 3143", state: "VIC", upfrontFee: 1100, annualFee: 27160 },
        { id: 25, name: "Loreto Mandeville Hall, Toorak.", address: "10 Mandeville Cres- Toorak VIC 3142", state: "VIC", upfrontFee: 1900, annualFee: 22398 },
        { id: 26, name: "Prebyterian Ladies' College, Burwood.", address: "141 Burwood Hwy- Burwood VIC 3125", state: "VIC", upfrontFee: 1300, annualFee: 23479 },
        { id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: " 2 Torrington St- Canterbury VIC 3126", state: "VIC", upfrontFee: 1100, annualFee: 19051 },
        { id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: "86 Anderson St- South Yarra VIC 3141", state: "VIC", upfrontFee: 1650, annualFee: 27746 },
        { id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: "11 Mentone Parade- Mentone VIC 3194", state: "VIC", upfrontFee: 1100, annualFee: 22354 },
        { id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146", state: "VIC", upfrontFee: 900, annualFee: 27138 },
        { id: 31, name: "Camberwell Grammar School, Canterbury.", address: "55 Mont Albert Rd- Canterbury VIC 3126", state: "VIC", upfrontFee: 1330, annualFee: 25600 },
        { id: 32, name: "Scotch College, Hawthorn. ", address: "1 Morrison St- Hawthorn VIC 3122", state: "VIC", upfrontFee: 1600, annualFee: 29912 },
        { id: 33, name: "Melbourne Grammar School, South Yarra.", address: "355 St Kilda Rd- Melbourne VIC 3004", state: "VIC", upfrontFee: 3900, annualFee: 24885 },
        { id: 34, name: "Caulfield Grammar School, St Kilda", address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183", state: "VIC", upfrontFee: 2100, annualFee: 23789 },
        { id: 35, name: "Haileybury College, Keysborough.", address: "855 Springvale Road Keysborough VIC 3173", state: "VIC", upfrontFee: 2500, annualFee: 24702 },
        { id: 36, name: "Xavier College, Kew.", address: "135 Barkers Road- Melbourne- Kew- Victoria", state: "VIC", upfrontFee: 945, annualFee: 21957 },
        { id: 37, name: "Trinity Grammar School, Kew.", address: "40 Charles St- Kew- Melbourne Victoria 3101", state: "VIC", upfrontFee: 2360, annualFee: 26349 },
        { id: 38, name: "St Kevin's College, Toorak.", address: "31 Moonga Rd- Toorak VIC 3142", state: "VIC", upfrontFee: 3000, annualFee: 16290 },
        { id: 39, name: "Brighton Grammar School, Brighton", address: "90 Outer Cres- Brighton VIC 3186", state: "VIC", upfrontFee: 2200, annualFee: 25247 },
        { id: 40, name: "Firbank Grammar School, Brighton", address: "51 Outer Crescent- Brighton VIC 3186", state: "VIC", upfrontFee: 1100, annualFee: 24769 },
        { id: 41, name: "St Leonard's College, Brighton East.", address: "163 South Road- Brighton East VIC 3187", state: "VIC", upfrontFee: 1800, annualFee: 23415 },
        { id: 42, name: "Brisbane Grammar School", address: "24 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2550, annualFee: 23000 },
        { id: 43, name: "Brisbane Girls Grammer School", address: "70 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2040, annualFee: 22520 },
        { id: 44, name: "Ormiston College", address: "97 Dundas St W- Ormiston QLD 4160", state: "QLD", upfrontFee: 795, annualFee: 2527 },
        { id: 45, name: "Somerville House", address: "17 Graham St- South Brisbane QLD 4101", state: "QLD", upfrontFee: 1530, annualFee: 18292 },
        { id: 46, name: "Brisbane Boys College", address: "Kensington Terrace- Toowong QLD 4066", state: "QLD", upfrontFee: 1960, annualFee: 18434 },
        { id: 47, name: "St Aidan's Anglican Girls School", address: "11 Ruthven St- Corinda QLD 4075", state: "QLD", upfrontFee: 1300, annualFee: 17272 },
        { id: 48, name: "Anglican Church Grammar School", address: "Oaklands Parade- East Brisbane QLD 4169", state: "QLD", upfrontFee: 1930, annualFee: 18813 },
        { id: 49, name: "Clayfield College", address: "23 Gregory Street- Clayfield QLD 4011", state: "QLD", upfrontFee: 1135, annualFee: 17031 },
        { id: 50, name: "Cannon Hill Anglican College", address: "Junction Rd- Cannon Hill QLD 4170", state: "QLD", upfrontFee: 1250, annualFee: 10386 },
        { id: 51, name: "Sheldon College", address: "Taylor Road- Sheldon- QLD 4157", state: "QLD", upfrontFee: 660, annualFee: 11479 },
        { id: 52, name: "St Margarets Anglican Girls School", address: "11 Petrie St- Ascot QLD 4007", state: "QLD", upfrontFee: 1220, annualFee: 17762 },
        { id: 53, name: "Hillbrook Anglican School", address: "45 Hurdcotte Street Enoggera QLD 4051", state: "QLD", upfrontFee: 1610, annualFee: 11092 },
        { id: 54, name: "st peters lutheran college", address: "66 Harts Rd- Indooroopilly QLD 4068", state: "QLD", upfrontFee: 1100, annualFee: 15806 },
        { id: 55, name: "Moreton Bay College", address: "450 Wondall Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 12532 },
        { id: 56, name: "St Rita's College, Clayfield", address: "41 Enderley Rd- Clayfield QLD 4011", state: "QLD", upfrontFee: 1100, annualFee: 7120 },
        { id: 57, name: "The Southport School", address: "2 Winchester St- Southport QLD 4215", state: "QLD", upfrontFee: 1500, annualFee: 15030 },
        { id: 58, name: "St Joseph's College Gregory Terrace", address: "Gregory Terrace- Brisbane- QLD 4000- Australia", state: "QLD", upfrontFee: 2420, annualFee: 8215 },
        { id: 59, name: "The Lakes College", address: "2 College St- North Lakes QLD 4509", state: "QLD", upfrontFee: 500, annualFee: 8415 },
        { id: 60, name: "Redeemer Lutheran College", address: "745 Rochedale Rd- Rochedale QLD 4123", state: "QLD", upfrontFee: 700, annualFee: 8979 },
        { id: 61, name: "Moreton Bay Boys College", address: "302 Manly Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 11023 },
        { id: 62, name: "Wilderness School, Medindie.", address: "30 Hawkers Rd- Medindie SA 5081", state: "SA", upfrontFee: 1050, annualFee: 18888 },
        { id: 63, name: "St Peter's College ", address: "57 Hackney Rd- Hackney SA 5069", state: "SA", upfrontFee: 2600, annualFee: 20520 },
        { id: 64, name: "St Peter's Girls Collegiate Girls' School", address: "Stonyfell Rd- Stonyfell SA 5066", state: "SA", upfrontFee: 970, annualFee: 17285 },
        { id: 65, name: "Walford Anglican School for Girls", address: "316 Unley Rd- Hyde Park SA 5061", state: "SA", upfrontFee: 1095, annualFee: 19301 },
        { id: 66, name: "Prince Alfred College", address: "23 Dequetteville Terrace- Kent Town SA 5067", state: "SA", upfrontFee: 1100, annualFee: 17319 },
        { id: 67, name: "Seymour College", address: "546 Portrush Rd- Glen Osmond SA 5064", state: "SA", upfrontFee: 1050, annualFee: 19679 },
        { id: 68, name: "Pulteney Grammar School", address: "190 South Terrace ADELAIDE SA 5000", state: "SA", upfrontFee: 850, annualFee: 18946 },
        { id: 69, name: "St Aloysius College, Adelaide", address: "53 Wakefield St- Adelaide SA 5000", state: "SA", upfrontFee: 600, annualFee: 7636 },
        { id: 70, name: "St Dominics Priory College", address: "119/139 Molesworth St- North Adelaide SA 5006", state: "SA", upfrontFee: 0, annualFee: 6674 },
        { id: 71, name: "St John's Grammar School", address: "29 Gloucester Ave- Belair SA 5052", state: "SA", upfrontFee: 688, annualFee: 11811 },
        { id: 72, name: "Woodcroft College", address: "143-173 Bains Rd- Morphett Vale SA 5162", state: "SA", upfrontFee: 755, annualFee: 6297 },
        { id: 73, name: "St Ignatious College, Adelaide", address: "2 Manresa Ct- Athelstone SA 5076", state: "SA", upfrontFee: 975, annualFee: 14013 },
        { id: 74, name: "Pedare Christian College", address: "2-30 Surrey Farm Dr- Golden Grove SA 5125", state: "SA", upfrontFee: 150, annualFee: 7502 },
        { id: 75, name: "Westminster School", address: "1-27 Alison Avenue- Marion- South Australia ", state: "SA", upfrontFee: 800, annualFee: 17932 },
        { id: 76, name: "Kings Baptist Grammar School", address: "no address", state: "SA", upfrontFee: 175, annualFee: 0 },
        { id: 77, name: "Scotch College Adelaide", address: "Carruth Road- Torrens Park South Australia 5062", state: "SA", upfrontFee: 1150, annualFee: 19668 },
        { id: 78, name: "Concordia College", address: "45 Cheltenham St- Highgate SA 5063", state: "SA", upfrontFee: 75, annualFee: 8820 },
        { id: 79, name: "Pembroke School", address: "342 The Parade- Kensington Park SA 5068", state: "SA", upfrontFee: 860, annualFee: 19690 },
        { id: 80, name: "Loreto College, Marryatville", address: "316 Portrush Rd- Marryatville SA 5068", state: "SA", upfrontFee: 745, annualFee: 14664 },
        { id: 81, name: "Trinity College, Gawler", address: "Alexander Ave- Evanston South SA 5116", state: "SA", upfrontFee: 540, annualFee: 4622 },
        { id: 82, name: "Hale School", address: "160 Hale Rd- Wembley Downs WA 6019", state: "WA", upfrontFee: 8250, annualFee: 21450 },
        { id: 83, name: "Christ Church Grammar School", address: "Queenslea Dr- Claremont WA 6010", state: "WA", upfrontFee: 6700, annualFee: 23088 },
        { id: 84, name: "All Saints College", address: "Ewing Ave.- Bull Creek WA 6149", state: "WA", upfrontFee: 5423, annualFee: 16534 },
        { id: 85, name: "St Mary's Anglican Girls School", address: "75 Elliott Rd- Karrinyup WA 6018", state: "WA", upfrontFee: 5545, annualFee: 18394 },
        { id: 86, name: "St Hilda's Anglican Girls School", address: "26 Bay View Terrace- Mosman Park WA 6012", state: "WA", upfrontFee: 4959, annualFee: 20284 },
        { id: 87, name: "Presbyterian Ladies' College, Perth", address: "14 McNeil St- Peppermint Grove WA 6011", state: "WA", upfrontFee: 4950, annualFee: 20982 },
        { id: 88, name: "Perth College", address: "31 Lawley Crescent- Mount Lawley WA 6050", state: "WA", upfrontFee: 5742, annualFee: 18701 },
        { id: 89, name: "Guildford Grammar School ", address: "11 Terrace Rd- Guildford WA 6055", state: "WA", upfrontFee: 2925, annualFee: 18073 },
        { id: 90, name: "Penrhos College", address: "6 Morrison Street- Como WA 6152", state: "WA", upfrontFee: 5489, annualFee: 19442 },
        { id: 91, name: "Scotch College, Perth", address: "76 Shenton Rd- Swanbourne WA 6010", state: "WA", upfrontFee: 6687, annualFee: 23499 },
        { id: 92, name: "John XXIII College, Perth", address: "Mooro Dr- Mount Claremont WA 6010", state: "WA", upfrontFee: 2110, annualFee: 7710 },
        { id: 93, name: "Santa Maria College", address: "18 Stoneham Rd- Attadale WA 6156", state: "WA", upfrontFee: 1020, annualFee: 10521 },
        { id: 94, name: "Wesley College, Perth", address: "40 Coode St- South Perth WA 6151", state: "WA", upfrontFee: 7276, annualFee: 20001 },
        { id: 95, name: "Methodist Ladies College, Perth", address: "356 Stirling Hwy- Claremont WA 6010", state: "WA", upfrontFee: 5320, annualFee: 21203 },
        { id: 96, name: "St Marks Anglican Community School", address: "St Marks Dr- Hillarys WA 6025", state: "WA", upfrontFee: 2030, annualFee: 7251 },
        { id: 97, name: "Aquinas College, Perth", address: "58 Mount Henry Rd- Salter Point WA 6152", state: "WA", upfrontFee: 2832, annualFee: 14013 },
        { id: 98, name: "Trinity College, Perth", address: "2 Trinity Ave- East Perth WA 6004", state: "WA", upfrontFee: 2243, annualFee: 13602 },
        { id: 99, name: "Sacred Heart College", address: "Hocking Parade- Sorrento WA 6020", state: "WA", upfrontFee: 805, annualFee: 8220 },
        { id: 100, name: "Newman College Perth", address: "216 Empire Ave- Churchlands WA 6018", state: "WA", upfrontFee: 1110, annualFee: 5715 },
        { id: 101, name: "Kingsway Christian College", address: "157 Kingsway- Darch WA 6065", state: "WA", upfrontFee: 1320, annualFee: 7288 },
        { id: 102, name: "Canberra Grammar School", address: "40 Monaro Cres- Red Hill ACT 2603", state: "ACT", upfrontFee: 2975, annualFee: 18753 },
        { id: 103, name: "Radford College", address: "1 College St- Bruce ACT 2617", state: "ACT", upfrontFee: 950, annualFee: 12307 },
        { id: 104, name: "Canberra Girls Grammar School", address: "Melbourne Ave- Deakin ACT 2600", state: "ACT", upfrontFee: 150, annualFee: 16942 },
        { id: 105, name: "Burgmann Anglican School", address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291", state: "ACT", upfrontFee: 875, annualFee: 8413 },
        { id: 106, name: "Brindabella Christian College", address: "136 Brigalow St- Lyneham ACT 2602", state: "ACT", upfrontFee: 700, annualFee: 5874 },
        { id: 107, name: "Marist College", address: "27 Marr St- Pearce ACT 2607", state: "ACT", upfrontFee: 400, annualFee: 8644 },
        { id: 108, name: "Orana Steiner School", address: "Unwin Place- ACT 2611", state: "ACT", upfrontFee: 550, annualFee: 6467 },
        { id: 109, name: "Merici College", address: "Wise St- Braddon ACT 2612", state: "ACT", upfrontFee: 50, annualFee: 6277 },
        { id: 110, name: "Emmaus Christian School", address: "73 Davenport St- Dickson ACT 2602", state: "ACT", upfrontFee: 300, annualFee: 6292 },
        { id: 111, name: "The Friends School, Hobart", address: "23 Commercial Rd- North Hobart TAS 7000", state: "TAS", upfrontFee: 1200, annualFee: 14254 },
        { id: 112, name: "Fahan School", address: "Fisher Avenue- Lower Sandy Bay TAS 7005", state: "TAS", upfrontFee: 2100, annualFee: 12412 },
        { id: 113, name: "St Michael's Collegiate School", address: "218 Macquarie St- Hobart TAS 7000", state: "TAS", upfrontFee: 1110, annualFee: 12908 },
        { id: 114, name: "The Hutchins School", address: "71 Nelson Rd- Sandy Bay TAS 7005", state: "TAS", upfrontFee: 1610, annualFee: 13400 },
        { id: 115, name: "St Mary's College, Hobart", address: "164 Harrington St- Hobart TAS 7000", state: "TAS", upfrontFee: 0, annualFee: 3958 },
        { id: 116, name: "Launceston Chruch Grammar School", address: "36 Button St- Mowbray TAS 7248", state: "TAS", upfrontFee: 100, annualFee: 12900 },
        { id: 117, name: "Launceston Christian School", address: " 452A W Tamar Hwy- Riverside TAS 7250", state: "TAS", upfrontFee: 1300, annualFee: 4802 }
    ];

    $scope.privateSchoolObjects_NSW = [{ id: 0, name: "Sydney Grammar School Darlinghurst", address: "College St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 5489, annualFee: 32644 },
        { id: 1, name: "PLC Sydney", address: "Boundary St- Croydon NSW 2132", state: "NSW", upfrontFee: 3415, annualFee: 24411 },
        { id: 2, name: "SCEGGS Darlinghurst", address: "215 Forbes St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 4950, annualFee: 28348 },
        { id: 3, name: "The Scotts College Sydney", address: "Victoria Rd- Bellevue Hill NSW 2023", state: "NSW", upfrontFee: 5500, annualFee: 33925 },
        { id: 4, name: "Pymble Ladies College", address: "Avon Rd- Pymble NSW 2073", state: "NSW", upfrontFee: 3430, annualFee: 24002 },
        { id: 5, name: "Ascham School", address: "188 New South Head Rd- Edgecliff- NSW 2027", state: "NSW", upfrontFee: 6300, annualFee: 32000 },
        { id: 6, name: "Abbotsleigh", address: "1666 Pacific Highway- Wahroonga- NSW 2076", state: "NSW", upfrontFee: 1970, annualFee: 28640 },
        { id: 7, name: "St Aloysius College", address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia", state: "NSW", upfrontFee: 2650, annualFee: 16278 },
        { id: 8, name: "Meridan School", address: "10-12 Redmyre Road- Strathfield NSW 2135", state: "NSW", upfrontFee: 1825, annualFee: 28340 },
        { id: 9, name: "Sydney Church of England Grammar School (SHORE)", address: "Blue Street- North Sydney- NSW- 2060- Australia", state: "NSW", upfrontFee: 2400, annualFee: 24126 },
        { id: 10, name: "Cranbrook School", address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia", state: "NSW", upfrontFee: 7300, annualFee: 28325 },
        { id: 11, name: "Knox Grammar School", address: "7 Woodville Ave- Wahroonga 2076 NSW Australia", state: "NSW", upfrontFee: 3000, annualFee: 29430 },
        { id: 12, name: "The Kings School", address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA", state: "NSW", upfrontFee: 3850, annualFee: 25345 },
        { id: 13, name: "ST Ignatius' College", address: "1 Tambourine Bay Road- NSW Lane Cove", state: "NSW", upfrontFee: 4530, annualFee: 23880 },
        { id: 14, name: "St Joseph's College", address: "Mark Street- Hunters Hill- NSW 2110", state: "NSW", upfrontFee: 3300, annualFee: 29040 },
        { id: 15, name: "Loreto Normanhurst", address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076", state: "NSW", upfrontFee: 3330, annualFee: 19179 },
        { id: 16, name: "Loreto Kirribilli", address: "85 Carabella Street- Kirribilli NSW 2061- Australia", state: "NSW", upfrontFee: 3220, annualFee: 15645 },
        { id: 17, name: "Queenswood School for Girls", address: "47 Mandolong Rd- Mosman NSW 2088", state: "NSW", upfrontFee: 4220, annualFee: 25171 },
        { id: 18, name: "Roseville College", address: "27 Bancroft Avenue Roseville NSW 2069 Australia", state: "NSW", upfrontFee: 1220, annualFee: 20735 },
        { id: 19, name: "Parramatta Marist High School", address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145", state: "NSW", upfrontFee: 1220, annualFee: 4473 },
        { id: 20, name: "Barker College", address: "91 Pacific Highway Hornsby NSW 2077", state: "NSW", upfrontFee: 3800, annualFee: 25140 }
    ];
    $scope.privateSchoolObjects_VIC = [{ id: 21, name: "Ruyton Girls' School, Kew.", address: "12 Selbourne Rd- Kew VIC 3101", state: "VIC", upfrontFee: 1610, annualFee: 22360 },
        { id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: "3 Hood Cres- Caulfield VIC 3161", state: "VIC", upfrontFee: 1100, annualFee: 25518 },
        { id: 23, name: "Fintona Girls' School, Balwyn.", address: "79 Balwyn Rd- Balwyn VIC 3103", state: "VIC", upfrontFee: 1150, annualFee: 20399 },
        { id: 24, name: "Lauriston Girls' School, Aramadale.", address: "38 Huntingtower Rd- Armadale VIC 3143", state: "VIC", upfrontFee: 1100, annualFee: 27160 },
        { id: 25, name: "Loreto Mandeville Hall, Toorak.", address: "10 Mandeville Cres- Toorak VIC 3142", state: "VIC", upfrontFee: 1900, annualFee: 22398 },
        { id: 26, name: "Prebyterian Ladies' College, Burwood.", address: "141 Burwood Hwy- Burwood VIC 3125", state: "VIC", upfrontFee: 1300, annualFee: 23479 },
        { id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: " 2 Torrington St- Canterbury VIC 3126", state: "VIC", upfrontFee: 1100, annualFee: 19051 },
        { id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: "86 Anderson St- South Yarra VIC 3141", state: "VIC", upfrontFee: 1650, annualFee: 27746 },
        { id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: "11 Mentone Parade- Mentone VIC 3194", state: "VIC", upfrontFee: 1100, annualFee: 22354 },
        { id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146", state: "VIC", upfrontFee: 900, annualFee: 27138 },
        { id: 31, name: "Camberwell Grammar School, Canterbury.", address: "55 Mont Albert Rd- Canterbury VIC 3126", state: "VIC", upfrontFee: 1330, annualFee: 25600 },
        { id: 32, name: "Scotch College, Hawthorn. ", address: "1 Morrison St- Hawthorn VIC 3122", state: "VIC", upfrontFee: 1600, annualFee: 29912 },
        { id: 33, name: "Melbourne Grammar School, South Yarra.", address: "355 St Kilda Rd- Melbourne VIC 3004", state: "VIC", upfrontFee: 3900, annualFee: 24885 },
        { id: 34, name: "Caulfield Grammar School, St Kilda", address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183", state: "VIC", upfrontFee: 2100, annualFee: 23789 },
        { id: 35, name: "Haileybury College, Keysborough.", address: "855 Springvale Road Keysborough VIC 3173", state: "VIC", upfrontFee: 2500, annualFee: 24702 },
        { id: 36, name: "Xavier College, Kew.", address: "135 Barkers Road- Melbourne- Kew- Victoria", state: "VIC", upfrontFee: 945, annualFee: 21957 },
        { id: 37, name: "Trinity Grammar School, Kew.", address: "40 Charles St- Kew- Melbourne Victoria 3101", state: "VIC", upfrontFee: 2360, annualFee: 26349 },
        { id: 38, name: "St Kevin's College, Toorak.", address: "31 Moonga Rd- Toorak VIC 3142", state: "VIC", upfrontFee: 3000, annualFee: 16290 },
        { id: 39, name: "Brighton Grammar School, Brighton", address: "90 Outer Cres- Brighton VIC 3186", state: "VIC", upfrontFee: 2200, annualFee: 25247 },
        { id: 40, name: "Firbank Grammar School, Brighton", address: "51 Outer Crescent- Brighton VIC 3186", state: "VIC", upfrontFee: 1100, annualFee: 24769 },
        { id: 41, name: "St Leonard's College, Brighton East.", address: "163 South Road- Brighton East VIC 3187", state: "VIC", upfrontFee: 1800, annualFee: 23415 }
    ];
    $scope.privateSchoolObjects_QLD = [{ id: 42, name: "Brisbane Grammar School", address: "24 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2550, annualFee: 23000 },
        { id: 43, name: "Brisbane Girls Grammer School", address: "70 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2040, annualFee: 22520 },
        { id: 44, name: "Ormiston College", address: "97 Dundas St W- Ormiston QLD 4160", state: "QLD", upfrontFee: 795, annualFee: 2527 },
        { id: 45, name: "Somerville House", address: "17 Graham St- South Brisbane QLD 4101", state: "QLD", upfrontFee: 1530, annualFee: 18292 },
        { id: 46, name: "Brisbane Boys College", address: "Kensington Terrace- Toowong QLD 4066", state: "QLD", upfrontFee: 1960, annualFee: 18434 },
        { id: 47, name: "St Aidan's Anglican Girls School", address: "11 Ruthven St- Corinda QLD 4075", state: "QLD", upfrontFee: 1300, annualFee: 17272 },
        { id: 48, name: "Anglican Church Grammar School", address: "Oaklands Parade- East Brisbane QLD 4169", state: "QLD", upfrontFee: 1930, annualFee: 18813 },
        { id: 49, name: "Clayfield College", address: "23 Gregory Street- Clayfield QLD 4011", state: "QLD", upfrontFee: 1135, annualFee: 17031 },
        { id: 50, name: "Cannon Hill Anglican College", address: "Junction Rd- Cannon Hill QLD 4170", state: "QLD", upfrontFee: 1250, annualFee: 10386 },
        { id: 51, name: "Sheldon College", address: "Taylor Road- Sheldon- QLD 4157", state: "QLD", upfrontFee: 660, annualFee: 11479 },
        { id: 52, name: "St Margarets Anglican Girls School", address: "11 Petrie St- Ascot QLD 4007", state: "QLD", upfrontFee: 1220, annualFee: 17762 },
        { id: 53, name: "Hillbrook Anglican School", address: "45 Hurdcotte Street Enoggera QLD 4051", state: "QLD", upfrontFee: 1610, annualFee: 11092 },
        { id: 54, name: "st peters lutheran college", address: "66 Harts Rd- Indooroopilly QLD 4068", state: "QLD", upfrontFee: 1100, annualFee: 15806 },
        { id: 55, name: "Moreton Bay College", address: "450 Wondall Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 12532 },
        { id: 56, name: "St Rita's College, Clayfield", address: "41 Enderley Rd- Clayfield QLD 4011", state: "QLD", upfrontFee: 1100, annualFee: 7120 },
        { id: 57, name: "The Southport School", address: "2 Winchester St- Southport QLD 4215", state: "QLD", upfrontFee: 1500, annualFee: 15030 },
        { id: 58, name: "St Joseph's College Gregory Terrace", address: "Gregory Terrace- Brisbane- QLD 4000- Australia", state: "QLD", upfrontFee: 2420, annualFee: 8215 },
        { id: 59, name: "The Lakes College", address: "2 College St- North Lakes QLD 4509", state: "QLD", upfrontFee: 500, annualFee: 8415 },
        { id: 60, name: "Redeemer Lutheran College", address: "745 Rochedale Rd- Rochedale QLD 4123", state: "QLD", upfrontFee: 700, annualFee: 8979 },
        { id: 61, name: "Moreton Bay Boys College", address: "302 Manly Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 11023 }
    ];
    $scope.privateSchoolObjects_SA = [{ id: 62, name: "Wilderness School, Medindie.", address: "30 Hawkers Rd- Medindie SA 5081", state: "SA", upfrontFee: 1050, annualFee: 18888 },
        { id: 63, name: "St Peter's College ", address: "57 Hackney Rd- Hackney SA 5069", state: "SA", upfrontFee: 2600, annualFee: 20520 },
        { id: 64, name: "St Peter's Girls Collegiate Girls' School", address: "Stonyfell Rd- Stonyfell SA 5066", state: "SA", upfrontFee: 970, annualFee: 17285 },
        { id: 65, name: "Walford Anglican School for Girls", address: "316 Unley Rd- Hyde Park SA 5061", state: "SA", upfrontFee: 1095, annualFee: 19301 },
        { id: 66, name: "Prince Alfred College", address: "23 Dequetteville Terrace- Kent Town SA 5067", state: "SA", upfrontFee: 1100, annualFee: 17319 },
        { id: 67, name: "Seymour College", address: "546 Portrush Rd- Glen Osmond SA 5064", state: "SA", upfrontFee: 1050, annualFee: 19679 },
        { id: 68, name: "Pulteney Grammar School", address: "190 South Terrace ADELAIDE SA 5000", state: "SA", upfrontFee: 850, annualFee: 18946 },
        { id: 69, name: "St Aloysius College, Adelaide", address: "53 Wakefield St- Adelaide SA 5000", state: "SA", upfrontFee: 600, annualFee: 7636 },
        { id: 70, name: "St Dominics Priory College", address: "119/139 Molesworth St- North Adelaide SA 5006", state: "SA", upfrontFee: 0, annualFee: 6674 },
        { id: 71, name: "St John's Grammar School", address: "29 Gloucester Ave- Belair SA 5052", state: "SA", upfrontFee: 688, annualFee: 11811 },
        { id: 72, name: "Woodcroft College", address: "143-173 Bains Rd- Morphett Vale SA 5162", state: "SA", upfrontFee: 755, annualFee: 6297 },
        { id: 73, name: "St Ignatious College, Adelaide", address: "2 Manresa Ct- Athelstone SA 5076", state: "SA", upfrontFee: 975, annualFee: 14013 },
        { id: 74, name: "Pedare Christian College", address: "2-30 Surrey Farm Dr- Golden Grove SA 5125", state: "SA", upfrontFee: 150, annualFee: 7502 },
        { id: 75, name: "Westminster School", address: "1-27 Alison Avenue- Marion- South Australia ", state: "SA", upfrontFee: 800, annualFee: 17932 },
        { id: 76, name: "Kings Baptist Grammar School", address: "no address", state: "SA", upfrontFee: 175, annualFee: 0 },
        { id: 77, name: "Scotch College Adelaide", address: "Carruth Road- Torrens Park South Australia 5062", state: "SA", upfrontFee: 1150, annualFee: 19668 },
        { id: 78, name: "Concordia College", address: "45 Cheltenham St- Highgate SA 5063", state: "SA", upfrontFee: 75, annualFee: 8820 },
        { id: 79, name: "Pembroke School", address: "342 The Parade- Kensington Park SA 5068", state: "SA", upfrontFee: 860, annualFee: 19690 },
        { id: 80, name: "Loreto College, Marryatville", address: "316 Portrush Rd- Marryatville SA 5068", state: "SA", upfrontFee: 745, annualFee: 14664 },
        { id: 81, name: "Trinity College, Gawler", address: "Alexander Ave- Evanston South SA 5116", state: "SA", upfrontFee: 540, annualFee: 4622 }
    ];
    $scope.privateSchoolObjects_WA = [{ id: 82, name: "Hale School", address: "160 Hale Rd- Wembley Downs WA 6019", state: "WA", upfrontFee: 8250, annualFee: 21450 },
        { id: 83, name: "Christ Church Grammar School", address: "Queenslea Dr- Claremont WA 6010", state: "WA", upfrontFee: 6700, annualFee: 23088 },
        { id: 84, name: "All Saints College", address: "Ewing Ave.- Bull Creek WA 6149", state: "WA", upfrontFee: 5423, annualFee: 16534 },
        { id: 85, name: "St Mary's Anglican Girls School", address: "75 Elliott Rd- Karrinyup WA 6018", state: "WA", upfrontFee: 5545, annualFee: 18394 },
        { id: 86, name: "St Hilda's Anglican Girls School", address: "26 Bay View Terrace- Mosman Park WA 6012", state: "WA", upfrontFee: 4959, annualFee: 20284 },
        { id: 87, name: "Presbyterian Ladies' College, Perth", address: "14 McNeil St- Peppermint Grove WA 6011", state: "WA", upfrontFee: 4950, annualFee: 20982 },
        { id: 88, name: "Perth College", address: "31 Lawley Crescent- Mount Lawley WA 6050", state: "WA", upfrontFee: 5742, annualFee: 18701 },
        { id: 89, name: "Guildford Grammar School ", address: "11 Terrace Rd- Guildford WA 6055", state: "WA", upfrontFee: 2925, annualFee: 18073 },
        { id: 90, name: "Penrhos College", address: "6 Morrison Street- Como WA 6152", state: "WA", upfrontFee: 5489, annualFee: 19442 },
        { id: 91, name: "Scotch College, Perth", address: "76 Shenton Rd- Swanbourne WA 6010", state: "WA", upfrontFee: 6687, annualFee: 23499 },
        { id: 92, name: "John XXIII College, Perth", address: "Mooro Dr- Mount Claremont WA 6010", state: "WA", upfrontFee: 2110, annualFee: 7710 },
        { id: 93, name: "Santa Maria College", address: "18 Stoneham Rd- Attadale WA 6156", state: "WA", upfrontFee: 1020, annualFee: 10521 },
        { id: 94, name: "Wesley College, Perth", address: "40 Coode St- South Perth WA 6151", state: "WA", upfrontFee: 7276, annualFee: 20001 },
        { id: 95, name: "Methodist Ladies College, Perth", address: "356 Stirling Hwy- Claremont WA 6010", state: "WA", upfrontFee: 5320, annualFee: 21203 },
        { id: 96, name: "St Marks Anglican Community School", address: "St Marks Dr- Hillarys WA 6025", state: "WA", upfrontFee: 2030, annualFee: 7251 },
        { id: 97, name: "Aquinas College, Perth", address: "58 Mount Henry Rd- Salter Point WA 6152", state: "WA", upfrontFee: 2832, annualFee: 14013 },
        { id: 98, name: "Trinity College, Perth", address: "2 Trinity Ave- East Perth WA 6004", state: "WA", upfrontFee: 2243, annualFee: 13602 },
        { id: 99, name: "Sacred Heart College", address: "Hocking Parade- Sorrento WA 6020", state: "WA", upfrontFee: 805, annualFee: 8220 },
        { id: 100, name: "Newman College Perth", address: "216 Empire Ave- Churchlands WA 6018", state: "WA", upfrontFee: 1110, annualFee: 5715 },
        { id: 101, name: "Kingsway Christian College", address: "157 Kingsway- Darch WA 6065", state: "WA", upfrontFee: 1320, annualFee: 7288 }
    ];
    $scope.privateSchoolObjects_ACT = [{ id: 102, name: "Canberra Grammar School", address: "40 Monaro Cres- Red Hill ACT 2603", state: "ACT", upfrontFee: 2975, annualFee: 18753 },
        { id: 103, name: "Radford College", address: "1 College St- Bruce ACT 2617", state: "ACT", upfrontFee: 950, annualFee: 12307 },
        { id: 104, name: "Canberra Girls Grammar School", address: "Melbourne Ave- Deakin ACT 2600", state: "ACT", upfrontFee: 150, annualFee: 16942 },
        { id: 105, name: "Burgmann Anglican School", address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291", state: "ACT", upfrontFee: 875, annualFee: 8413 },
        { id: 106, name: "Brindabella Christian College", address: "136 Brigalow St- Lyneham ACT 2602", state: "ACT", upfrontFee: 700, annualFee: 5874 },
        { id: 107, name: "Marist College", address: "27 Marr St- Pearce ACT 2607", state: "ACT", upfrontFee: 400, annualFee: 8644 },
        { id: 108, name: "Orana Steiner School", address: "Unwin Place- ACT 2611", state: "ACT", upfrontFee: 550, annualFee: 6467 },
        { id: 109, name: "Merici College", address: "Wise St- Braddon ACT 2612", state: "ACT", upfrontFee: 50, annualFee: 6277 },
        { id: 110, name: "Emmaus Christian School", address: "73 Davenport St- Dickson ACT 2602", state: "ACT", upfrontFee: 300, annualFee: 6292 }
    ];
    $scope.privateSchoolObjects_TAS = [{ id: 111, name: "The Friends School, Hobart", address: "23 Commercial Rd- North Hobart TAS 7000", state: "TAS", upfrontFee: 1200, annualFee: 14254 },
        { id: 112, name: "Fahan School", address: "Fisher Avenue- Lower Sandy Bay TAS 7005", state: "TAS", upfrontFee: 2100, annualFee: 12412 },
        { id: 113, name: "St Michael's Collegiate School", address: "218 Macquarie St- Hobart TAS 7000", state: "TAS", upfrontFee: 1110, annualFee: 12908 },
        { id: 114, name: "The Hutchins School", address: "71 Nelson Rd- Sandy Bay TAS 7005", state: "TAS", upfrontFee: 1610, annualFee: 13400 },
        { id: 115, name: "St Mary's College, Hobart", address: "164 Harrington St- Hobart TAS 7000", state: "TAS", upfrontFee: 0, annualFee: 3958 },
        { id: 116, name: "Launceston Chruch Grammar School", address: "36 Button St- Mowbray TAS 7248", state: "TAS", upfrontFee: 100, annualFee: 12900 },
        { id: 117, name: "Launceston Christian School", address: " 452A W Tamar Hwy- Riverside TAS 7250", state: "TAS", upfrontFee: 1300, annualFee: 4802 }
    ];


    $scope.publicSchoolObjects = [{ id: 0, name: 'James Ruse Agricultural High School', annualFee: 2150 },
        { id: 1, name: ' North Sydney Girls High School', annualFee: 1600 },
        { id: 2, name: ' North Sydney Boys High School', annualFee: 1820 },
        { id: 3, name: ' Sydney Girls High School', annualFee: 2100 },
        { id: 4, name: ' Sydney Boys High School', annualFee: 2368 },
        { id: 5, name: ' Baulkham Hills High School', annualFee: 1000 },
        { id: 6, name: ' Hornsby Girls High School', annualFee: 1100 },
        { id: 7, name: ' Northern Beaches Secondary College(Manly Selective)', annualFee: 1400 },
        { id: 8, name: ' Normanhurst Boys High School', annualFee: 1000 },
        { id: 9, name: ' Melbourne High School(Selective)', annualFee: 2900 },
        { id: 10, name: ' Mac.Robertson Girls’ High School(Selective)', annualFee: 1600 },
        { id: 11, name: ' Nossal High School(Selective)', annualFee: 2000 },
        { id: 12, name: ' Suzanne Cory High School(Selective)', annualFee: 1600 },
        { id: 13, name: ' Box Hill High School', annualFee: 625 },
        { id: 14, name: ' The University High School', annualFee: 520 },
        { id: 15, name: ' Balwyn High School', annualFee: 520 },
        { id: 16, name: ' Mansfield State High School', annualFee: 500 },
        { id: 17, name: ' Indooroopilly State High School', annualFee: 400 },
        { id: 18, name: ' Kelvin Grove State College', annualFee: 350 },
        { id: 19, name: ' The Gap State High School', annualFee: 600 },
        { id: 20, name: ' Cavendish Road State High School', annualFee: 500 },
        { id: 21, name: ' Kenmore State High School', annualFee: 500 },
        { id: 22, name: ' Mount Gravatt State High School', annualFee: 500 },
        { id: 23, name: ' Brisbane State High School', annualFee: 573 },
        { id: 24, name: ' Centenary State High School', annualFee: 400 },
        { id: 25, name: ' Stretton State College', annualFee: 390 },
        { id: 26, name: ' Perth Modern School', annualFee: 1200 },
        { id: 27, name: ' Shenton College', annualFee: 1000 },
        { id: 28, name: ' Rossmoyne Senior High School', annualFee: 850 },
        { id: 29, name: ' Willetton Senior High School', annualFee: 900 },
        { id: 30, name: ' John Curtin College of the Arts', annualFee: 1150 },
        { id: 31, name: ' Churchlands Senior High School', annualFee: 1000 },
        { id: 32, name: ' Applecross Senior High School', annualFee: 800 },
        { id: 33, name: ' Mount Lawley Senior High School', annualFee: 900 },
        { id: 34, name: ' Carine Senior High School', annualFee: 800 },
        { id: 35, name: ' Duncraig Senior High School', annualFee: 900 },
        { id: 36, name: ' Glenunga International High School', annualFee: 805 },
        { id: 37, name: ' Marryatville High School', annualFee: 820 },
        { id: 38, name: ' Adelaide High School', annualFee: 890 },
        { id: 39, name: ' Mitcham Girls High School', annualFee: 700 },
        { id: 40, name: ' Norwood Morialta High School', annualFee: 800 },
        { id: 41, name: ' Open Access College', annualFee: 560 },
        { id: 42, name: ' Narrabundah College', annualFee: 500 },
        { id: 43, name: ' Gungahlin College', annualFee: 300 },
        { id: 44, name: ' Canberra College', annualFee: 350 },
        { id: 45, name: ' Hawker College', annualFee: 310 },
        { id: 46, name: ' Lake Tuggeranong College', annualFee: 330 },
        { id: 47, name: ' Erindale College', annualFee: 300 },
        { id: 48, name: ' UC Senior Secondary College Lake Ginninderra', annualFee: 410 },
        { id: 49, name: ' Hellyer College', annualFee: 390 },
        { id: 50, name: ' Elizabeth College', annualFee: 390 },
        { id: 51, name: ' The Don College', annualFee: 390 },
        { id: 52, name: ' Launceston College', annualFee: 390 },
        { id: 53, name: ' Rosny College', annualFee: 390 },
        { id: 54, name: ' Newstead College', annualFee: 390 }
    ];
    $scope.publicSchoolObjects_NSW = [{ id: 0, name: 'James Ruse Agricultural High School', annualFee: 2150 },
        { id: 1, name: ' North Sydney Girls High School', annualFee: 1600 },
        { id: 2, name: ' North Sydney Boys High School', annualFee: 1820 },
        { id: 3, name: ' Sydney Girls High School', annualFee: 2100 },
        { id: 4, name: ' Sydney Boys High School', annualFee: 2368 },
        { id: 5, name: ' Baulkham Hills High School', annualFee: 1000 },
        { id: 6, name: ' Hornsby Girls High School', annualFee: 1100 },
        { id: 7, name: ' Northern Beaches Secondary College(Manly Selective)', annualFee: 1400 },
        { id: 8, name: ' Normanhurst Boys High School', annualFee: 1000 },
        { id: 9, name: ' Melbourne High School(Selective)', annualFee: 2900 }
    ];
    $scope.publicSchoolObjects_VIC = [{ id: 9, name: ' Melbourne High School(Selective)', annualFee: 2900 },
        { id: 10, name: ' Mac.Robertson Girls’ High School(Selective)', annualFee: 1600 },
        { id: 11, name: ' Nossal High School(Selective)', annualFee: 2000 },
        { id: 12, name: ' Suzanne Cory High School(Selective)', annualFee: 1600 },
        { id: 13, name: ' Box Hill High School', annualFee: 625 },
        { id: 14, name: ' The University High School', annualFee: 520 },
        { id: 15, name: ' Balwyn High School', annualFee: 520 }
    ];
    $scope.publicSchoolObjects_QLD = [{ id: 16, name: ' Mansfield State High School', annualFee: 500 },
        { id: 17, name: ' Indooroopilly State High School', annualFee: 400 },
        { id: 18, name: ' Kelvin Grove State College', annualFee: 350 },
        { id: 19, name: ' The Gap State High School', annualFee: 600 },
        { id: 20, name: ' Cavendish Road State High School', annualFee: 500 },
        { id: 21, name: ' Kenmore State High School', annualFee: 500 },
        { id: 22, name: ' Mount Gravatt State High School', annualFee: 500 },
        { id: 23, name: ' Brisbane State High School', annualFee: 573 },
        { id: 24, name: ' Centenary State High School', annualFee: 400 },
        { id: 25, name: ' Stretton State College', annualFee: 390 }
    ];
    $scope.publicSchoolObjects_SA = [{ id: 36, name: ' Glenunga International High School', annualFee: 805 },
        { id: 37, name: ' Marryatville High School', annualFee: 820 },
        { id: 38, name: ' Adelaide High School', annualFee: 890 },
        { id: 39, name: ' Mitcham Girls High School', annualFee: 700 },
        { id: 40, name: ' Norwood Morialta High School', annualFee: 800 },
        { id: 41, name: ' Open Access College', annualFee: 560 }
    ];
    $scope.publicSchoolObjects_WA = [{ id: 26, name: ' Perth Modern School', annualFee: 1200 },
        { id: 27, name: ' Shenton College', annualFee: 1000 },
        { id: 28, name: ' Rossmoyne Senior High School', annualFee: 850 },
        { id: 29, name: ' Willetton Senior High School', annualFee: 900 },
        { id: 30, name: ' John Curtin College of the Arts', annualFee: 1150 },
        { id: 31, name: ' Churchlands Senior High School', annualFee: 1000 },
        { id: 32, name: ' Applecross Senior High School', annualFee: 800 },
        { id: 33, name: ' Mount Lawley Senior High School', annualFee: 900 },
        { id: 34, name: ' Carine Senior High School', annualFee: 800 },
        { id: 35, name: ' Duncraig Senior High School', annualFee: 900 }
    ];
    $scope.publicSchoolObjects_ACT = [{ id: 42, name: ' Narrabundah College', annualFee: 500 },
        { id: 43, name: ' Gungahlin College', annualFee: 300 },
        { id: 44, name: ' Canberra College', annualFee: 350 },
        { id: 45, name: ' Hawker College', annualFee: 310 },
        { id: 46, name: ' Lake Tuggeranong College', annualFee: 330 },
        { id: 47, name: ' Erindale College', annualFee: 300 },
        { id: 48, name: ' UC Senior Secondary College Lake Ginninderra', annualFee: 410 }
    ];
    $scope.publicSchoolObjects_TAS = [{ id: 49, name: ' Hellyer College', annualFee: 390 },
        { id: 50, name: ' Elizabeth College', annualFee: 390 },
        { id: 51, name: ' The Don College', annualFee: 390 },
        { id: 52, name: ' Launceston College', annualFee: 390 },
        { id: 53, name: ' Rosny College', annualFee: 390 },
        { id: 54, name: ' Newstead College', annualFee: 390 }
    ];

    $scope.stateListOb = [{ id: 0, name: "NSW" },
        { id: 1, name: "VIC" },
        { id: 2, name: "QLD" },
        { id: 3, name: "SA" },
        { id: 4, name: "WA" },
        { id: 5, name: "ACT" },
        { id: 6, name: "TAS" }
    ];


    $scope.diffSchoolOption = false;

    $scope.eductionOptionOb = [{ id: 0, name: "Select from the list of high schools in the living state." },
        { id: 1, name: "If you cannot find a matching high school in the list,please estimate the annual school fee here." }
    ];

    $scope.schoolTypeOb = [{ id: 0, name: "Private School" },
        { id: 1, name: "Public School" }
    ];

    $scope.schoolObjectsShow = $scope.privateSchoolObjects_NSW;
    $scope.stateListOb = [{ id: 0, name: "NSW" },
        { id: 1, name: "VIC" },
        { id: 2, name: "QLD" },
        { id: 3, name: "SA" },
        { id: 4, name: "WA" },
        { id: 5, name: "ACT" },
        { id: 6, name: "TAS" }
    ];


    $('.spEducationOption').on('change', function() {
        var spEducationOption = $('.spEducationOption option:selected').val();
        if (Number(spEducationOption) == 0) {
            $scope.diffSchoolOption = false;
        } else {
            $scope.diffSchoolOption = true;
        }
        // console.log(" $scope.diffSchoolOption", $scope.diffSchoolOption);
        $timeout(0);
    });

    $('.spState').on('change', function() {
        schoolOperation();
    });
    $('.spSchoolType').on('change', function() {
        schoolOperation();
    });

    $('.spSchool').on('change', function() {
        var spSchool = $('.spSchool option:selected').val();
        if (Number($('.spSchoolType option:selected').val()) == 0) {
            $scope.educationExpensePerYearPerChild = $scope.privateSchoolObjects[spSchool].annualFee;
        } else {
            $scope.educationExpensePerYearPerChild = $scope.publicSchoolObjects[spSchool].annualFee;
        }
        // console.log("educationExpensePerYearPerChildSchool", $scope.privateSchoolObjects[spSchool].name);
    });

    function schoolOperation() {
        spState = $('.spState option:selected').val();
        spSchoolType = $('.spSchoolType option:selected').val()

        if (Number(spSchoolType) == 0) {
            switch (Number(spState)) {
                case 0:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_NSW;
                    });
                    break;
                case 1:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_VIC;
                    });
                    break;
                case 2:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_QLD;
                    });
                    break;
                case 3:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_SA;
                    });
                    break;
                case 4:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_WA;
                    });
                    break;
                case 5:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_ACT;
                    });
                    break;
                case 6:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.privateSchoolObjects_TAS;
                    });
                    break;
            };
        } else {
            switch (Number(spState)) {
                case 0:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_NSW;
                    });
                    break;
                case 1:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_VIC;
                    });
                    break;
                case 2:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_QLD;
                    });
                    break;
                case 3:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_SA;
                    });
                    break;
                case 4:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_WA;
                    });
                    break;
                case 5:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_ACT;
                    });
                    break;
                case 6:
                    $scope.$apply(function() {
                        $scope.schoolObjectsShow = $scope.publicSchoolObjects_TAS;
                    });
                    break;
            };
        }
        // console.log("sel", $scope.schoolObjectsShow);
        $('.spSchool').selectpicker('refresh');
        $timeout(0);
    }



    $scope.personalDetails = {
        firstName: "Dexter",
        lastName: "Payne",
        email: "dexter@gmail.com",
        mobile: 412121212,
        postalCode: 1234
    };
    $scope.forms = {};
    $scope.grossAnnualIncome = 120000;
    $scope.homeMortgage = 500000;
    $scope.investmentPropertyMortgage = 0;
    $scope.creditCardDebt = 2000;
    $scope.carLoan = 20000;
    $scope.personalLoan = 0;
    $scope.otherLoan = 0;
    $scope.homeValue = 800000;
    $scope.cashAtBank = 20000;
    $scope.otherInvestment = 20000;
    $scope.superBalance = 100000;
    $scope.ecLife = 250000;
    $scope.ecTPD = 0;
    $scope.ecIP = 0;
    $scope.ecTrauma = 0;
    $scope.numChildren = 2;
    $scope.funeralCost = 20000;
    $scope.educationExpensePerYearPerChild = $scope.privateSchoolObjects[0].annualFee;
    $scope.familyLivingCostPerYear = 90000;
    $scope.inflation = 2;
    $scope.rateOfReturn = 5;
    $scope.moneyToBeBorrowed = 400000;
    $scope.valueOfNewProperty = 500000;
    $scope.ageSpouse = 47;
    $scope.spouseSalary = 50000;
    $scope.ageChildren1 = 3;
    $scope.ageChildren2 = 5;
    $scope.ageChildren3 = 10;
    $scope.ageChildren4 = 10;
    $scope.ageChildren5 = 10;
    $scope.ageChildren6 = 10;
    $scope.ageChildren7 = 10;
    $scope.ageChildren8 = 10;


    $scope.genderOption = true;
    $scope.spouseOption = true;
    $scope.smokeOption = false;
    $scope.spouseWorkOption = true;
    $scope.buyOption = true;

    $scope.isMenuDrop1 = false;
    $scope.isMenuDrop2 = true;
    $scope.isMenuDrop3 = true;
    $scope.isMenuDrop4 = true;
    $scope.isMenuDrop5 = true;
    $scope.isMenuDrop6 = false;

    $scope.next1 = false;
    $scope.next2 = false;
    $scope.next3 = false;
    $scope.next4 = false;
    $scope.next5 = false;

    $scope.sickLeaves = 10;

    $scope.lifeOptions = [
        { id: 0, name: 'personal' },
        { id: 1, name: 'super' }
    ];

    $('.sp1').on('change', function() {
        selected1 = $('.sp1 option:selected').val();
        $scope.netReturn = $scope.investOptions[selected1];
    });

    $scope.calculateWaitingPeriod = function(leaves) {
        if (leaves <= 30) {
            return 30;
        }
        if (leaves > 30 && leaves <= 60) {
            return 60;
        }
        if (leaves > 60) {
            return 90;
        }
    }

    $scope.waitingPeriod = $scope.calculateWaitingPeriod($scope.sickLeaves);

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $scope.spouseOptionChange = function(spouse) {
        $scope.spouseOption = spouse;
        //$scope.buyOption = false;
        // calculateFinal();
    }

    $scope.buyOptionChange = function(buy) {
        $scope.buyOption = buy;
        // calculateFinal();
    }

    $scope.workOptionChange = function(works) {
        $scope.spouseWorkOption = works;
        // calculateFinal();
    }

    $scope.menuDrop1 = function() {
        $scope.isMenuDrop1 = $scope.isMenuDrop1 ? false : true;
    }
    $scope.menuDrop2 = function() {
        $scope.isMenuDrop2 = $scope.isMenuDrop2 ? false : true;
    }
    $scope.menuDrop3 = function() {
        $scope.isMenuDrop3 = $scope.isMenuDrop3 ? false : true;
    }
    $scope.menuDrop4 = function() {
        $scope.isMenuDrop4 = $scope.isMenuDrop4 ? false : true;
    }
    $scope.menuDrop5 = function() {
        $scope.isMenuDrop5 = $scope.isMenuDrop5 ? false : true;
    }
    $scope.menuDrop6 = function() {
        $scope.isMenuDrop6 = $scope.isMenuDrop6 ? false : true;
    }

    $(".form-1").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop1 && $scope.next1) {
            $scope.isMenuDrop2 = false;
            $timeout(0);
            $scope.next1 = false;
        }
    });
    $(".form-2").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop2 && $scope.next2) {
            $scope.isMenuDrop3 = false;
            $timeout(0);
            $scope.next2 = false;
        }
    });
    $(".form-3").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop3 && $scope.next3) {
            $scope.isMenuDrop4 = false;
            $timeout(0);
            $scope.next3 = false;
        }
    });
    $(".form-4").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop4 && $scope.next4) {
            $scope.isMenuDrop5 = false;
            $timeout(0);
            $scope.next4 = false;
        }
    });
    $(".form-5").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        if ($scope.isMenuDrop5 && $scope.next5) {
            $scope.isMenuDrop6 = false;
            $timeout(0);
            $scope.next5 = false;
        }
    });




    $scope.nextDiv = function(div_num) {
        switch (div_num) {
            case 1:
                $scope.isMenuDrop1 = true;
                $scope.next1 = true;
                //setTimeout(function() { $scope.isMenuDrop2=$scope.isMenuDrop2?false:true; console.log("kart");}, 1000);
                break;
            case 2:
                $scope.isMenuDrop2 = true;
                $scope.next2 = true;
                break;
            case 3:
                $scope.isMenuDrop3 = true;
                $scope.next3 = true;
                break;
            case 4:
                $scope.isMenuDrop4 = true;
                $scope.next4 = true;
                break;
            case 5:
                $scope.isMenuDrop5 = true;
                $scope.next5 = true;
                break;
            case 6:
                $scope.isMenuDrop6 = true;

        }
    }
    var initDate = new Date();
    initDate.setYear(1967);
    initDate.setMonth(6);
    initDate.setDate(1);
    $scope.dob = initDate;

    $scope.infoShow = function(value) {
        if (value) {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "visible";
            document.getElementsByClassName("information-overlay")[0].style.zIndex = "9999";
            document.getElementsByClassName("information-overlay")[0].style.position = "inline-block";
            document.getElementsByClassName("information-overlay")[0].style.height = "" + (document.getElementsByClassName("otrp-calculator")[0].clientHeight - 10) + "px";
        } else {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "hidden";
        }
    }

    $scope.firstDP = function() {
        $scope.dateOptions.maxDate = new Date(1998, 11, 31);
        $scope.dateOptions.minDate = new Date(1950, 0, 1);
        console.log("firstDp", $scope.dateOptions.minDate);
    }

    $scope.secondDp = function() {
        delete $scope.dateOptions.maxDate;
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
        $scope.firstDP();
    };

    $scope.open2 = function() {
        $scope.secondDp();
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd/MM/yyyy', 'd!/M!/yyyy'];
    $scope.format = $scope.formats[5];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    var dt = new Date();

    $scope.fy = dt.getMonth() > 5 ? dt.getFullYear() : dt.getFullYear() - 1;

    $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);


    $scope.ageChange = function() {
        var dobText = document.getElementById("dobText");
        // console.log("dobText",new Date(dobText.value));
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dob = fd;
        } else {
            $scope.dob = initDate;
        }
        $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);
        // calculateFinal();
    }




    var grossAnnualIncomeSlider = document.getElementById('grossAnnualIncomeSlider'),
        homeMortgageSlider = document.getElementById('homeMortgageSlider'),
        investmentPropertyMortgageSlider = document.getElementById('investmentPropertyMortgageSlider'),
        creditCardDebtSlider = document.getElementById('creditCardDebtSlider'),
        carLoanSlider = document.getElementById('carLoanSlider'),
        personalLoanSlider = document.getElementById('personalLoanSlider'),
        otherLoanSlider = document.getElementById('otherLoanSlider'),
        homeValueSlider = document.getElementById('homeValueSlider'),
        cashAtBankSlider = document.getElementById('cashAtBankSlider'),
        otherInvestmentSlider = document.getElementById('otherInvestmentSlider'),
        superBalanceSlider = document.getElementById('superBalanceSlider'),
        ecLifeSlider = document.getElementById('ecLifeSlider'),
        ecTPDSlider = document.getElementById('ecTPDSlider'),
        ecIPSlider = document.getElementById('ecIPSlider'),
        ecTraumaSlider = document.getElementById('ecTraumaSlider'),
        numChildrenSlider = document.getElementById('numChildrenSlider'),
        funeralCostSlider = document.getElementById('funeralCostSlider'),
        educationExpensePerYearPerChildSlider = document.getElementById('educationExpensePerYearPerChildSlider'),
        familyLivingCostPerYearSlider = document.getElementById('familyLivingCostPerYearSlider'),
        inflationSlider = document.getElementById('inflationSlider'),
        rateOfReturnSlider = document.getElementById('rateOfReturnSlider');
    valueOfNewPropertySlider = document.getElementById('valueOfNewPropertySlider'),
        moneyToBeBorrowedSlider = document.getElementById('moneyToBeBorrowedSlider');
    ageSpouseSlider = document.getElementById('ageSpouseSlider');
    spouseSalarySlider = document.getElementById('spouseSalarySlider');
    ageChildren1Slider = document.getElementById('ageChildren1Slider');
    ageChildren2Slider = document.getElementById('ageChildren2Slider');
    ageChildren3Slider = document.getElementById('ageChildren3Slider');
    ageChildren4Slider = document.getElementById('ageChildren4Slider');
    ageChildren5Slider = document.getElementById('ageChildren5Slider');

    noUiSlider.create(grossAnnualIncomeSlider, {
        start: [$scope.grossAnnualIncome],
        range: {
            'min': [0],
            'max': [600000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: 'lower'
    });

    noUiSlider.create(homeMortgageSlider, {
        start: [$scope.homeMortgage],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','

        }),
        connect: 'lower'
    });

    noUiSlider.create(investmentPropertyMortgageSlider, {
        start: [$scope.investmentPropertyMortgage],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(personalLoanSlider, {
        start: [$scope.personalLoan],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(creditCardDebtSlider, {
        start: [$scope.creditCardDebt],
        range: {
            'min': [0],
            'max': [100000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(carLoanSlider, {
        start: [$scope.carLoan],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(otherLoanSlider, {
        start: [$scope.otherLoan],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });


    noUiSlider.create(homeValueSlider, {
        start: [$scope.homeValue],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(cashAtBankSlider, {
        start: [$scope.cashAtBank],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(otherInvestmentSlider, {
        start: [$scope.otherInvestment],
        range: {
            'min': [0],
            'max': [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(superBalanceSlider, {
        start: [$scope.superBalance],
        range: {
            'min': [0],
            'max': [3000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(ecLifeSlider, {
        start: [$scope.ecLife],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(ecTPDSlider, {
        start: [$scope.ecTPD],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(ecIPSlider, {
        start: [$scope.ecIP],
        range: {
            'min': [0],
            'max': [50000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(ecTraumaSlider, {
        start: [$scope.ecTrauma],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(numChildrenSlider, {
        start: [$scope.numChildren],
        range: {
            'min': [0],
            'max': [5]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: 'lower'
    });

    noUiSlider.create(sickLeavesSlider, {
        start: [$scope.sickLeaves],
        range: {
            'min': [1],
            'max': [365]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: 'lower'
    });

    noUiSlider.create(funeralCostSlider, {
        start: [$scope.funeralCost],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(educationExpensePerYearPerChildSlider, {
        start: [$scope.educationExpensePerYearPerChild],
        range: {
            'min': [0],
            'max': [200000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(familyLivingCostPerYearSlider, {
        start: [$scope.familyLivingCostPerYear],
        range: {
            'min': [0],
            'max': [500000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(inflationSlider, {
        start: [$scope.inflation],
        range: {
            'min': [0],
            'max': [10]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });

    noUiSlider.create(rateOfReturnSlider, {
        start: [$scope.rateOfReturn],
        range: {
            'min': [0],
            'max': [50]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });

    noUiSlider.create(valueOfNewPropertySlider, {
        start: [$scope.valueOfNewProperty],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(moneyToBeBorrowedSlider, {
        start: [$scope.moneyToBeBorrowed],
        range: {
            'min': [0],
            'max': [5000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(ageSpouseSlider, {
        start: [$scope.ageSpouse],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });

    noUiSlider.create(spouseSalarySlider, {
        start: [$scope.spouseSalary],
        range: {
            'min': [0],
            'max': [2000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(ageChildren1Slider, {
        start: [$scope.ageChildren1],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });
    noUiSlider.create(ageChildren2Slider, {
        start: [$scope.ageChildren2],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });
    noUiSlider.create(ageChildren3Slider, {
        start: [$scope.ageChildren3],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });
    noUiSlider.create(ageChildren4Slider, {
        start: [$scope.ageChildren4],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });
    noUiSlider.create(ageChildren5Slider, {
        start: [$scope.ageChildren5],
        range: {
            'min': [0],
            'max': [75]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        }),
        connect: 'lower'
    });


    var ageInput = document.getElementById('ageInput'),
        grossAnnualIncomeInput = document.getElementById('grossAnnualIncomeInput'),
        homeMortgageInput = document.getElementById('homeMortgageInput'),
        investmentPropertyMortgageInput = document.getElementById('investmentPropertyMortgageInput'),
        creditCardDebtInput = document.getElementById('creditCardDebtInput'),
        carLoanInput = document.getElementById('carLoanInput'),
        personalLoanInput = document.getElementById('personalLoanInput'),
        otherLoanInput = document.getElementById('otherLoanInput'),
        homeValueInput = document.getElementById('homeValueInput'),
        cashAtBankInput = document.getElementById('cashAtBankInput'),
        otherInvestmentInput = document.getElementById('otherInvestmentInput'),
        superBalanceInput = document.getElementById('superBalanceInput'),
        ecLifeInput = document.getElementById('ecLifeInput'),
        ecTPDInput = document.getElementById('ecTPDInput'),
        ecIPInput = document.getElementById('ecIPInput'),
        ecTraumaInput = document.getElementById('ecTraumaInput'),
        numChildrenInput = document.getElementById('numChildrenInput'),
        funeralCostInput = document.getElementById('funeralCostInput'),
        educationExpensePerYearPerChildInput = document.getElementById('educationExpensePerYearPerChildInput'),
        familyLivingCostPerYearInput = document.getElementById('familyLivingCostPerYearInput'),
        inflationInput = document.getElementById('inflationInput'),
        rateOfReturnInput = document.getElementById('rateOfReturnInput');
    valueOfNewPropertyInput = document.getElementById('valueOfNewPropertyInput'),
        moneyToBeBorrowedInput = document.getElementById('moneyToBeBorrowedInput'),
        ageSpouseInput = document.getElementById('ageSpouseInput'),
        spouseSalaryInput = document.getElementById('spouseSalaryInput');
    ageChildren1Input = document.getElementById('ageChildren1Input'),
        ageChildren2Input = document.getElementById('ageChildren2Input'),
        ageChildren3Input = document.getElementById('ageChildren3Input'),
        ageChildren4Input = document.getElementById('ageChildren4Input'),
        ageChildren5Input = document.getElementById('ageChildren5Input'),
        ageChildren6Input = document.getElementById('ageChildren6Input'),
        ageChildren7Input = document.getElementById('ageChildren7Input'),
        ageChildren8Input = document.getElementById('ageChildren8Input'),
        sickLeavesInput = document.getElementById('sickLeavesInput');

    sickLeavesInput.addEventListener("change", function() {
        sickLeavesSlider.noUiSlider.set($scope.sickLeaves);
    });

    inflationInput.addEventListener("change", function() {
        inflationSlider.noUiSlider.set($scope.inflation);
    });

    rateOfReturnInput.addEventListener("change", function() {
        rateOfReturnSlider.noUiSlider.set($scope.rateOfReturn);
    });

    valueOfNewPropertyInput.addEventListener("change", function() {
        valueOfNewPropertySlider.noUiSlider.set($scope.valueOfNewProperty);
    });

    moneyToBeBorrowedInput.addEventListener("change", function() {
        moneyToBeBorrowedSlider.noUiSlider.set($scope.moneyToBeBorrowed);
    });

    ageSpouseInput.addEventListener("change", function() {
        ageSpouseSlider.noUiSlider.set($scope.ageSpouse);
    });

    spouseSalaryInput.addEventListener("change", function() {
        spouseSalarySlider.noUiSlider.set($scope.spouseSalary);
    });

    ageChildren1Input.addEventListener("change", function() {
        ageChildren1Slider.noUiSlider.set($scope.ageChildren1);
    });

    ageChildren2Input.addEventListener("change", function() {
        ageChildren2Slider.noUiSlider.set($scope.ageChildren2);
    });

    ageChildren3Input.addEventListener("change", function() {
        ageChildren3Slider.noUiSlider.set($scope.ageChildren3);
    });

    ageChildren4Input.addEventListener("change", function() {
        ageChildren4Slider.noUiSlider.set($scope.ageChildren4);
    });

    ageChildren5Input.addEventListener("change", function() {
        ageChildren5Slider.noUiSlider.set($scope.ageChildren5);
    });

    homeMortgageInput.addEventListener("change", function() {
        homeMortgageSlider.noUiSlider.set($scope.homeMortgage);
    });

    investmentPropertyMortgageInput.addEventListener("change", function() {
        investmentPropertyMortgageSlider.noUiSlider.set($scope.investmentPropertyMortgage);
    });

    creditCardDebtInput.addEventListener("change", function() {
        creditCardDebtSlider.noUiSlider.set($scope.creditCardDebt);
    });

    carLoanInput.addEventListener("change", function() {
        carLoanSlider.noUiSlider.set($scope.carLoan);
    });

    personalLoanInput.addEventListener("change", function() {
        personalLoanSlider.noUiSlider.set($scope.personalLoan);
    });

    otherLoanInput.addEventListener("change", function() {
        otherLoanSlider.noUiSlider.set($scope.otherLoan);
    });

    homeValueInput.addEventListener("change", function() {
        homeValueSlider.noUiSlider.set($scope.homeValue);
    });

    cashAtBankInput.addEventListener("change", function() {
        cashAtBankSlider.noUiSlider.set($scope.cashAtBank);
    });

    otherInvestmentInput.addEventListener("change", function() {
        otherInvestmentSlider.noUiSlider.set($scope.otherInvestment);
    });

    superBalanceInput.addEventListener("change", function() {
        superBalanceSlider.noUiSlider.set($scope.superBalance);
    });

    ecLifeInput.addEventListener("change", function() {
        ecLifeSlider.noUiSlider.set($scope.ecLife);
    });

    ecTPDInput.addEventListener("change", function() {
        ecTPDSlider.noUiSlider.set($scope.ecTPD);
    });

    ecIPInput.addEventListener("change", function() {
        ecIPSlider.noUiSlider.set($scope.ecIP);
    });

    ecTraumaInput.addEventListener("change", function() {
        ecTraumaSlider.noUiSlider.set($scope.ecTrauma);
    });

    funeralCostInput.addEventListener("change", function() {
        funeralCostSlider.noUiSlider.set($scope.funeralCost);
    });

    educationExpensePerYearPerChildInput.addEventListener("change", function() {
        educationExpensePerYearPerChildSlider.noUiSlider.set($scope.educationExpensePerYearPerChild);
    });

    familyLivingCostPerYearInput.addEventListener("change", function() {
        familyLivingCostPerYearSlider.noUiSlider.set($scope.familyLivingCostPerYear);
    });

    grossAnnualIncomeInput.addEventListener("change", function() {
        grossAnnualIncomeSlider.noUiSlider.set($scope.grossAnnualIncome);
    });

    function noChildren(num) {
        for (var i = 1; i <= num; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'block';
        }
        for (var i = (num + 1); i <= 5; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'none';
        }
    }

    grossAnnualIncomeSlider.noUiSlider.on('update', function(values, handle) {
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
    });

    sickLeavesSlider.noUiSlider.on('update', function(values, handle) {
        sickLeavesInput.value = values[handle];
        $scope.sickLeaves = (values[handle]);
    });

    homeMortgageSlider.noUiSlider.on('update', function(values, handle) {
        homeMortgageInput.value = values[handle];
        $scope.homeMortgage = (values[handle]);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('update', function(values, handle) {
        investmentPropertyMortgageInput.value = values[handle];
        $scope.investmentPropertyMortgage = (values[handle]);
    });

    creditCardDebtSlider.noUiSlider.on('update', function(values, handle) {
        creditCardDebtInput.value = values[handle];
        $scope.creditCardDebt = (values[handle]);
    });

    carLoanSlider.noUiSlider.on('update', function(values, handle) {
        carLoanInput.value = values[handle];
        $scope.carLoan = (values[handle]);
    });

    personalLoanSlider.noUiSlider.on('update', function(values, handle) {
        personalLoanInput.value = values[handle];
        $scope.personalLoan = (values[handle]);
    });

    otherLoanSlider.noUiSlider.on('update', function(values, handle) {
        otherLoanInput.value = values[handle];
        $scope.otherLoan = (values[handle]);
    });

    homeValueSlider.noUiSlider.on('update', function(values, handle) {
        homeValueInput.value = values[handle];
        $scope.homeValue = (values[handle]);
    });

    cashAtBankSlider.noUiSlider.on('update', function(values, handle) {
        cashAtBankInput.value = values[handle];
        $scope.cashAtBank = (values[handle]);
    });

    otherInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
    });

    superBalanceSlider.noUiSlider.on('update', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
    });

    ecLifeSlider.noUiSlider.on('update', function(values, handle) {
        ecLifeInput.value = values[handle];
        $scope.ecLife = (values[handle]);
    });

    ecTPDSlider.noUiSlider.on('update', function(values, handle) {
        ecTPDInput.value = values[handle];
        $scope.ecTPD = (values[handle]);
    });

    ecIPSlider.noUiSlider.on('update', function(values, handle) {
        ecIPInput.value = values[handle];
        $scope.ecIP = (values[handle]);
    });

    ecTraumaSlider.noUiSlider.on('update', function(values, handle) {
        ecTraumaInput.value = values[handle];
        $scope.ecTrauma = (values[handle]);
    });

    numChildrenSlider.noUiSlider.on('update', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = Number(values[handle]);
        noChildren($scope.numChildren);
    });


    funeralCostSlider.noUiSlider.on('update', function(values, handle) {
        funeralCostInput.value = values[handle];
        $scope.funeralCost = (values[handle]);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('update', function(values, handle) {
        educationExpensePerYearPerChildInput.value = values[handle];
        $scope.educationExpensePerYearPerChild = (values[handle]);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('update', function(values, handle) {
        familyLivingCostPerYearInput.value = values[handle];
        $scope.familyLivingCostPerYear = (values[handle]);
    });

    inflationSlider.noUiSlider.on('update', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
    });

    rateOfReturnSlider.noUiSlider.on('update', function(values, handle) {
        rateOfReturnInput.value = values[handle];
        $scope.rateOfReturn = (values[handle]);
    });

    valueOfNewPropertySlider.noUiSlider.on('update', function(values, handle) {
        valueOfNewPropertyInput.value = values[handle];
        $scope.valueOfNewProperty = (values[handle]);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('update', function(values, handle) {
        moneyToBeBorrowedInput.value = values[handle];
        $scope.moneyToBeBorrowed = (values[handle]);
    });

    ageSpouseSlider.noUiSlider.on('update', function(values, handle) {
        ageSpouseInput.value = values[handle];
        $scope.ageSpouse = (values[handle]);
    });

    spouseSalarySlider.noUiSlider.on('update', function(values, handle) {
        spouseSalaryInput.value = values[handle];
        $scope.spouseSalary = (values[handle]);
    });

    ageChildren1Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren1Input.value = values[handle];
        $scope.ageChildren1 = Number(values[handle]);
    });
    ageChildren2Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren2Input.value = values[handle];
        $scope.ageChildren2 = Number(values[handle]);
    });
    ageChildren3Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren3Input.value = values[handle];
        $scope.ageChildren3 = Number(values[handle]);
    });
    ageChildren4Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren4Input.value = values[handle];
        $scope.ageChildren4 = Number(values[handle]);
    });
    ageChildren5Slider.noUiSlider.on('update', function(values, handle) {
        ageChildren5Input.value = values[handle];
        $scope.ageChildren5 = Number(values[handle]);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set($scope.numChildren);
        noChildren($scope.numChildren);
    })


    grossAnnualIncomeSlider.noUiSlider.on('set', function(values, handle) {
        grossAnnualIncomeInput.value = values[handle];
        $scope.grossAnnualIncome = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    sickLeavesSlider.noUiSlider.on('set', function(values, handle) {
        sickLeavesInput.value = values[handle];
        $scope.sickLeaves = (values[handle]);
        $scope.waitingPeriod = $scope.calculateWaitingPeriod($scope.sickLeaves);
        //calculateFinal();
        $timeout(0);
    });

    homeMortgageSlider.noUiSlider.on('set', function(values, handle) {
        homeMortgageInput.value = values[handle];
        $scope.homeMortgage = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    investmentPropertyMortgageSlider.noUiSlider.on('set', function(values, handle) {
        investmentPropertyMortgageInput.value = values[handle];
        $scope.investmentPropertyMortgage = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    creditCardDebtSlider.noUiSlider.on('set', function(values, handle) {
        creditCardDebtInput.value = values[handle];
        $scope.creditCardDebt = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    carLoanSlider.noUiSlider.on('set', function(values, handle) {
        carLoanInput.value = values[handle];
        $scope.carLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    personalLoanSlider.noUiSlider.on('set', function(values, handle) {
        personalLoanInput.value = values[handle];
        $scope.personalLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    otherLoanSlider.noUiSlider.on('set', function(values, handle) {
        otherLoanInput.value = values[handle];
        $scope.otherLoan = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    homeValueSlider.noUiSlider.on('set', function(values, handle) {
        homeValueInput.value = values[handle];
        $scope.homeValue = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    cashAtBankSlider.noUiSlider.on('set', function(values, handle) {
        cashAtBankInput.value = values[handle];
        $scope.cashAtBank = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    otherInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        otherInvestmentInput.value = values[handle];
        $scope.otherInvestment = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    superBalanceSlider.noUiSlider.on('set', function(values, handle) {
        superBalanceInput.value = values[handle];
        $scope.superBalance = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ecLifeSlider.noUiSlider.on('set', function(values, handle) {
        ecLifeInput.value = values[handle];
        $scope.ecLife = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ecTPDSlider.noUiSlider.on('set', function(values, handle) {
        ecTPDInput.value = values[handle];
        $scope.ecTPD = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ecIPSlider.noUiSlider.on('set', function(values, handle) {
        ecIPInput.value = values[handle];
        $scope.ecIP = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ecTraumaSlider.noUiSlider.on('set', function(values, handle) {
        ecTraumaInput.value = values[handle];
        $scope.ecTrauma = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    numChildrenSlider.noUiSlider.on('set', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    funeralCostSlider.noUiSlider.on('set', function(values, handle) {
        funeralCostInput.value = values[handle];
        $scope.funeralCost = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    educationExpensePerYearPerChildSlider.noUiSlider.on('set', function(values, handle) {
        educationExpensePerYearPerChildInput.value = values[handle];
        $scope.educationExpensePerYearPerChild = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    familyLivingCostPerYearSlider.noUiSlider.on('set', function(values, handle) {
        familyLivingCostPerYearInput.value = values[handle];
        $scope.familyLivingCostPerYear = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    inflationSlider.noUiSlider.on('set', function(values, handle) {
        inflationInput.value = values[handle];
        $scope.inflation = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    rateOfReturnSlider.noUiSlider.on('set', function(values, handle) {
        rateOfReturnInput.value = values[handle];
        $scope.rateOfReturn = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    valueOfNewPropertySlider.noUiSlider.on('set', function(values, handle) {
        valueOfNewPropertyInput.value = values[handle];
        $scope.valueOfNewProperty = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    moneyToBeBorrowedSlider.noUiSlider.on('set', function(values, handle) {
        moneyToBeBorrowedInput.value = values[handle];
        $scope.moneyToBeBorrowed = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    ageSpouseSlider.noUiSlider.on('set', function(values, handle) {
        ageSpouseInput.value = values[handle];
        $scope.ageSpouse = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });

    spouseSalarySlider.noUiSlider.on('set', function(values, handle) {
        spouseSalaryInput.value = values[handle];
        $scope.spouseSalary = (values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    ageChildren1Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren1Input.value = values[handle];
        $scope.ageChildren1 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren2Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren2Input.value = values[handle];
        $scope.ageChildren2 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren3Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren3Input.value = values[handle];
        $scope.ageChildren3 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren4Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren4Input.value = values[handle];
        $scope.ageChildren4 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });
    ageChildren5Slider.noUiSlider.on('set', function(values, handle) {
        ageChildren5Input.value = values[handle];
        $scope.ageChildren5 = Number(values[handle]);
        //calculateFinal();
        $timeout(0);
    });


    var grossAnnualIncome1, homeMortgage1, investmentPropertyMortgage1, creditCardDebt1, carLoan1, personalLoan1,
        otherLoan1, homeValue1, cashAtBank1, otherInvestment1, superBalance1, ecLife1, ecTPD1, ecIP1, ecTrauma1,
        funeralCost1, educationExpensePerYearPerChild1, familyLivingCostPerYear1, inflation1, rateOfReturn1,
        moneyToBeBorrowed1, valueOfNewProperty1, spouseSalary1;
    $scope.ut = true;

    $scope.calculateFinal = function(isValid) {

        if (isValid) {
            if ($scope.ut == true) {
                $scope.ut = false;
            } else {
                //schoolOperation();
            }
            grossAnnualIncome1 = Number($scope.grossAnnualIncome.replaceAll("$", "").replaceAll(",", ""));
            homeMortgage1 = Number($scope.homeMortgage.replaceAll("$", "").replaceAll(",", ""));
            investmentPropertyMortgage1 = Number($scope.investmentPropertyMortgage.replaceAll("$", "").replaceAll(",", ""));
            creditCardDebt1 = Number($scope.creditCardDebt.replaceAll("$", "").replaceAll(",", ""));
            carLoan1 = Number($scope.carLoan.replaceAll("$", "").replaceAll(",", ""));
            personalLoan1 = Number($scope.personalLoan.replaceAll("$", "").replaceAll(",", ""));
            otherLoan1 = Number($scope.otherLoan.replaceAll("$", "").replaceAll(",", ""));
            homeValue1 = Number($scope.homeValue.replaceAll("$", "").replaceAll(",", ""));
            cashAtBank1 = Number($scope.cashAtBank.replaceAll("$", "").replaceAll(",", ""));
            otherInvestment1 = Number($scope.otherInvestment.replaceAll("$", "").replaceAll(",", ""));
            superBalance1 = Number($scope.superBalance.replaceAll("$", "").replaceAll(",", ""));
            ecLife1 = Number($scope.ecLife.replaceAll("$", "").replaceAll(",", ""));
            ecTPD1 = Number($scope.ecTPD.replaceAll("$", "").replaceAll(",", ""));
            ecIP1 = Number($scope.ecIP.replaceAll("$", "").replaceAll(",", ""));
            ecTrauma1 = Number($scope.ecTrauma.replaceAll("$", "").replaceAll(",", ""));
            funeralCost1 = Number($scope.funeralCost.replaceAll("$", "").replaceAll(",", ""));
            $scope.educationExpensePerYearPerChild=$scope.educationExpensePerYearPerChild+"";
            educationExpensePerYearPerChild1 = Number($scope.educationExpensePerYearPerChild.replaceAll("$", "").replaceAll(",", ""));
            familyLivingCostPerYear1 = Number($scope.familyLivingCostPerYear.replaceAll("$", "").replaceAll(",", ""));
            inflation1 = Number($scope.inflation.replaceAll("%", "").replaceAll(",", ""));
            rateOfReturn1 = Number($scope.rateOfReturn.replaceAll("%", "").replaceAll(",", ""));
            moneyToBeBorrowed1 = Number($scope.moneyToBeBorrowed.replaceAll("$", "").replaceAll(",", ""));
            valueOfNewProperty1 = Number($scope.valueOfNewProperty.replaceAll("$", "").replaceAll(",", ""));
            spouseSalary1 = Number($scope.spouseSalary.replaceAll("$", "").replaceAll(",", ""));

            console.log("educationExpensePerYearPerChild1",educationExpensePerYearPerChild1);



            $scope.ecL = ecLife1;
            $scope.ecT = ecTPD1;
            $scope.ecI = ecIP1;
            $scope.ecTr = ecTrauma1;

            function PV(rate, periods, payment, future, type) {
                // Initialize type
                var type = (typeof type === 'undefined') ? 0 : type;

                // Evaluate rate and periods (TODO: repersonalLoanace with secure expression evaluator)
                rate = eval(rate);
                periods = eval(periods);

                // Return present value
                if (rate === 0) {
                    return -payment * periods - future;
                } else {
                    return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
                }
            }

            var PVExpenseSpouse;
            $scope.realRateOfReturn = (1 + (rateOfReturn1 / 100)) / (1 + (inflation1 / 100)) - 1;


            if (!$scope.spouseOption) {
                PVExpenseSpouse = 0;
            } else {
                if (!$scope.spouseWorkOption) {
                    PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn, 65 - $scope.ageSpouse, familyLivingCostPerYear1, 0, 0));
                } else {
                    PVExpenseSpouse = Math.abs(PV($scope.realRateOfReturn, 65 - $scope.ageSpouse, familyLivingCostPerYear1 - spouseSalary1, 0, 0));
                }
            }
            //PVExpenseSpouse=1243994.6;
            var PVExpenseChildren = 0;
            var ageChild = [$scope.ageChildren1, $scope.ageChildren2, $scope.ageChildren3, $scope.ageChildren4, $scope.ageChildren5]

            if ($scope.numChildren == 0) {
                PVExpenseChildren = 0;
            } else {

                for (var i = 0; i < $scope.numChildren; i++) {
                    var temp = Math.abs(PV($scope.realRateOfReturn, 25 - ageChild[i], educationExpensePerYearPerChild1, 0, 0));

                    PVExpenseChildren = PVExpenseChildren + temp;
                }
            }
            // PVExpenseChildren=80156.1983032635+74793.54924005;

            $scope.D34 = Math.pow(1 + rateOfReturn1 / 100, Number((100 / 1200).toFixed(2))) - 1;
            $scope.saleProceeds = homeValue1 - homeMortgage1;


            //ScenarioOneInputs
            var sAssets = cashAtBank1 + otherInvestment1 + superBalance1;
            var sLiability = homeMortgage1 + investmentPropertyMortgage1 + creditCardDebt1 +
                carLoan1 + personalLoan1 + otherLoan1;
            var PVExpenseLife = PVExpenseSpouse + PVExpenseChildren + funeralCost1;
            var PVExpenseTPD = PVExpenseLife - funeralCost1;
            var IP1 = Number(((grossAnnualIncome1 * 0.75) / 12).toFixed(2));
            var IP2 = Math.abs(PV($scope.D34, (65 - $scope.age) * 12, IP1, 0, 0));
            var Trauma1 = 225000;
            var Trauma2 = Math.abs(PV($scope.D34, 24, 0.25 * grossAnnualIncome1 / 12, 0, 0));

            $scope.resultS1 = calculateResult(sAssets, sLiability, PVExpenseLife, PVExpenseTPD, IP1, IP2, Trauma1, Trauma2, ecLife1, ecTPD1, ecIP1, ecTrauma1);


            //ScenarioTwo
            var additionalAssets;
            if (moneyToBeBorrowed1 + $scope.saleProceeds > valueOfNewProperty1) {
                additionalAssets = moneyToBeBorrowed1 + $scope.saleProceeds - valueOfNewProperty1;
            } else {
                additionalAssets = 0;
            }
            var s2Assets = cashAtBank1 + otherInvestment1 + superBalance1 + additionalAssets;
            var s2Liability = investmentPropertyMortgage1 + creditCardDebt1 +
                carLoan1 + personalLoan1 + otherLoan1 + moneyToBeBorrowed1;
            var PVExpenseLife2 = PVExpenseSpouse + PVExpenseChildren;
            var PVExpenseTPD2 = PVExpenseLife2;

            $scope.resultS2 = calculateResult(s2Assets, s2Liability, PVExpenseLife2, PVExpenseTPD2, IP1, IP2, Trauma1, Trauma2, ecLife1, ecTPD1, ecIP1, ecTrauma1);

            function calculateResult(asset, liability, PVExpenseLife, PVExpenseTPD, IP1, IP2, Trauma1, Trauma2, ecLife, ecTPD, ecIP, ecTrauma) {
                var requiredLifeCover = PVExpenseLife + liability - asset;
                var requiredTPDCover = PVExpenseTPD + liability - asset - IP2;
                var requiredIPCover = IP1;
                var requiredTraumaCover = Trauma1 + Trauma2;
                return {
                    life: requiredLifeCover,
                    TPD: requiredTPDCover,
                    IP: requiredIPCover,
                    trauma: requiredTraumaCover,
                    waiting: 30
                };
            };
            // console.log("Result 1", $scope.resultS1);
            // console.log("Result 2", $scope.resultS2);

            $scope.resultTemp = $scope.buyOption ? $scope.resultS2 : $scope.resultS1;

            $scope.needLife1 = $scope.resultS1.life >= ecLife1 ? true : false;

            $scope.needLife2 = $scope.resultS2.life >= ecLife1 ? true : false;

            $scope.sfLife1 = Math.abs($scope.resultS1.life - ecLife1);

            $scope.sfLife2 = Math.abs($scope.resultS2.life - ecLife1);

            $scope.needTPD1 = $scope.resultS1.TPD >= ecTPD1 ? true : false;

            $scope.needTPD2 = $scope.resultS2.TPD >= ecTPD1 ? true : false;

            $scope.sfTPD1 = Math.abs($scope.resultS1.TPD - ecTPD1);

            $scope.sfTPD2 = Math.abs($scope.resultS2.TPD - ecTPD1);

            $scope.needIP1 = $scope.resultS1.IP >= ecIP1 ? true : false;

            $scope.needIP2 = $scope.resultS2.IP >= ecIP1 ? true : false;

            $scope.sfIP1 = Math.abs($scope.resultS1.IP - ecIP1);

            $scope.sfIP2 = Math.abs($scope.resultS2.IP - ecIP1);

            $scope.needTrauma1 = $scope.resultS1.trauma >= ecTrauma1 ? true : false;

            $scope.needTrauma2 = $scope.resultS2.trauma >= ecTrauma1 ? true : false;

            $scope.sfTrauma1 = Math.abs($scope.resultS1.trauma - ecTrauma1);

            $scope.sfTrauma2 = Math.abs($scope.resultS2.trauma - ecTrauma1);

            if ($scope.buyOption) {
                document.getElementById("containerS").style.display = 'none';
                document.getElementById("containerB").style.display = 'block';
                ChartServiceHc.createChart('#containerB', 'Death Cover', ecLife1, $scope.resultS1.life, $scope.resultS2.life, false, true);
                ChartServiceHc.createChart('#containerR', 'Death Cover', ecLife1, $scope.resultS1.life, $scope.resultS2.life, true, true);
            } else {
                document.getElementById("containerB").style.display = 'none';
                document.getElementById("containerS").style.display = 'block';
                ChartServiceHc.createChart('#containerS', 'Death Cover', ecLife1, $scope.resultS1.life, {}, false, false);
                ChartServiceHc.createChart('#containerR', 'Death Cover', ecLife1, $scope.resultS1.life, {}, true, false);
            }

            if ($scope.buyOption) {
                document.getElementById("containerS2").style.display = 'none';
                document.getElementById("containerB2").style.display = 'block';
                ChartServiceHc.createChart('#containerB2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, $scope.resultS2.TPD, false, true);
                ChartServiceHc.createChart('#containerR2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, $scope.resultS2.TPD, true, true);
            } else {
                document.getElementById("containerB2").style.display = 'none';
                document.getElementById("containerS2").style.display = 'block';
                ChartServiceHc.createChart('#containerS2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, {}, false, false);
                ChartServiceHc.createChart('#containerR2', 'TPD Cover', ecTPD1, $scope.resultS1.TPD, {}, true, false);
            }

            if ($scope.buyOption) {
                document.getElementById("containerS3").style.display = 'none';
                document.getElementById("containerB3").style.display = 'block';
                ChartServiceHc.createChart('#containerB3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, $scope.resultS2.IP, false, true);
                ChartServiceHc.createChart('#containerR3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, $scope.resultS2.IP, true, true);
            } else {
                document.getElementById("containerB3").style.display = 'none';
                document.getElementById("containerS3").style.display = 'block';
                ChartServiceHc.createChart('#containerS3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, {}, false, false);
                ChartServiceHc.createChart('#containerR3', 'Income Protection Cover', ecIP1, $scope.resultS1.IP, {}, true, false);
            }

            if ($scope.buyOption) {
                document.getElementById("containerS4").style.display = 'none';
                document.getElementById("containerB4").style.display = 'block';
                ChartServiceHc.createChart('#containerB4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, $scope.resultS2.trauma, false, true);
                ChartServiceHc.createChart('#containerR4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, $scope.resultS2.trauma, true, true);
            } else {
                document.getElementById("containerB4").style.display = 'none';
                document.getElementById("containerS4").style.display = 'block';
                ChartServiceHc.createChart('#containerS4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, {}, false, false);
                ChartServiceHc.createChart('#containerR4', 'Trauma Cover', ecTrauma1, $scope.resultS1.trauma, {}, true, false);
            }
        } else {
            $scope.isMenuDrop1 = false;
            $scope.isMenuDrop2 = true;
            $scope.isMenuDrop3 = true;
            $scope.isMenuDrop4 = true;
            $scope.isMenuDrop5 = true;
            $scope.isMenuDrop6 = false;
            $timeout(0);

            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    }
    $scope.calculateFinal(true);

    document.getElementById("download").addEventListener("click", function() {
        if ($scope.forms.ttrForm.$valid) {

            var personalDetailsObject = {
                firstName: $scope.personalDetails.firstName,
                lastName: $scope.personalDetails.lastName,
                email: $scope.personalDetails.email,
                mobile: $scope.personalDetails.mobile,
                address: $scope.personalDetails.address,
                postalCode: $scope.personalDetails.postalCode,
                dob: $scope.dob,
                age: $scope.age,
                genderOption: $scope.genderOption,
                spouseOption: $scope.spouseOption,
                numChildren: $scope.numChildren,
            };

            var liabilitiesObject = {
                homeMortgage: homeMortgage1,
                investmentPropertyMortgage: investmentPropertyMortgage1,
                creditCardDebt: creditCardDebt1,
                carLoan: carLoan1,
                personalLoan: personalLoan1,
                otherLoan: otherLoan1
            };

            var assetsObject = {
                homeValue: homeValue1,
                cashAtBank: cashAtBank1,
                otherInvestment: otherInvestment1,
                superBalance: superBalance1
            };

            var otherExpenses = {
                funeralCost: funeralCost1,
                educationExpense: educationExpensePerYearPerChild1,
                familyLivingCost: familyLivingCostPerYear1,
                moveProperty: $scope.buyOption ? "Yes" : "No",
                newPropertyValue: valueOfNewProperty1,
                moneyBorrowed: moneyToBeBorrowed1,
                saleProceeds: $scope.saleProceeds
            };

            var existingCovers = {
                ecLife: ecLife1,
                ecTPD: ecTPD1,
                ecIP: ecIP1,
                ecTrauma: ecTrauma1
            };

            var assumptions = {
                inflation: inflation1,
                rateOfReturn: rateOfReturn1,
                realRate: $scope.realRateOfReturn
            }

            if ($scope.buyOption) {
                PdfMaker.createChart(personalDetailsObject, assetsObject, liabilitiesObject, otherExpenses, existingCovers, assumptions, $scope.resultS1, $scope.resultS2, $scope.buyOption, $scope.waitingPeriod);
            } else {
                PdfMaker.createChart(personalDetailsObject, assetsObject, liabilitiesObject, otherExpenses, existingCovers, assumptions, $scope.resultS1, {}, $scope.buyOption, $scope.waitingPeriod);

            }
        } else {
            $("#myModal").modal('show');
        }
    });

    $(".print-doc").on("click", function() {
        if ($scope.forms.ttrForm.$valid) {
            print();
        } else {
            $("#myModal").modal('show');
        }
    })


}]);
