// ============================================
// SCRIPT PRINCIPAL - PARÂMETROS OFICIAIS DO MINISTÉRIO DA SAÚDE
// ============================================

let currentSection = "ranking";
let charts = {};

document.getElementById('municipioNome').innerHTML = `${CONFIG_MUNICIPIO.nome} - ${CONFIG_MUNICIPIO.uf}<br><span style="font-size:0.6rem">${CONFIG_MUNICIPIO.quadrimestre} Quadrimestre ${CONFIG_MUNICIPIO.ano}</span>`;

// ============================================
// PARÂMETROS OFICIAIS POR INDICADOR
// ============================================

function classificarC1(valor) {
    if (valor > 50 && valor <= 70) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 30 && valor <= 50) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 10 && valor <= 30) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarGeral(valor) {
    if (valor > 75 && valor <= 100) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 50 && valor <= 75) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 25 && valor <= 50) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarB1(valor) {
    if (valor > 1.25) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 0.75 && valor <= 1.25) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 0.25 && valor <= 0.75) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarB3(valor) {
    if (valor >= 3 && valor < 10) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor >= 10 && valor < 12) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor >= 12 && valor < 14) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarB4(valor) {
    if (valor > 1) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 0.5 && valor <= 1) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 0.25 && valor <= 0.5) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarB5(valor) {
    if (valor >= 65 && valor <= 85) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor >= 55 && valor < 65) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor >= 40 && valor < 55) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarB6(valor) {
    if (valor > 8) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 6 && valor <= 8) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 3 && valor <= 6) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarM1(valor) {
    if (valor > 3) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 2 && valor <= 3) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 1 && valor <= 2) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

function classificarM2(valor) {
    if (valor > 5) return { texto: "ÓTIMO", classe: "otimo", cor: "#3498DB", badge: "badge-otimo", fill: "fill-otimo" };
    if (valor > 2.5 && valor <= 5) return { texto: "BOM", classe: "bom", cor: "#27AE60", badge: "badge-bom", fill: "fill-bom" };
    if (valor > 1 && valor <= 2.5) return { texto: "SUFICIENTE", classe: "suficiente", cor: "#F39C12", badge: "badge-suficiente", fill: "fill-suficiente" };
    return { texto: "REGULAR", classe: "regular", cor: "#E74C3C", badge: "badge-regular", fill: "fill-regular" };
}

// Função de classificação genérica para C2-C7 (usam o mesmo padrão)
function classificarPorValor(valor) {
    return classificarGeral(valor);
}

function getMediaEquipe(unidade) {
    let q = QUALIDADE[unidade];
    if (!q) return 0;
    return (q.c1 + q.c2 + q.c3 + q.c4 + q.c5 + q.c6 + q.c7) / 7;
}

function getRanking() {
    let ranking = EQUIPES.map(eq => ({
        ...eq,
        media: getMediaEquipe(eq.unidade)
    }));
    ranking.sort((a, b) => b.media - a.media);
    return ranking;
}

