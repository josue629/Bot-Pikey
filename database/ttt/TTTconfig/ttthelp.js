const ttthelp = (prefix) => {
    return `◪ BETA, EVITE USAR

◪ APENAS PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${prefix}ttt [ DIFICULDADE ] 」
  └─ ❏ Sol una persona a la vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente aleatorio 
  │     (Solo perderás si tienes mala suerte)
  ├─ ❏ normal : 66% de chance 
  │     de bloquear y ganar
  ├─ ❏ hard : 100% de chance 
  │     de bloquear y ganar
  └─ ❏ impossible : Solo Kuuhaku
           para vencer esto

◪ TEMPORIZADOR
  │
  ├─ ❏ El partido terminará             
  │         automáticamente 
  │         después de 4 minutos
  │
  └─ ❏ El partido terminará
           automáticamente después de 4 minutos

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${prefix}coord [ COORDENADA ] 」
  │
  └─ ❏ Exemplo:
	        └「   ${prefix}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲  」

◪ SU ESTADO
  │
  └─ ❏ Para ver seu status digite:
          └「 ${prefix}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Vitória : +「 2005 / 5000 」
  │     └ Derrota : -「 200 / 200 」
  │
  ├─ ❏ NORMAL
  │     ├ Vitória : +「 7005 / 15000 」
  │     └ Derrota : -「 705 / 1050 」
  │
  ├─ ❏ HARD
  │     ├ Vitória : +「 20000 / 40000 」
  │     └ Derrota : -「 2005 / 5000 」
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Vitória : +「 100000 / 200000 」
  │     └ Derrota : -「 0 / 0 」
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NO FINALIZADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp