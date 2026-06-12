// ============================================
// CONFIGURAÇÃO DO MUNICÍPIO
// ============================================
const CONFIG_MUNICIPIO = {
    nome: "Assunção do Piauí",
    uf: "PI",
    ano: "2026",
    quadrimestre: "2º"
};

// LISTA DE EQUIPES
const EQUIPES = [
    { id: "teteu", nome: "Equipe Teteu", unidade: "POSTO DE SAÚDE DE TETEU-PSF", icone: "fa-tree" },
    { id: "assuncao", nome: "Equipe Assunção", unidade: "ASSUNCAO DO PIAUI PSF", icone: "fa-city" },
    { id: "lageiro", nome: "Equipe Lageiro Branco", unidade: "PS LAGEIRO BRANCO", icone: "fa-mountain" },
    { id: "santa", nome: "Equipe Santa Teresinha", unidade: "EQUIPE 04 DO PSF", icone: "fa-church" }
];

// QUALIDADE C1-C7 - 2º QUADRIMESTRE (dados oficiais do PDF)
const QUALIDADE = {
    "POSTO DE SAÚDE DE TETEU-PSF": { c1: 67.98, c2: 40.00, c3: 69.83, c4: 79.57, c5: 84.54, c6: 82.58, c7: 63.59 },
    "ASSUNCAO DO PIAUI PSF": { c1: 40.79, c2: 27.50, c3: 86.38, c4: 76.25, c5: 69.30, c6: 74.27, c7: 49.52 },
    "PS LAGEIRO BRANCO": { c1: 78.36, c2: 45.00, c3: 73.00, c4: 75.21, c5: 83.60, c6: 79.47, c7: 40.79 },
    "EQUIPE 04 DO PSF": { c1: 74.78, c2: 45.00, c3: 67.13, c4: 83.48, c5: 79.56, c6: 80.64, c7: 63.15 }
};

// SAÚDE BUCAL - 2º QUADRIMESTRE
const SAUDE_BUCAL = {
    "POSTO DE SAÚDE DE TETEU-PSF": { b1: 0.09, b2: 350.00, b3: 9.52, b4: 0.00, b5: 23.81, b6: 46.15 },
    "ASSUNCAO DO PIAUI PSF": { b1: 3.02, b2: 83.02, b3: 0.37, b4: 18.38, b5: 70.00, b6: 76.62 },
    "PS LAGEIRO BRANCO": { b1: 0.20, b2: 150.00, b3: 0.00, b4: 15.45, b5: 78.13, b6: 66.67 },
    "EQUIPE 04 DO PSF": { b1: 3.42, b2: 11.59, b3: 0.18, b4: 0.00, b5: 71.53, b6: 28.93 }
};

// EMULTI - 2º QUADRIMESTRE
const EMULTI = { m1: 5.34, m2: 0.38 };