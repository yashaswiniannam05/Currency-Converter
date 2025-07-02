const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  const info= [
        {
            "country_name": "Afghanistan",
            "country_code_alpha2": "AF",
            "country_code_alpha3": "AFG",
            "currency_symbol": "\u060b",
            "currency_code": "AFN",
            "currency_name": "Afghan afghani"
        },
        {
            "country_name": "Anguilla",
            "country_code_alpha2": "AI",
            "country_code_alpha3": "AIA",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Australia",
            "country_code_alpha2": "AU",
            "country_code_alpha3": "AUS",
            "currency_symbol": "$",
            "currency_code": "AUD",
            "currency_name": "Australian dollar"
        },
        {
            "country_name": "Bangladesh",
            "country_code_alpha2": "BD",
            "country_code_alpha3": "BGD",
            "currency_symbol": "\u09f3",
            "currency_code": "BDT",
            "currency_name": "Bangladeshi taka"
        },
        {
            "country_name": "Benin",
            "country_code_alpha2": "BJ",
            "country_code_alpha3": "BEN",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Brazil",
            "country_code_alpha2": "BR",
            "country_code_alpha3": "BRA",
            "currency_symbol": "R$",
            "currency_code": "BRL",
            "currency_name": "Brazilian real"
        },
        {
            "country_name": "Cambodia",
            "country_code_alpha2": "KH",
            "country_code_alpha3": "KHM",
            "currency_symbol": "\u17db",
            "currency_code": "KHR",
            "currency_name": "Cambodian riel"
        },
        {
            "country_name": "Chad",
            "country_code_alpha2": "TD",
            "country_code_alpha3": "TCD",
            "currency_symbol": "Fr",
            "currency_code": "XAF",
            "currency_name": "Central African CFA franc"
        },
        {
            "country_name": "Congo",
            "country_code_alpha2": "CG",
            "country_code_alpha3": "COG",
            "currency_symbol": "Fr",
            "currency_code": "XAF",
            "currency_name": "Central African CFA franc"
        },
        {
            "country_name": "Cuba",
            "country_code_alpha2": "CU",
            "country_code_alpha3": "CUB",
            "currency_symbol": "$",
            "currency_code": "CUP",
            "currency_name": "Cuban peso"
        },
        {
            "country_name": "Dominica",
            "country_code_alpha2": "DM",
            "country_code_alpha3": "DMA",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Finland",
            "country_code_alpha2": "FI",
            "country_code_alpha3": "FIN",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Georgia",
            "country_code_alpha2": "GE",
            "country_code_alpha3": "GEO",
            "currency_symbol": "\u20be",
            "currency_code": "GEL",
            "currency_name": "Georgian lari"
        },
        {
            "country_name": "Grenada",
            "country_code_alpha2": "GD",
            "country_code_alpha3": "GRD",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Haiti",
            "country_code_alpha2": "HT",
            "country_code_alpha3": "HTI",
            "currency_symbol": "G",
            "currency_code": "HTG",
            "currency_name": "Haitian gourde"
        },
        {
            "country_name": "India",
            "country_code_alpha2": "IN",
            "country_code_alpha3": "IND",
            "currency_symbol": "\u20b9",
            "currency_code": "INR",
            "currency_name": "Indian rupee"
        },
        {
            "country_name": "Israel",
            "country_code_alpha2": "IL",
            "country_code_alpha3": "ISR",
            "currency_symbol": "\u20aa",
            "currency_code": "ILS",
            "currency_name": "Israeli new sheqel"
        },
        {
            "country_name": "Kazakhstan",
            "country_code_alpha2": "KZ",
            "country_code_alpha3": "KAZ",
            "currency_symbol": "\u043b\u0432",
            "currency_code": "KZT",
            "currency_name": "Kazakhstani tenge"
        },
        {
            "country_name": "Kuwait",
            "country_code_alpha2": "KW",
            "country_code_alpha3": "KWT",
            "currency_symbol": "\u062f.\u0643",
            "currency_code": "KWD",
            "currency_name": "Kuwaiti dinar"
        },
        {
            "country_name": "Lesotho",
            "country_code_alpha2": "LS",
            "country_code_alpha3": "LSO",
            "currency_symbol": "L",
            "currency_code": "LSL",
            "currency_name": "Lesotho loti"
        },
        {
            "country_name": "Luxembourg",
            "country_code_alpha2": "LU",
            "country_code_alpha3": "LUX",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Malaysia",
            "country_code_alpha2": "MY",
            "country_code_alpha3": "MYS",
            "currency_symbol": "RM",
            "currency_code": "MYR",
            "currency_name": "Malaysian ringgit"
        },
        {
            "country_name": "Mauritius",
            "country_code_alpha2": "MU",
            "country_code_alpha3": "MUS",
            "currency_symbol": "\u20a8",
            "currency_code": "MUR",
            "currency_name": "Mauritian rupee"
        },
        {
            "country_name": "Mongolia",
            "country_code_alpha2": "MN",
            "country_code_alpha3": "MNG",
            "currency_symbol": "\u20ae",
            "currency_code": "MNT",
            "currency_name": "Mongolian tugrik"
        },
        {
            "country_name": "Myanmar",
            "country_code_alpha2": "MM",
            "country_code_alpha3": "MMR",
            "currency_symbol": "Ks",
            "currency_code": "MMK",
            "currency_name": "Myanma kyat"
        },
        {
            "country_name": "New Caledonia",
            "country_code_alpha2": "NC",
            "country_code_alpha3": "NCL",
            "currency_symbol": "Fr",
            "currency_code": "XPF",
            "currency_name": "CFP franc"
        },
        {
            "country_name": "Norway",
            "country_code_alpha2": "NO",
            "country_code_alpha3": "NOR",
            "currency_symbol": "kr",
            "currency_code": "NOK",
            "currency_name": "Norwegian krone"
        },
        {
            "country_name": "Papua New Guinea",
            "country_code_alpha2": "PG",
            "country_code_alpha3": "PNG",
            "currency_symbol": "K",
            "currency_code": "PGK",
            "currency_name": "Papua New Guinean kina"
        },
        {
            "country_name": "Portugal",
            "country_code_alpha2": "PT",
            "country_code_alpha3": "PRT",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Rwanda",
            "country_code_alpha2": "RW",
            "country_code_alpha3": "RWA",
            "currency_symbol": "Fr",
            "currency_code": "RWF",
            "currency_name": "Rwandan franc"
        },
        {
            "country_name": "Samoa (Western)",
            "country_code_alpha2": "WS",
            "country_code_alpha3": "WSM",
            "currency_symbol": "T",
            "currency_code": "WST",
            "currency_name": "Samoan tala"
        },
        {
            "country_name": "Serbia",
            "country_code_alpha2": "RS",
            "country_code_alpha3": "SRB",
            "currency_symbol": "\u0414\u0438\u043d.",
            "currency_code": "RSD",
            "currency_name": "Serbian dinar"
        },
        {
            "country_name": "Slovenia",
            "country_code_alpha2": "SI",
            "country_code_alpha3": "SVN",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Spain",
            "country_code_alpha2": "ES",
            "country_code_alpha3": "ESP",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Sweden",
            "country_code_alpha2": "SE",
            "country_code_alpha3": "SWE",
            "currency_symbol": "kr",
            "currency_code": "SEK",
            "currency_name": "Swedish krona"
        },
        {
            "country_name": "Tanzania",
            "country_code_alpha2": "TZ",
            "country_code_alpha3": "TZA",
            "currency_symbol": "TSh",
            "currency_code": "TZS",
            "currency_name": "Tanzanian shilling"
        },
        {
            "country_name": "Tunisia",
            "country_code_alpha2": "TN",
            "country_code_alpha3": "TUN",
            "currency_symbol": "\u0645\u0644\u0651\u064a\u0645",
            "currency_code": "TND",
            "currency_name": "Tunisian dinar"
        },
        {
            "country_name": "Ukraine",
            "country_code_alpha2": "UA",
            "country_code_alpha3": "UKR",
            "currency_symbol": "\u20b4",
            "currency_code": "UAH",
            "currency_name": "Ukrainian hryvnia"
        },
        {
            "country_name": "Uzbekistan",
            "country_code_alpha2": "UZ",
            "country_code_alpha3": "UZB",
            "currency_symbol": "\u043b\u0432",
            "currency_code": "UZS",
            "currency_name": "Uzbekistani som"
        },
        {
            "country_name": "Yemen",
            "country_code_alpha2": "YE",
            "country_code_alpha3": "YEM",
            "currency_symbol": "\ufdfc",
            "currency_code": "YER",
            "currency_name": "Yemeni rial"
        },
        {
            "country_name": "Algeria",
            "country_code_alpha2": "DZ",
            "country_code_alpha3": "DZA",
            "currency_symbol": "\u062f.\u062c",
            "currency_code": "DZD",
            "currency_name": "Algerian dinar"
        },
        {
            "country_name": "Argentina",
            "country_code_alpha2": "AR",
            "country_code_alpha3": "ARG",
            "currency_symbol": "$",
            "currency_code": "ARS",
            "currency_name": "Argentine peso"
        },
        {
            "country_name": "Azerbaijan",
            "country_code_alpha2": "AZ",
            "country_code_alpha3": "AZE",
            "currency_symbol": "\u043c\u0430\u043d",
            "currency_code": "AZN",
            "currency_name": "Azerbaijani manat"
        },
        {
            "country_name": "Belarus",
            "country_code_alpha2": "BY",
            "country_code_alpha3": "BLR",
            "currency_symbol": "p.",
            "currency_code": "BYN",
            "currency_name": "New Belarusian ruble"
        },
        {
            "country_name": "Bolivia",
            "country_code_alpha2": "BO",
            "country_code_alpha3": "BOL",
            "currency_symbol": "$b",
            "currency_code": "BOB",
            "currency_name": "Bolivian boliviano"
        },
        {
            "country_name": "Bulgaria",
            "country_code_alpha2": "BG",
            "country_code_alpha3": "BGR",
            "currency_symbol": "\u043b\u0432",
            "currency_code": "BGN",
            "currency_name": "Bulgarian lev"
        },
        {
            "country_name": "Canada",
            "country_code_alpha2": "CA",
            "country_code_alpha3": "CAN",
            "currency_symbol": "$",
            "currency_code": "CAD",
            "currency_name": "Canadian dollar"
        },
        {
            "country_name": "China",
            "country_code_alpha2": "CN",
            "country_code_alpha3": "CHN",
            "currency_symbol": "\u00a5",
            "currency_code": "CNY",
            "currency_name": "Chinese renminbi"
        },
        {
            "country_name": "Costa Rica",
            "country_code_alpha2": "CR",
            "country_code_alpha3": "CRI",
            "currency_symbol": "\u20a1",
            "currency_code": "CRC",
            "currency_name": "Costa Rican colon"
        },
        {
            "country_name": "Czech Republic",
            "country_code_alpha2": "CZ",
            "country_code_alpha3": "CZE",
            "currency_symbol": "K\u010d",
            "currency_code": "CZK",
            "currency_name": "Czech koruna"
        },
        {
            "country_name": "Ecuador",
            "country_code_alpha2": "EC",
            "country_code_alpha3": "ECU",
            "currency_symbol": "$",
            "currency_code": "USD",
            "currency_name": "U.S. Dollar"
        },
        {
            "country_name": "Estonia",
            "country_code_alpha2": "EE",
            "country_code_alpha3": "EST",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "French Polynesia",
            "country_code_alpha2": "PF",
            "country_code_alpha3": "PYF",
            "currency_symbol": "Fr",
            "currency_code": "XPF",
            "currency_name": "CFP franc"
        },
        {
            "country_name": "Ghana",
            "country_code_alpha2": "GH",
            "country_code_alpha3": "GHA",
            "currency_symbol": "\u20b5",
            "currency_code": "GHS",
            "currency_name": "Ghanaian cedi"
        },
        {
            "country_name": "Guinea",
            "country_code_alpha2": "GN",
            "country_code_alpha3": "GIN",
            "currency_symbol": "Fr",
            "currency_code": "GNF",
            "currency_name": "Guinean franc"
        },
        {
            "country_name": "Hong Kong",
            "country_code_alpha2": "HK",
            "country_code_alpha3": "HKG",
            "currency_symbol": "$",
            "currency_code": "HKD",
            "currency_name": "Hong Kong dollar"
        },
        {
            "country_name": "Iran, Islamic Republic of",
            "country_code_alpha2": "IR",
            "country_code_alpha3": "IRN",
            "currency_symbol": "\ufdfc",
            "currency_code": "IRR",
            "currency_name": "Iranian rial"
        },
        {
            "country_name": "Jamaica",
            "country_code_alpha2": "JM",
            "country_code_alpha3": "JAM",
            "currency_symbol": "J$",
            "currency_code": "JMD",
            "currency_name": "Jamaican dollar"
        },
        {
            "country_name": "Kiribati",
            "country_code_alpha2": "KI",
            "country_code_alpha3": "KIR",
            "currency_symbol": "$",
            "currency_code": "AUD",
            "currency_name": "Australian dollar"
        },
        {
            "country_name": "Laos",
            "country_code_alpha2": "LA",
            "country_code_alpha3": "LAO",
            "currency_symbol": "\u20ad",
            "currency_code": "LAK",
            "currency_name": "Lao kip"
        },
        {
            "country_name": "Libya",
            "country_code_alpha2": "LY",
            "country_code_alpha3": "LBY",
            "currency_symbol": "\u0644.\u062f",
            "currency_code": "LYD",
            "currency_name": "Libyan dinar"
        },
        {
            "country_name": "Macedonia (Former Yug. Rep.)",
            "country_code_alpha2": "MK",
            "country_code_alpha3": "MKD",
            "currency_symbol": "\u0434\u0435\u043d",
            "currency_code": "MKD",
            "currency_name": "Macedonian denar"
        },
        {
            "country_name": "Mali",
            "country_code_alpha2": "ML",
            "country_code_alpha3": "MLI",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Micronesia",
            "country_code_alpha2": "FM",
            "country_code_alpha3": "FSM",
            "currency_symbol": "$",
            "currency_code": "USD",
            "currency_name": "U.S. Dollar"
        },
        {
            "country_name": "Montserrat",
            "country_code_alpha2": "MS",
            "country_code_alpha3": "MSR",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Nauru",
            "country_code_alpha2": "NR",
            "country_code_alpha3": "NRU",
            "currency_symbol": "$",
            "currency_code": "AUD",
            "currency_name": "Australian dollar"
        },
        {
            "country_name": "Nicaragua",
            "country_code_alpha2": "NI",
            "country_code_alpha3": "NIC",
            "currency_symbol": "C$",
            "currency_code": "NIO",
            "currency_name": "Nicaraguan cordoba"
        },
        {
            "country_name": "Pakistan",
            "country_code_alpha2": "PK",
            "country_code_alpha3": "PAK",
            "currency_symbol": "\u20a8",
            "currency_code": "PKR",
            "currency_name": "Pakistani rupee"
        },
        {
            "country_name": "Peru",
            "country_code_alpha2": "PE",
            "country_code_alpha3": "PER",
            "currency_symbol": "S\/.",
            "currency_code": "PEN",
            "currency_name": "Peruvian nuevo sol"
        },
        {
            "country_name": "Qatar",
            "country_code_alpha2": "QA",
            "country_code_alpha3": "QAT",
            "currency_symbol": "\ufdfc",
            "currency_code": "QAR",
            "currency_name": "Qatari riyal"
        },
        {
            "country_name": "Saint Kitts and Nevis",
            "country_code_alpha2": "KN",
            "country_code_alpha3": "KNA",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Sao Tome and Principe",
            "country_code_alpha2": "ST",
            "country_code_alpha3": "STP",
            "currency_symbol": "Db",
            "currency_code": "STD",
            "currency_name": "Sao Tome and Principe dobra"
        },
        {
            "country_name": "Sierra Leone",
            "country_code_alpha2": "SL",
            "country_code_alpha3": "SLE",
            "currency_symbol": "Le",
            "currency_code": "SLL",
            "currency_name": "Sierra Leonean leone"
        },
        {
            "country_name": "Somalia",
            "country_code_alpha2": "SO",
            "country_code_alpha3": "SOM",
            "currency_symbol": "S",
            "currency_code": "SOS",
            "currency_name": "Somali shilling"
        },
        {
            "country_name": "Sudan",
            "country_code_alpha2": "SD",
            "country_code_alpha3": "SDN",
            "currency_symbol": "\u062c.\u0633.",
            "currency_code": "SDG",
            "currency_name": "Sudanese pound"
        },
        {
            "country_name": "Syria",
            "country_code_alpha2": "SY",
            "country_code_alpha3": "SYR",
            "currency_symbol": "\u00a3",
            "currency_code": "SYP",
            "currency_name": "Syrian pound"
        },
        {
            "country_name": "Togo",
            "country_code_alpha2": "TG",
            "country_code_alpha3": "TGO",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Turkmenistan",
            "country_code_alpha2": "TM",
            "country_code_alpha3": "TKM",
            "currency_symbol": "m",
            "currency_code": "TMT",
            "currency_name": "Turkmenistan manat"
        },
        {
            "country_name": "United Kingdom",
            "country_code_alpha2": "GB",
            "country_code_alpha3": "GBR",
            "currency_symbol": "\u00a3",
            "currency_code": "GBP",
            "currency_name": "British pound"
        },
        {
            "country_name": "Venezuela",
            "country_code_alpha2": "VE",
            "country_code_alpha3": "VEN",
            "currency_symbol": "Bs",
            "currency_code": "VEF",
            "currency_name": "Venezuelan bolivar"
        },
        {
            "country_name": "Andorra",
            "country_code_alpha2": "AD",
            "country_code_alpha3": "AND",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Armenia",
            "country_code_alpha2": "AM",
            "country_code_alpha3": "ARM",
            "currency_symbol": "\u058f",
            "currency_code": "AMD",
            "currency_name": "Armenian dram"
        },
        {
            "country_name": "Bahamas",
            "country_code_alpha2": "BS",
            "country_code_alpha3": "BHS",
            "currency_symbol": "$",
            "currency_code": "BSD",
            "currency_name": "Bahamian dollar"
        },
        {
            "country_name": "Belgium",
            "country_code_alpha2": "BE",
            "country_code_alpha3": "BEL",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Bosnia-Herzegovina",
            "country_code_alpha2": "BA",
            "country_code_alpha3": "BIH",
            "currency_symbol": "KM",
            "currency_code": "BAM",
            "currency_name": "Bosnia and Herzegovina konvertibilna marka"
        },
        {
            "country_name": "Burkina Faso",
            "country_code_alpha2": "BF",
            "country_code_alpha3": "BFA",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Cayman Islands",
            "country_code_alpha2": "KY",
            "country_code_alpha3": "CYM",
            "currency_symbol": "$",
            "currency_code": "KYD",
            "currency_name": "Cayman Islands dollar"
        },
        {
            "country_name": "Colombia",
            "country_code_alpha2": "CO",
            "country_code_alpha3": "COL",
            "currency_symbol": "$",
            "currency_code": "COP",
            "currency_name": "Colombian peso"
        },
        {
            "country_name": "Denmark",
            "country_code_alpha2": "DK",
            "country_code_alpha3": "DNK",
            "currency_symbol": "kr",
            "currency_code": "DKK",
            "currency_name": "Danish krone"
        },
        {
            "country_name": "Egypt",
            "country_code_alpha2": "EG",
            "country_code_alpha3": "EGY",
            "currency_symbol": "\u00a3",
            "currency_code": "EGP",
            "currency_name": "Egyptian pound"
        },
        {
            "country_name": "Ethiopia",
            "country_code_alpha2": "ET",
            "country_code_alpha3": "ETH",
            "currency_symbol": "Br",
            "currency_code": "ETB",
            "currency_name": "Ethiopian birr"
        },
        {
            "country_name": "Gabon",
            "country_code_alpha2": "GA",
            "country_code_alpha3": "GAB",
            "currency_symbol": "Fr",
            "currency_code": "XAF",
            "currency_name": "Central African CFA franc"
        },
        {
            "country_name": "Gibraltar",
            "country_code_alpha2": "GI",
            "country_code_alpha3": "GIB",
            "currency_symbol": "\u00a3",
            "currency_code": "GIP",
            "currency_name": "Gibraltar pound"
        },
        {
            "country_name": "Guinea-Bissau",
            "country_code_alpha2": "GW",
            "country_code_alpha3": "GNB",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Hungary",
            "country_code_alpha2": "HU",
            "country_code_alpha3": "HUN",
            "currency_symbol": "Ft",
            "currency_code": "HUF",
            "currency_name": "Hungarian forint"
        },
        {
            "country_name": "Iraq",
            "country_code_alpha2": "IQ",
            "country_code_alpha3": "IRQ",
            "currency_symbol": "\u0639.\u062f",
            "currency_code": "IQD",
            "currency_name": "Iraqi dinar"
        },
        {
            "country_name": "Japan",
            "country_code_alpha2": "JP",
            "country_code_alpha3": "JPN",
            "currency_symbol": "\u00a5",
            "currency_code": "JPY",
            "currency_name": "Japanese yen"
        },
        {
            "country_name": "Korea North",
            "country_code_alpha2": "KP",
            "country_code_alpha3": "PRK",
            "currency_symbol": "\u20a9",
            "currency_code": "KPW",
            "currency_name": "North Korean won"
        },
        {
            "country_name": "Latvia",
            "country_code_alpha2": "LV",
            "country_code_alpha3": "LVA",
            "currency_symbol": "Ls",
            "currency_code": "LVL",
            "currency_name": "Latvian lats"
        },
        {
            "country_name": "Liechtenstein",
            "country_code_alpha2": "LI",
            "country_code_alpha3": "LIE",
            "currency_symbol": "Fr.",
            "currency_code": "CHF",
            "currency_name": "Swiss Franc"
        },
        {
            "country_name": "Madagascar",
            "country_code_alpha2": "MG",
            "country_code_alpha3": "MDG",
            "currency_symbol": "Ar",
            "currency_code": "MGA",
            "currency_name": "Malagasy ariary"
        },
        {
            "country_name": "Malta",
            "country_code_alpha2": "MT",
            "country_code_alpha3": "MLT",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European Euro"
        },
        {
            "country_name": "Moldova",
            "country_code_alpha2": "MD",
            "country_code_alpha3": "MDA",
            "currency_symbol": "L",
            "currency_code": "MDL",
            "currency_name": "Moldovan leu"
        },
        {
            "country_name": "Morocco",
            "country_code_alpha2": "MA",
            "country_code_alpha3": "MAR",
            "currency_symbol": "\u062f.\u0645.",
            "currency_code": "MAD",
            "currency_name": "Moroccan dirham"
        },
        {
            "country_name": "Nepal",
            "country_code_alpha2": "NP",
            "country_code_alpha3": "NPL",
            "currency_symbol": "\u20a8",
            "currency_code": "NPR",
            "currency_name": "Nepalese rupee"
        },
        {
            "country_name": "Niger",
            "country_code_alpha2": "NE",
            "country_code_alpha3": "NER",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Palau",
            "country_code_alpha2": "PW",
            "country_code_alpha3": "PLW",
            "currency_symbol": "$",
            "currency_code": "USD",
            "currency_name": "U.S. Dollar"
        },
        {
            "country_name": "Philippines",
            "country_code_alpha2": "PH",
            "country_code_alpha3": "PHL",
            "currency_symbol": "\u20b1",
            "currency_code": "PHP",
            "currency_name": "Philippine peso"
        },
        {
            "country_name": "Romania",
            "country_code_alpha2": "RO",
            "country_code_alpha3": "ROU",
            "currency_symbol": "lei",
            "currency_code": "RON",
            "currency_name": "Romanian leu"
        },
        {
            "country_name": "Saint Lucia",
            "country_code_alpha2": "LC",
            "country_code_alpha3": "LCA",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Saudi Arabia",
            "country_code_alpha2": "SA",
            "country_code_alpha3": "SAU",
            "currency_symbol": "\ufdfc",
            "currency_code": "SAR",
            "currency_name": "Saudi riyal"
        },
        {
            "country_name": "Singapore",
            "country_code_alpha2": "SG",
            "country_code_alpha3": "SGP",
            "currency_symbol": "$",
            "currency_code": "SGD",
            "currency_name": "Singapore dollar"
        },
        {
            "country_name": "South Africa",
            "country_code_alpha2": "ZA",
            "country_code_alpha3": "ZAF",
            "currency_symbol": "R",
            "currency_code": "ZAR",
            "currency_name": "South African rand"
        },
        {
            "country_name": "Suriname",
            "country_code_alpha2": "SR",
            "country_code_alpha3": "SUR",
            "currency_symbol": "$",
            "currency_code": "SRD",
            "currency_name": "Surinamese dollar"
        },
        {
            "country_name": "Taiwan",
            "country_code_alpha2": "TW",
            "country_code_alpha3": "TWN",
            "currency_symbol": "NT$",
            "currency_code": "TWD",
            "currency_name": "New Taiwan dollar"
        },
        {
            "country_name": "Tonga",
            "country_code_alpha2": "TO",
            "country_code_alpha3": "TON",
            "currency_symbol": "T$",
            "currency_code": "TOP",
            "currency_name": "Paanga"
        },
        {
            "country_name": "Tuvalu",
            "country_code_alpha2": "TV",
            "country_code_alpha3": "TUV",
            "currency_symbol": "$",
            "currency_code": "AUD",
            "currency_name": "Australian dollar"
        },
        {
            "country_name": "United States of America",
            "country_code_alpha2": "US",
            "country_code_alpha3": "USA",
            "currency_symbol": "$",
            "currency_code": "USD",
            "currency_name": "United States dollar"
        },
        {
            "country_name": "Vietnam",
            "country_code_alpha2": "VN",
            "country_code_alpha3": "VNM",
            "currency_symbol": "\u20ab",
            "currency_code": "VND",
            "currency_name": "Vietnamese dong"
        },
        {
            "country_name": "Albania",
            "country_code_alpha2": "AL",
            "country_code_alpha3": "ALB",
            "currency_symbol": "Lek",
            "currency_code": "ALL",
            "currency_name": "Albanian lek"
        },
        {
            "country_name": "Antigua and Barbuda",
            "country_code_alpha2": "AG",
            "country_code_alpha3": "ATG",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Austria",
            "country_code_alpha2": "AT",
            "country_code_alpha3": "AUT",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Barbados",
            "country_code_alpha2": "BB",
            "country_code_alpha3": "BRB",
            "currency_symbol": "$",
            "currency_code": "BBD",
            "currency_name": "Barbadian dollar"
        },
        {
            "country_name": "Bhutan",
            "country_code_alpha2": "BT",
            "country_code_alpha3": "BTN",
            "currency_symbol": "Nu.",
            "currency_code": "BTN",
            "currency_name": "Bhutanese ngultrum"
        },
        {
            "country_name": "Brunei",
            "country_code_alpha2": "BN",
            "country_code_alpha3": "BRN",
            "currency_symbol": "$",
            "currency_code": "BND",
            "currency_name": "Brunei dollar"
        },
        {
            "country_name": "Cameroon",
            "country_code_alpha2": "CM",
            "country_code_alpha3": "CMR",
            "currency_symbol": "Fr",
            "currency_code": "XAF",
            "currency_name": "Central African CFA franc"
        },
        {
            "country_name": "Chile",
            "country_code_alpha2": "CL",
            "country_code_alpha3": "CHL",
            "currency_symbol": "$",
            "currency_code": "CLP",
            "currency_name": "Chilean peso"
        },
        {
            "country_name": "Congo, Democratic Republic",
            "country_code_alpha2": "CD",
            "country_code_alpha3": "COD",
            "currency_symbol": "Fr",
            "currency_code": "CDF",
            "currency_name": "Congolese franc"
        },
        {
            "country_name": "Cyprus",
            "country_code_alpha2": "CY",
            "country_code_alpha3": "CYP",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Dominican Republic",
            "country_code_alpha2": "DO",
            "country_code_alpha3": "DOM",
            "currency_symbol": "RD$",
            "currency_code": "DOP",
            "currency_name": "Dominican peso"
        },
        {
            "country_name": "Eritrea",
            "country_code_alpha2": "ER",
            "country_code_alpha3": "ERI",
            "currency_symbol": "Nfk",
            "currency_code": "ERN",
            "currency_name": "Eritrean nakfa"
        },
        {
            "country_name": "France",
            "country_code_alpha2": "FR",
            "country_code_alpha3": "FRA",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Germany",
            "country_code_alpha2": "DE",
            "country_code_alpha3": "DEU",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Guatemala",
            "country_code_alpha2": "GT",
            "country_code_alpha3": "GTM",
            "currency_symbol": "Q",
            "currency_code": "GTQ",
            "currency_name": "Guatemalan quetzal"
        },
        {
            "country_name": "Honduras",
            "country_code_alpha2": "HN",
            "country_code_alpha3": "HND",
            "currency_symbol": "L",
            "currency_code": "HNL",
            "currency_name": "Honduran lempira"
        },
        {
            "country_name": "Indonesia",
            "country_code_alpha2": "ID",
            "country_code_alpha3": "IDN",
            "currency_symbol": "Rp",
            "currency_code": "IDR",
            "currency_name": "Indonesian rupiah"
        },
        {
            "country_name": "Italy",
            "country_code_alpha2": "IT",
            "country_code_alpha3": "ITA",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Kenya",
            "country_code_alpha2": "KE",
            "country_code_alpha3": "KEN",
            "currency_symbol": "KSh",
            "currency_code": "KES",
            "currency_name": "Kenyan shilling"
        },
        {
            "country_name": "Kyrgyzstan",
            "country_code_alpha2": "KG",
            "country_code_alpha3": "KGZ",
            "currency_symbol": "\u043b\u0432",
            "currency_code": "KGS",
            "currency_name": "Kyrgyzstani som"
        },
        {
            "country_name": "Liberia",
            "country_code_alpha2": "LR",
            "country_code_alpha3": "LBR",
            "currency_symbol": "$",
            "currency_code": "LRD",
            "currency_name": "Liberian dollar"
        },
        {
            "country_name": "Macau",
            "country_code_alpha2": "MO",
            "country_code_alpha3": "MAC",
            "currency_symbol": "P",
            "currency_code": "MOP",
            "currency_name": "Macanese pataca"
        },
        {
            "country_name": "Maldives",
            "country_code_alpha2": "MV",
            "country_code_alpha3": "MDV",
            "currency_symbol": ".\u0783",
            "currency_code": "MVR",
            "currency_name": "Maldivian rufiyaa"
        },
        {
            "country_name": "Mexico",
            "country_code_alpha2": "MX",
            "country_code_alpha3": "MEX",
            "currency_symbol": "$",
            "currency_code": "MXN",
            "currency_name": "Mexican peso"
        },
        {
            "country_name": "Montenegro",
            "country_code_alpha2": "ME",
            "country_code_alpha3": "MNE",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European Euro"
        },
        {
            "country_name": "Namibia",
            "country_code_alpha2": "NA",
            "country_code_alpha3": "NAM",
            "currency_symbol": "$",
            "currency_code": "NAD",
            "currency_name": "Namibian dollar"
        },
        {
            "country_name": "New Zealand",
            "country_code_alpha2": "NZ",
            "country_code_alpha3": "NZL",
            "currency_symbol": "$",
            "currency_code": "NZD",
            "currency_name": "New Zealand dollar"
        },
        {
            "country_name": "Oman",
            "country_code_alpha2": "OM",
            "country_code_alpha3": "OMN",
            "currency_symbol": "\ufdfc",
            "currency_code": "OMR",
            "currency_name": "Omani rial"
        },
        {
            "country_name": "Paraguay",
            "country_code_alpha2": "PY",
            "country_code_alpha3": "PRY",
            "currency_symbol": "Gs",
            "currency_code": "PYG",
            "currency_name": "Paraguayan guarani"
        },
        {
            "country_name": "Puerto Rico",
            "country_code_alpha2": "PR",
            "country_code_alpha3": "PRI",
            "currency_symbol": "$",
            "currency_code": "USD",
            "currency_name": "U.S. Dollar"
        },
        {
            "country_name": "Saint Helena",
            "country_code_alpha2": "SH",
            "country_code_alpha3": "SHN",
            "currency_symbol": "\u00a3",
            "currency_code": "SHP",
            "currency_name": "Saint Helena pound"
        },
        {
            "country_name": "San Marino",
            "country_code_alpha2": "SM",
            "country_code_alpha3": "SMR",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Seychelles",
            "country_code_alpha2": "SC",
            "country_code_alpha3": "SYC",
            "currency_symbol": "\u20a8",
            "currency_code": "SCR",
            "currency_name": "Seychellois rupee"
        },
        {
            "country_name": "Solomon Islands",
            "country_code_alpha2": "SB",
            "country_code_alpha3": "SLB",
            "currency_symbol": "$",
            "currency_code": "SBD",
            "currency_name": "Solomon Islands dollar"
        },
        {
            "country_name": "Sri Lanka",
            "country_code_alpha2": "LK",
            "country_code_alpha3": "LKA",
            "currency_symbol": "\u20a8",
            "currency_code": "LKR",
            "currency_name": "Sri Lankan rupee"
        },
        {
            "country_name": "Switzerland",
            "country_code_alpha2": "CH",
            "country_code_alpha3": "CHE",
            "currency_symbol": "Fr.",
            "currency_code": "CHF",
            "currency_name": "Swiss franc"
        },
        {
            "country_name": "Thailand",
            "country_code_alpha2": "TH",
            "country_code_alpha3": "THA",
            "currency_symbol": "\u0e3f",
            "currency_code": "THB",
            "currency_name": "Thai baht"
        },
        {
            "country_name": "Turkey",
            "country_code_alpha2": "TR",
            "country_code_alpha3": "TUR",
            "currency_symbol": "\u20ba",
            "currency_code": "TRY",
            "currency_name": "Turkish new lira"
        },
        {
            "country_name": "United Arab Emirates",
            "country_code_alpha2": "AE",
            "country_code_alpha3": "ARE",
            "currency_symbol": "\u0641\u0644\u0633",
            "currency_code": "AED",
            "currency_name": "UAE dirham"
        },
        {
            "country_name": "Vanuatu",
            "country_code_alpha2": "VU",
            "country_code_alpha3": "VUT",
            "currency_symbol": "Vt",
            "currency_code": "VUV",
            "currency_name": "Vanuatu vatu"
        },
        {
            "country_name": "Zambia",
            "country_code_alpha2": "ZM",
            "country_code_alpha3": "ZMB",
            "currency_symbol": "ZK",
            "currency_code": "ZMW",
            "currency_name": "Zambian kwacha"
        },
        {
            "country_name": "Angola",
            "country_code_alpha2": "AO",
            "country_code_alpha3": "AGO",
            "currency_symbol": "Kz",
            "currency_code": "AOA",
            "currency_name": "Angolan kwanza"
        },
        {
            "country_name": "Aruba",
            "country_code_alpha2": "AW",
            "country_code_alpha3": "ABW",
            "currency_symbol": "\u0192",
            "currency_code": "AWG",
            "currency_name": "Aruban florin"
        },
        {
            "country_name": "Bahrain",
            "country_code_alpha2": "BH",
            "country_code_alpha3": "BHR",
            "currency_symbol": "\u062f\u064a\u0646\u0627\u0631",
            "currency_code": "BHD",
            "currency_name": "Bahraini dinar"
        },
        {
            "country_name": "Belize",
            "country_code_alpha2": "BZ",
            "country_code_alpha3": "BLZ",
            "currency_symbol": "BZ$",
            "currency_code": "BZD",
            "currency_name": "Belize dollar"
        },
        {
            "country_name": "Botswana",
            "country_code_alpha2": "BW",
            "country_code_alpha3": "BWA",
            "currency_symbol": "P",
            "currency_code": "BWP",
            "currency_name": "Botswana pula"
        },
        {
            "country_name": "Burundi",
            "country_code_alpha2": "BI",
            "country_code_alpha3": "BDI",
            "currency_symbol": "Fr",
            "currency_code": "BIF",
            "currency_name": "Burundi franc"
        },
        {
            "country_name": "Central African Republic",
            "country_code_alpha2": "CF",
            "country_code_alpha3": "CAF",
            "currency_symbol": "Fr",
            "currency_code": "XAF",
            "currency_name": "Central African CFA franc"
        },
        {
            "country_name": "Comoros",
            "country_code_alpha2": "KM",
            "country_code_alpha3": "COM",
            "currency_symbol": "Fr",
            "currency_code": "KMF",
            "currency_name": "Comorian franc"
        },
        {
            "country_name": "Croatia",
            "country_code_alpha2": "HR",
            "country_code_alpha3": "HRV",
            "currency_symbol": "kn",
            "currency_code": "HRK",
            "currency_name": "Croatian kuna"
        },
        {
            "country_name": "Djibouti",
            "country_code_alpha2": "DJ",
            "country_code_alpha3": "DJI",
            "currency_symbol": "Fr",
            "currency_code": "DJF",
            "currency_name": "Djiboutian franc"
        },
        {
            "country_name": "El Salvador",
            "country_code_alpha2": "SV",
            "country_code_alpha3": "SLV",
            "currency_symbol": "$",
            "currency_code": "USD",
            "currency_name": "U.S. Dollar"
        },
        {
            "country_name": "Fiji",
            "country_code_alpha2": "FJ",
            "country_code_alpha3": "FJI",
            "currency_symbol": "$",
            "currency_code": "FJD",
            "currency_name": "Fijian dollar"
        },
        {
            "country_name": "Gambia",
            "country_code_alpha2": "GM",
            "country_code_alpha3": "GMB",
            "currency_symbol": "D",
            "currency_code": "GMD",
            "currency_name": "Gambian dalasi"
        },
        {
            "country_name": "Greece",
            "country_code_alpha2": "GR",
            "country_code_alpha3": "GRC",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Guyana",
            "country_code_alpha2": "GY",
            "country_code_alpha3": "GUY",
            "currency_symbol": "$",
            "currency_code": "GYD",
            "currency_name": "Guyanese dollar"
        },
        {
            "country_name": "Iceland",
            "country_code_alpha2": "IS",
            "country_code_alpha3": "ISL",
            "currency_symbol": "kr",
            "currency_code": "ISK",
            "currency_name": "Icelandic kr\u00f3na"
        },
        {
            "country_name": "Ireland",
            "country_code_alpha2": "IE",
            "country_code_alpha3": "IRL",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Jordan",
            "country_code_alpha2": "JO",
            "country_code_alpha3": "JOR",
            "currency_symbol": "\u062f.\u0627 ",
            "currency_code": "JOD",
            "currency_name": "Jordanian dinar"
        },
        {
            "country_name": "Korea South",
            "country_code_alpha2": "KR",
            "country_code_alpha3": "KOR",
            "currency_symbol": "\u20a9",
            "currency_code": "KRW",
            "currency_name": "South Korean won"
        },
        {
            "country_name": "Lebanon",
            "country_code_alpha2": "LB",
            "country_code_alpha3": "LBN",
            "currency_symbol": "\u00a3",
            "currency_code": "LBP",
            "currency_name": "Lebanese lira"
        },
        {
            "country_name": "Malawi",
            "country_code_alpha2": "MW",
            "country_code_alpha3": "MWI",
            "currency_symbol": "MK",
            "currency_code": "MWK",
            "currency_name": "Malawian kwacha"
        },
        {
            "country_name": "Mauritania",
            "country_code_alpha2": "MR",
            "country_code_alpha3": "MRT",
            "currency_symbol": "UM",
            "currency_code": "MRO",
            "currency_name": "Mauritanian ouguiya"
        },
        {
            "country_name": "Monaco",
            "country_code_alpha2": "MC",
            "country_code_alpha3": "MCO",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European Euro"
        },
        {
            "country_name": "Mozambique",
            "country_code_alpha2": "MZ",
            "country_code_alpha3": "MOZ",
            "currency_symbol": "MT",
            "currency_code": "MZN",
            "currency_name": "Mozambican metical"
        },
        {
            "country_name": "Netherlands",
            "country_code_alpha2": "NL",
            "country_code_alpha3": "NLD",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "Nigeria",
            "country_code_alpha2": "NG",
            "country_code_alpha3": "NGA",
            "currency_symbol": "\u20a6",
            "currency_code": "NGN",
            "currency_name": "Nigerian naira"
        },
        {
            "country_name": "Panama",
            "country_code_alpha2": "PA",
            "country_code_alpha3": "PAN",
            "currency_symbol": "B\/.",
            "currency_code": "PAB",
            "currency_name": "Panamanian balboa"
        },
        {
            "country_name": "Poland",
            "country_code_alpha2": "PL",
            "country_code_alpha3": "POL",
            "currency_symbol": "z\u0142",
            "currency_code": "PLN",
            "currency_name": "Polish zloty"
        },
        {
            "country_name": "Russia",
            "country_code_alpha2": "RU",
            "country_code_alpha3": "RUS",
            "currency_symbol": "\u0440\u0443\u0431",
            "currency_code": "RUB",
            "currency_name": "Russian ruble"
        },
        {
            "country_name": "Saint Vincent and the Grenadines",
            "country_code_alpha2": "VC",
            "country_code_alpha3": "VCT",
            "currency_symbol": "$",
            "currency_code": "XCD",
            "currency_name": "East Caribbean dollar"
        },
        {
            "country_name": "Senegal",
            "country_code_alpha2": "SN",
            "country_code_alpha3": "SEN",
            "currency_symbol": "Fr",
            "currency_code": "XOF",
            "currency_name": "West African CFA franc"
        },
        {
            "country_name": "Slovakia",
            "country_code_alpha2": "SK",
            "country_code_alpha3": "SVK",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        },
        {
            "country_name": "South Sudan",
            "country_code_alpha2": "SS",
            "country_code_alpha3": "SSD",
            "currency_symbol": "\u00a3",
            "currency_code": "SDG",
            "currency_name": "Sudanese pound"
        },
        {
            "country_name": "Swaziland",
            "country_code_alpha2": "SZ",
            "country_code_alpha3": "SWZ",
            "currency_symbol": "L",
            "currency_code": "SZL",
            "currency_name": "Swazi lilangeni"
        },
        {
            "country_name": "Tajikistan",
            "country_code_alpha2": "TJ",
            "country_code_alpha3": "TJK",
            "currency_symbol": "\u0405\u041c",
            "currency_code": "TJS",
            "currency_name": "Tajikistani somoni"
        },
        {
            "country_name": "Trinidad and Tobago",
            "country_code_alpha2": "TT",
            "country_code_alpha3": "TTO",
            "currency_symbol": "TT$",
            "currency_code": "TTD",
            "currency_name": "Trinidad and Tobago dollar"
        },
        {
            "country_name": "Uganda",
            "country_code_alpha2": "UG",
            "country_code_alpha3": "UGA",
            "currency_symbol": "USh",
            "currency_code": "UGX",
            "currency_name": "Ugandan shilling"
        },
        {
            "country_name": "Uruguay",
            "country_code_alpha2": "UY",
            "country_code_alpha3": "URY",
            "currency_symbol": "$U",
            "currency_code": "UYU",
            "currency_name": "Uruguayan peso"
        },
        {
            "country_name": "Wallis and Futuna Islands",
            "country_code_alpha2": "WF",
            "country_code_alpha3": "WLF",
            "currency_symbol": "Fr",
            "currency_code": "XPF",
            "currency_name": "CFP franc"
        },
        {
            "country_name": "Lithuania",
            "country_code_alpha2": "LT",
            "country_code_alpha3": "LTU",
            "currency_symbol": "\u20ac",
            "currency_code": "EUR",
            "currency_name": "European euro"
        }
    ];