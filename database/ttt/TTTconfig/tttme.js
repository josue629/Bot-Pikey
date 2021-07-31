const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Tic Tac Toe 💮🌀 」

❖ NOME: ${pushname} 

    ➣ Victorias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates : ${userTies} 🌀
    ➣ Puntos  : ${userPoints} ✨
    `
}

exports.tttme = tttme
