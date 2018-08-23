    //  Создать класс options
    class Optonions {
        // Он должен содержать свойства: height, width, bg, fontSize, textAlign
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height,
            this.width = width,
            this.bg = bg,
            this.fontSize = fontSize,
            this.textAlign = textAlign
        }
        //   Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
        createNewDiv() {
            let newElem = document.createElement('div');
            newElem.textContent = prompt('Введите информацию в новосозданный элемент div', '');
            newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;

            return document.body.appendChild(newElem);
        }
    }
    // Создать новый объект через класс
    let newElemDiv = new Optonions('50px', '50px', 'red', '100%', 'center');
    // Вызвать его метод и получить элемент на странице
    newElemDiv.createNewDiv();