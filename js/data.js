/*
 * Format:
 *
 *  {
 *      "School": [
 *          {
 *              "code": "Building Code",
 *              "name": "Building Name",
 *              "tips": [
 *                  "Building Tips",
 *                  ...
 *              ],
 *              "link": "Maps/Geo Link"
 *          },
 *          ...
 *      ],
 *      ...
 *  }
 */

// Building data.
const data = {

    "Purdue University": [
        {
            "code": "LAMB",
            "name": "Ward L. Lambert Field House & Gymnasium",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "ARMS",
            "name": "Neil Armstrong Hall of Engineering",
            "tips": [
                "Lobby on 1st & Ground Floors",
                "Nooks at Ends"
            ],
            "link": ""
        },
        {
            "code": "HAMP",
            "name": "Delon & Elizabeth Hampton Hall of Civil Engineering",
            "tips": [
                "Lobbies",
                "Green Roof Available"
            ],
            "link": ""
        },
        {
            "code": "FRNY",
            "name": "Forney Hall of Chemical Engineering",
            "tips": [
                "Giant Open Space in Center"
            ],
            "link": ""
        },
        {
            "code": "RHPH",
            "name": "Robert E. Heine Pharmacy Building",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "JNSN",
            "name": "Helen R. Johnson Hall of Nursing",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "PHYS",
            "name": "Physics Building",
            "tips": [
                "Student Commons on 1st Floor"
            ],
            "link": ""
        },
        {
            "code": "WANG",
            "name": "Seng-Liang Wang Hall",
            "tips": [
                "5th Floor is all Study/Work Areas"
            ],
            "link": ""
        },
        {
            "code": "MSEE",
            "name": "Materials and Electrical Engineering",
            "tips": [
                "Lobby on 1st Floor",
                "Tables on 2nd Floor"
            ],
            "link": ""
        },
        {
            "code": "BHEE",
            "name": "Max W. & Maileen Brown Family Hall",
            "tips": [
                "Open Areas at Elevators"
            ],
            "link": ""
        },
        {
            "code": "ME",
            "name": "Mechanical Engineering Building",
            "tips": [
                "Lobby on 1st Floor",
                "Tables on 2nd Floor"
            ],
            "link": ""
        },
        {
            "code": "CHAS",
            "name": "Chaney-Hale Hall of Science",
            "tips": [
                "Tables & Collab Areas on All Floors"
            ],
            "link": ""
        },
        {
            "code": "WALC",
            "name": "Thomas S. & Harvey D. Wilmeth Active Learning Center",
            "tips": [
                "Study Rooms on 3rd Floor"
            ],
            "link": ""
        },
        {
            "code": "LMBS",
            "name": "Lambertus Hall (FKA: Gateway, Same as DUDL)",
            "tips": [
                "Open Spaces on Most Floors",
                "Nooks at Ends"
            ],
            "link": ""
        },
        {
            "code": "DUDL",
            "name": "Dudley Hall (FKA: Gateway, Same as LMBS)",
            "tips": [
                "Open Spaces on Most Floors",
                "Nooks at Ends"
            ],
            "link": ""
        },
        {
            "code": "KNOY",
            "name": "Marice G. Knoy Hall of Technology",
            "tips": [
                "Study Spaces on 3rd & 4th Floors"
            ],
            "link": ""
        },
        {
            "code": "WTHR",
            "name": "Richart B. Wetherill Lab. of Chemistry (Linked to BRWN)",
            "tips": [
                "Lobby on 2nd Floor",
                "Study Nook on 1st Floor"
            ],
            "link": ""
        },
        {
            "code": "BRWN",
            "name": "Herbert C. Brown Lab. of Chemistry (Linked to WTHR)",
            "tips": [
                "Classrooms on 2nd & 3rd Floors (After Hours)"
            ],
            "link": ""
        },
        {
            "code": "HEAV",
            "name": "Heavilon Hall",
            "tips": [
                "Classrooms on 2nd & 4th Floors (After Hours)"
            ],
            "link": ""
        },
        {
            "code": "GRIS",
            "name": "Grissom Hall (GRIS)",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "STEW",
            "name": "Stewart Center",
            "tips": [
                "HSSE Library",
                "Study Spaces on Ground & Lower"
            ],
            "link": ""
        },
        {
            "code": "HIKS",
            "name": "John W. Hicks Undergraduate Library",
            "tips": [
                "Study Rooms",
                "Computer Labs",
                "Open Spaces"
            ],
            "link": ""
        },
        {
            "code": "PMU",
            "name": "Purdue Memorial Union",
            "tips": [
                "Tables Ground, 1st, & Second Floors"
            ],
            "link": ""
        },
        {
            "code": "RAWL",
            "name": "Jerry S. Rawls Hall",
            "tips": [
                "Nooks all Floors",
                "Open Area on 2nd Floor"
            ],
            "link": ""
        },
        {
            "code": "KRAN",
            "name": "Krannert Building",
            "tips": [
                "Lobbies on 1st and Some Other Floors"
            ],
            "link": ""
        },
        {
            "code": "YONG",
            "name": "Ernest C. Young Hall",
            "tips": [
                "Lobbies on 1st and Some Other Floors"
            ],
            "link": ""
        },
        {
            "code": "DAUC",
            "name": "Dick & Sandy Dauch Alumni Center",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "PAO",
            "name": "Yue-Kong Pao Hall of Visual & Performing Arts",
            "tips": [
                "Small Areas Available"
            ],
            "link": ""
        },
        {
            "code": "PSYC",
            "name": "Psychological Sciences Building",
            "tips": [
                "Nooks in Some Places"
            ],
            "link": ""
        },
        {
            "code": "PRCE",
            "name": "Pierce Hall",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "SC",
            "name": "Stanley Coulter Hall",
            "tips": [
                "Space on Ground Floor"
            ],
            "link": ""
        },
        {
            "code": "SCHM",
            "name": "Helen B. Schleman Hall (FKA: Recitation Hall)",
            "tips": [
                "Most Classrooms Open (After Hours)"
            ],
            "link": ""
        },
        {
            "code": "UNIV",
            "name": "Unversity Hall",
            "tips": [
                "Most Classrooms Open (After Hours)"
            ],
            "link": ""
        },
        {
            "code": "STON",
            "name": "Winthrop E. Stone Hall",
            "tips": [
                "Lobby & Student Space on 1st Floor"
            ],
            "link": ""
        },
        {
            "code": "BRNG",
            "name": "Steven C. Beering Hall of Liberal Arts & Education",
            "tips": [
                "Areas on Some Floors",
                "Tables on Ground Floor"
            ],
            "link": ""
        },
        {
            "code": "MTHW",
            "name": "Matthews Hall",
            "tips": [
                "Tables in Lobby on 1st Floor"
            ],
            "link": ""
        },
        {
            "code": "MRRT",
            "name": "Marriott Hall",
            "tips": [
                "Tables in Lobby on 1st Floor"
            ],
            "link": ""
        },
        {
            "code": "LWSN",
            "name": "Richard & Patricia Lawson Computer Science Building",
            "tips": [
                "Open Area on 1st Floor",
                "Patio on 3rd Floor"
            ],
            "link": ""
        },
        {
            "code": "HAAS",
            "name": "Felix Haas Hall",
            "tips": [
                "May Have Classrooms Open (After Hours)"
            ],
            "link": ""
        },
        {
            "code": "MATH",
            "name": "Mathematical Sciences Building",
            "tips": [
                "MATH Library",
                "Daytime Lobbies"
            ],
            "link": ""
        },
        {
            "code": "PFEN",
            "name": "David C. Pfendler Hall of Agriculture",
            "tips": [
                "Lobby on 1st Floor",
                "Table & Couches on 2nd Floor"
            ],
            "link": ""
        },
        {
            "code": "NLSN",
            "name": "Philip E. Nelson Hall of Food Science",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "LYNN",
            "name": "Charles J. Lynn Hall of Veterinary Medicine",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "LYLE",
            "name": "Lyles-Porter Hall",
            "tips": [
                "Some Open Spaces",
                "Nook on 4th Floor"
            ],
            "link": ""
        },
        {
            "code": "CRTN",
            "name": "Hobart & Russel Creigton Hall of Animal Sciences",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "HLAB",
            "name": "Herrick Laboratories",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "ABE",
            "name": "Agricultural and Biological Eningineering",
            "tips": [
                "Lobby on 1st Floor",
                "Conference Rooms"
            ],
            "link": ""
        },
        {
            "code": "DRUG",
            "name": "Drug Discovery Facility",
            "tips": [
                "Lobby on 1st Floor",
                "Porch on 3rd Floor"
            ],
            "link": ""
        },
        {
            "code": "LILY",
            "name": "Lily Hall of Life Sciences",
            "tips": [
                "Lobby on 1st Floor"
            ],
            "link": ""
        },
        {
            "code": "MJIS",
            "name": "Martin C. Jischke Hall of Biomedical Engineering",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "HOCK",
            "name": "Hockmeter Hall of Structural Biology",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "DLR",
            "name": "Hall for Discovery and Learning Research",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "FLEX",
            "name": "Flex Laboratories",
            "tips": [
                "Spaces on All Floors (May be Locked)"
            ],
            "link": ""
        },
        {
            "code": "MANN",
            "name": "Gerald D. and Edna E. Mann Hall",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "BIND",
            "name": "Bindley Bioscience Center",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "MRGN",
            "name": "Burton D. Morgan Center for Entrepreneurship",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        },
        {
            "code": "KRCH",
            "name": "Krach Leadership Center",
            "tips": [
                "Lobby on 1st Floor",
                "Spaces on All Floors"
            ],
            "link": ""
        },
        {
            "code": "NISW",
            "name": "Niswonger Aviation Technology Building",
            "tips": [
                "No tips for this building."
            ],
            "link": ""
        }
    ]

}