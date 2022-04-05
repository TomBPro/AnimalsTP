import Chat from "./class/chat";
import Dauphin from "./class/Dauphin";
import Mammifere from "./abstract/Mammifere";

const chat = new Chat('Moli', 2, new Date('2012-08-08'))

const dauphin: Dauphin = new Dauphin('Coco', 5, new Date('2018-04-06'))

const listeMamifere: Mammifere[] = [dauphin, chat];
listeMamifere.forEach(animal => {
    animal.display();
})

chat.marcher();
dauphin.cliquetter();
dauphin.respirerSousEau();
