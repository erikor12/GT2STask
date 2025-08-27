let frutasYVerduras = [{ fruta: "banana" }, { verdura: "apio"}, { fruta: "manzana" }, { fruta: "frutilla"}, { verdura: "zanahoria"}, { fruta: "kiwi"}, { fruta: "sandia"}, { fruta: "melon"}, { verdura: "repollo"}, { fruta: "mango"}];

console.log(fruitsFilter())

function fruitsFilter() {
    return frutasYVerduras.filter(item => item.fruta).map(item => item.fruta);
}