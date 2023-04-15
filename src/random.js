const deckSizes = {
	deck1: 10, // Укажите количество карт в колоде 1
	deck2: 20, // Укажите количество карт в колоде 2
	deck3: 30, // Укажите количество карт в колоде 3
	deck4: 50, // Укажите количество карт в колоде 4

	// Добавьте другие колоды по аналогии
};

function selectRandomCard(deckId) {
	const deckElement = document.getElementById(deckId);
	const deckSize = deckSizes[deckId];

	// Если у элемента есть атрибут "data-open", вернуть рубашку колоды
	if (deckElement.getAttribute("data-open")) {
		deckElement.src = `./images/decks/${deckId}/back.png`;
		deckElement.removeAttribute("data-open");
	} else {
		const randomCardNumber = Math.floor(Math.random() * deckSize) + 1;
		const cardImagePath = `./images/decks/${deckId}/${randomCardNumber}.png`;

		deckElement.src = cardImagePath;
		deckElement.alt = `Карта №${randomCardNumber}`;
		deckElement.setAttribute("data-open", "true");
	}
}

const deckElements = document.getElementsByClassName("deck");

for (let i = 0; i < deckElements.length; i++) {
	deckElements[i].addEventListener("click", () => {
		selectRandomCard(deckElements[i].id);
	});
}
