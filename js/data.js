/*
 * Format:
 *
 *  {
 *      "School": [
 *          [ "CODE", "Building Name", "Tips (Optional)" ],
 *          ...
 *      ],
 *      ...
 *  }
 */

// Building data.
const data = {

    "Purdue University": [
        [ "LAMB", "Ward L. Lambert Field House & Gymnasium"                                                                        ],
        [ "ARMS", "Neil Armstrong Hall of Engineering",                         "Lobby on 1st & Ground Floors; Nooks at Ends"      ],
        [ "HAMP", "Delon & Elizabeth Hampton Hall of Civil Engineering",        "Lobbies; Green Roof Available"                    ],
        [ "FRNY", "Forney Hall of Chemical Engineering",                        "Giant Open Space in Center"                       ],
        [ "RHPH", "Robert E. Heine Pharmacy Building"                                                                              ],
        [ "JNSN", "Helen R. Johnson Hall of Nursing"                                                                               ],
        [ "PHYS", "Physics Building",                                           "Student Commons on 1st Floor"                     ],
        [ "WANG", "Seng-Liang Wang Hall",                                       "5th Floor is all Study/Work Areas"                ],
        [ "MSEE", "Materials and Electrical Engineering",                       "Lobby on 1st Floor; Tables on 2nd Floor"          ],
        [ "BHEE", "Max W. & Maileen Brown Family Hall",                         "Open Areas at Elevators"                          ],
        [ "ME"  , "Mechanical Engineering Building",                            "Lobby on 1st Floor; Tables on 2nd Floor"          ],
        [ "CHAS", "Chaney-Hale Hall of Science",                                "Tables & Collab Areas on All Floors"              ],
        [ "WALC", "Thomas S. & Harvey D. Wilmeth Active Learning Center",       "Study Rooms on 3rd Floor"                         ],
        [ "LMBS", "Lambertus Hall (FKA: Gateway, Same as DUDL)",                "Open Spaces on Most Floors; Nooks at Ends"        ],
        [ "DUDL", "Dudley Hall (FKA: Gateway, Same as LMBS)",                   "Open Spaces on Most Floors; Nooks at Ends"        ],
        [ "KNOY", "Marice G. Knoy Hall of Technology",                          "Study Spaces on 3rd & 4th Floors"                 ],
        [ "WTHR", "Richart B. Wetherill Lab. of Chemistry (Linked to BRWN)",    "Lobby on 2nd Floor; Study Nook on 1st Floor"      ],
        [ "BRWN", "Herbert C. Brown Lab. of Chemistry (Linked to WTHR)",        "Classrooms on 2nd & 3rd Floors (After Hours)"     ],
        [ "HEAV", "Heavilon Hall",                                              "Classrooms on 2nd & 4th Floors (After Hours)"     ],
        [ "GRIS", "Grissom Hall (GRIS)"                                                                                            ],
        [ "STEW", "Stewart Center",                                             "HSSE Library; Study Spaces on Ground & Lower"     ],
        [ "HIKS", "John W. Hicks Undergraduate Library",                        "Study Rooms; Computer Labs; Open Spaces"          ],
        [ "PMU" , "Purdue Memorial Union",                                      "Tables Ground, 1st, & Second Floors"              ],
        [ "RAWL", "Jerry S. Rawls Hall",                                        "Nooks all Floors; Open Area on 2nd Floor"         ],
        [ "KRAN", "Krannert Building",                                          "Lobbies on 1st and Some Other Floors"             ],
        [ "YONG", "Ernest C. Young Hall",                                       "Lobbies on 1st and Some Other Floors"             ],
        [ "DAUC", "Dick & Sandy Dauch Alumni Center"                                                                               ],
        [ "PAO" , "Yue-Kong Pao Hall of Visual & Performing Arts",              "Small Areas Available"                            ],
        [ "PSYC", "Psychological Sciences Building",                            "Nooks in Some Places"                             ],
        [ "PRCE", "Pierce Hall"                                                                                                    ],
        [ "SC"  , "Stanley Coulter Hall",                                       "Space on Ground Floor"                            ],
        [ "SCHM", "Helen B. Schleman Hall (FKA: Recitation Hall)",              "Most Classrooms Open (After Hours)"               ],
        [ "UNIV", "Unversity Hall",                                             "Most Classrooms Open (After Hours)"               ],
        [ "STON", "Winthrop E. Stone Hall",                                     "Lobby & Student Space on 1st Floor"               ],
        [ "BRNG", "Steven C. Beering Hall of Liberal Arts & Education",         "Areas on Some Floors; Tables on Ground Floor"     ],
        [ "MTHW", "Matthews Hall",                                              "Tables in Lobby on 1st Floor"                     ],
        [ "MRRT", "Marriott Hall",                                              "Tables in Lobby on 1st Floor"                     ],
        [ "LWSN", "Richard & Patricia Lawson Computer Science Building",        "Open Area on 1st Floor; Patio on 3rd Floor"       ],
        [ "HAAS", "Felix Haas Hall",                                            "May Have Classrooms Open (After Hours)"           ],
        [ "MATH", "Mathematical Sciences Building",                             "MATH Library; Daytime Lobbies"                    ],
        [ "PFEN", "David C. Pfendler Hall of Agriculture",                      "Lobby on 1st Floor; Table & Couches on 2nd Floor" ],
        [ "NLSN", "Philip E. Nelson Hall of Food Science"                                                                          ],
        [ "LYNN", "Charles J. Lynn Hall of Veterinary Medicine"                                                                    ],
        [ "LYLE", "Lyles-Porter Hall",                                          "Some Open Spaces; Nook on 4th Floor"              ],
        [ "CRTN", "Hobart & Russel Creigton Hall of Animal Sciences"                                                               ],
        [ "HLAB", "Herrick Laboratories"                                                                                           ],
        [ "ABE" , "Agricultural and Biological Eningineering",                  "Lobby on 1st Floor; Conference Rooms"             ],
        [ "DRUG", "Drug Discovery Facility",                                    "Lobby on 1st Floor; Porch on 3rd Floor"           ],
        [ "LILY", "Lily Hall of Life Sciences",                                 "Lobby on 1st Floor"                               ],
        [ "MJIS", "Martin C. Jischke Hall of Biomedical Engineering"                                                               ],
        [ "HOCK", "Hockmeter Hall of Structural Biology"                                                                           ],
        [ "DLR" , "Hall for Discovery and Learning Research"                                                                       ],
        [ "FLEX", "Flex Laboratories",                                          "Spaces on All Floors (May be Locked)"             ],
        [ "MANN", "Gerald D. and Edna E. Mann Hall"                                                                                ],
        [ "BIND", "Bindley Bioscience Center"                                                                                      ],
        [ "MRGN", "Burton D. Morgan Center for Entrepreneurship"                                                                   ],
        [ "KRCH", "Krach Leadership Center",                                    "Lobby on 1st Floor; Spaces on All Floors"         ],
        [ "NISW", "Niswonger Aviation Technology Building"                                                                         ]
    ]

}