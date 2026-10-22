/**
 * Vessel Tracking Dashboard (Tradlinx Ocean Visibility Style)
 * Full Dynamic Fleet Search & Animated Laser Route Engine
 * Clean Enterprise Modal Selector (12 Global & Korean Container Vessels)
 */

// Global Multi-Vessel Database (12 Vessels)
const VESSEL_DATABASE = [
  {
    "id": "pancon-glory",
    "category": "korea",
    "carrier": "범주해운 (Pancon)",
    "name": "PANCON GLORY",
    "koreanName": "팬콘 글로리",
    "mmsi": "441872000",
    "callsign": "DSRI4",
    "imo": "9635418",
    "speed": "12.1 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 (흑산도 서방 해역)",
    "mapZoom": 6.8,
    "mapCenter": [
      33.8,
      124.2
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "12.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "12.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ],
    "voyageHistory": [
      {
        "origin": "Shanghai",
        "destination": "Incheon",
        "date": "2026-10-14 ~ 10-16"
      },
      {
        "origin": "Incheon",
        "destination": "Ningbo Pt",
        "date": "2026-10-10 ~ 10-12"
      },
      {
        "origin": "Ningbo Pt",
        "destination": "Shanghai",
        "date": "2026-10-07 ~ 10-09"
      },
      {
        "origin": "Shanghai",
        "destination": "Incheon",
        "date": "2026-10-03 ~ 10-05"
      },
      {
        "origin": "Incheon",
        "destination": "Ningbo Pt",
        "date": "2026-09-28 ~ 09-30"
      }
    ]
  },
  {
    "id": "oocl-hamburg",
    "category": "global",
    "carrier": "OOCL (Orient Overseas)",
    "name": "OOCL HAMBURG",
    "koreanName": "OOCL 함부르크 (8,063 TEU)",
    "mmsi": "477169800",
    "callsign": "VRDZ7",
    "imo": "9412957",
    "speed": "17.6 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Shanghai",
    "destination": "Busan",
    "area": "제주 남동부 / 규슈 후쿠에섬 외해",
    "mapZoom": 6.8,
    "mapCenter": [
      33.2,
      127.0
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "concerto",
    "category": "global",
    "carrier": "ONE (Ocean Network Express)",
    "name": "CONCERTO",
    "koreanName": "콘체르토 (4,500 TEU)",
    "mmsi": "355938000",
    "callsign": "3FXE8",
    "imo": "9436484",
    "speed": "15.4 kn",
    "heading": 48,
    "status": "항해중",
    "lat": 22.355,
    "lon": 114.115,
    "origin": "Singapore",
    "destination": "Hong Kong",
    "area": "남중국해 베트남 붕따우 외해 북동진",
    "mapZoom": 6.0,
    "mapCenter": [
      12.0,
      109.0
    ],
    "routeWaypoints": [
      [
        1.275,
        103.785
      ],
      [
        22.355,
        114.115
      ]
    ],
    "arrowNodes": [
      {
        "lat": 3.5,
        "lon": 105.2,
        "heading": 35
      },
      {
        "lat": 7.2,
        "lon": 106.8,
        "heading": 25
      }
    ],
    "logs": [
      {
        "lat": "22.355",
        "lon": "114.115",
        "speed": "15.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "15.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "consistence",
    "category": "global",
    "carrier": "ONE (Ocean Network Express)",
    "name": "CONSISTENCE",
    "koreanName": "컨시스턴스 (4,500 TEU)",
    "mmsi": "356885000",
    "callsign": "3FAP6",
    "imo": "9436496",
    "speed": "14.8 kn",
    "heading": 280,
    "status": "항해중",
    "lat": 33.8,
    "lon": 129.6,
    "origin": "Tokyo",
    "destination": "Busan",
    "area": "세토내해 / 야마구치 시모노세키 외해",
    "mapZoom": 6.8,
    "mapCenter": [
      34.5,
      131.0
    ],
    "routeWaypoints": [
      [
        35.615,
        139.785
      ],
      [
        35.25,
        139.75
      ],
      [
        34.95,
        139.75
      ],
      [
        33.0,
        134.0
      ],
      [
        33.8,
        129.6
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.25,
        "lon": 139.75,
        "heading": 180
      },
      {
        "lat": 34.95,
        "lon": 139.75,
        "heading": 251
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 280
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "129.600",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "xin-he-da",
    "category": "korea",
    "carrier": "Zhonggu Logistics",
    "name": "XIN HE DA",
    "koreanName": "신 허 다 (Xin He Da)",
    "mmsi": "413374000",
    "callsign": "BRBA",
    "imo": "9400827",
    "speed": "13.2 kn",
    "heading": 78,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "황해 중부 (인천항 입항 침로)",
    "mapZoom": 6.8,
    "mapCenter": [
      37.5,
      123.0
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.5,
        "lon": 120.5,
        "heading": 110
      },
      {
        "lat": 37.8,
        "lon": 122.5,
        "heading": 105
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "a-rokko",
    "category": "korea",
    "carrier": "일본 피더라인",
    "name": "A ROKKO",
    "koreanName": "에이 롯코",
    "mmsi": "373722000",
    "callsign": "3FLS6",
    "imo": "9516662",
    "speed": "12.5 kn",
    "heading": 352,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Kobe",
    "destination": "Busan",
    "area": "대한해협 쓰시마 북동방",
    "mapZoom": 7.2,
    "mapCenter": [
      34.8,
      130.0
    ],
    "routeWaypoints": [
      [
        34.675,
        135.225
      ],
      [
        34.25,
        135.05
      ],
      [
        33.6,
        135.0
      ],
      [
        33.8,
        129.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.25,
        "lon": 135.05,
        "heading": 184
      },
      {
        "lat": 33.6,
        "lon": 135.0,
        "heading": 272
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 352
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "12.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.800",
        "lon": "129.600",
        "speed": "12.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pegasus-glory",
    "category": "korea",
    "carrier": "동영해운 (Dong Young)",
    "name": "PEGASUS GLORY",
    "koreanName": "페가수스 글로리",
    "mmsi": "440268000",
    "callsign": "DSQD5",
    "imo": "9688489",
    "speed": "13.9 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "대한해협 일본 방면 출항",
    "mapZoom": 7.0,
    "mapCenter": [
      34.8,
      130.5
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sawasdee-pacific",
    "category": "global",
    "carrier": "KLC / Sawasdee Line",
    "name": "SAWASDEE PACIFIC",
    "koreanName": "사와스디 퍼시픽",
    "mmsi": "352003362",
    "callsign": "3E4491",
    "imo": "9380726",
    "speed": "14.6 kn",
    "heading": 35,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Bangkok",
    "destination": "Busan",
    "area": "대만해협 남단 북상 중",
    "mapZoom": 6.0,
    "mapCenter": [
      18.0,
      114.0
    ],
    "routeWaypoints": [
      [
        13.705,
        100.585
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 8.5,
        "lon": 105.0,
        "heading": 55
      },
      {
        "lat": 14.0,
        "lon": 112.5,
        "heading": 40
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "13.705",
        "lon": "100.585",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sunny-laurel",
    "category": "korea",
    "carrier": "한성라인 (Hansung)",
    "name": "SUNNY LAUREL",
    "koreanName": "써니 로렐",
    "mmsi": "371903000",
    "callsign": "3FPM9",
    "imo": "9596040",
    "speed": "12.8 kn",
    "heading": 316,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Hakata",
    "destination": "Ulsan",
    "area": "대한해협 울산항 입항",
    "mapZoom": 7.5,
    "mapCenter": [
      34.7,
      130.0
    ],
    "routeWaypoints": [
      [
        33.615,
        130.395
      ],
      [
        33.8,
        130.25
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.8,
        "lon": 130.25,
        "heading": 316
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "seaspan-beauty",
    "category": "global",
    "carrier": "Seaspan (10,000 TEU)",
    "name": "SEASPAN BEAUTY",
    "koreanName": "시스팬 뷰티",
    "mmsi": "477024800",
    "callsign": "VRMD3",
    "imo": "9632002",
    "speed": "18.2 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 닝보 출항 부산행",
    "mapZoom": 6.5,
    "mapCenter": [
      31.0,
      126.0
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "zhong-gu-ying-kou",
    "category": "korea",
    "carrier": "Zhonggu Logistics",
    "name": "ZHONG GU YING KOU",
    "koreanName": "중구 잉커우",
    "mmsi": "413306260",
    "callsign": "BREG",
    "imo": "9789702",
    "speed": "14.0 kn",
    "heading": 135,
    "status": "항해중",
    "lat": 31.34,
    "lon": 121.62,
    "origin": "Yingkou",
    "destination": "Shanghai",
    "area": "보하이해협 랴오둥만 남동진",
    "mapZoom": 6.8,
    "mapCenter": [
      38.0,
      122.0
    ],
    "routeWaypoints": [
      [
        40.28,
        122.08
      ],
      [
        31.34,
        121.62
      ]
    ],
    "arrowNodes": [
      {
        "lat": 39.2,
        "lon": 121.5,
        "heading": 145
      }
    ],
    "logs": [
      {
        "lat": "31.340",
        "lon": "121.620",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "40.280",
        "lon": "122.080",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ya-lu-jiang",
    "category": "korea",
    "carrier": "Cosco / 연안선사",
    "name": "YA LU JIANG",
    "koreanName": "얄루 장 (압록강호)",
    "mmsi": "413372000",
    "callsign": "BPAN",
    "imo": "9389277",
    "speed": "12.6 kn",
    "heading": 85,
    "status": "항해중",
    "lat": 36.965,
    "lon": 126.835,
    "origin": "Dalian",
    "destination": "Pyeongtaek",
    "area": "황해 북부 평택항 입항 항로",
    "mapZoom": 6.8,
    "mapCenter": [
      38.0,
      124.0
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        36.965,
        126.835
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.5,
        "lon": 123.0,
        "heading": 95
      }
    ],
    "logs": [
      {
        "lat": "36.965",
        "lon": "126.835",
        "speed": "12.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "12.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pegasus-tera",
    "category": "korea",
    "carrier": "동영해운 (Dong Young)",
    "name": "PEGASUS TERA",
    "koreanName": "페가수스 테라",
    "mmsi": "440306000",
    "callsign": "DSQG9",
    "imo": "9736858",
    "speed": "13.6 kn",
    "heading": 220,
    "status": "항해중",
    "lat": 22.355,
    "lon": 114.115,
    "origin": "Gwangyang",
    "destination": "Hong Kong",
    "area": "동중국해 홍콩 방면 남서진",
    "mapZoom": 6.5,
    "mapCenter": [
      32.5,
      126.0
    ],
    "routeWaypoints": [
      [
        34.905,
        127.755
      ],
      [
        22.355,
        114.115
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.8,
        "lon": 127.2,
        "heading": 210
      },
      {
        "lat": 32.8,
        "lon": 126.6,
        "heading": 215
      }
    ],
    "logs": [
      {
        "lat": "22.355",
        "lon": "114.115",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-eugenie",
    "category": "global",
    "carrier": "CMA CGM (11,000 TEU)",
    "name": "CMA CGM EUGENIE",
    "koreanName": "CMA CGM 유지니",
    "mmsi": "228387000",
    "callsign": "FMCE",
    "imo": "9403487",
    "speed": "17.0 kn",
    "heading": 78,
    "status": "항해중",
    "lat": 1.275,
    "lon": 103.785,
    "origin": "Le Havre",
    "destination": "Singapore",
    "area": "인도양 스리랑카 동남방",
    "mapZoom": 5.0,
    "mapCenter": [
      7.0,
      80.0
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        1.275,
        103.785
      ]
    ],
    "arrowNodes": [
      {
        "lat": 12.6,
        "lon": 43.45,
        "heading": 110
      },
      {
        "lat": 5.8,
        "lon": 80.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "17.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "17.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "star-pioneer",
    "category": "korea",
    "carrier": "SITC / 스타라인",
    "name": "STAR PIONEER",
    "koreanName": "스타 파이오니어",
    "mmsi": "354673000",
    "callsign": "3FXZ9",
    "imo": "9370824",
    "speed": "13.4 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Shanghai",
    "destination": "Busan",
    "area": "동중국해 상하이 외해 부산행",
    "mapZoom": 6.8,
    "mapCenter": [
      32.0,
      126.0
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-korea",
    "category": "global",
    "carrier": "OOCL (13,208 TEU)",
    "name": "OOCL KOREA",
    "koreanName": "OOCL 코리아 (초대형)",
    "mmsi": "477005900",
    "callsign": "VRLE4",
    "imo": "9627992",
    "speed": "18.5 kn",
    "heading": 38,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Kaohsiung",
    "destination": "Busan",
    "area": "대만해협 북상 중",
    "mapZoom": 6.0,
    "mapCenter": [
      26.0,
      122.0
    ],
    "routeWaypoints": [
      [
        22.565,
        120.305
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 23.2,
        "lon": 119.8,
        "heading": 35
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "22.565",
        "lon": "120.305",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "lalit-bhum",
    "category": "global",
    "carrier": "RCL (Regional Container Lines)",
    "name": "LALIT BHUM",
    "koreanName": "랄릿 붐 (RCL)",
    "mmsi": "563065000",
    "callsign": "9V8204",
    "imo": "9445100",
    "speed": "14.2 kn",
    "heading": 55,
    "status": "항해중",
    "lat": 14.595,
    "lon": 120.955,
    "origin": "Singapore",
    "destination": "Manila",
    "area": "남중국해 말레이반도 동방",
    "mapZoom": 6.0,
    "mapCenter": [
      9.0,
      107.0
    ],
    "routeWaypoints": [
      [
        1.275,
        103.785
      ],
      [
        14.595,
        120.955
      ]
    ],
    "arrowNodes": [
      {
        "lat": 4.5,
        "lon": 104.5,
        "heading": 45
      }
    ],
    "logs": [
      {
        "lat": "14.595",
        "lon": "120.955",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-norma",
    "category": "global",
    "carrier": "CMA CGM (9,400 TEU)",
    "name": "CMA CGM NORMA",
    "koreanName": "CMA CGM 노르마",
    "mmsi": "228339800",
    "callsign": "FMIH",
    "imo": "9299642",
    "speed": "16.8 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 34.2,
    "lon": 127.0,
    "origin": "Qingdao",
    "destination": "Busan",
    "area": "황해 중남부 칭다오 출항 부산행",
    "mapZoom": 6.8,
    "mapCenter": [
      35.5,
      125.0
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        35.5,
        123.0
      ],
      [
        34.5,
        125.0
      ],
      [
        34.2,
        127.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 98
      },
      {
        "lat": 35.5,
        "lon": 123.0,
        "heading": 116
      },
      {
        "lat": 34.5,
        "lon": 125.0,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "34.200",
        "lon": "127.000",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.500",
        "lon": "125.000",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sm-tokyo",
    "category": "korea",
    "carrier": "SM상선 (SM Line)",
    "name": "SM TOKYO",
    "koreanName": "SM 도쿄",
    "mmsi": "440337000",
    "callsign": "DSQI8",
    "imo": "9855587",
    "speed": "15.0 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "세토내해 시코쿠 북방 통과",
    "mapZoom": 6.8,
    "mapCenter": [
      34.5,
      134.0
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "interasia-engage",
    "category": "global",
    "carrier": "Interasia Lines",
    "name": "INTERASIA ENGAGE",
    "koreanName": "인터아시아 인게이지",
    "mmsi": "563148000",
    "callsign": "9V7789",
    "imo": "9924405",
    "speed": "14.4 kn",
    "heading": 225,
    "status": "항해중",
    "lat": 22.355,
    "lon": 114.115,
    "origin": "Taipei",
    "destination": "Hong Kong",
    "area": "대만해협 남서진",
    "mapZoom": 6.5,
    "mapCenter": [
      23.5,
      118.5
    ],
    "routeWaypoints": [
      [
        25.15,
        121.39
      ],
      [
        22.355,
        114.115
      ]
    ],
    "arrowNodes": [
      {
        "lat": 24.5,
        "lon": 120.2,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "22.355",
        "lon": "114.115",
        "speed": "14.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "25.150",
        "lon": "121.390",
        "speed": "14.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "easline-kwangyang",
    "category": "korea",
    "carrier": "동진상선 / EAS",
    "name": "EASLINE KWANGYANG",
    "koreanName": "이에스라인 광양",
    "mmsi": "440321000",
    "callsign": "DSQJ7",
    "imo": "9832872",
    "speed": "13.1 kn",
    "heading": 210,
    "status": "항해중",
    "lat": 29.885,
    "lon": 121.845,
    "origin": "Gwangyang",
    "destination": "Ningbo",
    "area": "제주 서남방 해역 닝보행",
    "mapZoom": 6.8,
    "mapCenter": [
      33.0,
      126.5
    ],
    "routeWaypoints": [
      [
        34.905,
        127.755
      ],
      [
        29.885,
        121.845
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.0,
        "lon": 127.3,
        "heading": 205
      },
      {
        "lat": 33.2,
        "lon": 127.0,
        "heading": 210
      }
    ],
    "logs": [
      {
        "lat": "29.885",
        "lon": "121.845",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-antigone",
    "category": "global",
    "carrier": "CMA CGM (10,000 TEU)",
    "name": "CMA CGM ANTIGONE",
    "koreanName": "CMA CGM 안티고네",
    "mmsi": "215160000",
    "callsign": "9HA3858",
    "imo": "9722663",
    "speed": "17.3 kn",
    "heading": 110,
    "status": "항해중",
    "lat": 1.275,
    "lon": 103.785,
    "origin": "Jeddah",
    "destination": "Singapore",
    "area": "벵골만 남단 / 인도양 동진",
    "mapZoom": 5.0,
    "mapCenter": [
      6.5,
      88.0
    ],
    "routeWaypoints": [
      [
        21.485,
        39.175
      ],
      [
        1.275,
        103.785
      ]
    ],
    "arrowNodes": [
      {
        "lat": 12.6,
        "lon": 43.45,
        "heading": 115
      },
      {
        "lat": 5.8,
        "lon": 80.5,
        "heading": 95
      }
    ],
    "logs": [
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "17.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "21.485",
        "lon": "39.175",
        "speed": "17.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "vietsun-harmony",
    "category": "global",
    "carrier": "Vietsun / 베트남 피더",
    "name": "VIETSUN HARMONY",
    "koreanName": "비엣선 하모니",
    "mmsi": "574003440",
    "callsign": "3WHB9",
    "imo": "9308077",
    "speed": "12.0 kn",
    "heading": 165,
    "status": "항해중",
    "lat": 10.765,
    "lon": 106.765,
    "origin": "Haiphong",
    "destination": "Ho Chi Minh",
    "area": "베트남 다낭 외해 남하",
    "mapZoom": 6.2,
    "mapCenter": [
      17.0,
      108.5
    ],
    "routeWaypoints": [
      [
        20.865,
        106.695
      ],
      [
        10.765,
        106.765
      ]
    ],
    "arrowNodes": [
      {
        "lat": 19.0,
        "lon": 107.5,
        "heading": 160
      }
    ],
    "logs": [
      {
        "lat": "10.765",
        "lon": "106.765",
        "speed": "12.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "20.865",
        "lon": "106.695",
        "speed": "12.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinar-solo",
    "category": "global",
    "carrier": "Samudera Shipping",
    "name": "SINAR SOLO",
    "koreanName": "시나르 솔로",
    "mmsi": "564478000",
    "callsign": "9V6042",
    "imo": "9193707",
    "speed": "13.5 kn",
    "heading": 310,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Jakarta",
    "destination": "Port Klang",
    "area": "말라카 해협 믈라카 외해 북서진",
    "mapZoom": 6.8,
    "mapCenter": [
      2.5,
      102.0
    ],
    "routeWaypoints": [
      [
        -6.105,
        106.885
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": -1.5,
        "lon": 105.0,
        "heading": 330
      },
      {
        "lat": 1.275,
        "lon": 103.785,
        "heading": 305
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "-6.105",
        "lon": "106.885",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-surabaya",
    "category": "korea",
    "carrier": "고려해운 (KMTC)",
    "name": "KMTC SURABAYA",
    "koreanName": "KMTC 수라바야 (2,800 TEU)",
    "mmsi": "440334000",
    "callsign": "DSQI6",
    "imo": "9866873",
    "speed": "15.8 kn",
    "heading": 205,
    "status": "항해중",
    "lat": -7.195,
    "lon": 112.725,
    "origin": "Busan",
    "destination": "Surabaya",
    "area": "남중국해 동사군도 남서진",
    "mapZoom": 6.0,
    "mapCenter": [
      22.0,
      118.0
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        -7.195,
        112.725
      ]
    ],
    "arrowNodes": [
      {
        "lat": 30.0,
        "lon": 124.5,
        "heading": 215
      },
      {
        "lat": 24.5,
        "lon": 120.0,
        "heading": 210
      }
    ],
    "logs": [
      {
        "lat": "-7.195",
        "lon": "112.725",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-blink",
    "category": "global",
    "carrier": "Evergreen Line (2,900 TEU)",
    "name": "EVER BLINK",
    "koreanName": "에버 블링크 (B-Class)",
    "mmsi": "354316000",
    "callsign": "3FKD9",
    "imo": "9784130",
    "speed": "14.5 kn",
    "heading": 35,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Kaohsiung",
    "destination": "Incheon",
    "area": "서해 남부 가거도 북서방",
    "mapZoom": 6.8,
    "mapCenter": [
      34.0,
      125.0
    ],
    "routeWaypoints": [
      [
        22.565,
        120.305
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 26.5,
        "lon": 122.5,
        "heading": 25
      },
      {
        "lat": 30.5,
        "lon": 124.2,
        "heading": 30
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "22.565",
        "lon": "120.305",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mild-waltz",
    "category": "global",
    "carrier": "SITC / 동남아 피더",
    "name": "MILD WALTZ",
    "koreanName": "마일드 왈츠",
    "mmsi": "357484000",
    "callsign": "3EQE8",
    "imo": "9364954",
    "speed": "13.0 kn",
    "heading": 104,
    "status": "항해중",
    "lat": 31.15,
    "lon": 122.5,
    "origin": "Shanghai",
    "destination": "Manila",
    "area": "루손해협 필리핀 북방 남하",
    "mapZoom": 6.2,
    "mapCenter": [
      19.0,
      120.5
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      }
    ],
    "logs": [
      {
        "lat": "31.150",
        "lon": "122.500",
        "speed": "13.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "31.300",
        "lon": "121.900",
        "speed": "13.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-yuhe",
    "category": "korea",
    "carrier": "🇨🇳 SITC (SITC Container Lines)",
    "name": "SITC YUHE",
    "koreanName": "SITC 유허 (1,800 TEU)",
    "mmsi": "477759800",
    "callsign": "VRUS6",
    "imo": "9913406",
    "speed": "14.2 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "서해 중부 해역 (인천항 서남방 95해리)",
    "mapZoom": 7.0,
    "mapCenter": [
      36.6,
      123.5
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-tancredi",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (프랑스 원양선사)",
    "name": "CMA CGM TANCREDI",
    "koreanName": "CMA CGM 탄크레디 (13,800 TEU)",
    "mmsi": "228389800",
    "callsign": "FNFF",
    "imo": "9389277",
    "speed": "18.5 kn",
    "heading": 42,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Singapore",
    "destination": "Busan",
    "area": "남중국해 북동부 / 루손해협 서방",
    "mapZoom": 5.8,
    "mapCenter": [
      12.0,
      112.0
    ],
    "routeWaypoints": [
      [
        1.275,
        103.785
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 1.8,
        "lon": 104.9,
        "heading": 45
      },
      {
        "lat": 9.5,
        "lon": 111.0,
        "heading": 42
      },
      {
        "lat": 17.8,
        "lon": 117.1,
        "heading": 40
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-alceste",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (프랑스 원양선사)",
    "name": "CMA CGM ALCESTE",
    "koreanName": "CMA CGM 알세스트 (13,800 TEU)",
    "mmsi": "228389900",
    "callsign": "FNFG",
    "imo": "9389289",
    "speed": "17.8 kn",
    "heading": 38,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Rotterdam",
    "destination": "Gwangyang",
    "area": "대만 동부 화롄 외해 북상 항해",
    "mapZoom": 6.2,
    "mapCenter": [
      22.0,
      120.0
    ],
    "routeWaypoints": [
      [
        51.95,
        4.02
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 12.5,
        "lon": 112.5,
        "heading": 42
      },
      {
        "lat": 19.5,
        "lon": 118.2,
        "heading": 40
      },
      {
        "lat": 22.2,
        "lon": 120.8,
        "heading": 38
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "17.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "4.020",
        "speed": "17.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-nagoya",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines (티에스 라인스)",
    "name": "TS NAGOYA",
    "koreanName": "TS 나고야 (1,096 TEU)",
    "mmsi": "538008064",
    "callsign": "V7A2128",
    "imo": "9845348",
    "speed": "15.3 kn",
    "heading": 272,
    "status": "항해중",
    "lat": 33.8,
    "lon": 129.6,
    "origin": "Nagoya",
    "destination": "Busan",
    "area": "세토내해 이요나다 해역 (부산항 서북서 향발)",
    "mapZoom": 7.0,
    "mapCenter": [
      34.5,
      134.0
    ],
    "routeWaypoints": [
      [
        35.048,
        136.852
      ],
      [
        34.8,
        136.8
      ],
      [
        34.45,
        136.95
      ],
      [
        33.5,
        135.5
      ],
      [
        33.8,
        129.6
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.8,
        "lon": 136.8,
        "heading": 156
      },
      {
        "lat": 34.45,
        "lon": 136.95,
        "heading": 236
      },
      {
        "lat": 33.5,
        "lon": 135.5,
        "heading": 272
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "129.600",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "135.500",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-algeoas",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM ALGEOAS",
    "koreanName": "HMM ALGEOAS (24,000 TEU)",
    "mmsi": "440500030",
    "callsign": "DAA24",
    "imo": "9450002",
    "speed": "18.0 kn",
    "heading": 197,
    "status": "항해중",
    "lat": 34.7,
    "lon": 124.95,
    "origin": "Incheon",
    "destination": "Singapore",
    "area": "대만해협 남방 (Incheon ➔ Singapore)",
    "mapZoom": 6.2,
    "mapCenter": [
      30.28,
      122.11
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      }
    ],
    "logs": [
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-oslo",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM OSLO",
    "koreanName": "HMM OSLO (24,000 TEU)",
    "mmsi": "440500147",
    "callsign": "DBD58",
    "imo": "9450019",
    "speed": "15.5 kn",
    "heading": 102,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      38.5,
      122.68
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.8281,
        "lon": 122.1351,
        "heading": 125
      },
      {
        "lat": 38.4189,
        "lon": 122.8799,
        "heading": 112
      },
      {
        "lat": 38.2502,
        "lon": 123.2883,
        "heading": 112
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-copenhagen",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM COPENHAGEN",
    "koreanName": "HMM COPENHAGEN (24,000 TEU)",
    "mmsi": "440500355",
    "callsign": "DCG24",
    "imo": "9450038",
    "speed": "14.2 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      32.76,
      122.79
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-dublin",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM DUBLIN",
    "koreanName": "HMM DUBLIN (24,000 TEU)",
    "mmsi": "440500450",
    "callsign": "DDJ13",
    "imo": "9450053",
    "speed": "14.6 kn",
    "heading": 103,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "보하이해 외해 (Tianjin ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      38.5,
      120.94
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.7566,
        "lon": 118.7497,
        "heading": 91
      },
      {
        "lat": 38.5824,
        "lon": 121.0216,
        "heading": 97
      },
      {
        "lat": 37.914,
        "lon": 122.7993,
        "heading": 85
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-gdansk",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM GDANSK",
    "koreanName": "HMM GDANSK (24,000 TEU)",
    "mmsi": "440500582",
    "callsign": "DEM86",
    "imo": "9450071",
    "speed": "17.7 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      44.89,
      -46.38
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.815,
        "lon": -97.5464,
        "heading": 92
      },
      {
        "lat": 45.0886,
        "lon": -46.1756,
        "heading": 93
      },
      {
        "lat": 41.8809,
        "lon": 4.7141,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-rotterdam",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM ROTTERDAM",
    "koreanName": "HMM ROTTERDAM (24,000 TEU)",
    "mmsi": "440500705",
    "callsign": "DFP36",
    "imo": "9450090",
    "speed": "17.7 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.56,
      122.48
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-hamburg",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM HAMBURG",
    "koreanName": "HMM HAMBURG (24,000 TEU)",
    "mmsi": "440500889",
    "callsign": "DGS56",
    "imo": "9450107",
    "speed": "18.1 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Bangkok",
    "area": "태국만 남부 해역 (Busan ➔ Bangkok)",
    "mapZoom": 6.2,
    "mapCenter": [
      28.97,
      120.88
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-southampton",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM SOUTHAMPTON",
    "koreanName": "HMM SOUTHAMPTON (24,000 TEU)",
    "mmsi": "440501053",
    "callsign": "DHV16",
    "imo": "9450122",
    "speed": "18.7 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      30.99,
      123.42
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-stockholm",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM STOCKHOLM",
    "koreanName": "HMM STOCKHOLM (24,000 TEU)",
    "mmsi": "440501181",
    "callsign": "DIY99",
    "imo": "9450137",
    "speed": "18.8 kn",
    "heading": 56,
    "status": "항해중",
    "lat": 34.45,
    "lon": 136.95,
    "origin": "Busan",
    "destination": "Nagoya",
    "area": "세토내해 이요나다 해역 (Busan ➔ Nagoya)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.99,
      131.31
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.5,
        135.5
      ],
      [
        34.45,
        136.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 92
      },
      {
        "lat": 33.5,
        "lon": 135.5,
        "heading": 56
      }
    ],
    "logs": [
      {
        "lat": "34.450",
        "lon": "136.950",
        "speed": "18.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "135.500",
        "speed": "18.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-le-havre",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM LE HAVRE",
    "koreanName": "HMM LE HAVRE (24,000 TEU)",
    "mmsi": "440501293",
    "callsign": "DJB96",
    "imo": "9450161",
    "speed": "15.0 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.87,
      130.5
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-st-petersburg",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM ST PETERSBURG",
    "koreanName": "HMM ST PETERSBURG (24,000 TEU)",
    "mmsi": "440501423",
    "callsign": "DKE41",
    "imo": "9450172",
    "speed": "13.3 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 6.2,
    "mapCenter": [
      24.9,
      120.26
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 32.1523,
        "lon": 126.5192,
        "heading": 220
      },
      {
        "lat": 23.6723,
        "lon": 119.2296,
        "heading": 221
      },
      {
        "lat": 17.5709,
        "lon": 113.9219,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-norden",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM NORDEN",
    "koreanName": "HMM NORDEN (16,000 TEU)",
    "mmsi": "440501572",
    "callsign": "DLH40",
    "imo": "9450189",
    "speed": "18.3 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      31.56,
      124.14
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-promise",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM PROMISE",
    "koreanName": "HMM PROMISE (11,000 TEU)",
    "mmsi": "440501686",
    "callsign": "DMK76",
    "imo": "9450208",
    "speed": "13.8 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      44.82,
      -64.77
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.2001,
        "lon": -93.569,
        "heading": 93
      },
      {
        "lat": 44.6323,
        "lon": -64.956,
        "heading": 92
      },
      {
        "lat": 43.156,
        "lon": -36.2515,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-blessing",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM BLESSING",
    "koreanName": "HMM BLESSING (11,000 TEU)",
    "mmsi": "440501836",
    "callsign": "DNN89",
    "imo": "9450222",
    "speed": "15.7 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.9,
      130.32
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-miracle",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM MIRACLE",
    "koreanName": "HMM MIRACLE (11,000 TEU)",
    "mmsi": "440502013",
    "callsign": "DOQ35",
    "imo": "9450240",
    "speed": "17.6 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      45.28,
      -74.48
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.6639,
        "lon": -103.2126,
        "heading": 92
      },
      {
        "lat": 44.8218,
        "lon": -64.9077,
        "heading": 93
      },
      {
        "lat": 43.6573,
        "lon": -45.9987,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-raon",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM RAON",
    "koreanName": "HMM RAON (13,000 TEU)",
    "mmsi": "440502154",
    "callsign": "DPT36",
    "imo": "9450262",
    "speed": "14.0 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.69,
      129.24
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-daon",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM DAON",
    "koreanName": "HMM DAON (13,000 TEU)",
    "mmsi": "440502290",
    "callsign": "DQW18",
    "imo": "9450275",
    "speed": "19.5 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 6.2,
    "mapCenter": [
      26.83,
      121.92
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 30.9505,
        "lon": 125.4805,
        "heading": 220
      },
      {
        "lat": 27.0292,
        "lon": 122.1192,
        "heading": 221
      },
      {
        "lat": 22.7016,
        "lon": 118.3516,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-hanul",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM HANUL",
    "koreanName": "HMM HANUL (13,000 TEU)",
    "mmsi": "440502357",
    "callsign": "DRZ51",
    "imo": "9450292",
    "speed": "15.5 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      32.87,
      122.89
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-garam",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM GARAM",
    "koreanName": "HMM GARAM (13,000 TEU)",
    "mmsi": "440502515",
    "callsign": "DSC98",
    "imo": "9450311",
    "speed": "13.3 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      50.19,
      32.04
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 51.8621,
        "lon": 21.0071,
        "heading": 99
      },
      {
        "lat": 50.0463,
        "lon": 31.8964,
        "heading": 99
      },
      {
        "lat": 48.3045,
        "lon": 42.8596,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-mir",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM MIR",
    "koreanName": "HMM MIR (13,000 TEU)",
    "mmsi": "440502637",
    "callsign": "DTF49",
    "imo": "9450327",
    "speed": "14.0 kn",
    "heading": 82,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Jebel Ali",
    "destination": "Busan",
    "area": "중동-동아시아 직항로 (Jebel Ali ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      27.16,
      70.41
    ],
    "routeWaypoints": [
      [
        24.995,
        55.065
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 25.6129,
        "lon": 59.4506,
        "heading": 83
      },
      {
        "lat": 27.278,
        "lon": 72.4189,
        "heading": 82
      },
      {
        "lat": 28.4196,
        "lon": 81.0959,
        "heading": 79
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "24.995",
        "lon": "55.065",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-hanbada",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM HANBADA",
    "koreanName": "HMM HANBADA (13,000 TEU)",
    "mmsi": "440502833",
    "callsign": "DUI22",
    "imo": "9450346",
    "speed": "14.5 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 6.2,
    "mapCenter": [
      22.61,
      122.3
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-ruby",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM RUBY",
    "koreanName": "HMM RUBY (10,000 TEU)",
    "mmsi": "440502907",
    "callsign": "DVL17",
    "imo": "9450360",
    "speed": "15.5 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.9,
      130.32
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-emerald",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM EMERALD",
    "koreanName": "HMM EMERALD (10,000 TEU)",
    "mmsi": "440503089",
    "callsign": "DWO47",
    "imo": "9450379",
    "speed": "13.8 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Bangkok",
    "area": "태국만 남부 해역 (Busan ➔ Bangkok)",
    "mapZoom": 6.2,
    "mapCenter": [
      28.32,
      120.08
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hmm-sapphire",
    "category": "korea",
    "carrier": "🇰🇷 HMM (현대상선)",
    "name": "HMM SAPPHIRE",
    "koreanName": "HMM SAPPHIRE (10,000 TEU)",
    "mmsi": "440503205",
    "callsign": "DXR41",
    "imo": "9450399",
    "speed": "13.5 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      45.26,
      -49.88
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.8859,
        "lon": -98.7674,
        "heading": 93
      },
      {
        "lat": 45.0577,
        "lon": -50.0822,
        "heading": 93
      },
      {
        "lat": 42.6162,
        "lon": -1.0102,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-nagoya",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC NAGOYA",
    "koreanName": "KMTC NAGOYA (1,800 TEU)",
    "mmsi": "440503323",
    "callsign": "DYU57",
    "imo": "9450412",
    "speed": "19.3 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Singapore",
    "area": "남중국해 중부 해역 (Busan ➔ Singapore)",
    "mapZoom": 6.2,
    "mapCenter": [
      28.75,
      124.34
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-yokohama",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC YOKOHAMA",
    "koreanName": "KMTC YOKOHAMA (1,800 TEU)",
    "mmsi": "440503461",
    "callsign": "DZX28",
    "imo": "9450431",
    "speed": "18.2 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 6.2,
    "mapCenter": [
      32.68,
      127.35
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-tokyo",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC TOKYO",
    "koreanName": "KMTC TOKYO (1,800 TEU)",
    "mmsi": "440503603",
    "callsign": "DAA25",
    "imo": "9450445",
    "speed": "18.9 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.88,
      130.74
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-shanghai",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC SHANGHAI",
    "koreanName": "KMTC SHANGHAI (2,500 TEU)",
    "mmsi": "440503726",
    "callsign": "DBD43",
    "imo": "9450464",
    "speed": "18.7 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      44.06,
      -49.69
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 45.7213,
        "lon": -86.1282,
        "heading": 92
      },
      {
        "lat": 43.8575,
        "lon": -49.8915,
        "heading": 92
      },
      {
        "lat": 41.9938,
        "lon": -13.6547,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-ningbo",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC NINGBO",
    "koreanName": "KMTC NINGBO (2,500 TEU)",
    "mmsi": "440503852",
    "callsign": "DCG20",
    "imo": "9450477",
    "speed": "19.8 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 6.2,
    "mapCenter": [
      27.94,
      122.9
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 32.2197,
        "lon": 126.5872,
        "heading": 220
      },
      {
        "lat": 26.5091,
        "lon": 121.6715,
        "heading": 220
      },
      {
        "lat": 23.6538,
        "lon": 119.2136,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "19.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-qingdao",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC QINGDAO",
    "koreanName": "KMTC QINGDAO (2,500 TEU)",
    "mmsi": "440503988",
    "callsign": "DDJ28",
    "imo": "9450497",
    "speed": "12.7 kn",
    "heading": 197,
    "status": "항해중",
    "lat": 34.7,
    "lon": 124.95,
    "origin": "Incheon",
    "destination": "Singapore",
    "area": "대만해협 남방 (Incheon ➔ Singapore)",
    "mapZoom": 6.2,
    "mapCenter": [
      27.64,
      120.45
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      }
    ],
    "logs": [
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-hochiminh",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC HOCHIMINH",
    "koreanName": "KMTC HOCHIMINH (1,800 TEU)",
    "mmsi": "440504156",
    "callsign": "DEM79",
    "imo": "9450512",
    "speed": "16.5 kn",
    "heading": 104,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      38.58,
      122.48
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.8596,
        "lon": 121.9789,
        "heading": 125
      },
      {
        "lat": 38.5836,
        "lon": 122.4813,
        "heading": 80
      },
      {
        "lat": 38.3559,
        "lon": 123.0322,
        "heading": 112
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "16.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "16.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-haiphong",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC HAIPHONG",
    "koreanName": "KMTC HAIPHONG (1,800 TEU)",
    "mmsi": "440504271",
    "callsign": "DFP13",
    "imo": "9450529",
    "speed": "18.2 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 6.2,
    "mapCenter": [
      44.54,
      43.95
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.0128,
        "lon": 12.5772,
        "heading": 96
      },
      {
        "lat": 43.9247,
        "lon": 50.2921,
        "heading": 96
      },
      {
        "lat": 41.0767,
        "lon": 75.3129,
        "heading": 96
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-bangkok",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC BANGKOK",
    "koreanName": "KMTC BANGKOK (1,800 TEU)",
    "mmsi": "440504476",
    "callsign": "DGS30",
    "imo": "9450546",
    "speed": "13.5 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 6.2,
    "mapCenter": [
      22.57,
      122.28
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-manila",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC MANILA",
    "koreanName": "KMTC MANILA (1,800 TEU)",
    "mmsi": "440504552",
    "callsign": "DHV52",
    "imo": "9450562",
    "speed": "16.1 kn",
    "heading": 96,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 6.2,
    "mapCenter": [
      45.23,
      36.49
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.2578,
        "lon": 10.4951,
        "heading": 96
      },
      {
        "lat": 44.5913,
        "lon": 41.6502,
        "heading": 96
      },
      {
        "lat": 42.5387,
        "lon": 62.8121,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "16.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "16.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-jakarta",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC JAKARTA",
    "koreanName": "KMTC JAKARTA (2,800 TEU)",
    "mmsi": "440504708",
    "callsign": "DIY39",
    "imo": "9450585",
    "speed": "14.8 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      44.96,
      -71.32
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.5349,
        "lon": -101.9472,
        "heading": 92
      },
      {
        "lat": 44.6298,
        "lon": -60.9164,
        "heading": 92
      },
      {
        "lat": 43.6448,
        "lon": -40.4336,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-singapore",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC SINGAPORE",
    "koreanName": "KMTC SINGAPORE (2,800 TEU)",
    "mmsi": "440504840",
    "callsign": "DJB66",
    "imo": "9450603",
    "speed": "13.8 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Antwerp",
    "destination": "Busan",
    "area": "극동-유럽 정기 항로 (Antwerp ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      45.95,
      45.91
    ],
    "routeWaypoints": [
      [
        51.27,
        4.34
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.6417,
        "lon": 25.1579,
        "heading": 97
      },
      {
        "lat": 46.0133,
        "lon": 45.9757,
        "heading": 97
      },
      {
        "lat": 43.385,
        "lon": 66.7936,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.270",
        "lon": "4.340",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-chennai",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC CHENNAI",
    "koreanName": "KMTC CHENNAI (2,800 TEU)",
    "mmsi": "440504945",
    "callsign": "DKE76",
    "imo": "9450616",
    "speed": "16.3 kn",
    "heading": 60,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Colombo",
    "destination": "Busan",
    "area": "인도양-말라카 횡단로 (Colombo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      12.48,
      89.58
    ],
    "routeWaypoints": [
      [
        6.955,
        79.845
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 9.7992,
        "lon": 84.7915,
        "heading": 60
      },
      {
        "lat": 12.4839,
        "lon": 89.5784,
        "heading": 59
      },
      {
        "lat": 15.4877,
        "lon": 94.6845,
        "heading": 61
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "6.955",
        "lon": "79.845",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-mumbai",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC MUMBAI",
    "koreanName": "KMTC MUMBAI (2,800 TEU)",
    "mmsi": "440505131",
    "callsign": "DLH10",
    "imo": "9450638",
    "speed": "17.8 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.16,
      132.23
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "17.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "17.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-jebel-ali",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC JEBEL ALI",
    "koreanName": "KMTC JEBEL ALI (2,800 TEU)",
    "mmsi": "440505301",
    "callsign": "DMK79",
    "imo": "9450653",
    "speed": "13.1 kn",
    "heading": 89,
    "status": "항해중",
    "lat": 35.435,
    "lon": 139.675,
    "origin": "Gwangyang",
    "destination": "Yokohama",
    "area": "도쿄만 진입 해역 (Gwangyang ➔ Yokohama)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.09,
      130.25
    ],
    "routeWaypoints": [
      [
        34.905,
        127.755
      ],
      [
        35.435,
        139.675
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.9155,
        "lon": 128.6866,
        "heading": 89
      },
      {
        "lat": 35.1306,
        "lon": 130.7439,
        "heading": 103
      },
      {
        "lat": 34.9471,
        "lon": 131.4814,
        "heading": 75
      }
    ],
    "logs": [
      {
        "lat": "35.435",
        "lon": "139.675",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-pusan",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC PUSAN",
    "koreanName": "KMTC PUSAN (1,800 TEU)",
    "mmsi": "440505423",
    "callsign": "DNN96",
    "imo": "9450669",
    "speed": "13.7 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.07,
      130.73
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-incheon",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC INCHEON",
    "koreanName": "KMTC INCHEON (1,800 TEU)",
    "mmsi": "440505509",
    "callsign": "DOQ26",
    "imo": "9450684",
    "speed": "19.4 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      31.55,
      124.18
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "19.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "19.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-gwangyang",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC GWANGYANG",
    "koreanName": "KMTC GWANGYANG (1,800 TEU)",
    "mmsi": "440505641",
    "callsign": "DPT95",
    "imo": "9450698",
    "speed": "16.8 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 6.2,
    "mapCenter": [
      26.07,
      124.16
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-ulsan",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC ULSAN",
    "koreanName": "KMTC ULSAN (1,000 TEU)",
    "mmsi": "440505844",
    "callsign": "DQW62",
    "imo": "9450718",
    "speed": "14.6 kn",
    "heading": 103,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "보하이해 외해 (Tianjin ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      38.67,
      120.22
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.8629,
        "lon": 118.7456,
        "heading": 109
      },
      {
        "lat": 38.6187,
        "lon": 120.7269,
        "heading": 97
      },
      {
        "lat": 38.4967,
        "lon": 121.7175,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-pohang",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC POHANG",
    "koreanName": "KMTC POHANG (1,000 TEU)",
    "mmsi": "440505910",
    "callsign": "DRZ39",
    "imo": "9450733",
    "speed": "14.3 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 34.2,
    "lon": 127.0,
    "origin": "Qingdao",
    "destination": "Busan",
    "area": "대한해협 서수도 (Qingdao ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.74,
      121.89
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        35.5,
        123.0
      ],
      [
        34.5,
        125.0
      ],
      [
        34.2,
        127.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 98
      },
      {
        "lat": 35.5,
        "lon": 123.0,
        "heading": 116
      },
      {
        "lat": 34.5,
        "lon": 125.0,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "34.200",
        "lon": "127.000",
        "speed": "14.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.500",
        "lon": "125.000",
        "speed": "14.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "kmtc-keelung",
    "category": "korea",
    "carrier": "🇰🇷 고려해운 (KMTC Line)",
    "name": "KMTC KEELUNG",
    "koreanName": "KMTC KEELUNG (1,800 TEU)",
    "mmsi": "440506100",
    "callsign": "DSC79",
    "imo": "9450752",
    "speed": "19.3 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.77,
      130.96
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-vladivostok",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR VLADIVOSTOK",
    "koreanName": "SINOKOR VLADIVOSTOK (1,000 TEU)",
    "mmsi": "440506175",
    "callsign": "DTF88",
    "imo": "9450766",
    "speed": "15.5 kn",
    "heading": 197,
    "status": "항해중",
    "lat": 34.7,
    "lon": 124.95,
    "origin": "Incheon",
    "destination": "Singapore",
    "area": "대만해협 남방 (Incheon ➔ Singapore)",
    "mapZoom": 6.2,
    "mapCenter": [
      30.51,
      122.26
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      }
    ],
    "logs": [
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-tianjin",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR TIANJIN",
    "koreanName": "SINOKOR TIANJIN (1,000 TEU)",
    "mmsi": "440506382",
    "callsign": "DUI90",
    "imo": "9450785",
    "speed": "18.4 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      43.3,
      -37.64
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.4181,
        "lon": -98.1018,
        "heading": 92
      },
      {
        "lat": 42.6092,
        "lon": -25.6204,
        "heading": 92
      },
      {
        "lat": 40.1838,
        "lon": 22.8144,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-akita",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR AKITA",
    "koreanName": "SINOKOR AKITA (1,000 TEU)",
    "mmsi": "440506491",
    "callsign": "DVL70",
    "imo": "9450801",
    "speed": "19.0 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Antwerp",
    "destination": "Busan",
    "area": "극동-유럽 정기 항로 (Antwerp ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      45.32,
      49.7
    ],
    "routeWaypoints": [
      [
        51.27,
        4.34
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.3525,
        "lon": 19.5273,
        "heading": 98
      },
      {
        "lat": 45.5176,
        "lon": 49.9019,
        "heading": 98
      },
      {
        "lat": 41.2827,
        "lon": 79.8764,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.270",
        "lon": "4.340",
        "speed": "19.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-niigata",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR NIIGATA",
    "koreanName": "SINOKOR NIIGATA (1,000 TEU)",
    "mmsi": "440506675",
    "callsign": "DWO83",
    "imo": "9450825",
    "speed": "15.2 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.86,
      131.31
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-tomakomai",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR TOMAKOMAI",
    "koreanName": "SINOKOR TOMAKOMAI (1,000 TEU)",
    "mmsi": "440506793",
    "callsign": "DXR59",
    "imo": "9450839",
    "speed": "19.1 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 6.2,
    "mapCenter": [
      30.77,
      126.02
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "19.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "19.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-kanazawa",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR KANAZAWA",
    "koreanName": "SINOKOR KANAZAWA (1,000 TEU)",
    "mmsi": "440506909",
    "callsign": "DYU51",
    "imo": "9450856",
    "speed": "18.8 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "보하이해 외해 (Tianjin ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      38.43,
      120.45
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.8421,
        "lon": 118.9142,
        "heading": 97
      },
      {
        "lat": 38.5564,
        "lon": 121.2325,
        "heading": 125
      },
      {
        "lat": 38.0136,
        "lon": 121.9916,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "18.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "18.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-busan",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR BUSAN",
    "koreanName": "SINOKOR BUSAN (1,900 TEU)",
    "mmsi": "440507031",
    "callsign": "DZX40",
    "imo": "9450873",
    "speed": "17.7 kn",
    "heading": 217,
    "status": "항해중",
    "lat": 1.365,
    "lon": 103.555,
    "origin": "Busan",
    "destination": "Tanjung Pelepas",
    "area": "말라카 해협 남부 (Busan ➔ Tanjung Pelepas)",
    "mapZoom": 6.2,
    "mapCenter": [
      29.04,
      124.47
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        1.365,
        103.555
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.1117,
        "lon": 127.5662,
        "heading": 216
      },
      {
        "lat": 29.0436,
        "lon": 124.4671,
        "heading": 216
      },
      {
        "lat": 25.2584,
        "lon": 121.6509,
        "heading": 218
      }
    ],
    "logs": [
      {
        "lat": "1.365",
        "lon": "103.555",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-shanghai",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR SHANGHAI",
    "koreanName": "SINOKOR SHANGHAI (1,900 TEU)",
    "mmsi": "440507151",
    "callsign": "DAA29",
    "imo": "9450888",
    "speed": "13.7 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 6.2,
    "mapCenter": [
      25.17,
      120.51
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.7902,
        "lon": 126.2175,
        "heading": 220
      },
      {
        "lat": 24.9719,
        "lon": 120.3136,
        "heading": 220
      },
      {
        "lat": 18.2512,
        "lon": 114.5075,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-hongkong",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR HONGKONG",
    "koreanName": "SINOKOR HONGKONG (1,900 TEU)",
    "mmsi": "440507356",
    "callsign": "DBD36",
    "imo": "9450909",
    "speed": "13.5 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.87,
      130.55
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sinokor-bangkok",
    "category": "korea",
    "carrier": "🇰🇷 장금상선 (Sinokor Merchant Marine)",
    "name": "SINOKOR BANGKOK",
    "koreanName": "SINOKOR BANGKOK (1,900 TEU)",
    "mmsi": "440507486",
    "callsign": "DCG27",
    "imo": "9450919",
    "speed": "16.6 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Hong Kong",
    "area": "대만해협 북방 (Busan ➔ Hong Kong)",
    "mapZoom": 6.2,
    "mapCenter": [
      32.07,
      125.53
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sawasdee-shanghai",
    "category": "korea",
    "carrier": "🇰🇷 남성해운 (Namsung Shipping)",
    "name": "SAWASDEE SHANGHAI",
    "koreanName": "SAWASDEE SHANGHAI (1,800 TEU)",
    "mmsi": "440507587",
    "callsign": "DDJ30",
    "imo": "9450940",
    "speed": "14.8 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.56,
      122.46
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sawasdee-incheon",
    "category": "korea",
    "carrier": "🇰🇷 남성해운 (Namsung Shipping)",
    "name": "SAWASDEE INCHEON",
    "koreanName": "SAWASDEE INCHEON (1,800 TEU)",
    "mmsi": "440507695",
    "callsign": "DEM54",
    "imo": "9450955",
    "speed": "19.7 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.35,
      121.47
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "19.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "19.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sawasdee-busan",
    "category": "korea",
    "carrier": "🇰🇷 남성해운 (Namsung Shipping)",
    "name": "SAWASDEE BUSAN",
    "koreanName": "SAWASDEE BUSAN (1,800 TEU)",
    "mmsi": "440507889",
    "callsign": "DFP14",
    "imo": "9450973",
    "speed": "16.0 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.83,
      129.45
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "16.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "16.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pegasus-pacific",
    "category": "korea",
    "carrier": "🇰🇷 동영해운 (Pegasus Line)",
    "name": "PEGASUS PACIFIC",
    "koreanName": "PEGASUS PACIFIC (1,000 TEU)",
    "mmsi": "440507974",
    "callsign": "DGS11",
    "imo": "9450993",
    "speed": "16.6 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.31,
      132.04
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pegasus-ocean",
    "category": "korea",
    "carrier": "🇰🇷 동영해운 (Pegasus Line)",
    "name": "PEGASUS OCEAN",
    "koreanName": "PEGASUS OCEAN (1,000 TEU)",
    "mmsi": "440508113",
    "callsign": "DHV49",
    "imo": "9451008",
    "speed": "13.4 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      32.8,
      122.79
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pancon-victory",
    "category": "korea",
    "carrier": "🇰🇷 범주해운 (Pancon Shipping)",
    "name": "PANCON VICTORY",
    "koreanName": "PANCON VICTORY (1,000 TEU)",
    "mmsi": "440508295",
    "callsign": "DIY12",
    "imo": "9451021",
    "speed": "13.5 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.36,
      121.54
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pancon-bridge",
    "category": "korea",
    "carrier": "🇰🇷 범주해운 (Pancon Shipping)",
    "name": "PANCON BRIDGE",
    "koreanName": "PANCON BRIDGE (1,000 TEU)",
    "mmsi": "440508403",
    "callsign": "DJB94",
    "imo": "9451044",
    "speed": "18.8 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      31.51,
      124.13
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "18.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "18.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "pancon-success",
    "category": "korea",
    "carrier": "🇰🇷 범주해운 (Pancon Shipping)",
    "name": "PANCON SUCCESS",
    "koreanName": "PANCON SUCCESS (1,000 TEU)",
    "mmsi": "440508551",
    "callsign": "DKE71",
    "imo": "9451058",
    "speed": "12.8 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      31.06,
      123.45
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sky-hope",
    "category": "korea",
    "carrier": "🇰🇷 천경해운 (CK Line)",
    "name": "SKY HOPE",
    "koreanName": "SKY HOPE (1,000 TEU)",
    "mmsi": "440508721",
    "callsign": "DLH39",
    "imo": "9451077",
    "speed": "13.6 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.11,
      131.33
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sky-pride",
    "category": "korea",
    "carrier": "🇰🇷 천경해운 (CK Line)",
    "name": "SKY PRIDE",
    "koreanName": "SKY PRIDE (1,000 TEU)",
    "mmsi": "440508808",
    "callsign": "DMK22",
    "imo": "9451097",
    "speed": "18.6 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      33.23,
      123.15
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sky-glory",
    "category": "korea",
    "carrier": "🇰🇷 천경해운 (CK Line)",
    "name": "SKY GLORY",
    "koreanName": "SKY GLORY (1,000 TEU)",
    "mmsi": "440508927",
    "callsign": "DNN68",
    "imo": "9451107",
    "speed": "16.6 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      47.89,
      46.93
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 50.7339,
        "lon": 28.4725,
        "heading": 98
      },
      {
        "lat": 47.9378,
        "lon": 46.9751,
        "heading": 98
      },
      {
        "lat": 45.1417,
        "lon": 65.4776,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sky-tiara",
    "category": "korea",
    "carrier": "🇰🇷 천경해운 (CK Line)",
    "name": "SKY TIARA",
    "koreanName": "SKY TIARA (1,000 TEU)",
    "mmsi": "440509065",
    "callsign": "DOQ28",
    "imo": "9451123",
    "speed": "15.2 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.24,
      121.57
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "dongjin-enterprise",
    "category": "korea",
    "carrier": "🇰🇷 동진상선 (Dongjin Shipping)",
    "name": "DONGJIN ENTERPRISE",
    "koreanName": "DONGJIN ENTERPRISE (1,000 TEU)",
    "mmsi": "440509271",
    "callsign": "DPT37",
    "imo": "9451141",
    "speed": "15.9 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 6.2,
    "mapCenter": [
      27.45,
      124.97
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "dongjin-venus",
    "category": "korea",
    "carrier": "🇰🇷 동진상선 (Dongjin Shipping)",
    "name": "DONGJIN VENUS",
    "koreanName": "DONGJIN VENUS (1,000 TEU)",
    "mmsi": "440509341",
    "callsign": "DQW32",
    "imo": "9451162",
    "speed": "14.2 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 6.2,
    "mapCenter": [
      26.0,
      121.23
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3632,
        "lon": 125.8372,
        "heading": 220
      },
      {
        "lat": 24.214,
        "lon": 119.6959,
        "heading": 220
      },
      {
        "lat": 20.5936,
        "lon": 116.5795,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "dongjin-highstar",
    "category": "korea",
    "carrier": "🇰🇷 동진상선 (Dongjin Shipping)",
    "name": "DONGJIN HIGHSTAR",
    "koreanName": "DONGJIN HIGHSTAR (1,000 TEU)",
    "mmsi": "440509486",
    "callsign": "DRZ84",
    "imo": "9451178",
    "speed": "13.1 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.02,
      131.1
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-gulsun",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC GULSUN",
    "koreanName": "MSC GULSUN (23,756 TEU)",
    "mmsi": "440509614",
    "callsign": "DSC90",
    "imo": "9451197",
    "speed": "14.9 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      45.14,
      38.9
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.3305,
        "lon": 19.5263,
        "heading": 97
      },
      {
        "lat": 44.9385,
        "lon": 38.7001,
        "heading": 96
      },
      {
        "lat": 42.6677,
        "lon": 57.9951,
        "heading": 95
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-samar",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC SAMAR",
    "koreanName": "MSC SAMAR (23,756 TEU)",
    "mmsi": "440509790",
    "callsign": "DTF52",
    "imo": "9451214",
    "speed": "17.7 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.4,
      122.22
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-lilian",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC LILIAN",
    "koreanName": "MSC LILIAN (23,756 TEU)",
    "mmsi": "440509885",
    "callsign": "DUI92",
    "imo": "9451228",
    "speed": "16.1 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      45.74,
      -61.83
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.5202,
        "lon": -92.4725,
        "heading": 92
      },
      {
        "lat": 45.9351,
        "lon": -61.6402,
        "heading": 93
      },
      {
        "lat": 43.9606,
        "lon": -31.1974,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "16.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-febe",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC FEBE",
    "koreanName": "MSC FEBE (23,756 TEU)",
    "mmsi": "440510038",
    "callsign": "DVL47",
    "imo": "9451244",
    "speed": "13.9 kn",
    "heading": 60,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Colombo",
    "destination": "Busan",
    "area": "인도양-말라카 횡단로 (Colombo ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      13.67,
      91.67
    ],
    "routeWaypoints": [
      [
        6.955,
        79.845
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 9.2591,
        "lon": 83.8521,
        "heading": 60
      },
      {
        "lat": 13.8673,
        "lon": 91.8664,
        "heading": 61
      },
      {
        "lat": 18.4755,
        "lon": 99.8807,
        "heading": 62
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "6.955",
        "lon": "79.845",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-ambra",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC AMBRA",
    "koreanName": "MSC AMBRA (23,756 TEU)",
    "mmsi": "440510231",
    "callsign": "DWO81",
    "imo": "9451262",
    "speed": "16.3 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.88,
      130.66
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-mina",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC MINA",
    "koreanName": "MSC MINA (23,756 TEU)",
    "mmsi": "440510360",
    "callsign": "DXR50",
    "imo": "9451280",
    "speed": "13.2 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      33.21,
      123.14
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-isabella",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC ISABELLA",
    "koreanName": "MSC ISABELLA (23,756 TEU)",
    "mmsi": "440510429",
    "callsign": "DYU42",
    "imo": "9451297",
    "speed": "15.3 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      30.79,
      123.08
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-mia",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC MIA",
    "koreanName": "MSC MIA (23,756 TEU)",
    "mmsi": "440510559",
    "callsign": "DZX86",
    "imo": "9451315",
    "speed": "17.4 kn",
    "heading": 106,
    "status": "항해중",
    "lat": 36.965,
    "lon": 126.835,
    "origin": "Dalian",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Dalian ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.22,
      123.28
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        36.965,
        126.835
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.54,
        "lon": 122.4347,
        "heading": 96
      },
      {
        "lat": 38.4161,
        "lon": 123.4754,
        "heading": 105
      },
      {
        "lat": 38.1616,
        "lon": 124.3856,
        "heading": 142
      }
    ],
    "logs": [
      {
        "lat": "36.965",
        "lon": "126.835",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-sixin",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC SIXIN",
    "koreanName": "MSC SIXIN (23,756 TEU)",
    "mmsi": "440510756",
    "callsign": "DAA69",
    "imo": "9451334",
    "speed": "16.3 kn",
    "heading": 86,
    "status": "항해중",
    "lat": 35.435,
    "lon": 139.675,
    "origin": "Gwangyang",
    "destination": "Yokohama",
    "area": "도쿄만 진입 해역 (Gwangyang ➔ Yokohama)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.02,
      131.78
    ],
    "routeWaypoints": [
      [
        34.905,
        127.755
      ],
      [
        35.435,
        139.675
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.9177,
        "lon": 128.8828,
        "heading": 82
      },
      {
        "lat": 35.2692,
        "lon": 132.5794,
        "heading": 85
      },
      {
        "lat": 35.0513,
        "lon": 134.5916,
        "heading": 85
      }
    ],
    "logs": [
      {
        "lat": "35.435",
        "lon": "139.675",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-tessa",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC TESSA",
    "koreanName": "MSC TESSA (24,116 TEU)",
    "mmsi": "440510890",
    "callsign": "DBD46",
    "imo": "9451344",
    "speed": "13.3 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 5.5,
    "mapCenter": [
      28.33,
      123.22
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.7024,
        "lon": 126.1303,
        "heading": 220
      },
      {
        "lat": 28.4959,
        "lon": 123.3817,
        "heading": 220
      },
      {
        "lat": 25.2064,
        "lon": 120.5501,
        "heading": 221
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-celestino-maresca",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC CELESTINO MARESCA",
    "koreanName": "MSC CELESTINO MARESCA (24,116 TEU)",
    "mmsi": "440510996",
    "callsign": "DCG66",
    "imo": "9451366",
    "speed": "14.2 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.88,
      130.93
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-raya",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC RAYA",
    "koreanName": "MSC RAYA (24,116 TEU)",
    "mmsi": "440511184",
    "callsign": "DDJ24",
    "imo": "9451381",
    "speed": "18.9 kn",
    "heading": 56,
    "status": "항해중",
    "lat": 34.45,
    "lon": 136.95,
    "origin": "Busan",
    "destination": "Nagoya",
    "area": "세토내해 이요나다 해역 (Busan ➔ Nagoya)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.12,
      131.86
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.5,
        135.5
      ],
      [
        34.45,
        136.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 92
      },
      {
        "lat": 33.5,
        "lon": 135.5,
        "heading": 56
      }
    ],
    "logs": [
      {
        "lat": "34.450",
        "lon": "136.950",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "135.500",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-irina",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC IRINA",
    "koreanName": "MSC IRINA (24,346 TEU)",
    "mmsi": "440511248",
    "callsign": "DEM48",
    "imo": "9451400",
    "speed": "15.0 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Bangkok",
    "area": "태국만 남부 해역 (Busan ➔ Bangkok)",
    "mapZoom": 5.5,
    "mapCenter": [
      30.01,
      122.32
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-loreto",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC LORETO",
    "koreanName": "MSC LORETO (24,346 TEU)",
    "mmsi": "440511457",
    "callsign": "DFP94",
    "imo": "9451420",
    "speed": "16.7 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.48,
      122.5
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-michel-cappellini",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC MICHEL CAPPELLINI",
    "koreanName": "MSC MICHEL CAPPELLINI (24,346 TEU)",
    "mmsi": "440511530",
    "callsign": "DGS21",
    "imo": "9451433",
    "speed": "18.6 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      37.15,
      129.38
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-turkiye",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC TURKIYE",
    "koreanName": "MSC TURKIYE (24,346 TEU)",
    "mmsi": "440511710",
    "callsign": "DHV51",
    "imo": "9451453",
    "speed": "19.5 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      48.15,
      44.07
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 52.0491,
        "lon": 19.7695,
        "heading": 98
      },
      {
        "lat": 47.6064,
        "lon": 49.1681,
        "heading": 100
      },
      {
        "lat": 44.6446,
        "lon": 68.7671,
        "heading": 101
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-clara",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC CLARA",
    "koreanName": "MSC CLARA (19,224 TEU)",
    "mmsi": "440511877",
    "callsign": "DIY99",
    "imo": "9451463",
    "speed": "17.7 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.07,
      130.68
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-sveva",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC SVEVA",
    "koreanName": "MSC SVEVA (19,224 TEU)",
    "mmsi": "440511961",
    "callsign": "DJB71",
    "imo": "9451486",
    "speed": "12.8 kn",
    "heading": 92,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Valencia",
    "destination": "Busan",
    "area": "지중해-아시아 원양 항로 (Valencia ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.69,
      24.12
    ],
    "routeWaypoints": [
      [
        39.44,
        -0.31
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 39.0812,
        "lon": 9.4009,
        "heading": 92
      },
      {
        "lat": 38.5443,
        "lon": 29.0034,
        "heading": 91
      },
      {
        "lat": 38.2457,
        "lon": 38.7745,
        "heading": 91
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "39.440",
        "lon": "-0.310",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-maya",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC MAYA",
    "koreanName": "MSC MAYA (19,224 TEU)",
    "mmsi": "440512108",
    "callsign": "DKE54",
    "imo": "9451498",
    "speed": "18.5 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.54,
      122.33
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-zoe",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC ZOE",
    "koreanName": "MSC ZOE (19,224 TEU)",
    "mmsi": "440512223",
    "callsign": "DLH89",
    "imo": "9451520",
    "speed": "15.0 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Qingdao ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.14,
      121.75
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-oscar",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC OSCAR",
    "koreanName": "MSC OSCAR (19,224 TEU)",
    "mmsi": "440512393",
    "callsign": "DMK74",
    "imo": "9451531",
    "speed": "16.1 kn",
    "heading": 87,
    "status": "항해중",
    "lat": 35.435,
    "lon": 139.675,
    "origin": "Gwangyang",
    "destination": "Yokohama",
    "area": "도쿄만 진입 해역 (Gwangyang ➔ Yokohama)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.93,
      129.71
    ],
    "routeWaypoints": [
      [
        34.905,
        127.755
      ],
      [
        35.435,
        139.675
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.9681,
        "lon": 128.5905,
        "heading": 85
      },
      {
        "lat": 35.0942,
        "lon": 130.2616,
        "heading": 85
      },
      {
        "lat": 35.1573,
        "lon": 131.0971,
        "heading": 110
      }
    ],
    "logs": [
      {
        "lat": "35.435",
        "lon": "139.675",
        "speed": "16.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "16.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-oliver",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC OLIVER",
    "koreanName": "MSC OLIVER (19,224 TEU)",
    "mmsi": "440512508",
    "callsign": "DNN31",
    "imo": "9451548",
    "speed": "17.3 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Ningbo",
    "destination": "Incheon",
    "area": "서해 중부 해역 (Ningbo ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.21,
      122.7
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "17.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "17.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-anna",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC ANNA",
    "koreanName": "MSC ANNA (19,224 TEU)",
    "mmsi": "440512638",
    "callsign": "DOQ67",
    "imo": "9451570",
    "speed": "16.7 kn",
    "heading": 60,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Colombo",
    "destination": "Busan",
    "area": "인도양-말라카 횡단로 (Colombo ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      13.43,
      91.25
    ],
    "routeWaypoints": [
      [
        6.955,
        79.845
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 9.1147,
        "lon": 83.6471,
        "heading": 60
      },
      {
        "lat": 13.4342,
        "lon": 91.2514,
        "heading": 60
      },
      {
        "lat": 18.0653,
        "lon": 99.1673,
        "heading": 62
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "6.955",
        "lon": "79.845",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "msc-viviana",
    "category": "global",
    "carrier": "🇨🇭 MSC (Mediterranean Shipping Co)",
    "name": "MSC VIVIANA",
    "koreanName": "MSC VIVIANA (19,224 TEU)",
    "mmsi": "440512769",
    "callsign": "DPT20",
    "imo": "9451589",
    "speed": "19.4 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.05,
      130.83
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "19.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "19.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "madrid-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MADRID MAERSK",
    "koreanName": "MADRID MAERSK (20,568 TEU)",
    "mmsi": "440512947",
    "callsign": "DQW44",
    "imo": "9451599",
    "speed": "16.3 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Rotterdam",
    "destination": "Busan",
    "area": "수에즈-말라카 원양 항로 (Rotterdam ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      46.91,
      41.99
    ],
    "routeWaypoints": [
      [
        51.95,
        4.02
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.9529,
        "lon": 19.2242,
        "heading": 97
      },
      {
        "lat": 45.9586,
        "lon": 49.6327,
        "heading": 97
      },
      {
        "lat": 43.9615,
        "lon": 64.8369,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "4.020",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "munich-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MUNICH MAERSK",
    "koreanName": "MUNICH MAERSK (20,568 TEU)",
    "mmsi": "440513030",
    "callsign": "DRZ67",
    "imo": "9451624",
    "speed": "14.6 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 5.5,
    "mapCenter": [
      30.82,
      126.06
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "moscow-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MOSCOW MAERSK",
    "koreanName": "MOSCOW MAERSK (20,568 TEU)",
    "mmsi": "440513232",
    "callsign": "DSC66",
    "imo": "9451641",
    "speed": "15.3 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      44.84,
      41.39
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.0985,
        "lon": 11.8484,
        "heading": 96
      },
      {
        "lat": 44.2494,
        "lon": 47.3589,
        "heading": 96
      },
      {
        "lat": 41.2341,
        "lon": 70.5833,
        "heading": 94
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "milan-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MILAN MAERSK",
    "koreanName": "MILAN MAERSK (20,568 TEU)",
    "mmsi": "440513305",
    "callsign": "DTF45",
    "imo": "9451650",
    "speed": "13.5 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.08,
      130.57
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "monaco-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MONACO MAERSK",
    "koreanName": "MONACO MAERSK (20,568 TEU)",
    "mmsi": "440513444",
    "callsign": "DUI44",
    "imo": "9451673",
    "speed": "18.7 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.29,
      131.61
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "marseille-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MARSEILLE MAERSK",
    "koreanName": "MARSEILLE MAERSK (20,568 TEU)",
    "mmsi": "440513610",
    "callsign": "DVL34",
    "imo": "9451691",
    "speed": "16.2 kn",
    "heading": 113,
    "status": "항해중",
    "lat": 1.275,
    "lon": 103.785,
    "origin": "Port Said",
    "destination": "Singapore",
    "area": "홍해-인도양 횡단 항로 (Port Said ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      22.07,
      54.46
    ],
    "routeWaypoints": [
      [
        31.25,
        32.31
      ],
      [
        1.275,
        103.785
      ]
    ],
    "arrowNodes": [
      {
        "lat": 28.2061,
        "lon": 39.7075,
        "heading": 112
      },
      {
        "lat": 22.1183,
        "lon": 54.5025,
        "heading": 115
      },
      {
        "lat": 15.6305,
        "lon": 68.8975,
        "heading": 109
      }
    ],
    "logs": [
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "16.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "31.250",
        "lon": "32.310",
        "speed": "16.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "manchester-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MANCHESTER MAERSK",
    "koreanName": "MANCHESTER MAERSK (20,568 TEU)",
    "mmsi": "440513755",
    "callsign": "DWO19",
    "imo": "9451703",
    "speed": "17.4 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Ningbo",
    "destination": "Incheon",
    "area": "서해 중부 해역 (Ningbo ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.7,
      122.95
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "murcia-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MURCIA MAERSK",
    "koreanName": "MURCIA MAERSK (20,568 TEU)",
    "mmsi": "440513907",
    "callsign": "DXR89",
    "imo": "9451718",
    "speed": "19.7 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Haiphong",
    "area": "통킹만 외해 (Busan ➔ Haiphong)",
    "mapZoom": 5.5,
    "mapCenter": [
      30.88,
      122.4
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "19.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "19.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "manila-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MANILA MAERSK",
    "koreanName": "MANILA MAERSK (20,568 TEU)",
    "mmsi": "440514032",
    "callsign": "DYU80",
    "imo": "9451740",
    "speed": "15.0 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.2,
      121.33
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "15.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "maastricht-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MAASTRICHT MAERSK",
    "koreanName": "MAASTRICHT MAERSK (20,568 TEU)",
    "mmsi": "440514125",
    "callsign": "DZX24",
    "imo": "9451753",
    "speed": "18.7 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Singapore",
    "area": "남중국해 중부 해역 (Busan ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      28.49,
      124.15
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "maribo-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MARIBO MAERSK",
    "koreanName": "MARIBO MAERSK (18,270 TEU)",
    "mmsi": "440514316",
    "callsign": "DAA62",
    "imo": "9451769",
    "speed": "15.9 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      46.33,
      -71.92
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.4504,
        "lon": -108.4853,
        "heading": 92
      },
      {
        "lat": 45.9017,
        "lon": -64.6113,
        "heading": 93
      },
      {
        "lat": 44.4814,
        "lon": -35.0831,
        "heading": 94
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "marstal-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MARSTAL MAERSK",
    "koreanName": "MARSTAL MAERSK (18,270 TEU)",
    "mmsi": "440514464",
    "callsign": "DBD16",
    "imo": "9451788",
    "speed": "18.5 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.63,
      129.27
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "matz-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MATZ MAERSK",
    "koreanName": "MATZ MAERSK (18,270 TEU)",
    "mmsi": "440514597",
    "callsign": "DCG91",
    "imo": "9451803",
    "speed": "18.6 kn",
    "heading": 101,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.36,
      123.26
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.6718,
        "lon": 122.2679,
        "heading": 92
      },
      {
        "lat": 38.4886,
        "lon": 123.8169,
        "heading": 149
      },
      {
        "lat": 37.9431,
        "lon": 124.1376,
        "heading": 101
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mayview-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MAYVIEW MAERSK",
    "koreanName": "MAYVIEW MAERSK (18,270 TEU)",
    "mmsi": "440514689",
    "callsign": "DDJ12",
    "imo": "9451822",
    "speed": "14.7 kn",
    "heading": 82,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Jebel Ali",
    "destination": "Busan",
    "area": "중동-동아시아 직항로 (Jebel Ali ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      28.31,
      79.78
    ],
    "routeWaypoints": [
      [
        24.995,
        55.065
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 26.7502,
        "lon": 67.522,
        "heading": 83
      },
      {
        "lat": 28.2374,
        "lon": 79.7109,
        "heading": 82
      },
      {
        "lat": 29.8605,
        "lon": 92.0359,
        "heading": 81
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "24.995",
        "lon": "55.065",
        "speed": "14.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "merete-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MERETE MAERSK",
    "koreanName": "MERETE MAERSK (18,270 TEU)",
    "mmsi": "440514831",
    "callsign": "DEM98",
    "imo": "9451844",
    "speed": "16.4 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      47.92,
      46.72
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 51.5945,
        "lon": 22.1521,
        "heading": 99
      },
      {
        "lat": 47.7236,
        "lon": 46.5162,
        "heading": 99
      },
      {
        "lat": 43.8632,
        "lon": 70.8909,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mogens-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MOGENS MAERSK",
    "koreanName": "MOGENS MAERSK (18,270 TEU)",
    "mmsi": "440514973",
    "callsign": "DFP89",
    "imo": "9451860",
    "speed": "16.4 kn",
    "heading": 60,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Colombo",
    "destination": "Busan",
    "area": "인도양-말라카 횡단로 (Colombo ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      14.91,
      93.69
    ],
    "routeWaypoints": [
      [
        6.955,
        79.845
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 9.613,
        "lon": 84.4676,
        "heading": 60
      },
      {
        "lat": 14.7052,
        "lon": 93.489,
        "heading": 59
      },
      {
        "lat": 20.2448,
        "lon": 102.9578,
        "heading": 60
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "6.955",
        "lon": "79.845",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "morten-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MORTEN MAERSK",
    "koreanName": "MORTEN MAERSK (18,270 TEU)",
    "mmsi": "440515140",
    "callsign": "DGS59",
    "imo": "9451878",
    "speed": "15.1 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.6,
      129.3
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "15.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mc-kinney-moller",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MC-KINNEY MOLLER",
    "koreanName": "MC-KINNEY MOLLER (18,270 TEU)",
    "mmsi": "440515270",
    "callsign": "DHV79",
    "imo": "9451895",
    "speed": "15.3 kn",
    "heading": 82,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Jebel Ali",
    "destination": "Busan",
    "area": "중동-동아시아 직항로 (Jebel Ali ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      27.32,
      71.55
    ],
    "routeWaypoints": [
      [
        24.995,
        55.065
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 25.8532,
        "lon": 61.5884,
        "heading": 81
      },
      {
        "lat": 27.7824,
        "lon": 74.8479,
        "heading": 81
      },
      {
        "lat": 28.7115,
        "lon": 81.4422,
        "heading": 81
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "24.995",
        "lon": "55.065",
        "speed": "15.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "majestic-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MAJESTIC MAERSK",
    "koreanName": "MAJESTIC MAERSK (18,270 TEU)",
    "mmsi": "440515354",
    "callsign": "DIY69",
    "imo": "9451907",
    "speed": "15.8 kn",
    "heading": 217,
    "status": "항해중",
    "lat": 1.365,
    "lon": 103.555,
    "origin": "Busan",
    "destination": "Tanjung Pelepas",
    "area": "말라카 해협 남부 (Busan ➔ Tanjung Pelepas)",
    "mapZoom": 5.5,
    "mapCenter": [
      25.1,
      121.48
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        1.365,
        103.555
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.0718,
        "lon": 126.0065,
        "heading": 217
      },
      {
        "lat": 23.0653,
        "lon": 119.9294,
        "heading": 216
      },
      {
        "lat": 19.4376,
        "lon": 117.2665,
        "heading": 217
      }
    ],
    "logs": [
      {
        "lat": "1.365",
        "lon": "103.555",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mary-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MARY MAERSK",
    "koreanName": "MARY MAERSK (18,270 TEU)",
    "mmsi": "440515519",
    "callsign": "DJB97",
    "imo": "9451922",
    "speed": "18.4 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      32.86,
      122.88
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "marie-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MARIE MAERSK",
    "koreanName": "MARIE MAERSK (18,270 TEU)",
    "mmsi": "440515662",
    "callsign": "DKE37",
    "imo": "9451947",
    "speed": "19.8 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 34.2,
    "lon": 127.0,
    "origin": "Qingdao",
    "destination": "Busan",
    "area": "대한해협 서수도 (Qingdao ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.89,
      122.19
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        35.5,
        123.0
      ],
      [
        34.5,
        125.0
      ],
      [
        34.2,
        127.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 98
      },
      {
        "lat": 35.5,
        "lon": 123.0,
        "heading": 116
      },
      {
        "lat": 34.5,
        "lon": 125.0,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "34.200",
        "lon": "127.000",
        "speed": "19.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.500",
        "lon": "125.000",
        "speed": "19.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "magleby-maersk",
    "category": "global",
    "carrier": "🇩🇰 MAERSK (A.P. Moller-Maersk)",
    "name": "MAGLEBY MAERSK",
    "koreanName": "MAGLEBY MAERSK (18,270 TEU)",
    "mmsi": "440515808",
    "callsign": "DLH70",
    "imo": "9451964",
    "speed": "14.0 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 34.2,
    "lon": 127.0,
    "origin": "Qingdao",
    "destination": "Busan",
    "area": "대한해협 서수도 (Qingdao ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.7,
      122.13
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        35.5,
        123.0
      ],
      [
        34.5,
        125.0
      ],
      [
        34.2,
        127.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 98
      },
      {
        "lat": 35.5,
        "lon": 123.0,
        "heading": 116
      },
      {
        "lat": 34.5,
        "lon": 125.0,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "34.200",
        "lon": "127.000",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.500",
        "lon": "125.000",
        "speed": "14.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-jacques-saade",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM JACQUES SAADE",
    "koreanName": "CMA CGM JACQUES SAADE (23,112 TEU)",
    "mmsi": "440515959",
    "callsign": "DMK43",
    "imo": "9451977",
    "speed": "17.4 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "보하이해 외해 (Tianjin ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.47,
      120.15
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.857,
        "lon": 118.7935,
        "heading": 97
      },
      {
        "lat": 38.3316,
        "lon": 120.6012,
        "heading": 83
      },
      {
        "lat": 38.473,
        "lon": 121.9092,
        "heading": 129
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-champs-elysees",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM CHAMPS ELYSEES",
    "koreanName": "CMA CGM CHAMPS ELYSEES (23,112 TEU)",
    "mmsi": "440516049",
    "callsign": "DNN85",
    "imo": "9451994",
    "speed": "18.1 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.33,
      121.96
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-palais-royal",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM PALAIS ROYAL",
    "koreanName": "CMA CGM PALAIS ROYAL (23,112 TEU)",
    "mmsi": "440516201",
    "callsign": "DOQ74",
    "imo": "9452012",
    "speed": "16.6 kn",
    "heading": 92,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Valencia",
    "destination": "Busan",
    "area": "지중해-아시아 원양 항로 (Valencia ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.63,
      26.19
    ],
    "routeWaypoints": [
      [
        39.44,
        -0.31
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 39.1161,
        "lon": 10.2887,
        "heading": 92
      },
      {
        "lat": 38.4684,
        "lon": 31.4862,
        "heading": 93
      },
      {
        "lat": 37.8831,
        "lon": 41.8236,
        "heading": 90
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "39.440",
        "lon": "-0.310",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-louvre",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM LOUVRE",
    "koreanName": "CMA CGM LOUVRE (23,112 TEU)",
    "mmsi": "440516381",
    "callsign": "DPT55",
    "imo": "9452026",
    "speed": "14.7 kn",
    "heading": 56,
    "status": "항해중",
    "lat": 34.45,
    "lon": 136.95,
    "origin": "Busan",
    "destination": "Nagoya",
    "area": "세토내해 이요나다 해역 (Busan ➔ Nagoya)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.98,
      130.68
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.5,
        135.5
      ],
      [
        34.45,
        136.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 92
      },
      {
        "lat": 33.5,
        "lon": 135.5,
        "heading": 56
      }
    ],
    "logs": [
      {
        "lat": "34.450",
        "lon": "136.950",
        "speed": "14.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "135.500",
        "speed": "14.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-rivoli",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM RIVOLI",
    "koreanName": "CMA CGM RIVOLI (23,112 TEU)",
    "mmsi": "440516481",
    "callsign": "DQW23",
    "imo": "9452041",
    "speed": "13.6 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Bangkok",
    "area": "태국만 남부 해역 (Busan ➔ Bangkok)",
    "mapZoom": 5.5,
    "mapCenter": [
      29.67,
      121.81
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-montmartre",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM MONTMARTRE",
    "koreanName": "CMA CGM MONTMARTRE (23,112 TEU)",
    "mmsi": "440516672",
    "callsign": "DRZ23",
    "imo": "9452063",
    "speed": "15.6 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Haiphong",
    "area": "통킹만 외해 (Busan ➔ Haiphong)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.32,
      123.09
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "15.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "15.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-concorde",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM CONCORDE",
    "koreanName": "CMA CGM CONCORDE (23,112 TEU)",
    "mmsi": "440516778",
    "callsign": "DSC89",
    "imo": "9452079",
    "speed": "17.4 kn",
    "heading": 102,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.48,
      122.73
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.7971,
        "lon": 122.2884,
        "heading": 101
      },
      {
        "lat": 38.6693,
        "lon": 122.9218,
        "heading": 139
      },
      {
        "lat": 38.2573,
        "lon": 123.271,
        "heading": 112
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-sorbonne",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM SORBONNE",
    "koreanName": "CMA CGM SORBONNE (23,112 TEU)",
    "mmsi": "440516865",
    "callsign": "DTF15",
    "imo": "9452095",
    "speed": "14.3 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      43.57,
      -40.16
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.4546,
        "lon": -98.8608,
        "heading": 92
      },
      {
        "lat": 43.0636,
        "lon": -28.348,
        "heading": 93
      },
      {
        "lat": 40.7548,
        "lon": 18.6124,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "14.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-trocadero",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM TROCADERO",
    "koreanName": "CMA CGM TROCADERO (23,112 TEU)",
    "mmsi": "440517073",
    "callsign": "DUI90",
    "imo": "9452114",
    "speed": "15.5 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.3,
      121.86
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-kerguelen",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM KERGUELEN",
    "koreanName": "CMA CGM KERGUELEN (17,722 TEU)",
    "mmsi": "440517196",
    "callsign": "DVL27",
    "imo": "9452131",
    "speed": "17.6 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.54,
      122.37
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-georg-forster",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM GEORG FORSTER",
    "koreanName": "CMA CGM GEORG FORSTER (17,722 TEU)",
    "mmsi": "440517314",
    "callsign": "DWO55",
    "imo": "9452146",
    "speed": "15.7 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      42.88,
      -28.94
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.2985,
        "lon": -95.6144,
        "heading": 93
      },
      {
        "lat": 42.4391,
        "lon": -15.3624,
        "heading": 92
      },
      {
        "lat": 39.7562,
        "lon": 38.0289,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-bougainville",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM BOUGAINVILLE",
    "koreanName": "CMA CGM BOUGAINVILLE (17,722 TEU)",
    "mmsi": "440517443",
    "callsign": "DXR53",
    "imo": "9452166",
    "speed": "16.0 kn",
    "heading": 90,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Los Angeles",
    "destination": "Busan",
    "area": "북태평양 횡단 항로 (Los Angeles ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.2,
      -50.36
    ],
    "routeWaypoints": [
      [
        33.74,
        -118.27
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.8426,
        "lon": -91.1867,
        "heading": 89
      },
      {
        "lat": 34.3109,
        "lon": -36.7569,
        "heading": 89
      },
      {
        "lat": 34.5012,
        "lon": -9.5858,
        "heading": 89
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.740",
        "lon": "-118.270",
        "speed": "16.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-vasco-de-gama",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM VASCO DE GAMA",
    "koreanName": "CMA CGM VASCO DE GAMA (17,722 TEU)",
    "mmsi": "440517626",
    "callsign": "DYU39",
    "imo": "9452178",
    "speed": "15.8 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      44.86,
      -65.69
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 46.4947,
        "lon": -99.6932,
        "heading": 92
      },
      {
        "lat": 44.314,
        "lon": -54.3496,
        "heading": 92
      },
      {
        "lat": 43.2237,
        "lon": -31.6779,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-antoine-de-saint-exupery",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM ANTOINE DE SAINT EXUPERY",
    "koreanName": "CMA CGM ANTOINE DE SAINT EXUPERY (20,600 TEU)",
    "mmsi": "440517708",
    "callsign": "DZX81",
    "imo": "9452196",
    "speed": "15.1 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Seattle",
    "destination": "Busan",
    "area": "알류샨 열도 대권 항로 (Seattle ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      43.7,
      -42.66
    ],
    "routeWaypoints": [
      [
        47.585,
        -122.365
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 45.9493,
        "lon": -90.5611,
        "heading": 92
      },
      {
        "lat": 42.9818,
        "lon": -26.6491,
        "heading": 92
      },
      {
        "lat": 41.442,
        "lon": 5.2507,
        "heading": 92
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "47.585",
        "lon": "-122.365",
        "speed": "15.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-jean-mermoz",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM JEAN MERMOZ",
    "koreanName": "CMA CGM JEAN MERMOZ (20,600 TEU)",
    "mmsi": "440517891",
    "callsign": "DAA89",
    "imo": "9452214",
    "speed": "17.5 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Haiphong",
    "area": "통킹만 외해 (Busan ➔ Haiphong)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.96,
      124.09
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "17.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "17.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cma-cgm-louis-bleriot",
    "category": "global",
    "carrier": "🇫🇷 CMA CGM (Compagnie Maritime d'Affrètement)",
    "name": "CMA CGM LOUIS BLERIOT",
    "koreanName": "CMA CGM LOUIS BLERIOT (20,600 TEU)",
    "mmsi": "440517958",
    "callsign": "DBD85",
    "imo": "9452232",
    "speed": "12.9 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      37.03,
      130.31
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "12.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "12.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-universe",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING UNIVERSE",
    "koreanName": "COSCO SHIPPING UNIVERSE (21,237 TEU)",
    "mmsi": "440518171",
    "callsign": "DCG19",
    "imo": "9452247",
    "speed": "13.7 kn",
    "heading": 92,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Valencia",
    "destination": "Busan",
    "area": "지중해-아시아 원양 항로 (Valencia ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.18,
      39.51
    ],
    "routeWaypoints": [
      [
        39.44,
        -0.31
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.708,
        "lon": 19.4992,
        "heading": 91
      },
      {
        "lat": 38.2218,
        "lon": 39.5541,
        "heading": 92
      },
      {
        "lat": 37.2441,
        "lon": 59.1175,
        "heading": 90
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "39.440",
        "lon": "-0.310",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-nebula",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING NEBULA",
    "koreanName": "COSCO SHIPPING NEBULA (21,237 TEU)",
    "mmsi": "440518308",
    "callsign": "DDJ12",
    "imo": "9452265",
    "speed": "14.9 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      37.12,
      129.68
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-galaxy",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING GALAXY",
    "koreanName": "COSCO SHIPPING GALAXY (21,237 TEU)",
    "mmsi": "440518432",
    "callsign": "DEM70",
    "imo": "9452284",
    "speed": "19.3 kn",
    "heading": 56,
    "status": "항해중",
    "lat": 34.45,
    "lon": 136.95,
    "origin": "Busan",
    "destination": "Nagoya",
    "area": "세토내해 이요나다 해역 (Busan ➔ Nagoya)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.0,
      130.33
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.5,
        135.5
      ],
      [
        34.45,
        136.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 92
      },
      {
        "lat": 33.5,
        "lon": 135.5,
        "heading": 56
      }
    ],
    "logs": [
      {
        "lat": "34.450",
        "lon": "136.950",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "135.500",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-solar",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING SOLAR",
    "koreanName": "COSCO SHIPPING SOLAR (21,237 TEU)",
    "mmsi": "440518564",
    "callsign": "DFP40",
    "imo": "9452300",
    "speed": "14.6 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Qingdao ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.35,
      122.09
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-star",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING STAR",
    "koreanName": "COSCO SHIPPING STAR (21,237 TEU)",
    "mmsi": "440518651",
    "callsign": "DGS76",
    "imo": "9452316",
    "speed": "14.8 kn",
    "heading": 113,
    "status": "항해중",
    "lat": 1.275,
    "lon": 103.785,
    "origin": "Port Said",
    "destination": "Singapore",
    "area": "홍해-인도양 횡단 항로 (Port Said ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      25.52,
      45.72
    ],
    "routeWaypoints": [
      [
        31.25,
        32.31
      ],
      [
        1.275,
        103.785
      ]
    ],
    "arrowNodes": [
      {
        "lat": 29.3895,
        "lon": 36.8315,
        "heading": 112
      },
      {
        "lat": 25.6685,
        "lon": 45.8745,
        "heading": 112
      },
      {
        "lat": 21.6959,
        "lon": 54.6659,
        "heading": 113
      }
    ],
    "logs": [
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "31.250",
        "lon": "32.310",
        "speed": "14.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-planet",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING PLANET",
    "koreanName": "COSCO SHIPPING PLANET (21,237 TEU)",
    "mmsi": "440518810",
    "callsign": "DHV67",
    "imo": "9452338",
    "speed": "19.3 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 5.5,
    "mapCenter": [
      22.23,
      122.17
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-taurus",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING TAURUS",
    "koreanName": "COSCO SHIPPING TAURUS (20,119 TEU)",
    "mmsi": "440518939",
    "callsign": "DIY45",
    "imo": "9452355",
    "speed": "19.5 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.24,
      121.56
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-gemini",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING GEMINI",
    "koreanName": "COSCO SHIPPING GEMINI (20,119 TEU)",
    "mmsi": "440519099",
    "callsign": "DJB21",
    "imo": "9452367",
    "speed": "18.9 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.91,
      130.99
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-virgo",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING VIRGO",
    "koreanName": "COSCO SHIPPING VIRGO (20,119 TEU)",
    "mmsi": "440519261",
    "callsign": "DKE13",
    "imo": "9452385",
    "speed": "15.9 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 5.5,
    "mapCenter": [
      32.82,
      127.49
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-libra",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING LIBRA",
    "koreanName": "COSCO SHIPPING LIBRA (20,119 TEU)",
    "mmsi": "440519403",
    "callsign": "DLH38",
    "imo": "9452402",
    "speed": "13.2 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.49,
      122.53
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-sagittarius",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING SAGITTARIUS",
    "koreanName": "COSCO SHIPPING SAGITTARIUS (20,119 TEU)",
    "mmsi": "440519493",
    "callsign": "DMK49",
    "imo": "9452417",
    "speed": "18.4 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Antwerp",
    "destination": "Busan",
    "area": "극동-유럽 정기 항로 (Antwerp ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      47.82,
      31.65
    ],
    "routeWaypoints": [
      [
        51.27,
        4.34
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.8208,
        "lon": 15.1949,
        "heading": 97
      },
      {
        "lat": 47.1321,
        "lon": 37.1144,
        "heading": 97
      },
      {
        "lat": 45.7528,
        "lon": 48.0391,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.270",
        "lon": "4.340",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-pisces",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING PISCES",
    "koreanName": "COSCO SHIPPING PISCES (20,119 TEU)",
    "mmsi": "440519613",
    "callsign": "DNN63",
    "imo": "9452432",
    "speed": "19.5 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      45.07,
      39.48
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.7345,
        "lon": 15.8775,
        "heading": 97
      },
      {
        "lat": 44.2435,
        "lon": 47.4124,
        "heading": 96
      },
      {
        "lat": 42.498,
        "lon": 63.1798,
        "heading": 96
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-leo",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING LEO",
    "koreanName": "COSCO SHIPPING LEO (20,119 TEU)",
    "mmsi": "440519754",
    "callsign": "DOQ82",
    "imo": "9452451",
    "speed": "18.1 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.05,
      126.21
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "cosco-shipping-aries",
    "category": "global",
    "carrier": "🇨🇳 COSCO SHIPPING Lines",
    "name": "COSCO SHIPPING ARIES",
    "koreanName": "COSCO SHIPPING ARIES (20,119 TEU)",
    "mmsi": "440519885",
    "callsign": "DPT17",
    "imo": "9452472",
    "speed": "19.0 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Yokohama",
    "area": "엔슈나다 해역 (Busan ➔ Yokohama)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.07,
      131.39
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "19.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "19.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-ace",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ACE",
    "koreanName": "EVER ACE (23,992 TEU)",
    "mmsi": "440520097",
    "callsign": "DQW81",
    "imo": "9452483",
    "speed": "13.7 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Rotterdam",
    "destination": "Busan",
    "area": "수에즈-말라카 원양 항로 (Rotterdam ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      48.2,
      31.05
    ],
    "routeWaypoints": [
      [
        51.95,
        4.02
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 50.1636,
        "lon": 17.6202,
        "heading": 98
      },
      {
        "lat": 48.2036,
        "lon": 31.0469,
        "heading": 96
      },
      {
        "lat": 46.5907,
        "lon": 44.8206,
        "heading": 99
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "4.020",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-act",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ACT",
    "koreanName": "EVER ACT (23,992 TEU)",
    "mmsi": "440520191",
    "callsign": "DRZ36",
    "imo": "9452501",
    "speed": "13.8 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.47,
      121.94
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-aim",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER AIM",
    "koreanName": "EVER AIM (23,992 TEU)",
    "mmsi": "440520331",
    "callsign": "DSC39",
    "imo": "9452521",
    "speed": "13.9 kn",
    "heading": 116,
    "status": "항해중",
    "lat": 36.965,
    "lon": 126.835,
    "origin": "Dalian",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Dalian ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.56,
      122.96
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        36.965,
        126.835
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.7415,
        "lon": 122.0266,
        "heading": 96
      },
      {
        "lat": 38.5612,
        "lon": 122.9564,
        "heading": 105
      },
      {
        "lat": 38.3186,
        "lon": 123.824,
        "heading": 105
      }
    ],
    "logs": [
      {
        "lat": "36.965",
        "lon": "126.835",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-alp",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ALP",
    "koreanName": "EVER ALP (23,992 TEU)",
    "mmsi": "440520500",
    "callsign": "DTF33",
    "imo": "9452535",
    "speed": "12.7 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Yokohama",
    "area": "엔슈나다 해역 (Busan ➔ Yokohama)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.1,
      132.06
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-arm",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ARM",
    "koreanName": "EVER ARM (23,992 TEU)",
    "mmsi": "440520616",
    "callsign": "DUI59",
    "imo": "9452553",
    "speed": "13.7 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Antwerp",
    "destination": "Busan",
    "area": "극동-유럽 정기 항로 (Antwerp ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      45.87,
      46.47
    ],
    "routeWaypoints": [
      [
        51.27,
        4.34
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.7478,
        "lon": 16.3965,
        "heading": 97
      },
      {
        "lat": 44.8729,
        "lon": 52.2576,
        "heading": 95
      },
      {
        "lat": 41.7369,
        "lon": 76.2789,
        "heading": 95
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.270",
        "lon": "4.340",
        "speed": "13.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-art",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ART",
    "koreanName": "EVER ART (23,992 TEU)",
    "mmsi": "440520786",
    "callsign": "DVL74",
    "imo": "9452569",
    "speed": "13.8 kn",
    "heading": 90,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Los Angeles",
    "destination": "Busan",
    "area": "북태평양 횡단 항로 (Los Angeles ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.15,
      -30.72
    ],
    "routeWaypoints": [
      [
        33.74,
        -118.27
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.8346,
        "lon": -93.2783,
        "heading": 89
      },
      {
        "lat": 34.1185,
        "lon": -18.3032,
        "heading": 89
      },
      {
        "lat": 34.7078,
        "lon": 32.0802,
        "heading": 90
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.740",
        "lon": "-118.270",
        "speed": "13.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-alot",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ALOT",
    "koreanName": "EVER ALOT (24,004 TEU)",
    "mmsi": "440520857",
    "callsign": "DWO31",
    "imo": "9452586",
    "speed": "18.7 kn",
    "heading": 96,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      44.88,
      39.65
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.0137,
        "lon": 13.355,
        "heading": 96
      },
      {
        "lat": 45.0812,
        "lon": 39.845,
        "heading": 97
      },
      {
        "lat": 42.1349,
        "lon": 66.3213,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-aria",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ARIA",
    "koreanName": "EVER ARIA (24,004 TEU)",
    "mmsi": "440521055",
    "callsign": "DXR72",
    "imo": "9452605",
    "speed": "18.2 kn",
    "heading": 82,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Jebel Ali",
    "destination": "Busan",
    "area": "중동-동아시아 직항로 (Jebel Ali ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      27.65,
      75.15
    ],
    "routeWaypoints": [
      [
        24.995,
        55.065
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 26.0508,
        "lon": 63.0905,
        "heading": 82
      },
      {
        "lat": 28.4242,
        "lon": 79.4033,
        "heading": 84
      },
      {
        "lat": 29.2183,
        "lon": 87.1671,
        "heading": 82
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "24.995",
        "lon": "55.065",
        "speed": "18.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-atop",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER ATOP",
    "koreanName": "EVER ATOP (24,004 TEU)",
    "mmsi": "440521197",
    "callsign": "DYU52",
    "imo": "9452623",
    "speed": "13.5 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.07,
      130.65
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-golden",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GOLDEN",
    "koreanName": "EVER GOLDEN (20,124 TEU)",
    "mmsi": "440521277",
    "callsign": "DZX28",
    "imo": "9452637",
    "speed": "17.4 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.33,
      121.42
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-goods",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GOODS",
    "koreanName": "EVER GOODS (20,124 TEU)",
    "mmsi": "440521385",
    "callsign": "DAA59",
    "imo": "9452653",
    "speed": "15.4 kn",
    "heading": 92,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Valencia",
    "destination": "Busan",
    "area": "지중해-아시아 원양 항로 (Valencia ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.48,
      31.1
    ],
    "routeWaypoints": [
      [
        39.44,
        -0.31
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.9601,
        "lon": 15.3946,
        "heading": 92
      },
      {
        "lat": 38.2866,
        "lon": 30.9055,
        "heading": 91
      },
      {
        "lat": 38.0003,
        "lon": 46.8038,
        "heading": 91
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "15.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "39.440",
        "lon": "-0.310",
        "speed": "15.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-genius",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GENIUS",
    "koreanName": "EVER GENIUS (20,124 TEU)",
    "mmsi": "440521568",
    "callsign": "DBD22",
    "imo": "9452672",
    "speed": "17.9 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Qingdao ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.36,
      122.17
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "17.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "17.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-given",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GIVEN",
    "koreanName": "EVER GIVEN (20,124 TEU)",
    "mmsi": "440521700",
    "callsign": "DCG92",
    "imo": "9452692",
    "speed": "16.8 kn",
    "heading": 115,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Tianjin",
    "destination": "Gwangyang",
    "area": "서해 남부 해역 (Tianjin ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      37.67,
      121.19
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.5534,
        "lon": 118.6799,
        "heading": 115
      },
      {
        "lat": 37.5668,
        "lon": 121.763,
        "heading": 140
      },
      {
        "lat": 36.7952,
        "lon": 123.7046,
        "heading": 115
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-gifted",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GIFTED",
    "koreanName": "EVER GIFTED (20,124 TEU)",
    "mmsi": "440521817",
    "callsign": "DDJ19",
    "imo": "9452709",
    "speed": "13.6 kn",
    "heading": 197,
    "status": "항해중",
    "lat": 34.7,
    "lon": 124.95,
    "origin": "Incheon",
    "destination": "Singapore",
    "area": "대만해협 남방 (Incheon ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      29.76,
      121.79
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      }
    ],
    "logs": [
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-glory",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GLORY",
    "koreanName": "EVER GLORY (20,124 TEU)",
    "mmsi": "440521995",
    "callsign": "DEM70",
    "imo": "9452724",
    "speed": "18.9 kn",
    "heading": 96,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      46.68,
      23.87
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 48.0817,
        "lon": 11.9914,
        "heading": 95
      },
      {
        "lat": 46.8328,
        "lon": 24.0222,
        "heading": 96
      },
      {
        "lat": 45.5093,
        "lon": 35.9783,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-globe",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GLOBE",
    "koreanName": "EVER GLOBE (20,124 TEU)",
    "mmsi": "440522142",
    "callsign": "DFP63",
    "imo": "9452745",
    "speed": "13.9 kn",
    "heading": 116,
    "status": "항해중",
    "lat": 36.965,
    "lon": 126.835,
    "origin": "Dalian",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Dalian ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.54,
      123.03
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        36.965,
        126.835
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.692,
        "lon": 122.1269,
        "heading": 96
      },
      {
        "lat": 38.2261,
        "lon": 123.0706,
        "heading": 116
      },
      {
        "lat": 37.9931,
        "lon": 123.5425,
        "heading": 79
      }
    ],
    "logs": [
      {
        "lat": "36.965",
        "lon": "126.835",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "13.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-greet",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GREET",
    "koreanName": "EVER GREET (20,124 TEU)",
    "mmsi": "440522230",
    "callsign": "DGS12",
    "imo": "9452758",
    "speed": "15.2 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 5.5,
    "mapCenter": [
      25.63,
      123.92
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-govern",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GOVERN",
    "koreanName": "EVER GOVERN (20,124 TEU)",
    "mmsi": "440522420",
    "callsign": "DHV35",
    "imo": "9452773",
    "speed": "15.5 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.64,
      129.57
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-gentle",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GENTLE",
    "koreanName": "EVER GENTLE (20,124 TEU)",
    "mmsi": "440522538",
    "callsign": "DIY65",
    "imo": "9452796",
    "speed": "18.4 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Haiphong",
    "area": "통킹만 외해 (Busan ➔ Haiphong)",
    "mapZoom": 5.5,
    "mapCenter": [
      32.39,
      124.86
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ever-grade",
    "category": "global",
    "carrier": "🇹🇼 EVERGREEN Marine Corp",
    "name": "EVER GRADE",
    "koreanName": "EVER GRADE (20,124 TEU)",
    "mmsi": "440522654",
    "callsign": "DJB71",
    "imo": "9452810",
    "speed": "17.4 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Rotterdam",
    "destination": "Busan",
    "area": "수에즈-말라카 원양 항로 (Rotterdam ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      46.69,
      42.38
    ],
    "routeWaypoints": [
      [
        51.95,
        4.02
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 50.1798,
        "lon": 16.7906,
        "heading": 97
      },
      {
        "lat": 46.6394,
        "lon": 42.3319,
        "heading": 97
      },
      {
        "lat": 43.1088,
        "lon": 67.883,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "4.020",
        "speed": "17.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-innovation",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE INNOVATION",
    "koreanName": "ONE INNOVATION (24,136 TEU)",
    "mmsi": "440522840",
    "callsign": "DKE67",
    "imo": "9452825",
    "speed": "18.3 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "보하이해 외해 (Tianjin ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.4,
      120.69
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.766,
        "lon": 118.709,
        "heading": 91
      },
      {
        "lat": 38.3279,
        "lon": 120.6171,
        "heading": 102
      },
      {
        "lat": 38.2898,
        "lon": 122.9251,
        "heading": 124
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-infinity",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE INFINITY",
    "koreanName": "ONE INFINITY (24,136 TEU)",
    "mmsi": "440522901",
    "callsign": "DLH71",
    "imo": "9452843",
    "speed": "18.7 kn",
    "heading": 90,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Los Angeles",
    "destination": "Busan",
    "area": "북태평양 횡단 항로 (Los Angeles ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.14,
      -61.4
    ],
    "routeWaypoints": [
      [
        33.74,
        -118.27
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.8115,
        "lon": -99.3754,
        "heading": 89
      },
      {
        "lat": 33.9546,
        "lon": -61.5861,
        "heading": 89
      },
      {
        "lat": 34.0977,
        "lon": -23.7968,
        "heading": 88
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.740",
        "lon": "-118.270",
        "speed": "18.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-integrity",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE INTEGRITY",
    "koreanName": "ONE INTEGRITY (24,136 TEU)",
    "mmsi": "440523079",
    "callsign": "DMK38",
    "imo": "9452862",
    "speed": "13.2 kn",
    "heading": 197,
    "status": "항해중",
    "lat": 34.7,
    "lon": 124.95,
    "origin": "Incheon",
    "destination": "Singapore",
    "area": "대만해협 남방 (Incheon ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      24.49,
      118.45
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      }
    ],
    "logs": [
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "13.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-inspiration",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE INSPIRATION",
    "koreanName": "ONE INSPIRATION (24,136 TEU)",
    "mmsi": "440523243",
    "callsign": "DNN45",
    "imo": "9452881",
    "speed": "13.4 kn",
    "heading": 111,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.7,
      122.79
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.8332,
        "lon": 122.1099,
        "heading": 101
      },
      {
        "lat": 38.4454,
        "lon": 122.8157,
        "heading": 112
      },
      {
        "lat": 38.2856,
        "lon": 123.2026,
        "heading": 76
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-intelligence",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE INTELLIGENCE",
    "koreanName": "ONE INTELLIGENCE (24,136 TEU)",
    "mmsi": "440523353",
    "callsign": "DOQ12",
    "imo": "9452898",
    "speed": "16.4 kn",
    "heading": 113,
    "status": "항해중",
    "lat": 1.275,
    "lon": 103.785,
    "origin": "Port Said",
    "destination": "Singapore",
    "area": "홍해-인도양 횡단 항로 (Port Said ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      23.51,
      51.1
    ],
    "routeWaypoints": [
      [
        31.25,
        32.31
      ],
      [
        1.275,
        103.785
      ]
    ],
    "arrowNodes": [
      {
        "lat": 27.383,
        "lon": 41.7079,
        "heading": 112
      },
      {
        "lat": 23.5159,
        "lon": 51.1058,
        "heading": 112
      },
      {
        "lat": 19.6489,
        "lon": 60.5037,
        "heading": 112
      }
    ],
    "logs": [
      {
        "lat": "1.275",
        "lon": "103.785",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "31.250",
        "lon": "32.310",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-intensity",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE INTENSITY",
    "koreanName": "ONE INTENSITY (24,136 TEU)",
    "mmsi": "440523477",
    "callsign": "DPT34",
    "imo": "9452914",
    "speed": "13.6 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.31,
      131.9
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "13.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-apus",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE APUS",
    "koreanName": "ONE APUS (14,052 TEU)",
    "mmsi": "440523608",
    "callsign": "DQW50",
    "imo": "9452932",
    "speed": "15.1 kn",
    "heading": 197,
    "status": "항해중",
    "lat": 34.7,
    "lon": 124.95,
    "origin": "Incheon",
    "destination": "Singapore",
    "area": "대만해협 남방 (Incheon ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.01,
      122.57
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      }
    ],
    "logs": [
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "15.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "15.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-aquila",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE AQUILA",
    "koreanName": "ONE AQUILA (14,052 TEU)",
    "mmsi": "440523743",
    "callsign": "DRZ80",
    "imo": "9452950",
    "speed": "17.1 kn",
    "heading": 92,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Valencia",
    "destination": "Busan",
    "area": "지중해-아시아 원양 항로 (Valencia ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.16,
      39.86
    ],
    "routeWaypoints": [
      [
        39.44,
        -0.31
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.9476,
        "lon": 13.0146,
        "heading": 92
      },
      {
        "lat": 38.2109,
        "lon": 39.9117,
        "heading": 91
      },
      {
        "lat": 36.9915,
        "lon": 66.3261,
        "heading": 90
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "39.440",
        "lon": "-0.310",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-columba",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE COLUMBA",
    "koreanName": "ONE COLUMBA (14,052 TEU)",
    "mmsi": "440523869",
    "callsign": "DSC36",
    "imo": "9452960",
    "speed": "17.7 kn",
    "heading": 217,
    "status": "항해중",
    "lat": 1.365,
    "lon": 103.555,
    "origin": "Busan",
    "destination": "Tanjung Pelepas",
    "area": "말라카 해협 남부 (Busan ➔ Tanjung Pelepas)",
    "mapZoom": 5.5,
    "mapCenter": [
      24.29,
      120.87
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        1.365,
        103.555
      ]
    ],
    "arrowNodes": [
      {
        "lat": 32.0513,
        "lon": 126.7675,
        "heading": 217
      },
      {
        "lat": 22.6898,
        "lon": 119.6444,
        "heading": 216
      },
      {
        "lat": 16.5329,
        "lon": 114.9799,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "1.365",
        "lon": "103.555",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-cygnus",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE CYGNUS",
    "koreanName": "ONE CYGNUS (14,052 TEU)",
    "mmsi": "440524038",
    "callsign": "DTF85",
    "imo": "9452982",
    "speed": "16.7 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.29,
      126.38
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-grus",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE GRUS",
    "koreanName": "ONE GRUS (14,052 TEU)",
    "mmsi": "440524182",
    "callsign": "DUI88",
    "imo": "9452997",
    "speed": "14.6 kn",
    "heading": 115,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Tianjin",
    "destination": "Gwangyang",
    "area": "서해 남부 해역 (Tianjin ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.15,
      120.12
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.7055,
        "lon": 118.5448,
        "heading": 120
      },
      {
        "lat": 37.9644,
        "lon": 119.942,
        "heading": 115
      },
      {
        "lat": 37.284,
        "lon": 121.4,
        "heading": 88
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "14.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "one-hawk",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "ONE HAWK",
    "koreanName": "ONE HAWK (14,052 TEU)",
    "mmsi": "440524295",
    "callsign": "DVL52",
    "imo": "9453011",
    "speed": "18.6 kn",
    "heading": 87,
    "status": "항해중",
    "lat": 35.435,
    "lon": 139.675,
    "origin": "Gwangyang",
    "destination": "Yokohama",
    "area": "도쿄만 진입 해역 (Gwangyang ➔ Yokohama)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.93,
      129.73
    ],
    "routeWaypoints": [
      [
        34.905,
        127.755
      ],
      [
        35.435,
        139.675
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.9161,
        "lon": 128.7403,
        "heading": 82
      },
      {
        "lat": 35.0641,
        "lon": 129.8625,
        "heading": 85
      },
      {
        "lat": 35.1436,
        "lon": 130.9163,
        "heading": 103
      }
    ],
    "logs": [
      {
        "lat": "35.435",
        "lon": "139.675",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "18.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mol-triumph",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "MOL TRIUMPH",
    "koreanName": "MOL TRIUMPH (20,170 TEU)",
    "mmsi": "440524459",
    "callsign": "DWO46",
    "imo": "9453031",
    "speed": "14.5 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Singapore",
    "area": "남중국해 중부 해역 (Busan ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      26.36,
      122.56
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mol-trust",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "MOL TRUST",
    "koreanName": "MOL TRUST (20,170 TEU)",
    "mmsi": "440524559",
    "callsign": "DXR21",
    "imo": "9453052",
    "speed": "18.9 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Shanghai",
    "destination": "Busan",
    "area": "제주 남동부 해역 (Shanghai ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      32.0,
      123.01
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "18.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mol-tribute",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "MOL TRIBUTE",
    "koreanName": "MOL TRIBUTE (20,170 TEU)",
    "mmsi": "440524720",
    "callsign": "DYU13",
    "imo": "9453062",
    "speed": "12.6 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      49.23,
      38.4
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 52.3023,
        "lon": 18.0942,
        "heading": 99
      },
      {
        "lat": 48.6191,
        "lon": 42.4667,
        "heading": 100
      },
      {
        "lat": 45.8373,
        "lon": 58.3886,
        "heading": 96
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "12.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "12.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "mol-tradition",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "MOL TRADITION",
    "koreanName": "MOL TRADITION (20,170 TEU)",
    "mmsi": "440524895",
    "callsign": "DZX47",
    "imo": "9453082",
    "speed": "19.1 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.95,
      129.44
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "19.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "19.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "nyk-blue-jay",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "NYK BLUE JAY",
    "koreanName": "NYK BLUE JAY (14,000 TEU)",
    "mmsi": "440524978",
    "callsign": "DAA17",
    "imo": "9453097",
    "speed": "17.1 kn",
    "heading": 90,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Los Angeles",
    "destination": "Busan",
    "area": "북태평양 횡단 항로 (Los Angeles ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.11,
      -64.85
    ],
    "routeWaypoints": [
      [
        33.74,
        -118.27
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 33.8072,
        "lon": -100.5192,
        "heading": 89
      },
      {
        "lat": 33.9417,
        "lon": -65.0176,
        "heading": 89
      },
      {
        "lat": 34.0761,
        "lon": -29.516,
        "heading": 88
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.740",
        "lon": "-118.270",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "nyk-ibis",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "NYK IBIS",
    "koreanName": "NYK IBIS (14,000 TEU)",
    "mmsi": "440525081",
    "callsign": "DBD77",
    "imo": "9453117",
    "speed": "18.0 kn",
    "heading": 60,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Colombo",
    "destination": "Busan",
    "area": "인도양-말라카 횡단로 (Colombo ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      15.27,
      94.32
    ],
    "routeWaypoints": [
      [
        6.955,
        79.845
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 11.1273,
        "lon": 87.1011,
        "heading": 60
      },
      {
        "lat": 15.2995,
        "lon": 94.3572,
        "heading": 61
      },
      {
        "lat": 19.1207,
        "lon": 101.2623,
        "heading": 59
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "6.955",
        "lon": "79.845",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "nyk-eagle",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "NYK EAGLE",
    "koreanName": "NYK EAGLE (14,000 TEU)",
    "mmsi": "440525266",
    "callsign": "DCG52",
    "imo": "9453131",
    "speed": "16.9 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.82,
      129.47
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "16.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "16.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "nyk-crane",
    "category": "global",
    "carrier": "🇯🇵 ONE (Ocean Network Express)",
    "name": "NYK CRANE",
    "koreanName": "NYK CRANE (14,000 TEU)",
    "mmsi": "440525437",
    "callsign": "DDJ87",
    "imo": "9453152",
    "speed": "18.5 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 5.5,
    "mapCenter": [
      32.78,
      127.47
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "berlin-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "BERLIN EXPRESS",
    "koreanName": "BERLIN EXPRESS (23,664 TEU)",
    "mmsi": "440525569",
    "callsign": "DEM80",
    "imo": "9453169",
    "speed": "13.1 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      49.9,
      34.02
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 52.3184,
        "lon": 17.9874,
        "heading": 98
      },
      {
        "lat": 49.7342,
        "lon": 33.8612,
        "heading": 97
      },
      {
        "lat": 47.4721,
        "lon": 50.0571,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "manila-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "MANILA EXPRESS",
    "koreanName": "MANILA EXPRESS (23,664 TEU)",
    "mmsi": "440525646",
    "callsign": "DFP63",
    "imo": "9453187",
    "speed": "16.3 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Shanghai",
    "destination": "Busan",
    "area": "제주 남동부 해역 (Shanghai ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      32.14,
      123.3
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "hanoi-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "HANOI EXPRESS",
    "koreanName": "HANOI EXPRESS (23,664 TEU)",
    "mmsi": "440525828",
    "callsign": "DGS78",
    "imo": "9453200",
    "speed": "18.5 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Kobe",
    "area": "세토내해 하리마나다 (Busan ➔ Kobe)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.08,
      130.22
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "18.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "busan-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "BUSAN EXPRESS",
    "koreanName": "BUSAN EXPRESS (23,664 TEU)",
    "mmsi": "440525951",
    "callsign": "DHV31",
    "imo": "9453219",
    "speed": "14.9 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      50.05,
      31.9
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 51.7875,
        "lon": 20.9372,
        "heading": 98
      },
      {
        "lat": 50.1929,
        "lon": 32.0522,
        "heading": 99
      },
      {
        "lat": 48.3026,
        "lon": 42.8715,
        "heading": 99
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "singapore-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "SINGAPORE EXPRESS",
    "koreanName": "SINGAPORE EXPRESS (23,664 TEU)",
    "mmsi": "440526092",
    "callsign": "DIY26",
    "imo": "9453234",
    "speed": "14.2 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 5.5,
    "mapCenter": [
      24.9,
      123.53
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "dammam-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "DAMMAM EXPRESS",
    "koreanName": "DAMMAM EXPRESS (23,664 TEU)",
    "mmsi": "440526264",
    "callsign": "DJB31",
    "imo": "9453255",
    "speed": "18.3 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 31.34,
    "lon": 121.62,
    "origin": "Felixstowe",
    "destination": "Shanghai",
    "area": "글로벌 원양 컨테이너 항로 (Felixstowe ➔ Shanghai)",
    "mapZoom": 5.5,
    "mapCenter": [
      45.42,
      38.93
    ],
    "routeWaypoints": [
      [
        51.95,
        1.31
      ],
      [
        31.34,
        121.62
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.3169,
        "lon": 16.338,
        "heading": 99
      },
      {
        "lat": 44.3514,
        "lon": 46.6948,
        "heading": 99
      },
      {
        "lat": 41.8175,
        "lon": 61.8221,
        "heading": 101
      }
    ],
    "logs": [
      {
        "lat": "31.340",
        "lon": "121.620",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "1.310",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "rotterdam-express",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "ROTTERDAM EXPRESS",
    "koreanName": "ROTTERDAM EXPRESS (23,664 TEU)",
    "mmsi": "440526387",
    "callsign": "DKE91",
    "imo": "9453273",
    "speed": "15.7 kn",
    "heading": 114,
    "status": "항해중",
    "lat": 36.965,
    "lon": 126.835,
    "origin": "Dalian",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Dalian ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.61,
      122.78
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        36.965,
        126.835
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.82,
        "lon": 122.0305,
        "heading": 105
      },
      {
        "lat": 38.4486,
        "lon": 122.6199,
        "heading": 83
      },
      {
        "lat": 38.131,
        "lon": 123.2632,
        "heading": 75
      }
    ],
    "logs": [
      {
        "lat": "36.965",
        "lon": "126.835",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "al-zubara",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "AL ZUBARA",
    "koreanName": "AL ZUBARA (19,870 TEU)",
    "mmsi": "440526483",
    "callsign": "DLH94",
    "imo": "9453290",
    "speed": "15.2 kn",
    "heading": 56,
    "status": "항해중",
    "lat": 34.45,
    "lon": 136.95,
    "origin": "Busan",
    "destination": "Nagoya",
    "area": "세토내해 이요나다 해역 (Busan ➔ Nagoya)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.99,
      131.29
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.5,
        135.5
      ],
      [
        34.45,
        136.95
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 92
      },
      {
        "lat": 33.5,
        "lon": 135.5,
        "heading": 56
      }
    ],
    "logs": [
      {
        "lat": "34.450",
        "lon": "136.950",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "135.500",
        "speed": "15.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "al-nefud",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "AL NEFUD",
    "koreanName": "AL NEFUD (19,870 TEU)",
    "mmsi": "440526610",
    "callsign": "DMK51",
    "imo": "9453307",
    "speed": "13.5 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Singapore",
    "area": "남중국해 중부 해역 (Busan ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      23.31,
      120.24
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "13.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "al-riffa",
    "category": "global",
    "carrier": "🇩🇪 Hapag-Lloyd",
    "name": "AL RIFFA",
    "koreanName": "AL RIFFA (19,870 TEU)",
    "mmsi": "440526735",
    "callsign": "DNN67",
    "imo": "9453317",
    "speed": "18.1 kn",
    "heading": 217,
    "status": "항해중",
    "lat": 1.365,
    "lon": 103.555,
    "origin": "Busan",
    "destination": "Tanjung Pelepas",
    "area": "말라카 해협 남부 (Busan ➔ Tanjung Pelepas)",
    "mapZoom": 5.5,
    "mapCenter": [
      27.4,
      123.22
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        1.365,
        103.555
      ]
    ],
    "arrowNodes": [
      {
        "lat": 32.5759,
        "lon": 127.1626,
        "heading": 216
      },
      {
        "lat": 27.5777,
        "lon": 123.3978,
        "heading": 217
      },
      {
        "lat": 22.2793,
        "lon": 119.3329,
        "heading": 217
      }
    ],
    "logs": [
      {
        "lat": "1.365",
        "lon": "103.555",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-spain",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL SPAIN",
    "koreanName": "OOCL SPAIN (24,188 TEU)",
    "mmsi": "440526909",
    "callsign": "DOQ86",
    "imo": "9453338",
    "speed": "19.4 kn",
    "heading": 82,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Jebel Ali",
    "destination": "Busan",
    "area": "중동-동아시아 직항로 (Jebel Ali ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      27.45,
      72.48
    ],
    "routeWaypoints": [
      [
        24.995,
        55.065
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 26.2221,
        "lon": 63.7743,
        "heading": 83
      },
      {
        "lat": 27.2619,
        "lon": 72.2962,
        "heading": 80
      },
      {
        "lat": 28.6764,
        "lon": 81.1928,
        "heading": 81
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "24.995",
        "lon": "55.065",
        "speed": "19.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-piraeus",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL PIRAEUS",
    "koreanName": "OOCL PIRAEUS (24,188 TEU)",
    "mmsi": "440527044",
    "callsign": "DPT43",
    "imo": "9453353",
    "speed": "13.3 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Qingdao ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.32,
      121.87
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "13.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-turkiye",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL TURKIYE",
    "koreanName": "OOCL TURKIYE (24,188 TEU)",
    "mmsi": "440527148",
    "callsign": "DQW75",
    "imo": "9453371",
    "speed": "17.1 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.74,
      131.17
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-felixstowe",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL FELIXSTOWE",
    "koreanName": "OOCL FELIXSTOWE (24,188 TEU)",
    "mmsi": "440527338",
    "callsign": "DRZ96",
    "imo": "9453387",
    "speed": "12.6 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Tianjin",
    "destination": "Incheon",
    "area": "보하이해 외해 (Tianjin ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.38,
      120.83
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.8698,
        "lon": 118.6901,
        "heading": 97
      },
      {
        "lat": 38.2006,
        "lon": 121.1718,
        "heading": 102
      },
      {
        "lat": 38.2083,
        "lon": 123.2802,
        "heading": 124
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "12.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "12.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-zeebrugge",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL ZEEBRUGGE",
    "koreanName": "OOCL ZEEBRUGGE (24,188 TEU)",
    "mmsi": "440527482",
    "callsign": "DSC69",
    "imo": "9453404",
    "speed": "14.2 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.32,
      132.34
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-gdynia",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL GDYNIA",
    "koreanName": "OOCL GDYNIA (24,188 TEU)",
    "mmsi": "440527600",
    "callsign": "DTF78",
    "imo": "9453423",
    "speed": "17.6 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 5.5,
    "mapCenter": [
      24.17,
      123.22
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "17.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-hong-kong",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL HONG KONG",
    "koreanName": "OOCL HONG KONG (21,413 TEU)",
    "mmsi": "440527747",
    "callsign": "DUI97",
    "imo": "9453438",
    "speed": "14.5 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      37.09,
      129.96
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "14.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-germany",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL GERMANY",
    "koreanName": "OOCL GERMANY (21,413 TEU)",
    "mmsi": "440527837",
    "callsign": "DVL47",
    "imo": "9453455",
    "speed": "17.1 kn",
    "heading": 116,
    "status": "항해중",
    "lat": 36.965,
    "lon": 126.835,
    "origin": "Dalian",
    "destination": "Pyeongtaek",
    "area": "서해 중부 해역 (Dalian ➔ Pyeongtaek)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.31,
      123.51
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        36.965,
        126.835
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.692,
        "lon": 122.127,
        "heading": 96
      },
      {
        "lat": 38.3089,
        "lon": 123.8588,
        "heading": 105
      },
      {
        "lat": 37.6008,
        "lon": 124.5607,
        "heading": 83
      }
    ],
    "logs": [
      {
        "lat": "36.965",
        "lon": "126.835",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "17.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-japan",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL JAPAN",
    "koreanName": "OOCL JAPAN (21,413 TEU)",
    "mmsi": "440528020",
    "callsign": "DWO77",
    "imo": "9453476",
    "speed": "16.9 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.38,
      121.59
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "16.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "16.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-united-kingdom",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL UNITED KINGDOM",
    "koreanName": "OOCL UNITED KINGDOM (21,413 TEU)",
    "mmsi": "440528133",
    "callsign": "DXR32",
    "imo": "9453494",
    "speed": "15.9 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 5.5,
    "mapCenter": [
      34.94,
      130.04
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-scandinavia",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL SCANDINAVIA",
    "koreanName": "OOCL SCANDINAVIA (21,413 TEU)",
    "mmsi": "440528235",
    "callsign": "DYU52",
    "imo": "9453511",
    "speed": "17.0 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      33.22,
      123.17
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "17.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "17.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "oocl-indonesia",
    "category": "global",
    "carrier": "🇭🇰 OOCL (Orient Overseas Container Line)",
    "name": "OOCL INDONESIA",
    "koreanName": "OOCL INDONESIA (21,413 TEU)",
    "mmsi": "440528380",
    "callsign": "DZX20",
    "imo": "9453524",
    "speed": "19.1 kn",
    "heading": 98,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Rotterdam",
    "destination": "Busan",
    "area": "수에즈-말라카 원양 항로 (Rotterdam ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      48.64,
      29.24
    ],
    "routeWaypoints": [
      [
        51.95,
        4.02
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 50.2134,
        "lon": 16.5483,
        "heading": 97
      },
      {
        "lat": 48.6376,
        "lon": 29.2375,
        "heading": 98
      },
      {
        "lat": 46.7401,
        "lon": 41.605,
        "heading": 96
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "4.020",
        "speed": "19.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-wellhead",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM WELLHEAD",
    "koreanName": "YM WELLHEAD (14,000 TEU)",
    "mmsi": "440528518",
    "callsign": "DAA71",
    "imo": "9453542",
    "speed": "19.3 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Antwerp",
    "destination": "Busan",
    "area": "극동-유럽 정기 항로 (Antwerp ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      48.08,
      28.2
    ],
    "routeWaypoints": [
      [
        51.27,
        4.34
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.996,
        "lon": 13.883,
        "heading": 96
      },
      {
        "lat": 47.6322,
        "lon": 33.1532,
        "heading": 98
      },
      {
        "lat": 46.174,
        "lon": 42.5119,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.270",
        "lon": "4.340",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-wellspring",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM WELLSPRING",
    "koreanName": "YM WELLSPRING (14,000 TEU)",
    "mmsi": "440528682",
    "callsign": "DBD30",
    "imo": "9453554",
    "speed": "16.8 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      44.35,
      -36.51
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.3993,
        "lon": -88.3885,
        "heading": 93
      },
      {
        "lat": 43.598,
        "lon": -18.9455,
        "heading": 93
      },
      {
        "lat": 41.2973,
        "lon": 15.376,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "16.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-witness",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM WITNESS",
    "koreanName": "YM WITNESS (14,000 TEU)",
    "mmsi": "440528800",
    "callsign": "DCG90",
    "imo": "9453578",
    "speed": "19.5 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Yokohama",
    "area": "엔슈나다 해역 (Busan ➔ Yokohama)",
    "mapZoom": 5.5,
    "mapCenter": [
      35.15,
      132.81
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "19.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-whistle",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM WHISTLE",
    "koreanName": "YM WHISTLE (14,000 TEU)",
    "mmsi": "440528928",
    "callsign": "DDJ53",
    "imo": "9453589",
    "speed": "13.4 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 31.34,
    "lon": 121.62,
    "origin": "Felixstowe",
    "destination": "Shanghai",
    "area": "글로벌 원양 컨테이너 항로 (Felixstowe ➔ Shanghai)",
    "mapZoom": 5.5,
    "mapCenter": [
      46.97,
      31.07
    ],
    "routeWaypoints": [
      [
        51.95,
        1.31
      ],
      [
        31.34,
        121.62
      ]
    ],
    "arrowNodes": [
      {
        "lat": 49.8783,
        "lon": 13.134,
        "heading": 99
      },
      {
        "lat": 45.9714,
        "lon": 37.0187,
        "heading": 101
      },
      {
        "lat": 43.663,
        "lon": 48.606,
        "heading": 97
      }
    ],
    "logs": [
      {
        "lat": "31.340",
        "lon": "121.620",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "1.310",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-wind",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM WIND",
    "koreanName": "YM WIND (14,000 TEU)",
    "mmsi": "440529135",
    "callsign": "DEM86",
    "imo": "9453611",
    "speed": "18.3 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Antwerp",
    "destination": "Busan",
    "area": "극동-유럽 정기 항로 (Antwerp ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      47.39,
      33.37
    ],
    "routeWaypoints": [
      [
        51.27,
        4.34
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 50.0402,
        "lon": 14.0805,
        "heading": 98
      },
      {
        "lat": 47.3938,
        "lon": 33.3746,
        "heading": 97
      },
      {
        "lat": 45.1211,
        "lon": 53.0425,
        "heading": 99
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.270",
        "lon": "4.340",
        "speed": "18.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-winner",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM WINNER",
    "koreanName": "YM WINNER (14,000 TEU)",
    "mmsi": "440529224",
    "callsign": "DFP18",
    "imo": "9453622",
    "speed": "15.8 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      31.37,
      123.94
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-target",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM TARGET",
    "koreanName": "YM TARGET (11,000 TEU)",
    "mmsi": "440529361",
    "callsign": "DGS33",
    "imo": "9453646",
    "speed": "15.5 kn",
    "heading": 109,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Tianjin",
    "destination": "Gwangyang",
    "area": "서해 남부 해역 (Tianjin ➔ Gwangyang)",
    "mapZoom": 5.5,
    "mapCenter": [
      37.76,
      120.46
    ],
    "routeWaypoints": [
      [
        38.985,
        117.755
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.6426,
        "lon": 118.7225,
        "heading": 109
      },
      {
        "lat": 37.9579,
        "lon": 120.6576,
        "heading": 109
      },
      {
        "lat": 37.2732,
        "lon": 122.5926,
        "heading": 142
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.985",
        "lon": "117.755",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-top",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM TOP",
    "koreanName": "YM TOP (11,000 TEU)",
    "mmsi": "440529507",
    "callsign": "DHV58",
    "imo": "9453657",
    "speed": "18.0 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Singapore",
    "area": "남중국해 중부 해역 (Busan ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      23.64,
      120.48
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-triumph",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM TRIUMPH",
    "koreanName": "YM TRIUMPH (11,000 TEU)",
    "mmsi": "440529676",
    "callsign": "DIY32",
    "imo": "9453673",
    "speed": "14.9 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 31.34,
    "lon": 121.62,
    "origin": "Felixstowe",
    "destination": "Shanghai",
    "area": "글로벌 원양 컨테이너 항로 (Felixstowe ➔ Shanghai)",
    "mapZoom": 5.5,
    "mapCenter": [
      45.49,
      38.51
    ],
    "routeWaypoints": [
      [
        51.95,
        1.31
      ],
      [
        31.34,
        121.62
      ]
    ],
    "arrowNodes": [
      {
        "lat": 50.0899,
        "lon": 11.9263,
        "heading": 99
      },
      {
        "lat": 44.7928,
        "lon": 44.0585,
        "heading": 101
      },
      {
        "lat": 40.8142,
        "lon": 65.0328,
        "heading": 99
      }
    ],
    "logs": [
      {
        "lat": "31.340",
        "lon": "121.620",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "51.950",
        "lon": "1.310",
        "speed": "14.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ym-truth",
    "category": "global",
    "carrier": "🇹🇼 양밍해운 (Yang Ming Marine)",
    "name": "YM TRUTH",
    "koreanName": "YM TRUTH (11,000 TEU)",
    "mmsi": "440529789",
    "callsign": "DJB59",
    "imo": "9453693",
    "speed": "12.9 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Ho Chi Minh",
    "area": "베트남 남동부 해역 (Busan ➔ Ho Chi Minh)",
    "mapZoom": 5.5,
    "mapCenter": [
      30.42,
      124.78
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "12.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "12.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-pusan",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC PUSAN",
    "koreanName": "SITC PUSAN (1,800 TEU)",
    "mmsi": "440529954",
    "callsign": "DKE62",
    "imo": "9453713",
    "speed": "14.2 kn",
    "heading": 101,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      38.34,
      123.36
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.7024,
        "lon": 122.1938,
        "heading": 92
      },
      {
        "lat": 38.2571,
        "lon": 123.2714,
        "heading": 112
      },
      {
        "lat": 38.2119,
        "lon": 124.749,
        "heading": 145
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "14.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-inchon",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC INCHON",
    "koreanName": "SITC INCHON (1,800 TEU)",
    "mmsi": "440530058",
    "callsign": "DLH53",
    "imo": "9453730",
    "speed": "15.5 kn",
    "heading": 136,
    "status": "항해중",
    "lat": 33.8,
    "lon": 130.25,
    "origin": "Busan",
    "destination": "Hakata",
    "area": "쓰시마 해협 (Busan ➔ Hakata)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.73,
      129.52
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        130.25
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 136
      }
    ],
    "logs": [
      {
        "lat": "33.800",
        "lon": "130.250",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-kwangyang",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC KWANGYANG",
    "koreanName": "SITC KWANGYANG (1,800 TEU)",
    "mmsi": "440530236",
    "callsign": "DMK40",
    "imo": "9453744",
    "speed": "17.2 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.3,
      121.84
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "17.2 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "17.2 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-shanghai",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC SHANGHAI",
    "koreanName": "SITC SHANGHAI (1,800 TEU)",
    "mmsi": "440530308",
    "callsign": "DNN20",
    "imo": "9453758",
    "speed": "15.4 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Haiphong",
    "area": "통킹만 외해 (Busan ➔ Haiphong)",
    "mapZoom": 6.2,
    "mapCenter": [
      30.55,
      121.96
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "15.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "15.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-ningbo",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC NINGBO",
    "koreanName": "SITC NINGBO (1,800 TEU)",
    "mmsi": "440530461",
    "callsign": "DOQ68",
    "imo": "9453776",
    "speed": "15.8 kn",
    "heading": 67,
    "status": "항해중",
    "lat": 34.25,
    "lon": 127.8,
    "origin": "Ningbo",
    "destination": "Busan",
    "area": "동중국해 북부 해역 (Ningbo ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      31.33,
      123.89
    ],
    "routeWaypoints": [
      [
        29.885,
        121.845
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        124.0
      ],
      [
        33.5,
        126.0
      ],
      [
        34.25,
        127.8
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 48
      },
      {
        "lat": 32.5,
        "lon": 124.0,
        "heading": 63
      },
      {
        "lat": 33.5,
        "lon": 126.0,
        "heading": 67
      }
    ],
    "logs": [
      {
        "lat": "34.250",
        "lon": "127.800",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.500",
        "lon": "126.000",
        "speed": "15.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-qingdao",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC QINGDAO",
    "koreanName": "SITC QINGDAO (1,800 TEU)",
    "mmsi": "440530636",
    "callsign": "DPT29",
    "imo": "9453794",
    "speed": "16.3 kn",
    "heading": 221,
    "status": "항해중",
    "lat": 2.995,
    "lon": 101.375,
    "origin": "Busan",
    "destination": "Port Klang",
    "area": "말라카 해협 중부 (Busan ➔ Port Klang)",
    "mapZoom": 6.2,
    "mapCenter": [
      27.14,
      122.18
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        2.995,
        101.375
      ]
    ],
    "arrowNodes": [
      {
        "lat": 32.4942,
        "lon": 126.8234,
        "heading": 220
      },
      {
        "lat": 27.137,
        "lon": 122.1848,
        "heading": 220
      },
      {
        "lat": 21.845,
        "lon": 117.6113,
        "heading": 220
      }
    ],
    "logs": [
      {
        "lat": "2.995",
        "lon": "101.375",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-tianjin",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC TIANJIN",
    "koreanName": "SITC TIANJIN (1,800 TEU)",
    "mmsi": "440530762",
    "callsign": "DQW52",
    "imo": "9453811",
    "speed": "14.7 kn",
    "heading": 71,
    "status": "항해중",
    "lat": 34.95,
    "lon": 139.75,
    "origin": "Busan",
    "destination": "Tokyo",
    "area": "혼슈 남부 태평양 연안 (Busan ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      35.33,
      132.96
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.8,
        129.6
      ],
      [
        33.0,
        134.0
      ],
      [
        34.95,
        139.75
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 172
      },
      {
        "lat": 33.8,
        "lon": 129.6,
        "heading": 100
      },
      {
        "lat": 33.0,
        "lon": 134.0,
        "heading": 71
      }
    ],
    "logs": [
      {
        "lat": "34.950",
        "lon": "139.750",
        "speed": "14.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "134.000",
        "speed": "14.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-dalian",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC DALIAN",
    "koreanName": "SITC DALIAN (1,800 TEU)",
    "mmsi": "440530849",
    "callsign": "DRZ64",
    "imo": "9453831",
    "speed": "12.8 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Bangkok",
    "area": "태국만 남부 해역 (Busan ➔ Bangkok)",
    "mapZoom": 6.2,
    "mapCenter": [
      28.77,
      120.62
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "12.8 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-tokyo",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC TOKYO",
    "koreanName": "SITC TOKYO (1,800 TEU)",
    "mmsi": "440531047",
    "callsign": "DSC29",
    "imo": "9453848",
    "speed": "13.4 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Kaohsiung",
    "area": "동중국해 남부 (Busan ➔ Kaohsiung)",
    "mapZoom": 6.2,
    "mapCenter": [
      32.37,
      127.18
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "13.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "sitc-yokohama",
    "category": "korea",
    "carrier": "🇨🇳 SITC Container Lines",
    "name": "SITC YOKOHAMA",
    "koreanName": "SITC YOKOHAMA (1,800 TEU)",
    "mmsi": "440531143",
    "callsign": "DTF58",
    "imo": "9453866",
    "speed": "16.5 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.84,
      131.42
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "16.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "16.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-501",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 501",
    "koreanName": "WAN HAI 501 (4,252 TEU)",
    "mmsi": "440531301",
    "callsign": "DUI83",
    "imo": "9453881",
    "speed": "14.1 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.8,
      130.67
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "14.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "14.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-502",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 502",
    "koreanName": "WAN HAI 502 (4,252 TEU)",
    "mmsi": "440531396",
    "callsign": "DVL26",
    "imo": "9453901",
    "speed": "12.7 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 5.5,
    "mapCenter": [
      46.26,
      -67.49
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.6894,
        "lon": -95.3857,
        "heading": 92
      },
      {
        "lat": 46.2551,
        "lon": -67.4853,
        "heading": 93
      },
      {
        "lat": 44.7326,
        "lon": -39.6729,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-503",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 503",
    "koreanName": "WAN HAI 503 (4,252 TEU)",
    "mmsi": "440531600",
    "callsign": "DWO14",
    "imo": "9453916",
    "speed": "12.7 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Singapore",
    "area": "남중국해 중부 해역 (Busan ➔ Singapore)",
    "mapZoom": 5.5,
    "mapCenter": [
      25.16,
      121.66
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "12.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-505",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 505",
    "koreanName": "WAN HAI 505 (4,252 TEU)",
    "mmsi": "440531702",
    "callsign": "DXR49",
    "imo": "9453930",
    "speed": "16.6 kn",
    "heading": 217,
    "status": "항해중",
    "lat": 1.365,
    "lon": 103.555,
    "origin": "Busan",
    "destination": "Tanjung Pelepas",
    "area": "말라카 해협 남부 (Busan ➔ Tanjung Pelepas)",
    "mapZoom": 5.5,
    "mapCenter": [
      25.52,
      121.84
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        1.365,
        103.555
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.2662,
        "lon": 126.1761,
        "heading": 217
      },
      {
        "lat": 23.6486,
        "lon": 120.4383,
        "heading": 216
      },
      {
        "lat": 19.8398,
        "lon": 117.5694,
        "heading": 217
      }
    ],
    "logs": [
      {
        "lat": "1.365",
        "lon": "103.555",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "16.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-506",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 506",
    "koreanName": "WAN HAI 506 (4,252 TEU)",
    "mmsi": "440531865",
    "callsign": "DYU51",
    "imo": "9453951",
    "speed": "19.3 kn",
    "heading": 17,
    "status": "항해중",
    "lat": 35.8,
    "lon": 125.3,
    "origin": "Shanghai",
    "destination": "Incheon",
    "area": "서해 남부 해역 (Shanghai ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      33.51,
      123.41
    ],
    "routeWaypoints": [
      [
        31.34,
        121.62
      ],
      [
        31.3,
        121.9
      ],
      [
        31.15,
        122.5
      ],
      [
        32.5,
        123.5
      ],
      [
        34.0,
        124.5
      ],
      [
        34.7,
        124.95
      ],
      [
        35.8,
        125.3
      ]
    ],
    "arrowNodes": [
      {
        "lat": 31.3,
        "lon": 121.9,
        "heading": 104
      },
      {
        "lat": 31.15,
        "lon": 122.5,
        "heading": 36
      },
      {
        "lat": 32.5,
        "lon": 123.5,
        "heading": 33
      },
      {
        "lat": 34.0,
        "lon": 124.5,
        "heading": 32
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 17
      }
    ],
    "logs": [
      {
        "lat": "35.800",
        "lon": "125.300",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.700",
        "lon": "124.950",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-507",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 507",
    "koreanName": "WAN HAI 507 (4,252 TEU)",
    "mmsi": "440531945",
    "callsign": "DZX24",
    "imo": "9453965",
    "speed": "16.5 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.24,
      121.58
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "16.5 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "16.5 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-301",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 301",
    "koreanName": "WAN HAI 301 (3,055 TEU)",
    "mmsi": "440532139",
    "callsign": "DAA99",
    "imo": "9453986",
    "speed": "15.6 kn",
    "heading": 112,
    "status": "항해중",
    "lat": 37.445,
    "lon": 126.605,
    "origin": "Dalian",
    "destination": "Incheon",
    "area": "서해 북부 해역 (Dalian ➔ Incheon)",
    "mapZoom": 5.5,
    "mapCenter": [
      38.6,
      123.13
    ],
    "routeWaypoints": [
      [
        38.925,
        121.655
      ],
      [
        37.445,
        126.605
      ]
    ],
    "arrowNodes": [
      {
        "lat": 38.6618,
        "lon": 122.2921,
        "heading": 92
      },
      {
        "lat": 38.6225,
        "lon": 123.1533,
        "heading": 101
      },
      {
        "lat": 38.4713,
        "lon": 123.9024,
        "heading": 105
      }
    ],
    "logs": [
      {
        "lat": "37.445",
        "lon": "126.605",
        "speed": "15.6 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "38.925",
        "lon": "121.655",
        "speed": "15.6 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "wan-hai-302",
    "category": "global",
    "carrier": "🇹🇼 완하이 라인스 (Wan Hai Lines)",
    "name": "WAN HAI 302",
    "koreanName": "WAN HAI 302 (3,055 TEU)",
    "mmsi": "440532247",
    "callsign": "DBD46",
    "imo": "9454004",
    "speed": "16.4 kn",
    "heading": 216,
    "status": "항해중",
    "lat": 29.0,
    "lon": 124.0,
    "origin": "Busan",
    "destination": "Jakarta",
    "area": "자와해 북부 해역 (Busan ➔ Jakarta)",
    "mapZoom": 5.5,
    "mapCenter": [
      28.16,
      125.36
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.95,
        128.98
      ],
      [
        34.65,
        128.6
      ],
      [
        33.0,
        127.0
      ],
      [
        29.0,
        124.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.95,
        "lon": 128.98,
        "heading": 231
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 224
      },
      {
        "lat": 33.0,
        "lon": 127.0,
        "heading": 216
      }
    ],
    "logs": [
      {
        "lat": "29.000",
        "lon": "124.000",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "33.000",
        "lon": "127.000",
        "speed": "16.4 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-shanghai",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines",
    "name": "TS SHANGHAI",
    "koreanName": "TS SHANGHAI (1,800 TEU)",
    "mmsi": "440532357",
    "callsign": "DCG29",
    "imo": "9454013",
    "speed": "16.0 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 6.2,
    "mapCenter": [
      37.01,
      130.43
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "16.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "16.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-busan",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines",
    "name": "TS BUSAN",
    "koreanName": "TS BUSAN (1,800 TEU)",
    "mmsi": "440532526",
    "callsign": "DDJ59",
    "imo": "9454037",
    "speed": "16.7 kn",
    "heading": 80,
    "status": "항해중",
    "lat": 36.65,
    "lon": 125.4,
    "origin": "Qingdao",
    "destination": "Incheon",
    "area": "황해 중부 해역 (Qingdao ➔ Incheon)",
    "mapZoom": 6.2,
    "mapCenter": [
      36.36,
      122.08
    ],
    "routeWaypoints": [
      [
        36.002,
        120.205
      ],
      [
        35.85,
        120.7
      ],
      [
        36.2,
        122.5
      ],
      [
        36.5,
        124.5
      ],
      [
        36.65,
        125.4
      ]
    ],
    "arrowNodes": [
      {
        "lat": 35.85,
        "lon": 120.7,
        "heading": 78
      },
      {
        "lat": 36.2,
        "lon": 122.5,
        "heading": 81
      },
      {
        "lat": 36.5,
        "lon": 124.5,
        "heading": 80
      }
    ],
    "logs": [
      {
        "lat": "36.650",
        "lon": "125.400",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "36.500",
        "lon": "124.500",
        "speed": "16.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-incheon",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines",
    "name": "TS INCHEON",
    "koreanName": "TS INCHEON (1,800 TEU)",
    "mmsi": "440532672",
    "callsign": "DEM35",
    "imo": "9454048",
    "speed": "19.3 kn",
    "heading": 100,
    "status": "항해중",
    "lat": 33.6,
    "lon": 135.0,
    "origin": "Busan",
    "destination": "Osaka",
    "area": "오사카만 진입로 (Busan ➔ Osaka)",
    "mapZoom": 6.2,
    "mapCenter": [
      34.87,
      130.64
    ],
    "routeWaypoints": [
      [
        35.075,
        129.045
      ],
      [
        34.6,
        129.5
      ],
      [
        33.6,
        135.0
      ]
    ],
    "arrowNodes": [
      {
        "lat": 34.6,
        "lon": 129.5,
        "heading": 100
      }
    ],
    "logs": [
      {
        "lat": "33.600",
        "lon": "135.000",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "19.3 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-tokyo",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines",
    "name": "TS TOKYO",
    "koreanName": "TS TOKYO (1,800 TEU)",
    "mmsi": "440532805",
    "callsign": "DFP83",
    "imo": "9454071",
    "speed": "13.1 kn",
    "heading": 97,
    "status": "항해중",
    "lat": 34.905,
    "lon": 127.755,
    "origin": "Le Havre",
    "destination": "Gwangyang",
    "area": "유럽-아시아 원양 항로 (Le Havre ➔ Gwangyang)",
    "mapZoom": 6.2,
    "mapCenter": [
      45.53,
      35.57
    ],
    "routeWaypoints": [
      [
        49.48,
        0.11
      ],
      [
        34.905,
        127.755
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.82,
        "lon": 14.215,
        "heading": 96
      },
      {
        "lat": 44.5001,
        "lon": 42.425,
        "heading": 96
      },
      {
        "lat": 42.8401,
        "lon": 56.5299,
        "heading": 94
      }
    ],
    "logs": [
      {
        "lat": "34.905",
        "lon": "127.755",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.480",
        "lon": "0.110",
        "speed": "13.1 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-taipei",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines",
    "name": "TS TAIPEI",
    "koreanName": "TS TAIPEI (1,800 TEU)",
    "mmsi": "440532905",
    "callsign": "DGS78",
    "imo": "9454083",
    "speed": "17.9 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Vancouver",
    "destination": "Busan",
    "area": "북태평양 동북아 항로 (Vancouver ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      44.62,
      -41.45
    ],
    "routeWaypoints": [
      [
        49.3,
        -123.11
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 47.4038,
        "lon": -90.4684,
        "heading": 93
      },
      {
        "lat": 43.9225,
        "lon": -24.8739,
        "heading": 93
      },
      {
        "lat": 42.1151,
        "lon": 7.8566,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "17.9 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "49.300",
        "lon": "-123.110",
        "speed": "17.9 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "ts-bangkok",
    "category": "korea",
    "carrier": "🇹🇼 T.S. Lines",
    "name": "TS BANGKOK",
    "koreanName": "TS BANGKOK (1,800 TEU)",
    "mmsi": "440533046",
    "callsign": "DHV84",
    "imo": "9454099",
    "speed": "18.0 kn",
    "heading": 99,
    "status": "항해중",
    "lat": 35.075,
    "lon": 129.045,
    "origin": "Hamburg",
    "destination": "Busan",
    "area": "동아시아-유럽 간선 항로 (Hamburg ➔ Busan)",
    "mapZoom": 6.2,
    "mapCenter": [
      48.54,
      41.49
    ],
    "routeWaypoints": [
      [
        53.53,
        9.97
      ],
      [
        35.075,
        129.045
      ]
    ],
    "arrowNodes": [
      {
        "lat": 51.8612,
        "lon": 20.4739,
        "heading": 99
      },
      {
        "lat": 48.5235,
        "lon": 41.4816,
        "heading": 97
      },
      {
        "lat": 45.1858,
        "lon": 62.4893,
        "heading": 98
      }
    ],
    "logs": [
      {
        "lat": "35.075",
        "lon": "129.045",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "53.530",
        "lon": "9.970",
        "speed": "18.0 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  },
  {
    "id": "zim-antwerp",
    "category": "global",
    "carrier": "🇮🇱 ZIM Integrated Shipping",
    "name": "ZIM ANTWERP",
    "koreanName": "ZIM ANTWERP (10,000 TEU)",
    "mmsi": "440533179",
    "callsign": "DIY67",
    "imo": "9454121",
    "speed": "15.7 kn",
    "heading": 93,
    "status": "항해중",
    "lat": 34.6,
    "lon": 129.5,
    "origin": "Incheon",
    "destination": "Tokyo",
    "area": "규슈 남방 태평양 항로 (Incheon ➔ Tokyo)",
    "mapZoom": 5.5,
    "mapCenter": [
      36.97,
      129.34
    ],
    "routeWaypoints": [
      [
        37.445,
        126.605
      ],
      [
        37.36,
        126.42
      ],
      [
        37.15,
        125.85
      ],
      [
        36.65,
        125.4
      ],
      [
        35.8,
        125.3
      ],
      [
        34.7,
        124.95
      ],
      [
        34.15,
        125.8
      ],
      [
        34.25,
        127.8
      ],
      [
        34.65,
        128.6
      ],
      [
        34.6,
        129.5
      ]
    ],
    "arrowNodes": [
      {
        "lat": 37.36,
        "lon": 126.42,
        "heading": 249
      },
      {
        "lat": 37.15,
        "lon": 125.85,
        "heading": 221
      },
      {
        "lat": 36.65,
        "lon": 125.4,
        "heading": 186
      },
      {
        "lat": 35.8,
        "lon": 125.3,
        "heading": 197
      },
      {
        "lat": 34.7,
        "lon": 124.95,
        "heading": 122
      },
      {
        "lat": 34.15,
        "lon": 125.8,
        "heading": 87
      },
      {
        "lat": 34.25,
        "lon": 127.8,
        "heading": 63
      },
      {
        "lat": 34.65,
        "lon": 128.6,
        "heading": 93
      }
    ],
    "logs": [
      {
        "lat": "34.600",
        "lon": "129.500",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 09:50"
      },
      {
        "lat": "34.650",
        "lon": "128.600",
        "speed": "15.7 kn",
        "status": "항해중",
        "time": "2026-10-21 07:15"
      }
    ]
  }
];

let currentVessel = VESSEL_DATABASE[0];
let map = null;
let currentBaseLayers = [];
let routeLayersGroup = null;
let currentShipMarker = null;

// 100% Free Public Tile Layers (No API Key Required)
const MAP_TILE_SOURCES = {
  light: [
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 16,
      attribution: 'Esri, &copy; OpenStreetMap'
    }),
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 16
    })
  ],
  ocean: [
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 13,
      attribution: 'Esri, GEBCO, NOAA'
    }),
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 13
    })
  ],
  satellite: [
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 18,
      attribution: 'Esri, Maxar'
    })
  ],
  osm: [
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    })
  ]
};

// =========================================================
// wherevessel Enterprise Splash Screen & Caterpillar Loader
// =========================================================
function runSplashScreen() {
  const overlay = document.getElementById("appSplashOverlay");
  const fill = document.getElementById("splashProgressFill");
  const text = document.getElementById("splashStatusText");
  const percent = document.getElementById("splashPercentText");
  if (!overlay || !fill) return;

  const steps = [
    { pct: 8,  msg: "wherevessel 위성 관제 커널 초기화 중..." },
    { pct: 22, msg: "동아시아 주요 8개 항만(인천, 부산, 상하이 등) 항로 네트워크 구성 중..." },
    { pct: 38, msg: "274척 선박 위치 데이터베이스 및 해상 코리도(Corridors) 적재 중..." },
    { pct: 54, msg: "실시간 위성 AIS 피드 및 Dead Reckoning 추측항법 엔진 동기화..." },
    { pct: 70, msg: "해상 TSS 분리대 및 육지 침범 방지 안전 필터 적용..." },
    { pct: 84, msg: "선박별 실시간 궤적 레이저 및 연속 항해 로그 동기화 완료..." },
    { pct: 95, msg: "고해상도 해양 전자해도(ENC) 레이어 렌더링..." },
    { pct: 100, msg: "wherevessel 실시간 관제 시스템 준비 완료!" }
  ];

  let currentStep = 0;
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      const s = steps[currentStep];
      fill.style.width = s.pct + "%";
      if (text) text.textContent = s.msg;
      if (percent) percent.textContent = s.pct + "%";
      currentStep++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        overlay.classList.add("fade-out");
        if (typeof currentVessel !== "undefined" && currentVessel) {
          playLaserRouteAnimation(currentVessel);
        }
      }, 650);
    }
  }, 560);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  runSplashScreen();
  initMap();
  bindUIEvents();
  renderFleetModalCards("all");
  loadVessel(currentVessel.id, false);
  updateVesselCountsUI(); // Synchronize all vessel count badges on load
  pollLiveVesselsData(); // Fetch live data immediately on load
});

// Initialize Leaflet Map
function initMap() {
  map = L.map("map", {
    center: currentVessel.mapCenter,
    zoom: currentVessel.mapZoom,
    zoomControl: false,
    attributionControl: false
  });

  routeLayersGroup = L.layerGroup().addTo(map);
  setMapLayer("light");
}

// Function to safely set base tile layers
function setMapLayer(type) {
  currentBaseLayers.forEach(layer => map.removeLayer(layer));
  currentBaseLayers = [];

  const targetLayers = MAP_TILE_SOURCES[type] || MAP_TILE_SOURCES.light;
  targetLayers.forEach(layer => {
    layer.addTo(map);
    currentBaseLayers.push(layer);
  });
}

// Load and Render Vessel Data & Laser Animation
function loadVessel(vesselId, shouldFlyTo = true) {
  const vessel = VESSEL_DATABASE.find(v => v.id === vesselId) || VESSEL_DATABASE[0];
  currentVessel = vessel;

  // 1. Update Drawer Information
  document.getElementById("vesselNameDisplay").textContent = vessel.name;
  document.getElementById("metaMmsi").textContent = vessel.mmsi;
  document.getElementById("metaCallsign").textContent = vessel.callsign;
  document.getElementById("metaImo").textContent = vessel.imo;
  document.getElementById("metaSpeedCourse").textContent = `${vessel.speed} / ${String(vessel.heading).padStart(3, '0')}°`;
  document.getElementById("metaLat").textContent = vessel.lat.toFixed(6);
  document.getElementById("metaLon").textContent = vessel.lon.toFixed(6);
  document.getElementById("vesselSearchInput").value = vessel.name;
  updateExternalMapLinks(vessel);


  // Update Log Table
  renderVoyagesAccordion(vessel);

  // Dynamic voyages rendered via renderVoyagesAccordion(vessel);

  // Highlight Selected Card in Modal
  document.querySelectorAll(".fleet-card").forEach(c => {
    c.classList.toggle("selected", c.getAttribute("data-id") === vessel.id);
  });

  // 2. Clear Previous Route Graphics
  routeLayersGroup.clearLayers();

  // 3. Pan and Zoom Map to Vessel View
  if (shouldFlyTo) {
    map.flyTo(vessel.mapCenter, vessel.mapZoom, {
      duration: 1.2
    });
  }

  // 4. Trigger Laser Route Drawing & Flow Animation
  playLaserRouteAnimation(vessel);
}

const PORT_COORDINATES = {
  "Busan": [35.075, 129.045],
  "Incheon": [37.445, 126.605],
  "Gwangyang": [34.905, 127.755],
  "Ulsan": [35.505, 129.385],
  "Pyeongtaek": [36.965, 126.835],
  "Shanghai": [31.340, 121.620],
  "Ningbo": [29.885, 121.845],
  "Ningbo Pt": [29.885, 121.845],
  "Qingdao": [36.002, 120.205],
  "Tianjin": [38.985, 117.755],
  "Dalian": [38.925, 121.655],
  "Yingkou": [40.280, 122.080],
  "Tokyo": [35.615, 139.785],
  "Yokohama": [35.435, 139.675],
  "Nagoya": [35.048, 136.852],
  "Osaka": [34.645, 135.425],
  "Kobe": [34.675, 135.225],
  "Hakata": [33.615, 130.395],
  "Kaohsiung": [22.565, 120.305],
  "Keelung": [25.135, 121.745],
  "Taipei": [25.150, 121.390],
  "Hong Kong": [22.355, 114.115],
  "Singapore": [1.275, 103.785],
  "Tanjung Pelepas": [1.365, 103.555],
  "Port Klang": [2.995, 101.375],
  "Bangkok": [13.705, 100.585],
  "Haiphong": [20.865, 106.695],
  "Ho Chi Minh": [10.765, 106.765],
  "Jakarta": [-6.105, 106.885],
  "Surabaya": [-7.195, 112.725],
  "Manila": [14.595, 120.955],
  "Colombo": [6.955, 79.845],
  "Jebel Ali": [24.995, 55.065],
  "Jeddah": [21.485, 39.175],
  "Port Said": [31.250, 32.310],
  "Rotterdam": [51.950, 4.020],
  "Hamburg": [53.530, 9.970],
  "Antwerp": [51.270, 4.340],
  "Felixstowe": [51.950, 1.310],
  "Le Havre": [49.480, 0.110],
  "Valencia": [39.440, -0.310],
  "Los Angeles": [33.740, -118.270],
  "Seattle": [47.585, -122.365],
  "Vancouver": [49.300, -123.110]
};

// Standard Maritime Approaches (Navigational Fairways avoiding all landmasses)
const MARITIME_APPROACH_FAIRWAYS = {
  "Incheon": [
    [36.650, 125.400], // 태안반도 서방 외해 (40해리 안전 수로)
    [37.150, 125.850], // 덕적도 서방 외곽 수로
    [37.360, 126.420], // 팔미도 입항 수로
    [37.445, 126.605]  // 인천 신항 컨테이너 부두
  ],
  "Pyeongtaek": [
    [36.650, 125.400], // 서해 외해
    [36.800, 125.800],
    [36.980, 126.350], // 아산만 입구
    [36.965, 126.835]  // 평택항
  ],
  "Busan": [
    [34.200, 126.800], // 남해 외해
    [34.350, 127.800], // 거문도 남방
    [34.650, 128.600], // 거제도 남방 외해 수로
    [34.950, 128.980], // 가덕도 남방 진입로
    [35.075, 129.045]  // 부산항/부산신항
  ],
  "Gwangyang": [
    [34.350, 127.800], // 여수 외해
    [34.750, 127.850], // 여수해만 진입로
    [34.905, 127.755]  // 광양항
  ],
  "Ulsan": [
    [34.650, 128.600],
    [35.250, 129.500],
    [35.505, 129.385]  // 울산항
  ],
  "Tokyo": [
    [34.900, 139.750], // 우라가 수도 외해
    [35.250, 139.750], // 우라가 수도 진입로
    [35.615, 139.785]  // 도쿄항
  ],
  "Yokohama": [
    [34.900, 139.750],
    [35.250, 139.750],
    [35.435, 139.675]  // 요코하마항
  ],
  "Nagoya": [
    [34.350, 137.100], // 이세만 외해
    [34.750, 136.900], // 이세만 진입 수로
    [35.048, 136.852]  // 나고야항
  ],
  "Osaka": [
    [33.600, 135.000], // 키이 수도 외해
    [34.250, 135.050], // 오사카만 진입 수로
    [34.645, 135.425]  // 오사카항
  ],
  "Kobe": [
    [33.600, 135.000],
    [34.250, 135.050],
    [34.675, 135.225]  // 고베항
  ],
  "Hakata": [
    [33.850, 130.200], // 겐카이나다 수로
    [33.615, 130.395]  // 하카타항
  ],
  "Shanghai": [
    [31.150, 122.500], // 양쯔강 하구 TSS 분리대
    [31.300, 121.900], // 장강 수로
    [31.340, 121.620]  // 상하이 와이가오차오
  ],
  "Ningbo": [
    [29.950, 122.400], // 저우산 군도 수로
    [29.900, 122.050],
    [29.885, 121.845]  // 닝보항
  ],
  "Ningbo Pt": [
    [29.950, 122.400],
    [29.900, 122.050],
    [29.885, 121.845]
  ],
  "Qingdao": [
    [35.850, 120.700], // 자오저우만 외해
    [35.980, 120.350],
    [36.002, 120.205]  // 칭다오항
  ],
  "Tianjin": [
    [38.400, 120.800], // 보하이 해협
    [38.850, 118.500], // 보하이만
    [38.985, 117.755]  // 톈진 신항
  ],
  "Dalian": [
    [38.750, 121.850], // 다롄 외해 수로
    [38.925, 121.655]  // 다롄항
  ],
  "Yingkou": [
    [39.500, 121.500], // 랴오둥만 수로
    [40.150, 121.850],
    [40.280, 122.080]  // 잉커우항
  ],
  "Hong Kong": [
    [22.100, 114.300], // 남중국해 항로
    [22.355, 114.115]  // 홍콩 콰이청
  ],
  "Kaohsiung": [
    [22.450, 120.150], // 대만해협 남방
    [22.565, 120.305]  // 가오슝항
  ],
  "Singapore": [
    [1.320, 104.350],  // 싱가포르 해협 동부
    [1.240, 103.950],  // 싱가포르 항로
    [1.275, 103.785]   // 파시르 판장
  ]
};

// Universal 100% Maritime Sea-Corridor Router (Avoids all landmasses via international TSS fairways)
function getSeaCorridorWaypoints(startLat, startLon, destName) {
  const destCoord = PORT_COORDINATES[destName] || [startLat + 1.0, startLon + 1.0];
  const waypoints = [[startLat, startLon]];

  // 1. Destination is Busan / Ulsan / Gwangyang
  if (["Busan", "Ulsan", "Gwangyang"].includes(destName)) {
    // If coming from West Sea / Incheon / Pyeongtaek / China North
    if ((startLon < 127.2 && startLat > 34.0) || (startLat > 35.0 && startLon < 127.5)) {
      if (startLat > 37.0 && startLon > 126.3) waypoints.push([37.360, 126.420]); // 팔미도
      if (startLat > 36.8 && startLon > 125.7) waypoints.push([37.150, 125.850]); // 덕적도
      if (startLat > 36.3) waypoints.push([36.650, 125.400]); // 격렬비열도/태안 외해
      if (startLat > 35.2) waypoints.push([35.800, 125.300]); // 군산 외해
      if (startLat > 34.5) waypoints.push([34.700, 124.950]); // 흑산도 외해
      waypoints.push([33.900, 125.800]); // 제주해협 서방 수로
      waypoints.push([33.850, 126.800]); // 제주해협 중앙
      waypoints.push([34.350, 127.800]); // 거문도 남방
      if (destName === "Gwangyang") {
        waypoints.push([34.750, 127.850]);
        waypoints.push([34.905, 127.755]);
        return { waypoints, destCoord: [34.905, 127.755] };
      }
      waypoints.push([34.650, 128.600]); // 거제도 남방 외해 (통영/거제 육지 침범 절대 방지)
      waypoints.push([34.950, 128.980]); // 가덕도 남방 수로
      waypoints.push([35.075, 129.045]); // 부산항
      if (destName === "Ulsan") {
        waypoints.push([35.250, 129.500]);
        waypoints.push([35.505, 129.385]);
        return { waypoints, destCoord: [35.505, 129.385] };
      }
      return { waypoints, destCoord: [35.075, 129.045] };
    }
    // If coming from East China Sea (Shanghai, Ningbo)
    if (startLat < 33.0 && startLon < 125.0) {
      waypoints.push([32.500, 124.000]); // 이어도 북동 외해
      waypoints.push([33.500, 126.000]); // 제주 남방 외해
      waypoints.push([34.100, 127.500]); // 남해 외해
      waypoints.push([34.650, 128.600]); // 거제도 남방
      waypoints.push([34.950, 128.980]); // 가덕도 남방
      waypoints.push([35.075, 129.045]);
      return { waypoints, destCoord: [35.075, 129.045] };
    }
    // If coming from Japan (Tokyo, Osaka, Nagoya)
    if (startLon > 132.0) {
      waypoints.push([32.800, 133.500]); // 시코쿠 남방 태평양
      waypoints.push([30.800, 131.200]); // 오스미 해협
      waypoints.push([33.500, 130.000]); // 규슈 북방
      waypoints.push([34.800, 129.600]); // 쓰시마 해협 수로
      waypoints.push([35.075, 129.045]);
      return { waypoints, destCoord: [35.075, 129.045] };
    }
  }

  // 2. Destination is Incheon / Pyeongtaek
  if (["Incheon", "Pyeongtaek"].includes(destName)) {
    // Coming from South / East (Busan / Gwangyang / Japan)
    if (startLon > 126.5 && startLat < 36.0) {
      if (startLon > 128.5) waypoints.push([34.650, 128.600]); // 거제도 남방
      waypoints.push([34.350, 127.800]); // 거문도 남방
      waypoints.push([33.850, 126.800]); // 제주해협 중앙
      waypoints.push([33.900, 125.800]); // 제주해협 서방
      waypoints.push([34.700, 124.950]); // 흑산도 외해
      waypoints.push([35.800, 125.300]); // 군산 외해
      waypoints.push([36.650, 125.400]); // 태안반도 서방 40해리 안전 외해
      waypoints.push([37.150, 125.850]); // 덕적도 서방 수로
      if (destName === "Incheon") {
        waypoints.push([37.360, 126.420]); // 팔미도 수로
        waypoints.push([37.445, 126.605]); // 인천 신항
      } else {
        waypoints.push([36.800, 125.800]);
        waypoints.push([36.965, 126.835]);
      }
      return { waypoints, destCoord: destName === "Incheon" ? [37.445, 126.605] : [36.965, 126.835] };
    }
    // Coming from West Sea South (Shanghai / Pancon Glory)
    if (startLat < 37.0 && startLon < 126.5) {
      if (startLat < 36.65) waypoints.push([36.650, 125.400]); // 태안반도 외해 우회
      waypoints.push([37.150, 125.850]); // 덕적도 서방 외곽 수로
      if (destName === "Incheon") {
        waypoints.push([37.360, 126.420]); // 팔미도 수로
        waypoints.push([37.445, 126.605]); // 인천 신항
      } else {
        waypoints.push([36.800, 125.800]);
        waypoints.push([36.965, 126.835]);
      }
      return { waypoints, destCoord: destName === "Incheon" ? [37.445, 126.605] : [36.965, 126.835] };
    }
  }

  // 3. Destination is Japan Pacific Ports (Tokyo, Yokohama, Nagoya, Osaka, Kobe)
  if (["Tokyo", "Yokohama", "Nagoya", "Osaka", "Kobe"].includes(destName)) {
    if (startLon < 131.0) { // Coming from Korea or China
      if (startLat > 34.5 && startLon < 126.5) {
        waypoints.push([34.700, 124.950]);
        waypoints.push([33.900, 125.800]);
      }
      if (startLon < 128.0) waypoints.push([33.500, 127.000]);
      waypoints.push([31.500, 129.500]); // 규슈 서남방 외해
      waypoints.push([30.800, 131.200]); // 오스미 해협
      waypoints.push([32.800, 133.500]); // 시코쿠 남방 구로시오 수로
      if (["Osaka", "Kobe"].includes(destName)) {
        waypoints.push([33.600, 135.000]); // 키이 수도 외해
        waypoints.push([34.250, 135.050]); // 오사카만 진입 수로
        waypoints.push(destName === "Osaka" ? [34.645, 135.425] : [34.675, 135.225]);
        return { waypoints, destCoord: destName === "Osaka" ? [34.645, 135.425] : [34.675, 135.225] };
      }
      if (destName === "Nagoya") {
        waypoints.push([34.100, 137.500]); // 엔슈나다 남방
        waypoints.push([34.750, 136.900]); // 이세만 진입 수로
        waypoints.push([35.048, 136.852]); // 나고야항
        return { waypoints, destCoord: [35.048, 136.852] };
      }
      waypoints.push([34.400, 139.000]); // 이즈반도 남방
      waypoints.push([34.900, 139.750]); // 우라가 수도 외해
      waypoints.push([35.250, 139.750]); // 우라가 수도 수로
      waypoints.push(destName === "Tokyo" ? [35.615, 139.785] : [35.435, 139.675]);
      return { waypoints, destCoord: destName === "Tokyo" ? [35.615, 139.785] : [35.435, 139.675] };
    }
  }

  // 4. Destination is Shanghai / Ningbo
  if (["Shanghai", "Ningbo", "Ningbo Pt"].includes(destName)) {
    if (startLat > 34.0) {
      if (startLon > 127.0) { // from Busan
        waypoints.push([34.650, 128.600]);
        waypoints.push([34.000, 127.500]);
        waypoints.push([33.000, 125.500]);
      } else if (startLon < 126.5) { // from Incheon / Yellow Sea
        if (startLat > 36.65) waypoints.push([36.650, 125.400]);
        if (startLat > 35.8) waypoints.push([35.800, 125.300]);
        waypoints.push([34.700, 124.950]);
      }
      waypoints.push([32.500, 123.500]); // 제주 서남방 외해
    }
    waypoints.push([31.150, 122.500]); // 장강구 TSS 분리대
    if (destName === "Shanghai") {
      waypoints.push([31.300, 121.900]);
      waypoints.push([31.340, 121.620]);
    } else {
      waypoints.push([29.950, 122.400]);
      waypoints.push([29.885, 121.845]);
    }
    return { waypoints, destCoord: destName === "Shanghai" ? [31.340, 121.620] : [29.885, 121.845] };
  }

  // 5. Destination is Qingdao / Tianjin / Dalian
  if (["Qingdao", "Tianjin", "Dalian"].includes(destName)) {
    if (startLon > 124.5 && startLat < 37.0) {
      waypoints.push([36.500, 123.500]); // 황해 중앙 수로
      if (destName === "Qingdao") {
        waypoints.push([35.850, 120.700]);
        waypoints.push([36.002, 120.205]);
        return { waypoints, destCoord: [36.002, 120.205] };
      }
      waypoints.push([37.450, 122.800]); // 산둥반도 성산각 TSS 외해 (산둥반도 곶 우회)
      waypoints.push([38.400, 120.800]); // 보하이 해협 (라오톄산 수로)
      if (destName === "Dalian") {
        waypoints.push([38.750, 121.850]);
        waypoints.push([38.925, 121.655]);
        return { waypoints, destCoord: [38.925, 121.655] };
      } else {
        waypoints.push([38.850, 118.500]);
        waypoints.push([38.985, 117.755]);
        return { waypoints, destCoord: [38.985, 117.755] };
      }
    }
  }

  // Fallback to standard safe approach
  if (MARITIME_APPROACH_FAIRWAYS[destName]) {
    MARITIME_APPROACH_FAIRWAYS[destName].forEach(pt => waypoints.push(pt));
  } else {
    waypoints.push(destCoord);
  }

  return { waypoints, destCoord };
}

// Calculate planned upcoming waypoints along 100% maritime navigation fairways
function getPlannedWaypoints(vessel) {
  return getSeaCorridorWaypoints(vessel.lat, vessel.lon, vessel.destination);
}

// Resolve Traveled Waypoints ensuring 100% sea route (No land-crossing and ZERO gap to current position)
function resolveTraveledWaypoints(vessel) {
  const curPos = [parseFloat(vessel.lat), parseFloat(vessel.lon)];
  const originCoord = PORT_COORDINATES[vessel.origin] || 
    (vessel.routeWaypoints && vessel.routeWaypoints.length > 0 ? vessel.routeWaypoints[0] : curPos);

  let pts = [];

  // 1. Get base route waypoints from origin
  if (vessel.routeWaypoints && vessel.routeWaypoints.length > 0) {
    pts = vessel.routeWaypoints.map(p => [parseFloat(p[0]), parseFloat(p[1])]);
  } else {
    const corridor = getSeaCorridorWaypoints(originCoord[0], originCoord[1], vessel.destination);
    pts = corridor.waypoints.map(p => [parseFloat(p[0]), parseFloat(p[1])]);
  }

  // 2. Incorporate chronological logs (oldest -> newest) to bridge any gap between static waypoints and live position
  if (vessel.logs && vessel.logs.length > 0) {
    const chronLogs = [...vessel.logs].reverse();
    chronLogs.forEach(lg => {
      const lLat = parseFloat(lg.lat);
      const lLon = parseFloat(lg.lon);
      if (!isNaN(lLat) && !isNaN(lLon)) {
        const last = pts[pts.length - 1];
        if (!last || Math.hypot(last[0] - lLat, last[1] - lLon) > 0.02) {
          pts.push([lLat, lLon]);
        }
      }
    });
  }

  // 3. Connect intermediate sea corridor points if ship moved ahead of last waypoint
  const last = pts[pts.length - 1];
  if (vessel.destination === "Incheon" && curPos[0] > 35.8 && last && last[0] < 36.3) {
    if (curPos[0] > 36.3 && last[0] < 36.3) pts.push([36.310, 125.360]);
    if (curPos[0] > 36.6 && last[0] < 36.65) pts.push([36.650, 125.400]);
  } else if (vessel.destination === "Busan" && curPos[1] > 127.0 && last && last[1] < 127.5) {
    if (curPos[1] > 127.5 && last[1] < 127.5) pts.push([34.250, 127.800]);
  }

  // 4. CRITICAL ZERO-GAP GUARANTEE:
  // The traveled route MUST end precisely at the ship's current position!
  const finalPt = pts[pts.length - 1];
  if (!finalPt || Math.hypot(finalPt[0] - curPos[0], finalPt[1] - curPos[1]) > 0.001) {
    pts.push(curPos);
  } else {
    pts[pts.length - 1] = curPos;
  }

  return pts;
}

// Spectacular Dual-Laser Route Animation Engine (온 길 vs 갈 길)
function playLaserRouteAnimation(vessel) {
  routeLayersGroup.clearLayers();

  // ================= 1. 온 길 (Past Traveled Route: 출발항 ➔ 선박 위치) =================
  const traveledWaypoints = resolveTraveledWaypoints(vessel);
  const startPoint = traveledWaypoints[0];
  
  // A-1. Add Explicit Start Port Marker (출발항 핀 마커: 에메랄드 ⚓)
  const startPortIcon = L.divIcon({
    className: "start-port-marker-wrapper",
    html: `
      <div class="start-port-badge">
        <span class="start-port-pin">⚓</span>
        <span class="start-port-text">${vessel.origin} (출발항)</span>
      </div>
    `,
    iconSize: [140, 36],
    iconAnchor: [70, 18]
  });
  L.marker(startPoint, { icon: startPortIcon }).addTo(routeLayersGroup);

  // A-2. Base Track Line (Navy semi-transparent guide)
  L.polyline(traveledWaypoints, {
    className: 'laser-base-track'
  }).addTo(routeLayersGroup);

  // A-3. Interim Waypoint Direction Arrows (온 길 방향 화살표)
  if (vessel.arrowNodes && vessel.arrowNodes.length > 0) {
    vessel.arrowNodes.forEach(node => {
      const arrowIcon = L.divIcon({
        className: "waypoint-arrow-wrapper",
        html: `
          <div class="route-waypoint-arrow" style="transform: rotate(${node.heading}deg);">
            <svg width="10" height="10" viewBox="0 0 24 24">
              <polygon points="12,2 22,21 12,17 2,21"/>
            </svg>
          </div>
        `,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });
      L.marker([node.lat, node.lon], { icon: arrowIcon }).addTo(routeLayersGroup);
    });
  } else if (traveledWaypoints.length >= 3) {
    const midIdx = Math.floor(traveledWaypoints.length / 2);
    const mid = traveledWaypoints[midIdx];
    const prev = traveledWaypoints[midIdx - 1];
    const heading = Math.round((Math.atan2(mid[1] - prev[1], mid[0] - prev[0]) * 180 / Math.PI + 360) % 360);
    const arrowIcon = L.divIcon({
      className: "waypoint-arrow-wrapper",
      html: `
        <div class="route-waypoint-arrow" style="transform: rotate(${heading}deg);">
          <svg width="10" height="10" viewBox="0 0 24 24"><polygon points="12,2 22,21 12,17 2,21"/></svg>
        </div>
      `,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    L.marker(mid, { icon: arrowIcon }).addTo(routeLayersGroup);
  }

  // A-4. Animated Traveled Laser Beam (Intro "쭈욱~~" 실선 청록 레이저 빔)
  const laserDrawLine = L.polyline(traveledWaypoints, {
    className: 'laser-beam-draw'
  }).addTo(routeLayersGroup);

  setTimeout(() => {
    const pathElem = laserDrawLine.getElement();
    if (pathElem && pathElem.getTotalLength) {
      const len = Math.ceil(pathElem.getTotalLength());
      pathElem.style.strokeDasharray = `${len}`;
      pathElem.style.strokeDashoffset = `${len}`;
      pathElem.getBoundingClientRect();
      pathElem.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(0.25, 1, 0.5, 1)';
      pathElem.style.strokeDashoffset = '0';
    }
  }, 100);

  // A-5. Continuous Laser Comet Pulse Stream (선박으로 빠르게 흘러가는 청록 광선)
  setTimeout(() => {
    L.polyline(traveledWaypoints, {
      className: 'laser-pulse-flow'
    }).addTo(routeLayersGroup);
  }, 1000);


  // ================= 2. 갈 길 (Upcoming Planned Route: 선박 위치 ➔ 도착항) =================
  const planned = getPlannedWaypoints(vessel);
  const plannedWaypoints = planned.waypoints;
  const destPoint = planned.destCoord;

  // B-1. Add Explicit Destination Port Marker (도착항 핀 마커: 골드 🏁)
  const destPortIcon = L.divIcon({
    className: "dest-port-marker-wrapper",
    html: `
      <div class="dest-port-badge">
        <span class="dest-port-pin">🏁</span>
        <span class="dest-port-text">${vessel.destination} (도착 예정)</span>
      </div>
    `,
    iconSize: [150, 36],
    iconAnchor: [75, 18]
  });
  L.marker(destPoint, { icon: destPortIcon }).addTo(routeLayersGroup);

  // B-2. Planned Route Base Guide Line (골드 점선 가이드)
  L.polyline(plannedWaypoints, {
    className: 'laser-planned-track'
  }).addTo(routeLayersGroup);

  // B-3. Planned Route Intermediate Direction Arrows (도착지 향발 골드 화살표)
  if (plannedWaypoints.length >= 3) {
    const midPoint = plannedWaypoints[Math.floor(plannedWaypoints.length / 2)];
    const dLat = destPoint[0] - vessel.lat;
    const dLon = destPoint[1] - vessel.lon;
    const plannedHeading = Math.round((Math.atan2(dLon, dLat) * 180 / Math.PI + 360) % 360);

    const plannedArrowIcon = L.divIcon({
      className: "waypoint-arrow-wrapper",
      html: `
        <div class="route-planned-arrow" style="transform: rotate(${plannedHeading}deg);">
          <svg width="10" height="10" viewBox="0 0 24 24">
            <polygon points="12,2 22,21 12,17 2,21"/>
          </svg>
        </div>
      `,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    L.marker(midPoint, { icon: plannedArrowIcon }).addTo(routeLayersGroup);
  }

  // B-4. Planned Glowing Neon Laser Line (도착지로 뻗어나가는 네온 골드 점선 레이저)
  const plannedLaserLine = L.polyline(plannedWaypoints, {
    className: 'laser-planned-beam'
  }).addTo(routeLayersGroup);

  // B-5. Continuous Planned Laser Pulse (도착지를 향해 앞으로 흘러가는 네온 골드 펄스)
  setTimeout(() => {
    L.polyline(plannedWaypoints, {
      className: 'laser-planned-flow'
    }).addTo(routeLayersGroup);
  }, 1400);


  // ================= 3. 현재 선박 위치 펄스 마커 (📍 현재 위치 말풍선) =================
  const shipIcon = L.divIcon({
    className: "current-ship-marker-wrapper",
    html: `
      <div class="tradlinx-marker-wrap">
        <span class="ship-radar-ping-ring"></span>
        
        <!-- 현재 위치 안내 말풍선 (Speech Bubble) -->
        <div class="ship-speech-bubble">
          <span class="bubble-tag"><span class="bubble-beacon"></span>현재 위치</span>
          <span class="bubble-name">${vessel.name}</span>
          <div class="bubble-arrow"></div>
        </div>

        <div class="marker-arrow-circle" style="transform: rotate(${vessel.heading}deg);">
          <svg width="12" height="12" viewBox="0 0 24 24">
            <polygon points="12,2 22,21 12,17 2,21"/>
          </svg>
        </div>
      </div>
    `,
    iconSize: [140, 68],
    iconAnchor: [70, 58]
  });

  currentShipMarker = L.marker([vessel.lat, vessel.lon], { icon: shipIcon }).addTo(routeLayersGroup);

  currentShipMarker.on("click", () => {
    map.flyTo([vessel.lat, vessel.lon], 9, { duration: 1.0 });
  });
}

let activeFleetCategory = "all";

// Render Fleet Modal Cards (2-column clean enterprise cards with instant search)
function renderFleetModalCards(categoryFilter = "all", searchQuery = "") {
  const container = document.getElementById("fleetCardsContainer");
  if (!container) return;

  activeFleetCategory = categoryFilter;
  const q = (searchQuery || "").trim().toUpperCase();

  let list = categoryFilter === "all" 
    ? VESSEL_DATABASE 
    : VESSEL_DATABASE.filter(v => v.category === categoryFilter);

  if (q) {
    list = list.filter(v => 
      v.name.toUpperCase().includes(q) ||
      v.carrier.toUpperCase().includes(q) ||
      v.origin.toUpperCase().includes(q) ||
      v.destination.toUpperCase().includes(q) ||
      v.imo.includes(q) ||
      v.mmsi.includes(q)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: #94a3b8; font-size: 13px;">
        🔍 검색 조건과 일치하는 선박이 없습니다.
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(v => `
    <div class="fleet-card ${v.id === currentVessel.id ? 'selected' : ''}" data-id="${v.id}">
      <div class="fleet-card-top">
        <span class="fleet-card-carrier">${v.carrier}</span>
        <span class="fleet-card-speed">${v.speed}</span>
      </div>
      <div class="fleet-card-name">🚢 ${v.name}</div>
      <div class="fleet-card-route">
        <span>${v.origin}</span>
        <span class="arrow">➔</span>
        <span>${v.destination}</span>
      </div>
    </div>
  `).join("");

  // Card click: Select and close modal
  container.querySelectorAll(".fleet-card").forEach(card => {
    card.addEventListener("click", () => {
      const vid = card.getAttribute("data-id");
      if (vid) {
        loadVessel(vid, true);
        closeFleetModal();
      }
    });
  });
}

function openFleetModal() {
  const modal = document.getElementById("fleetModalOverlay");
  if (modal) {
    modal.classList.add("open");
    renderFleetModalCards("all");
  }
}

function closeFleetModal() {
  const modal = document.getElementById("fleetModalOverlay");
  if (modal) modal.classList.remove("open");
}

// Update External Map Links dynamically
function updateExternalMapLinks(vessel) {
  const marineUrl = `https://www.marinetraffic.com/en/ais/details/ships/mmsi:${vessel.mmsi}/imo:${vessel.imo}/vessel:${encodeURIComponent(vessel.name)}`;
  const osmUrl = `https://www.openstreetmap.org/?mlat=${vessel.lat}&mlon=${vessel.lon}#map=9/${vessel.lat}/${vessel.lon}`;
  const kakaoUrl = `https://map.kakao.com/link/map/${encodeURIComponent(vessel.name)},${vessel.lat},${vessel.lon}`;
  const naverUrl = `https://map.naver.com/v5/?c=${vessel.lon},${vessel.lat},9,0,0,0,dh`;

  const chipMarine = document.getElementById("extMapMarine");
  const chipOsm = document.getElementById("extMapOsm");
  const chipKakao = document.getElementById("extMapKakao");
  const chipNaver = document.getElementById("extMapNaver");

  if (chipMarine) chipMarine.href = marineUrl;
  if (chipOsm) chipOsm.href = osmUrl;
  if (chipKakao) chipKakao.href = kakaoUrl;
  if (chipNaver) chipNaver.href = naverUrl;
}

// Render Dynamic Voyages Accordion (Zero Fake Data: verified voyages only)
function renderVoyagesAccordion(vessel) {
  const container = document.getElementById("voyagesAccordion");
  if (!container) return;

  const isKST = document.getElementById("btnTimeKST")?.classList.contains("active");

  // Build log table rows for current active voyage
  const logRowsHtml = (vessel.logs || []).map((log, index) => {
    let displayTime = log.time + " (UTC)";
    if (isKST) {
      try {
        const utcDate = new Date(log.time.replace(" ", "T") + ":00Z");
        if (!isNaN(utcDate.getTime())) {
          const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
          const yyyy = kstDate.getUTCFullYear();
          const mm = String(kstDate.getUTCMonth() + 1).padStart(2, '0');
          const dd = String(kstDate.getUTCDate()).padStart(2, '0');
          const hh = String(kstDate.getUTCHours()).padStart(2, '0');
          const min = String(kstDate.getUTCMinutes()).padStart(2, '0');
          displayTime = `${yyyy}-${mm}-${dd} ${hh}:${min} (KST)`;
        }
      } catch (e) {
        displayTime = log.time + " (KST)";
      }
    }

    const isLatest = (index === 0);
    const rowClass = isLatest ? "row-live-latest" : "row-log-history";
    const statusBadge = isLatest 
      ? `<span class="badge-status-live"><span class="live-dot-ping"></span>실시간 수신</span>`
      : `<span class="badge-status-blue">${log.status}</span>`;
    const timeDisplay = isLatest
      ? `<strong class="time-live-text">${displayTime}</strong> <span class="badge-new-live">LIVE</span>`
      : `<span>${displayTime}</span>`;

    return `
      <tr class="${rowClass}">
        <td><strong>${log.lat}</strong></td>
        <td><strong>${log.lon}</strong></td>
        <td>${log.speed}</td>
        <td>${statusBadge}</td>
        <td>${timeDisplay}</td>
      </tr>
    `;
  }).join("");

  const totalLogsCount = (vessel.logs || []).length;
  let html = "";

  // 1. Current Active Voyage (Placed FIRST at the very top, expanded by default with live AIS table)
  html += `
    <div class="voyage-acc-item active expanded">
      <div class="acc-header" onclick="this.parentElement.classList.toggle('expanded'); const ch = this.querySelector('.acc-chevron'); if(ch) ch.textContent = this.parentElement.classList.contains('expanded') ? '∧' : '∨';">
        <div class="route-ports">
          <span class="port-box">
            <small>Port of Loading (출발항)</small>
            <strong style="color: #2563eb;">${vessel.origin}</strong>
          </span>
          <span class="route-arrow">···········&gt;</span>
          <span class="port-box">
            <small>Port of Discharge (도착항)</small>
            <strong style="color: #d97706;">${vessel.destination}</strong>
          </span>
        </div>
        <span class="badge-active-pulse">● 실시간 운항중</span>
        <span class="acc-chevron">∧</span>
      </div>

      <!-- Expanded Route Log Table -->
      <div class="acc-body">
        <!-- Live Log Status Banner -->
        <div class="log-table-status-bar">
          <div class="log-status-left">
            <span class="live-pulse-beacon"></span>
            <span class="log-status-text">실시간 AIS 수신 중 &middot; 연속 항해 로그 <strong>${totalLogsCount}개</strong> 누적 기록 중</span>
          </div>
          <div class="log-status-right">
            <span class="log-live-badge">⚡ 실시간 자동 기록 활성</span>
          </div>
        </div>

        <div class="log-table-wrapper">
          <table class="ais-log-table">
            <thead>
              <tr>
                <th>위도</th>
                <th>경도</th>
                <th>속도</th>
                <th>상태</th>
                <th>위치보고일시 (${isKST ? 'KST' : 'UTC'})</th>
              </tr>
            </thead>
            <tbody id="aisLogTableBody">
              ${logRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  // 2. Past Voyages (Rendered below the current active voyage)
  if (vessel.voyageHistory && vessel.voyageHistory.length > 0) {
    vessel.voyageHistory.forEach((past, idx) => {
      html += `
        <div class="voyage-acc-item past-voyage">
          <div class="acc-header" onclick="this.parentElement.classList.toggle('expanded'); const ch = this.querySelector('.acc-chevron'); if(ch) ch.textContent = this.parentElement.classList.contains('expanded') ? '∧' : '∨';">
            <div class="route-ports">
              <span class="port-box">
                <small>Port of Loading</small>
                <strong>${past.origin}</strong>
              </span>
              <span class="route-arrow">···········&gt;</span>
              <span class="port-box">
                <small>Port of Discharge</small>
                <strong>${past.destination}</strong>
              </span>
            </div>
            <span class="badge-past-done">운항 완료</span>
            <span class="acc-chevron">∨</span>
          </div>
          <div class="acc-body">
            <div style="font-size: 11px; color: #64748b; padding: 6px 8px;">
              과거 기항 완료 항차 (${past.date || '기록 이력'})
            </div>
          </div>
        </div>
      `;
    });
  }

  // 3. If no past voyage history exists, honest informational note
  if (!vessel.voyageHistory || vessel.voyageHistory.length === 0) {
    html += `
      <div class="empty-voyage-notice">
        <span>ℹ️ 이전 기항 이력 없음 (현재 실시간 운항 데이터만 제공)</span>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Backward-compatibility alias
function renderLogTable(vessel) {
  renderVoyagesAccordion(vessel);
}

// Bind UI Interactions
function bindUIEvents() {
  // 1. Fleet Modal Trigger
  const btnOpenModal = document.getElementById("btnOpenFleetModal");
  const btnCloseModal = document.getElementById("btnCloseFleetModal");
  const modalOverlay = document.getElementById("fleetModalOverlay");

  if (btnOpenModal) btnOpenModal.addEventListener("click", openFleetModal);
  if (btnCloseModal) btnCloseModal.addEventListener("click", closeFleetModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeFleetModal();
    });
  }

  // Modal Category Filter Tabs
  document.querySelectorAll(".modal-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      const searchVal = document.getElementById("modalVesselSearchInput")?.value || "";
      renderFleetModalCards(cat, searchVal);
    });
  });

  // Modal Vessel Search Input
  const modalSearchInput = document.getElementById("modalVesselSearchInput");
  if (modalSearchInput) {
    modalSearchInput.addEventListener("input", (e) => {
      const searchVal = e.target.value;
      const activeCat = document.querySelector(".modal-tab-btn.active")?.getAttribute("data-category") || "all";
      renderFleetModalCards(activeCat, searchVal);
    });
  }

  // 2. Realtime Auto-Search & Instant Suggestions
  const searchInput = document.getElementById("vesselSearchInput");
  const suggestionsBox = document.getElementById("searchSuggestionsDropdown");
  let searchDebounceTimer = null;

  const renderSuggestions = (query) => {
    if (!suggestionsBox) return;
    const q = (query || "").trim().toUpperCase();

    if (!q) {
      suggestionsBox.innerHTML = "";
      suggestionsBox.classList.remove("open");
      return;
    }

    const matchedList = VESSEL_DATABASE.filter(v => 
      v.name.toUpperCase().includes(q) ||
      v.koreanName.includes(q) ||
      v.carrier.includes(q) ||
      v.imo.includes(q) ||
      v.mmsi.includes(q)
    );

    if (matchedList.length === 0) {
      suggestionsBox.innerHTML = `
        <div style="padding: 10px 12px; font-size: 11.5px; color: #94a3b8; text-align: center;">
          일치하는 선박이 없습니다
        </div>
      `;
      suggestionsBox.classList.add("open");
      return;
    }

    suggestionsBox.innerHTML = matchedList.map(v => `
      <div class="suggestion-item ${v.id === currentVessel.id ? 'highlighted' : ''}" data-id="${v.id}">
        <div>
          <div class="sugg-name">🚢 ${v.name} <small style="color: #64748b;">(${v.carrier})</small></div>
          <div class="sugg-meta">${v.origin} ➔ ${v.destination} | ${v.area}</div>
        </div>
        <div style="font-size: 11px; font-weight: 700; color: #2563eb;">${v.speed}</div>
      </div>
    `).join("");

    suggestionsBox.classList.add("open");

    suggestionsBox.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        const vid = item.getAttribute("data-id");
        if (vid) {
          loadVessel(vid, true);
          suggestionsBox.classList.remove("open");
        }
      });
    });
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toUpperCase();
      renderSuggestions(q);

      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        if (!q) return;
        const exact = VESSEL_DATABASE.find(v => 
          v.name.toUpperCase() === q ||
          v.koreanName === q ||
          v.imo === q ||
          v.mmsi === q
        );
        if (exact && exact.id !== currentVessel.id) {
          loadVessel(exact.id, true);
        }
      }, 250);
    });

    searchInput.addEventListener("focus", () => {
      renderSuggestions(searchInput.value);
    });
  }

  document.addEventListener("click", (e) => {
    if (suggestionsBox && !e.target.closest(".live-search-box")) {
      suggestionsBox.classList.remove("open");
    }
  });

  // 3. Laser Replay Button
  const btnLaser = document.getElementById("btnLaserReplay");
  if (btnLaser) {
    btnLaser.addEventListener("click", () => {
      playLaserRouteAnimation(currentVessel);
    });
  }

  // 4. Map Layer Switcher
  document.querySelectorAll(".layer-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".layer-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const layerType = btn.getAttribute("data-layer");
      setMapLayer(layerType);
    });
  });

  // 5. Sidebar Collapse Toggle
  const collapseBtn = document.getElementById("collapseRailBtn");
  const navRail = document.querySelector(".nav-rail");

  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      navRail.classList.toggle("collapsed");
      collapseBtn.textContent = navRail.classList.contains("collapsed") ? ">" : "< 접기";
      setTimeout(() => map.invalidateSize(), 260);
    });
  }

  // 6. Time Mode Switcher
  const btnKST = document.getElementById("btnTimeKST");
  const btnLocal = document.getElementById("btnTimeLocal");

  if (btnKST && btnLocal) {
    btnKST.addEventListener("click", () => {
      btnKST.classList.add("active");
      btnLocal.classList.remove("active");
      renderLogTable(currentVessel);
    });

    btnLocal.addEventListener("click", () => {
      btnLocal.classList.add("active");
      btnKST.classList.remove("active");
      renderLogTable(currentVessel);
    });
  }

  // 7. Tab Switcher
  const tabSchedule = document.getElementById("tabSchedule");
  const tabRouteLog = document.getElementById("tabRouteLog");

  if (tabSchedule && tabRouteLog) {
    tabSchedule.addEventListener("click", () => {
      tabSchedule.classList.add("active");
      tabRouteLog.classList.remove("active");
    });

    tabRouteLog.addEventListener("click", () => {
      tabRouteLog.classList.add("active");
      tabSchedule.classList.remove("active");
    });
  }

  // 8. External Map Dropdown Menu
  const btnMapDropdown = document.getElementById("btnMapDropdown");
  const mapDropdownMenu = document.getElementById("mapDropdownMenu");

  if (btnMapDropdown && mapDropdownMenu) {
    btnMapDropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      mapDropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      mapDropdownMenu.classList.remove("show");
    });
  }

  // 9. Quick Search on Top Right
  const quickSearch = document.getElementById("mapQuickSearch");
  if (quickSearch) {
    quickSearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchInput.value = quickSearch.value;
        const q = quickSearch.value.trim().toUpperCase();
        const matched = VESSEL_DATABASE.find(v => v.name.toUpperCase().includes(q));
        if (matched) loadVessel(matched.id, true);
      }
    });
  }

  // 10. Quick Add / Register Vessel (배이름 입력 및 실시간 크롤링 등록)
  const addInput = document.getElementById("railAddVesselInput");
  const addBtn = document.getElementById("railBtnAddVessel");
  const statusMsg = document.getElementById("railAddStatusMsg");

  const handleAddVessel = async () => {
    if (!addInput || !addBtn) return;
    const name = addInput.value.trim().toUpperCase();
    if (!name || name.length < 2) {
      if (statusMsg) {
        statusMsg.textContent = "선박명을 2글자 이상 입력해주세요.";
        statusMsg.className = "rail-add-status-msg show error";
      }
      return;
    }

    addBtn.disabled = true;
    if (statusMsg) {
      statusMsg.innerHTML = "🔎 선박 제원 및 AIS 실시간 크롤링 중...";
      statusMsg.className = "rail-add-status-msg show loading";
    }

    try {
      const res = await fetch("/api/add-vessel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });
      const data = await res.json();

      if (data.success && data.vessel) {
        // Add to local database if not present
        const existsIdx = VESSEL_DATABASE.findIndex(v => v.id === data.vessel.id || v.name.toUpperCase() === data.vessel.name.toUpperCase());
        if (existsIdx === -1) {
          VESSEL_DATABASE.unshift(data.vessel);
        } else {
          VESSEL_DATABASE[existsIdx] = data.vessel;
        }

        // Update counts
        updateVesselCountsUI(data.count || VESSEL_DATABASE.length);

        // Clear input
        addInput.value = "";

        // Show success status
        if (statusMsg) {
          statusMsg.innerHTML = `✅ <strong>${data.vessel.name}</strong> 등록 완료! (총 ${data.count || VESSEL_DATABASE.length}척)`;
          statusMsg.className = "rail-add-status-msg show success";
          setTimeout(() => { if (statusMsg) statusMsg.classList.remove("show"); }, 5000);
        }

        // Immediately load and fly to the new vessel!
        loadVessel(data.vessel.id, true);

        // Re-render fleet modal if open
        renderFleetModalCards(activeFleetCategory || "all");
      } else {
        throw new Error(data.error || "선박 등록 실패");
      }
    } catch (err) {
      if (statusMsg) {
        statusMsg.textContent = "⚠️ 등록 오류: " + (err.message || "서버 통신 실패");
        statusMsg.className = "rail-add-status-msg show error";
      }
    } finally {
      addBtn.disabled = false;
    }
  };

  if (addBtn && addInput) {
    addBtn.addEventListener("click", handleAddVessel);
    addInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleAddVessel();
      }
    });
  }
}

// Function to update all count badges across the UI
function updateVesselCountsUI(count) {
  const c = count || VESSEL_DATABASE.length;
  // 1. Nav rail quick-add badge
  const railBadge = document.getElementById("railVesselCountBadge");
  if (railBadge) railBadge.textContent = `${c}척`;

  // 2. Fleet modal open button
  const btnOpenModal = document.getElementById("btnOpenFleetModal");
  if (btnOpenModal) btnOpenModal.textContent = `선박 목록 (${c}) ▾`;

  // 3. Modal 'All' tab button
  const allTabBtn = document.querySelector(".modal-tab-btn[data-category='all']");
  if (allTabBtn) allTabBtn.textContent = `전체 선박 (${c})`;

  // 4. Modal header subtitle
  const modalSub = document.querySelector(".modal-title-wrap p");
  if (modalSub) modalSub.textContent = `wherevessel 글로벌 주요 원양/근해 컨테이너선 ${c}척 통합 관제 목록`;
}

// =========================================================================
// Real-time Live Data Stream & Dead Reckoning Synchronization Engine
// =========================================================================

// Smoothly update UI and map when live coordinates are received
function updateLiveVesselUI(vessel) {
  // Update info cards
  const elLat = document.getElementById("infoLat");
  const elLon = document.getElementById("infoLon");
  const elSpeed = document.getElementById("infoSpeed");
  if (elLat) elLat.textContent = Number(vessel.lat).toFixed(6);
  if (elLon) elLon.textContent = Number(vessel.lon).toFixed(6);
  if (elSpeed) elSpeed.textContent = vessel.speed;

  // Re-render voyages accordion log table
  renderVoyagesAccordion(vessel);

  // Redraw laser route and update ship marker position
  playLaserRouteAnimation(vessel);
}

// Auto-Poll vessels.json for real-time AIS updates from aisstream_service.py
async function pollLiveVesselsData() {
  try {
    const res = await fetch(`vessels.json?_t=${Date.now()}`);
    if (!res.ok) return;
    const freshList = await res.json();
    if (!Array.isArray(freshList) || freshList.length === 0) return;

    let currentChanged = false;
    freshList.forEach(freshV => {
      const idx = VESSEL_DATABASE.findIndex(v => v.id === freshV.id || v.mmsi === freshV.mmsi);
      if (idx !== -1) {
        const localV = VESSEL_DATABASE[idx];
        const hasMoved = (Math.abs(localV.lat - freshV.lat) > 0.00001 || Math.abs(localV.lon - freshV.lon) > 0.00001);
        const logChanged = (freshV.logs && localV.logs && (freshV.logs.length !== localV.logs.length || freshV.logs[0]?.time !== localV.logs[0]?.time));
        Object.assign(localV, freshV);
        if (currentVessel && (currentVessel.id === freshV.id || currentVessel.mmsi === freshV.mmsi)) {
          if (hasMoved || logChanged) {
            Object.assign(currentVessel, freshV);
            currentChanged = true;
          }
        }
      }
    });

    if (currentChanged && currentVessel) {
      updateLiveVesselUI(currentVessel);
    }
  } catch (err) {
    // Background polling continues
  }
}

// Start live polling every 4 seconds
setInterval(pollLiveVesselsData, 4000);

