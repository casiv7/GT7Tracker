import { useState, forwardRef, useImperativeHandle } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Dropdowns(props, ref) {
  const [chosenTrack, setChosenTrack] = useState("");

  const [possibleLayouts, setPossibleLayouts] = useState([]);
  const [chosenLayout, setChosenLayout] = useState("");

  const [chosenBrand, setChosenBrand] = useState("");

  const [possibleModels, setPossibleModels] = useState([]);
  const [chosenModel, setChosenModel] = useState("");

  const tracks = {
    Americas: [
      {
        name: "Blue Moon Speedway",
        layouts: ["Full Course", "Infield A", "Infield B"],
      },
      { name: "Colorado Springs", layouts: ["Lake"] },
      {
        name: "Daytona International Speedway",
        layouts: ["Tri-Oval", "Road Course"],
      },
      { name: "Fishermans Ranch", layouts: ["Full Course"] },
      { name: "Grand Valley", layouts: ["Highway 1", "South"] },
      { name: "Michelin Raceway Road Atlanta", layouts: ["Full Course"] },
      { name: "Northern Isle Speedway", layouts: ["Full Course"] },
      { name: "Special Stage X", layouts: ["Full Course"] },
      { name: "Trial Mountain Circuit", layouts: ["Full Course"] },
      {
        name: "Watkins Glen International",
        layouts: ["Long Course", "Short Course"],
      },
      { name: "WeatherTech Raceway Laguna Seca", layouts: ["Full Course"] },
      {
        name: "Willow Springs International Speedway",
        layouts: [
          "Big Willow",
          "Streets of Willow Springs",
          "Horse Thief Mile",
        ],
      },
      {
        name: "Lake Louise",
        layouts: ["Tri-Oval", "Short Track", "Long Track"],
      },
      { name: "Autodromo de Interlagos", layouts: ["Full Course"] },
    ],
    Europe: [
      { name: "Brands Hatch", layouts: ["Grand Prix Circuit", "Indy Circuit"] },
      { name: "Goodwood Motor Circuit", layouts: ["Full Course"] },
      { name: "Deep Forest Raceway", layouts: ["Full Course"] },
      {
        name: "Circuit de Barcelona-Catalunya",
        layouts: [
          "Grand Prix Layout",
          "Grand Prix Layout No Chicane",
          "National Layout",
          "Rallycross Layout",
        ],
      },
      {
        name: "Autodrome Lago Maggiore",
        layouts: [
          "Full Course",
          "Centre",
          "East End",
          "West End",
          "East",
          "West",
        ],
      },
      {
        name: "Autodromo Nazionale Monza",
        layouts: ["Full Course", "No Chicane"],
      },
      {
        name: "Sardegna-Road Track",
        layouts: ["Layout A", "Layout B", "Layout C"],
      },
      { name: "Sardegna-Windmills", layouts: ["Full Course"] },
      {
        name: "Nürburgring",
        layouts: [
          "Nordschleife",
          "Nordschleife Tourist",
          "24h",
          "Grand Prix",
          "Endurance",
          "Sprint",
        ],
      },
      { name: "Alsace", layouts: ["Village", "Test Course"] },
      { name: "Circuit de la Sarthe", layouts: ["Full Course", "No Chicane"] },
      {
        name: "Circuit de Sainte-Croix",
        layouts: ["Layout A", "Layout B", "Layout C"],
      },
      { name: "Dragon Tail", layouts: ["Seaside", "Gardens"] },
      {
        name: "Circuit de Spa-Francorchamps",
        layouts: ["Full Course", "24h Layout"],
      },
      { name: "Red Bull Ring", layouts: ["Full Course", "Short Track"] },
    ],
    Asia: [
      {
        name: "Autopolis International Racing Course",
        layouts: ["Full Course", "Shortcut Course"],
      },
      { name: "Broad Bean Raceway", layouts: ["Full Course"] },
      {
        name: "Fuji International Speedway",
        layouts: ["Full Course", "Short Course"],
      },
      { name: "High Speed Ring", layouts: ["Full Course"] },
      {
        name: "Kyoto Driving Park",
        layouts: ["Yamagiwa", "Miyabi", "Yamagiwa + Miyabi"],
      },
      { name: "Suzuka Circuit", layouts: ["Full Course", "East Course"] },
      {
        name: "Tokyo Expressway",
        layouts: [
          "Central Clockwise",
          "East Clockwise",
          "South Clockwise",
          "Central Counterclockwise",
          "East Counterclockwise",
          "South Counterclockwise",
        ],
      },
      { name: "Tsukuba Circuit", layouts: ["Full Course"] },
      { name: "Mount Panorama", layouts: ["Full Course"] },
    ],
  };

  const cars = [
    {
      brand: "Abarth",
      cars: [
        "Abarth 500 '09",
        "Fiat Abarth 595 Esseesse '70",
        "Abarth 1500 Biposto Bertone B.A.T 1 '52",
      ],
    },

    { brand: "Afeela", cars: ["AFEELA Prototype 2024"] },

    {
      brand: "Alfa Romeo",
      cars: [
        "Alfa Romeo 4C Launch Edition '14",
        "Alfa Romeo 4C Gr.3 Road Car",
        "Alfa Romeo 4C Gr.4",
        "Alfa Romeo 4C Gr.3",
        "Alfa Romeo 8C 2900B Touring Berlinetta '38",
        "Alfa Romeo 8C Competizione '08",
        "Alfa Romeo 155 2.5 V6 TI '93",
        "Alfa Romeo Giulia Sprint GT Veloce '67",
        "Alfa Romeo Giulia GTAm '20",
        "Alfa Romeo GIULIA TZ2 carrozzata da ZAGATO '65",
        "Alfa Romeo MiTo 1.4 T Sport '09",
      ],
    },

    {
      brand: "Alpine",
      cars: [
        "Alpine A110 1600S '72",
        "Alpine A110 Première Édition '17",
        "Alpine A220 Race Car '68",
        "Alpine Vision Gran Turismo",
        "Alpine Vision Gran Turismo Race Mode",
        "Alpine Vision Gran Turismo 2017",
      ],
    },

    {
      brand: "AMG",
      cars: [
        "Mercedes-Benz 300 SEL 6.8 AMG '71",
        "Mercedes-Benz A 45 AMG 4Matic '13",
        "Mercedes-AMG C 63 S '15",
        "Mercedes-AMG GT S '15",
        "Mercedes-AMG GT R '17",
        "Mercedes-AMG GT Black Series '20",
        "Mercedes-AMG GT Safety Car",
        "Mercedes-AMG GT3 '16",
        "Mercedes-AMG GT3 '20-Gr.3",
        "Mercedes-Benz SLS AMG '10",
        "Mercedes-Benz SLS AMG GT3 '11-Gr.3",
        "Mercedes-Benz SLS AMG Gr.4",
        "Mercedes-Benz AMG Vision Gran Turismo",
        "Mercedes-Benz AMG Vision Gran Turismo Racing Series",
      ],
    },

    {
      brand: "Amuse",
      cars: ["Amuse NISMO 380RS Super Leggera", "Amuse S2000 GT1 Turbo"],
    },

    {
      brand: "Aston Martin",
      cars: [
        "Aston Martin DB3S '53",
        "Aston Martin DB5 '64",
        "Aston Martin DB11 '16",
        "Aston Martin DBR9 GT1 '10-Gr.3",
        "Aston Martin DP-100 Vision Gran Turismo",
        "Aston Martin One-77 '11",
        "Aston Martin Valkyrie '21",
        "Aston Martin V8 Vantage S '15",
        "Aston Martin V12 Vantage GT3 '12-Gr.3",
        "Aston Martin Vantage Gr.4",
        "Aston Martin Vulcan '16",
      ],
    },

    {
      brand: "Audi",
      cars: [
        "Audi R8 4.2 FSI R tronic '07",
        "Audi R8 Coupé V10 plus '16",
        "Audi R8 LMS '15",
        "Audi R8 LMS Evo '19",
        "Audi R18 TDI '11",
        "Audi R18 '16",
        "Audi RS 5 Turbo DTM '19",
        "Audi Sport quattro S1 Pikes Peak '87",
        "Audi TT Coupé 3.2 quattro '03",
        "Audi TTS Coupé '09",
        "Audi TTS Coupé '14",
        "Audi TT Cup '16",
        "Audi Vision Gran Turismo",
        "Audi e-tron Vision Gran Turismo",
      ],
    },

    { brand: "Autobianchi", cars: ["Autobianchi A112 Abarth '85"] },

    { brand: "BAC", cars: ["BAC Mono '16"] },

    {
      brand: "BMW",
      cars: [
        "BMW 3.0 CSL '71",
        "BMW 3.0 CSL '73",
        "BMW i3 '15",
        "BMW M2 Competition '18",
        "BMW M3 '89",
        "BMW M3 Sport Evolution '89",
        "BMW M3 Coupé '03",
        "BMW M3 Coupé '07",
        "BMW M3 GT '11",
        "BMW M4 Coupé '14",
        "BMW M4 Safety Car",
        "BMW M4 Gr.4",
        "BMW M6 GT3 Endurance Model '16",
        "BMW M6 GT3 Sprint Model '16",
        "BMW McLaren F1 GTR Race Car '97",
        "BMW Vision Gran Turismo",
        "BMW Z4 GT3 '11",
        "BMW Z8 '01",
      ],
    },

    {
      brand: "Bugatti",
      cars: [
        "Bugatti Chiron '16",
        "Bugatti Veyron 16.4 '13",
        "Bugatti Veyron Gr.4",
        "Bugatti Vision Gran Turismo",
        "Bugatti Vision Gran Turismo Gr.1",
      ],
    },

    { brand: "BVLGARI", cars: ["BVLGARI Aluminium Vision Gran Turismo"] },

    {
      brand: "Chaparral",
      cars: ["Chaparral 2J '70", "Chaparral 2X Vision Gran Turismo"],
    },

    {
      brand: "Chevrolet",
      cars: [
        "Chevrolet Camaro Z28 302 '69",
        "Chevrolet Camaro SS '16",
        "Chevrolet Camaro ZL1 1LE Package '18",
        "Chevrolet Chevelle SS 454 Sport Coupé '70",
        "Chevrolet Corvette (C1) '58",
        "Chevrolet Corvette StingRay Racer Concept '59",
        "Chevrolet Corvette Sting Ray Sport Coupe (C2) '63",
        "Chevrolet Corvette Stingray Convertible (C3) '69",
        "Chevrolet Corvette Stingray L46 350 (C3) '69",
        "Chevrolet Corvette ZR-1 (C4) '89",
        "Chevrolet Corvette ZR1 (C6) '09",
        "Chevrolet Corvette Stingray (C7) '14",
        "Chevrolet Corvette C7 ZR1 '19",
        "Chevrolet Corvette C7 Gr.3 Road Car",
        "Chevrolet Corvette C7 Gr.4",
        "Chevrolet Corvette C7 Gr.3",
        "Chevrolet Corvette C8 Stingray '20",
      ],
    },

    {
      brand: "Chris Holstrom Concepts",
      cars: ["Chris Holstrom Concepts 1967 Chevy Nova"],
    },

    {
      brand: "Citroën",
      cars: [
        "Citroën DS 21 Pallas '70",
        "GT by Citroën Road Car",
        "GT by Citroën Gr.4",
        "GT by Citroën Race Car Gr.3",
      ],
    },

    {
      brand: "Daihatsu",
      cars: [
        "Daihatsu Copen Active Top '02",
        "Daihatsu COPEN RJ Vision Gran Turismo",
      ],
    },

    {
      brand: "De Tomaso",
      cars: [
        "De Tomaso Mangusta '69",
        "De Tomaso Mangusta (Christian Dior)*",
        "De Tomaso Pantera '71",
      ],
    },

    { brand: "DMC", cars: ["DMC DeLorean S2 '04"] },

    {
      brand: "Dodge",
      cars: [
        "Dodge Challenger R/T '70",
        "Dodge Challenger SRT Demon '18",
        "Dodge Charger R/T 426 Hemi '68",
        "Dodge Charger SRT Hellcat '15",
        "Dodge Charger SRT Hellcat Safety Car",
        "Dodge Super Bee '70",
        "Dodge Viper GTS '02",
        "Dodge Viper SRT-10 Coupe '06",
        "Dodge Viper GTS '13",
        "Dodge Viper SRT GT3-R '15",
        "Dodge Viper Gr.4",
        "SRT Tomahawk S Vision Gran Turismo",
        "SRT Tomahawk Vision Gran Turismo Gr.1",
        "SRT Tomahawk GTS-R Vision Gran Turismo",
        "SRT Tomahawk X Vision Gran Turismo",
      ],
    },

    { brand: "DS Automobiles", cars: ["DS 3 Racing '11"] },

    {
      brand: "Eckert's Rod & Custom",
      cars: ["Eckert's Rod & Custom Mach Forty"],
    },

    {
      brand: "Ferrari",
      cars: [
        "Ferrari 250 GT Berlinetta passo corto '61",
        "Ferrari 250 GTO '62",
        "Ferrari 308 GTB '75",
        "Ferrari 330 P4 '67",
        "Ferrari 365 GTB4 '71",
        "Ferrari 458 Italia '09",
        "Ferrari 458 Italia GT3 '13",
        "Ferrari 458 Italia Gr.4",
        "Ferrari 500 Mondial Pinin Farina Coupe '54",
        "Ferrari 512BB '76",
        "Ferrari Dino 246 GT '71",
        "Enzo Ferrari '02",
        "Ferrari F8 Tributo '19",
        "Ferrari F12berlinetta '12",
        "Ferrari F40 '92",
        "Ferrari F50 '95",
        "Ferrari F430 '06",
        "Ferrari FXX K '14",
        "Ferrari GTO '84",
        "Ferrari LaFerrari '13",
        "Ferrari Testarossa '91",
        "Ferrari Vision Gran Turismo",
      ],
    },

    {
      brand: "Fiat",
      cars: ["Fiat 500 F '68", "Fiat 500 1.2 8V Lounge SS '08"],
    },

    {
      brand: "Ford",
      cars: [
        "Ford F-150 SVT Raptor '11",
        "Ford Focus ST '15",
        "Ford Focus RS '18",
        "Ford Focus Gr.B Rally Car",
        "Ford GT '06",
        "Ford GT '17",
        "Ford GT LM Race Car Spec II",
        "Ford GT LM Spec II Test Car",
        "Ford GT Race Car '18",
        "Ford GT40 '66",
        "Ford Mark IV Race Car '67",
        "Ford Mustang Boss 429 '69",
        "Ford Mustang Mach 1 '71",
        "Ford Mustang GT Premium Fastback '15",
        "Ford Mustang Gr.3 Road Car",
        "Ford Mustang Gr.B Rally Car",
        "Ford Mustang Gr.4",
        "Ford Mustang Gr.3",
        "1932 Ford Roadster '63",
        "Ford Shelby GT350R '16",
        "Ford Sierra RS 500 Cosworth '87",
      ],
    },

    { brand: "Garage RCR", cars: ["Garage RCR Civic"] },

    {
      brand: "Genesis",
      cars: [
        "Genesis G70 3.3T AWD Prestige Package '22",
        "Genesis G70 GR4",
        "Genesis X GR3",
        "Genesis X Gran Berlinetta Vision Gran Turismo Concept",
      ],
    },

    {
      brand: "Gran Turismo",
      cars: [
        "Gran Turismo F1500T-A",
        "Gran Turismo Racing Kart 125 Shifter",
        "Red Bull X2014 Junior",
        "Red Bull X2014 Standard Car",
        "Red Bull X2019 Competition",
        "Red Bull X2019 25th Anniversary*",
      ],
    },

    { brand: "GReddy", cars: ["GReddy Fugu Z"] },

    {
      brand: "Greening Auto Company",
      cars: ["Greening Auto Company Maverick"],
    },

    {
      brand: "Honda",
      cars: [
        "Honda Beat '91",
        "Honda Civic Type R (EK) '97",
        "Honda Civic Type R (EK) Touring Car",
        "Honda Civic Type R (EK) '98",
        "Honda Civic Type R (FK2) '15",
        "Honda Civic Type R Limited Edition (FK8) '20",
        "Honda Civic Type R (FL5) '22",
        "Honda Fit Hybrid '14",
        "Honda Integra Type R (DC2) '95",
        "Honda Integra Type R (DC2) '98",
        "Honda NSX Type R '92",
        "Honda NSX Type R '02",
        "Honda NSX '17",
        "Honda NSX Gr.B Rally Car",
        "Honda NSX Gr.4",
        "Honda NSX Gr.3",
        "Honda NSX GT500 '08",
        "Honda NSX CONCEPT-GT '16",
        "Honda Project 2&4 powered by RC213V",
        "Honda RA272 '65",
        "Honda S660 '15",
        "Honda S800 '66",
        "Honda S2000 '99",
        "Honda Sports Vision Gran Turismo",
      ],
    },

    {
      brand: "Hyundai",
      cars: [
        "Hyundai Genesis Coupe 3.8 Track '13",
        "Hyundai Genesis Gr.B Rally Car",
        "Hyundai Genesis Gr.4",
        "Hyundai Genesis Gr.3",
        "Hyundai N 2025 Vision Gran Turismo",
        "Hyundai N 2025 Vision Gran Turismo Gr.1",
      ],
    },

    { brand: "Infiniti", cars: ["Infiniti CONCEPT Vision Gran Turismo"] },

    {
      brand: "Italdesign",
      cars: [
        "Italdesign EXENEO Vision Gran Turismo Off-road Mode",
        "Italdesign EXENEO Vision Gran Turismo Street Mode",
      ],
    },

    {
      brand: "Jaguar",
      cars: [
        "Jaguar D-type '54",
        "Jaguar E-type Coupé '61",
        "Jaguar F-type R Coupé '14",
        "Jaguar F-type Gr.4",
        "Jaguar F-type Gr.3",
        "Jaguar Vision Gran Turismo Coupé",
        "Jaguar Vision Gran Turismo Roadster",
        "Jaguar Vision Gran Turismo SV",
        "Jaguar XJ13 '66",
        "Jaguar XJ220 '92",
        "Jaguar XJR-9 '88",
      ],
    },

    { brand: "Jeep", cars: ["Jeep Willys MB '45"] },

    { brand: "KTM", cars: ["KTM X-BOW R '12"] },

    {
      brand: "Lamborghini",
      cars: [
        "Lamborghini Aventador LP700-4 '11",
        "Lamborghini Aventador LP 750-4 Superveloce '15",
        "Lamborghini Countach LP400 '74",
        "Lamborghini Countach 25th Anniversary '88",
        "Lamborghini Diablo GT '00",
        "Lamborghini Huracán LP 610-4 '15",
        "Lamborghini Huracán GT3 '15",
        "Lamborghini Huracán Gr.4",
        "Lamborghini Miura P400 Bertone Prototype '67",
        "Lamborghini Murcielago LP640 '09",
        "Lamborghini Urus '18",
        "Lamborghini Veneno '14",
        "Lambo V12 Vision Gran Turismo",
      ],
    },

    {
      brand: "Lancia",
      cars: ["Lancia Delta HF Integrale Evoluzione '91", "Lancia Stratos '73"],
    },

    {
      brand: "Lexus",
      cars: [
        "Lexus LC500 '17",
        "Lexus LF-LC GT Vision Gran Turismo",
        "Lexus LFA '10",
        "Lexus RC F '14",
        "Lexus RC F Gr.4",
        "Lexus RC F GT3 prototype '16",
        "Lexus RC F GT3 '17",
        "Lexus RC F GT500 '16",
        "Lexus SC430 GT500 '08",
      ],
    },

    {
      brand: "Maserati",
      cars: [
        "Maserati A6GCS/53 Spyder '54",
        "Maserati GranTurismo S '08",
        "Maserati MC20 '20",
        "Maserati Merak SS '80",
      ],
    },

    {
      brand: "Mazda",
      cars: [
        "Mazda3 X Burgundy Selection '19",
        "Mazda3 Gr.4",
        "Mazda 787B '91",
        "Mazda Atenza Sedan XD L Package '15",
        "Mazda Atenza Gr.3 Road Car",
        "Mazda Atenza Gr.4",
        "Mazda Atenza Gr.3",
        "Mazda Demio XD Touring '15",
        "Mazda LM55 Vision Gran Turismo",
        "Mazda LM55 Vision Gran Turismo Gr.1",
        "Mazda Eunos Roadster (NA Special Package) '89",
        "Mazda Roadster S (ND) '15",
        "Mazda Roadster NR-A (ND) '22",
        "Mazda Roadster Touring Car",
        "Mazda RX-7 GT-X (FC) '90",
        "Mazda RX-7 Spirit R Type A (FD) '02",
        "Mazda RX-8 Spirit R '12",
        "Mazda RX500 '70",
        "Mazda RX-Vision '15",
        "Mazda RX-Vision GT3 Concept",
        "Mazda RX-Vision GT3 Concept Stealth Model*",
      ],
    },

    {
      brand: "McLaren",
      cars: [
        "McLaren 650S Coupe '14",
        "McLaren 650S GT3 '15",
        "McLaren 650S Gr.4",
        "McLaren F1 '94",
        "McLaren F1 GTR - BMW '95",
        "McLaren MP4-12C '10",
        "McLaren MP4/4 '88",
        "McLaren P1 GTR '16",
        "McLaren Ultimate Vision Gran Turismo",
        "McLaren Ultimate Vision Gran Turismo Gr.1",
      ],
    },

    {
      brand: "Mercedes-Benz",
      cars: [
        "Mercedes-Benz 190 E 2.5 - 16 Evolution II '91",
        "Mercedes-Benz 300 SL (W194) '52",
        "Mercedes-Benz 300 SL Coupe '54",
        "Sauber Mercedes C9 '89",
        "Mercedes-Benz CLK-LM '98",
        "Mercedes-Benz S Barker Tourer '29",
        "Mercedes-Benz SLR McLaren '09",
      ],
    },

    {
      brand: "Mini",
      cars: [
        "MINI Clubman Vision Gran Turismo",
        "Mini Cooper 'S' '65",
        "MINI Cooper S '05",
      ],
    },

    {
      brand: "Mitsubishi",
      cars: [
        "Mitsubishi Concept XR-PHEV EVOLUTION Vision Gran Turismo",
        "Mitsubishi GTO Twin Turbo '91",
        "Mitsubishi Lancer Evolution III GSR '95",
        "Mitsubishi Lancer Evolution IV GSR '96",
        "Mitsubishi Lancer Evolution V GSR '98",
        "Mitsubishi Lancer Evolution VI GSR T.M. EDITION Special Color Package '99",
        "Mitsubishi Lancer Evolution IX MR GSR '06",
        "Mitsubishi Lancer Evolution Final Edition '15",
        "Mitsubishi Lancer Evolution Final Edition Gr.B Road Car",
        "Mitsubishi Lancer Evolution Final Edition Gr.B Rally Car",
        "Mitsubishi Lancer Evolution Final Edition Gr.4",
        "Mitsubishi Lancer Evolution Final Edition Gr.3",
      ],
    },

    { brand: "Nismo", cars: ["NISMO 400R '95"] },

    {
      brand: "Nissan",
      cars: [
        "Nissan 180SX Type X '96",
        "Nissan CONCEPT 2020 Vision Gran Turismo",
        "Nissan Fairlady Z 432 '69",
        "Nissan Fairlady 240ZG (HS30) '71",
        "Nissan Fairlady Z 300ZX TwinTurbo 2seater (Z32) '89",
        "Nissan Fairlady Z Version S (Z33) '07",
        "Nissan Fairlady Z (Z34) '08",
        "Nissan Z Performance '23",
        "Nissan GT-R '17",
        "Nissan GT-R NISMO '17",
        "Nissan GT-R Safety Car",
        "Nissan GT-R Gr.B Rally Car",
        "Nissan GT-R Gr.4",
        "Nissan GT-R NISMO GT3 '13",
        "Nissan GT-R NISMO GT3 '18",
        "Nissan GT-R GT500 '99",
        "Nissan GT-R GT500 '08",
        "Nissan GT-R NISMO GT500 '16",
        "Nissan GT-R LM NISMO '15",
        "Nissan R92CP '92",
        "Nissan Sileighty '98",
        "Nissan Silvia Q's (S13) '88",
        "Nissan Silvia K's Dia Selection (S13) '90",
        "Nissan Silvia K's Type S (S14) '94",
        "Nissan Silvia K's Aero (S14) '96",
        "Nissan Silvia spec-R Aero (S15) '02",
        "Nissan Silvia spec-R Aero (S15) Touring Car",
        "Nissan Skyline Hard Top 2000GT-R (KPGC10) '70",
        "Nissan Skyline 2000GT-R (KPGC110) '73",
        "Nissan Skyline GT-R NISMO (R32) '90",
        "Nissan Skyline GT-R V•spec II (R32) '94",
        "Nissan Skyline GT-R V•spec (R33) '97",
        "Nissan Skyline GT-R V•spec II Nür (R34) '02",
        "Nissan Skyline Super Silhouette Group 5 '84",
      ],
    },

    { brand: "Pagani", cars: ["Pagani Huayra '13", "Pagani Zonda R '09"] },

    {
      brand: "Peugeot",
      cars: [
        "Peugeot 205 Turbo 16 Evolution 2 '86",
        "Peugeot 208 GTi by Peugeot Sport '14",
        "Peugeot 908 HDi FAP '10",
        "Peugeot L500R HYbrid Vision Gran Turismo",
        "Peugeot L750R HYbrid Vision Gran Turismo",
        "Peugeot RCZ GT Line '15",
        "Peugeot RCZ Gr.3 Road Car",
        "Peugeot RCZ Gr.B Rally Car",
        "Peugeot RCZ Gr.4",
        "Peugeot RCZ Gr.3",
        "PEUGEOT Vision Gran Turismo",
        "PEUGEOT Vision Gran Turismo Gr.3",
      ],
    },

    {
      brand: "Plymouth",
      cars: ["Plymouth Superbird '70", "Plymouth XNR Ghia Roadster '60"],
    },

    {
      brand: "Pontiac",
      cars: ["Pontiac Firebird Trans Am '78", "Pontiac GTO 'The Judge' '69"],
    },

    {
      brand: "Porsche",
      cars: [
        "Porsche 356 A/1500 GS Carrera '56",
        "Porsche 356 A/1500 GS GT Carrera Speedster '56",
        "Porsche 911 Carrera RS (901) '73",
        "Porsche 911 Turbo (930) '81",
        "Porsche 911 Carrera RS (964) '92",
        "Porsche 911 Carrera RS (993) '95",
        "Porsche 911 Carrera RS Club Sport (993) '95",
        "Porsche 911 GT1 Strassenversion '97",
        "Porsche 911 GT3 (996) '01",
        "Porsche 911 GT3 (997) '09",
        "Porsche 911 GT3 RS (991) '16",
        "Porsche 911 GT3 RS (992) '22",
        "Porsche 911 RSR (991) '17",
        "Porsche 917 Living Legend",
        "Porsche 917K '70",
        "Porsche 918 Spyder '13",
        "Porsche 919 Hybrid '16",
        "Porsche 959 '87",
        "Porsche 962 C '88",
        "Porsche Carrera GT '04",
        "Porsche Carrera GTS (904) '64",
        "Porsche Cayman GT4 '16",
        "Porsche Cayman GT4 Clubsport '16",
        "Porsche Spyder type 550/1500RS '55",
        "Porsche Taycan Turbo S '19",
        "Porsche Vision Gran Turismo",
        "Porsche Vision Gran Turismo Spyder",
      ],
    },

    { brand: "Radical", cars: ["Radical SR3 SL '13"] },

    { brand: "RE Amemiya", cars: ["RE Amemiya FD3S RX-7"] },

    {
      brand: "Renault",
      cars: [
        "Renault Sport Clio V6 24V '00",
        "Renault Sport Clio R.S. 220 EDC Trophy '15",
        "Renault Sport Clio R.S. 220 EDC Trophy '16",
        "Renault Sport Mégane R.S. Trophy '11",
        "Renault Sport Mégane R.S. Trophy Safety Car",
        "Renault Sport Mégane Trophy '11",
        "Renault Sport Mégane Gr.4",
        "Renault R4 GTL '85",
        "Renault R5 Turbo '80",
        "Renault R8 Gordini '66",
        "Renault Sport R.S.01 '16",
        "Renault Sport R.S.01 GT3 '16",
      ],
    },

    { brand: "Roadster Shop", cars: ["Roadster Shop Rampage"] },

    { brand: "RUF", cars: ["RUF CTR3 '07"] },

    {
      brand: "Shelby",
      cars: [
        "Shelby Cobra 427 '66",
        "Shelby Cobra Daytona Coupe '64",
        "Shelby GT350 '65",
      ],
    },

    { brand: "Škoda", cars: ["Škoda Vision Gran Turismo"] },

    {
      brand: "Subaru",
      cars: [
        "Subaru BRZ S '15",
        "Subaru BRZ STI Sport '18",
        "Subaru BRZ S '21",
        "Subaru BRZ Drift Car '17",
        "Subaru BRZ GT300 '21",
        "Subaru Impreza 22B-STi '98",
        "Subaru Impreza Coupe WRX typeR STi Version VI '99",
        "Subaru Impreza Sedan WRX STi '04",
        "Subaru VIZIV GT Vision Gran Turismo",
        "Subaru WRX STI Type S '14",
        "Subaru WRX Gr.B Road Car",
        "Subaru WRX STI Isle of Man Time Attack Car '16",
        "Subaru WRX Gr.B Rally Car",
        "Subaru WRX Gr.4",
        "Subaru WRX Gr.3",
      ],
    },

    {
      brand: "Super Formula",
      cars: [
        "Dallara SF19 Super Formula / Honda '19",
        "Dallara SF19 Super Formula / Toyota '19",
        "Dallara SF23 Super Formula / Honda '23",
        "Dallara SF23 Super Formula / Toyota '23",
      ],
    },

    {
      brand: "Suzuki",
      cars: [
        "Suzuki Cappuccino (EA11R) '91",
        "Suzuki V6 Escudo Pikes Peak Special '98",
        "Suzuki Jimny XC '18",
        "Suzuki Swift Sport '07",
        "Suzuki Swift Sport '17",
        "Suzuki Swift Sport KATANA Edition Gr.4",
        "Suzuki Vision Gran Turismo",
        "Suzuki Vision Gran Turismo Gr.3",
      ],
    },

    {
      brand: "Tesla",
      cars: [
        "Tesla Model 3 Performance '23",
        "Tesla Model S Signature Performance '12",
      ],
    },

    {
      brand: "Toyota",
      cars: [
        "Toyota 86 GT '15",
        "Toyota 86 GT 'Limited' '16",
        "Toyota 86 GRMN '16",
        "Toyota GR86 RZ '21",
        "Toyota 86 Gr.B Rally Car",
        "Toyota 86 Gr.4",
        "Toyota 2000GT '67",
        "Toyota Alphard Executive Lounge '18",
        "Toyota Ambulance Himedic '21",
        "Toyota Aqua S '11",
        "Toyota Celica GT-FOUR (ST205) '94",
        "Toyota Celica GT-FOUR Rally Car (ST205) '95",
        "Toyota Corolla Levin 1600GT APEX (AE86) '83",
        "Toyota Crown Athlete G '13",
        "Toyota Crown Athlete G Safety Car",
        "Toyota FT-1",
        "Toyota FT-1 Vision Gran Turismo",
        "Toyota FT-1 Vision Gran Turismo Gr.3",
        "Toyota GR010 HYBRID '21",
        "Toyota GR Corolla MORIZO Edition '22",
        "Toyota GR Supra RZ '19",
        "Toyota GR Supra RZ '20",
        "Toyota GR Supra Racing Concept '18",
        "Toyota GR Supra Race Car '19",
        "Toyota GR Yaris RZ High Performance '20",
        "Toyota GT-One (TS020) '99",
        "Toyota MR2 GT-S '97",
        "Toyota Prius G '09",
        "Toyota S-FR '15",
        "Toyota S-FR Racing Concept '16",
        "Toyota Sports 800 '65",
        "Toyota Sprinter Trueno 1600GT APEX (AE86) '83",
        "Toyota Sprinter Trueno 1600GT APEX (Shuichi Shigeno Version)",
        "Toyota Supra 3.0GT Turbo A '88",
        "Toyota Supra RZ '97",
        "Toyota Supra GT500 '97",
        "Toyota TS030 Hybrid '12",
        "Toyota TS050 - Hybrid '16",
        "Toyota Tundra TRD Pro '19",
      ],
    },

    { brand: "TVR", cars: ["TVR Tuscan Speed 6 '00"] },

    {
      brand: "Volkswagen",
      cars: [
        "Volkswagen 1200 '66",
        "Volkswagen Beetle Gr.3",
        "Volkswagen Golf I GTI '83",
        "Volkswagen Golf VII GTI '14",
        "Volkswagen GTI Roadster Vision Gran Turismo",
        "Volkswagen GTI Supersport Vision Gran Turismo",
        "Volkswagen GTI Vision Gran Turismo Gr.3",
        "Volkswagen ID. R '19",
        "Volkswagen Polo GTI '14",
        "Volkswagen Sambabus Typ 2 '62",
        "Volkswagen Scirocco R '10",
        "Volkswagen Scirocco Gr.4",
      ],
    },

    { brand: "Wicked Fabrication", cars: ["Wicked Fabrication GT 51"] },

    { brand: "Zagato", cars: ["IsoRivolta Zagato Vision Gran Turismo"] },
  ];

  function reset() {
    setChosenTrack("");
    setPossibleLayouts([]);
    setChosenLayout("");
    setChosenBrand("");
    setPossibleModels([]);
    setChosenModel("");
  }

  useImperativeHandle(ref, () => ({
    reset,
  }));

  function handleChange(event) {
    if (event.target.name === "Track") {
      setChosenTrack(event.target.value);
      props.giveValues(["Track", event.target.value]);
      setChosenLayout("");
      for (const t of tracks[props.region]) {
        if (t.name === event.target.value) {
          setPossibleLayouts(t.layouts);
        }
      }
    } else if (event.target.name === "Layout") {
      setChosenLayout(event.target.value);
      props.giveValues(["Layout", event.target.value]);
    } else if (event.target.name === "Brand") {
      setChosenBrand(event.target.value);
      props.giveValues(["Brand", event.target.value]);
      setChosenModel("");
      for (const b of cars) {
        if (b.brand === event.target.value) {
          setPossibleModels(b.cars);
        }
      }
    } else if (event.target.name === "Model") {
      setChosenModel(event.target.value);
      props.giveValues(["Model", event.target.value]);
    }
  }

  return (
    <div className={props.isEntry ? "entry-dropdowns" : "filter-dropdowns"}>
      <FormControl fullWidth required={props.isEntry} error={props.trackError}>
        <InputLabel>Track</InputLabel>
        <Select
          id="trackId"
          name="Track"
          label="Track"
          value={chosenTrack}
          onChange={handleChange}
        >
          {tracks[props.region].map((track) => (
            <MenuItem key={track.name} value={track.name}>
              {track.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth required={props.isEntry} error={props.layoutError}>
        <InputLabel>Layout</InputLabel>
        <Select
          id="layoutId"
          name="Layout"
          label="Layout"
          value={chosenLayout}
          onChange={handleChange}
        >
          {possibleLayouts.map((layout) => (
            <MenuItem key={layout} value={layout}>
              {layout}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth required={props.isEntry} error={props.brandError}>
        <InputLabel>Brand</InputLabel>
        <Select
          id="brand"
          name="Brand"
          label="Brand"
          value={chosenBrand}
          onChange={handleChange}
        >
          {cars.map((brand) => (
            <MenuItem key={brand.brand} value={brand.brand}>
              {brand.brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth required={props.isEntry} error={props.modelError}>
        <InputLabel>Model</InputLabel>
        <Select
          id="modelId"
          name="Model"
          label="Model"
          value={chosenModel}
          onChange={handleChange}
        >
          {possibleModels.map((model) => (
            <MenuItem key={model} value={model}>
              {model}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default forwardRef(Dropdowns);