// ============================================
// RANKING GERAL
// ============================================
function renderRanking() {
    const ranking = getRanking();
    const mediaGeral = ranking.reduce((s, e) => s + e.media, 0) / 4;

    document.getElementById('heroTitle').innerHTML = '<i class="fas fa-trophy"></i> Ranking das Equipes';
    document.getElementById('heroSub').innerHTML = `${CONFIG_MUNICIPIO.quadrimestre} Quadrimestre ${CONFIG_MUNICIPIO.ano} | Média dos indicadores C1 a C7`;
    document.getElementById('heroStats').innerHTML = `
        <div class="hero-stat"><div class="number">${mediaGeral.toFixed(1)}%</div><div class="label">Média Municipal</div></div>
        <div class="hero-stat"><div class="number">${ranking[0]?.nome.split(' ')[1] || '--'}</div><div class="label">1º Lugar</div></div>
    `;

    let cardsHtml = `
        <div class="cards-grid">
            <div class="info-card ouro"><div class="card-label"><i class="fas fa-crown"></i> 🥇 1º Lugar</div><div class="card-value">${ranking[0]?.nome}</div><div class="card-label">Média ${ranking[0]?.media.toFixed(1)}%</div></div>
            <div class="info-card prata"><div class="card-label"><i class="fas fa-medal"></i> 🥈 2º Lugar</div><div class="card-value">${ranking[1]?.nome}</div><div class="card-label">Média ${ranking[1]?.media.toFixed(1)}%</div></div>
            <div class="info-card bronze"><div class="card-label"><i class="fas fa-medal"></i> 🥉 3º Lugar</div><div class="card-value">${ranking[2]?.nome}</div><div class="card-label">Média ${ranking[2]?.media.toFixed(1)}%</div></div>
        </div>
    `;

    let tableHtml = `
        <div class="ranking-card">
            <div class="ranking-header"><i class="fas fa-list-ol"></i> Classificação Geral - ${CONFIG_MUNICIPIO.quadrimestre} Quadrimestre ${CONFIG_MUNICIPIO.ano}</div>
            <table class="ranking-table">
                <thead><tr><th>Posição</th><th>Equipe</th><th>Média Geral</th><th>Classificação</th><th>Progresso</th><th>Indicador Destque</th></tr></thead>
                <tbody>
                    ${ranking.map((eq, idx) => {
                        const cls = classificarPorValor(eq.media);
                        let posicaoClass = idx === 0 ? 'posicao-ouro' : (idx === 1 ? 'posicao-prata' : (idx === 2 ? 'posicao-bronze' : ''));
                        let medalIcon = idx === 0 ? '🥇 ' : (idx === 1 ? '🥈 ' : (idx === 2 ? '🥉 ' : ''));
                        const q = QUALIDADE[eq.unidade];
                        const melhorInd = Math.max(q.c1, q.c2, q.c3, q.c4, q.c5, q.c6, q.c7);
                        const melhorNome = ['C1','C2','C3','C4','C5','C6','C7'][[q.c1, q.c2, q.c3, q.c4, q.c5, q.c6, q.c7].indexOf(melhorInd)];
                        return `<tr class="posicao-${idx+1}">
                            <td class="posicao ${posicaoClass}">${medalIcon}${idx+1}º</td>
                            <td style="font-weight:700"><i class="fas ${eq.icone}"></i> ${eq.nome}</td>
                            <td style="font-weight:800; color:${cls.cor}">${eq.media.toFixed(1)}%</td>
                            <td><span class="badge ${cls.badge}">${cls.texto}</span></td>
                            <td><div class="progress-bar-bg"><div class="progress-fill ${cls.fill}" style="width:${eq.media}%"></div></div></td>
                            <td style="font-size:0.7rem;">⭐ ${melhorNome} (${melhorInd}%)</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
        <div class="chart-card"><div class="chart-title"><i class="fas fa-chart-bar"></i> Comparativo de Médias por Equipe</div><canvas id="rankingChart" style="height: 320px;"></canvas></div>
    `;
    document.getElementById('dynamicContent').innerHTML = cardsHtml + tableHtml;

    const ctx = document.getElementById('rankingChart').getContext('2d');
    if (charts.ranking) charts.ranking.destroy();
    charts.ranking = new Chart(ctx, {
        type: 'bar',
        data: { labels: ranking.map(eq => eq.nome), datasets: [{ label: 'Média Geral (%)', data: ranking.map(eq => eq.media), backgroundColor: ranking.map((_, i) => i === 0 ? '#3498DB' : (i === 1 ? '#A0A0A0' : (i === 2 ? '#CD7F32' : '#3498DB'))), borderRadius: 10 }] },
        options: { responsive: true, scales: { y: { max: 100, beginAtZero: true } } }
    });
}

// ============================================
// INDICADORES APS (C1 a C7)
// ============================================
function renderAPS() {
    const ranking = getRanking();
    const mediaGeral = ranking.reduce((s, e) => s + e.media, 0) / 4;

    document.getElementById('heroTitle').innerHTML = '<i class="fas fa-chart-simple"></i> Indicadores APS (C1 a C7)';
    document.getElementById('heroSub').innerHTML = `Parâmetros oficiais do Ministério da Saúde - ${CONFIG_MUNICIPIO.quadrimestre} Quadrimestre ${CONFIG_MUNICIPIO.ano}`;
    document.getElementById('heroStats').innerHTML = `<div class="hero-stat"><div class="number">${mediaGeral.toFixed(1)}%</div><div class="label">Média Municipal</div></div>`;

    let html = `
        <div class="ranking-card">
            <div class="ranking-header"><i class="fas fa-table-list"></i> Indicadores de Qualidade (C1 a C7) - Classificação conforme Notas Metodológicas MS</div>
            <table class="detalhe-table">
                <thead><tr><th>Equipe</th><th>C1<br>Acesso</th><th>C2<br>Infantil</th><th>C3<br>Gestante</th><th>C4<br>Diabetes</th><th>C5<br>Hipertensão</th><th>C6<br>Idoso</th><th>C7<br>Mulheres</th><th>Média</th></tr></thead>
                <tbody>
                    ${EQUIPES.map(eq => {
                        const q = QUALIDADE[eq.unidade];
                        const media = getMediaEquipe(eq.unidade);
                        const mediaCls = classificarPorValor(media);
                        return `<tr>
                            <td style="font-weight:700"><i class="fas ${eq.icone}"></i> ${eq.nome}</td>
                            ${['c1','c2','c3','c4','c5','c6','c7'].map((c, i) => {
                                const val = q[c];
                                const cls = c === 'c1' ? classificarC1(val) : classificarPorValor(val);
                                return `<td style="text-align:center;"><span style="color:${cls.cor}; font-weight:700">${val}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span></td>`;
                            }).join('')}
                            <td style="text-align:center;"><span style="color:${mediaCls.cor}; font-weight:800">${media.toFixed(1)}%</span><br><span class="badge ${mediaCls.badge}" style="font-size:0.6rem;">${mediaCls.texto}</span></td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
        <div class="chart-card"><div class="chart-title"><i class="fas fa-chart-line"></i> Perfil dos Indicadores (Média Municipal)</div><canvas id="apsChart" style="height: 320px;"></canvas></div>
    `;
    document.getElementById('dynamicContent').innerHTML = html;

    let mediasC = { c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0 };
    EQUIPES.forEach(eq => {
        let q = QUALIDADE[eq.unidade];
        mediasC.c1 += q.c1; mediasC.c2 += q.c2; mediasC.c3 += q.c3;
        mediasC.c4 += q.c4; mediasC.c5 += q.c5; mediasC.c6 += q.c6; mediasC.c7 += q.c7;
    });
    Object.keys(mediasC).forEach(k => mediasC[k] /= EQUIPES.length);

    const ctx = document.getElementById('apsChart').getContext('2d');
    if (charts.aps) charts.aps.destroy();
    charts.aps = new Chart(ctx, {
        type: 'radar',
        data: { labels: ['C1 - Acesso', 'C2 - Infantil', 'C3 - Gestante', 'C4 - Diabetes', 'C5 - Hipertensão', 'C6 - Idoso', 'C7 - Mulheres'], datasets: [{ label: 'Média Municipal (%)', data: Object.values(mediasC), backgroundColor: 'rgba(52,152,219,0.2)', borderColor: '#3498DB', pointBackgroundColor: '#3498DB' }] },
        options: { responsive: true, scales: { r: { max: 100, beginAtZero: true } } }
    });
}

// ============================================
// SAÚDE BUCAL (B1 a B6)
// ============================================
function renderSB() {
    document.getElementById('heroTitle').innerHTML = '<i class="fas fa-tooth"></i> Saúde Bucal (B1 a B6)';
    document.getElementById('heroSub').innerHTML = `Parâmetros oficiais do Ministério da Saúde - ${CONFIG_MUNICIPIO.quadrimestre} Quadrimestre ${CONFIG_MUNICIPIO.ano}`;
    document.getElementById('heroStats').innerHTML = `<div class="hero-stat"><div class="number">🦷</div><div class="label">Indicadores Odontológicos</div></div>`;

    let html = `
        <div class="ranking-card">
            <div class="ranking-header"><i class="fas fa-tooth"></i> Indicadores de Saúde Bucal - Classificação conforme Notas Metodológicas</div>
            <table class="detalhe-table">
                <thead><tr><th>Equipe</th><th>B1<br>1ª Consulta</th><th>B2<br>Trat.Concluído</th><th>B3<br>Exodontia</th><th>B4<br>Escovação</th><th>B5<br>Preventivos</th><th>B6<br>Restaurador</th></tr></thead>
                <tbody>
                    ${EQUIPES.map(eq => {
                        const sb = SAUDE_BUCAL[eq.unidade];
                        return `<tr>
                            <td style="font-weight:700"><i class="fas ${eq.icone}"></i> ESB ${eq.nome}</td>
                            <td style="text-align:center;">${(() => { let cls = classificarB1(sb.b1); return `<span style="color:${cls.cor}; font-weight:700">${sb.b1}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span>`; })()}</td>
                            <td style="text-align:center;">${(() => { let val = sb.b2 > 100 ? 100 : sb.b2; let cls = classificarPorValor(val); return `<span style="color:${cls.cor}; font-weight:700">${val}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span>`; })()}</td>
                            <td style="text-align:center;">${(() => { let cls = classificarB3(sb.b3); return `<span style="color:${cls.cor}; font-weight:700">${sb.b3}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span>`; })()}</td>
                            <td style="text-align:center;">${(() => { let cls = classificarB4(sb.b4); return `<span style="color:${cls.cor}; font-weight:700">${sb.b4}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span>`; })()}</td>
                            <td style="text-align:center;">${(() => { let cls = classificarB5(sb.b5); return `<span style="color:${cls.cor}; font-weight:700">${sb.b5}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span>`; })()}</td>
                            <td style="text-align:center;">${(() => { let cls = classificarB6(sb.b6); return `<span style="color:${cls.cor}; font-weight:700">${sb.b6}%</span><br><span class="badge ${cls.badge}" style="font-size:0.6rem;">${cls.texto}</span>`; })()}</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
    document.getElementById('dynamicContent').innerHTML = html;
}

// ============================================
// EMULTI
// ============================================
function renderEMulti() {
    const m1Class = classificarM1(EMULTI.m1);
    const m2Class = classificarM2(EMULTI.m2);

    document.getElementById('heroTitle').innerHTML = '<i class="fas fa-hand-holding-heart"></i> eMulti - Cuidado Integral';
    document.getElementById('heroSub').innerHTML = `Parâmetros oficiais do Ministério da Saúde - ${CONFIG_MUNICIPIO.quadrimestre} Quadrimestre ${CONFIG_MUNICIPIO.ano}`;
    document.getElementById('heroStats').innerHTML = `<div class="hero-stat"><div class="number">${EMULTI.m1}</div><div class="label">M1 - Atendimentos</div></div>`;

    let html = `
        <div class="ranking-card">
            <div class="ranking-header"><i class="fas fa-users"></i> eMulti ${CONFIG_MUNICIPIO.nome}</div>
            <table class="detalhe-table">
                <thead><tr><th>Indicador</th><th>Valor</th><th>Classificação</th><th>Parâmetro MS</th></tr></thead>
                <tbody>
                    <tr><td style="font-weight:700">M1 - Média de Atendimentos por Cidadão</td><td style="font-weight:700">${EMULTI.m1}</td><td><span class="badge ${m1Class.badge}">${m1Class.texto}</span></td><td style="font-size:0.7rem">Ótimo: &gt;3 | Bom: &gt;2-3 | Suf: &gt;1-2 | Regular: ≤1</td></tr>
                    <tr style="background:#FDEDEC"><td style="font-weight:700">M2 - Ações Interprofissionais (%)</td><td style="font-weight:700; color:${m2Class.cor}">${EMULTI.m2}%</td><td><span class="badge ${m2Class.badge}">${m2Class.texto}</span></td><td style="font-size:0.7rem">Ótimo: &gt;5% | Bom: &gt;2,5-5% | Suf: &gt;1-2,5% | Regular: ≤1%</td></tr>
                </tbody>
            </table>
        </div>
        <div class="chart-card"><div class="chart-title"><i class="fas fa-chart-bar"></i> Indicadores eMulti</div><canvas id="emultiChart" style="height: 280px;"></canvas></div>
    `;
    document.getElementById('dynamicContent').innerHTML = html;

    const ctx = document.getElementById('emultiChart').getContext('2d');
    if (charts.emulti) charts.emulti.destroy();
    charts.emulti = new Chart(ctx, {
        type: 'bar',
        data: { labels: ['M1 - Atendimentos/Cidadão', 'M2 - Ações Interprofissionais (%)'], datasets: [{ label: 'Valor Atual', data: [EMULTI.m1, EMULTI.m2], backgroundColor: ['#3498DB', '#E74C3C'], borderRadius: 10 }] },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}

// ============================================
// NAVEGAÇÃO
// ============================================
function renderDashboard() {
    if (currentSection === "ranking") renderRanking();
    else if (currentSection === "aps") renderAPS();
    else if (currentSection === "sb") renderSB();
    else if (currentSection === "emulti") renderEMulti();

    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.dataset.section === currentSection) link.classList.add('active');
        else link.classList.remove('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentSection = link.dataset.section;
        renderDashboard();
    });
});

function exportPDF() { html2pdf().set({ margin: 0.5, filename: `${CONFIG_MUNICIPIO.nome.toLowerCase().replace(/ /g, '_')}_dashboard_ms.pdf` }).from(document.querySelector('.main-container')).save(); }
function exportExcel() {
    let rows = EQUIPES.map(eq => {
        let q = QUALIDADE[eq.unidade];
        let sb = SAUDE_BUCAL[eq.unidade];
        return { Equipe: eq.nome, C1: q.c1, C2: q.c2, C3: q.c3, C4: q.c4, C5: q.c5, C6: q.c6, C7: q.c7, B1: sb.b1, B2: sb.b2, B3: sb.b3, B4: sb.b4, B5: sb.b5, B6: sb.b6 };
    });
    let ws = XLSX.utils.json_to_sheet(rows);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Indicadores_MS');
    XLSX.writeFile(wb, `${CONFIG_MUNICIPIO.nome.toLowerCase().replace(/ /g, '_')}_dashboard_ms.xlsx`);
}

document.getElementById('btnPDF').addEventListener('click', exportPDF);
document.getElementById('btnExcel').addEventListener('click', exportExcel);

renderDashboard();