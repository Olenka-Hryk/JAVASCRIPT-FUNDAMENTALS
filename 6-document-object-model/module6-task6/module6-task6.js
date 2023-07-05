// Реалізувати логіку підрахунку ціни товару по його варіаціях (шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.

class ShoesComponent {
    #colorList = document.querySelector(".color-container .colors");
    #colorMap = new Map(
        Array.from(this.#colorList.querySelectorAll(".color")).map((elem) => [
            elem.getAttribute("color"),
            elem,
        ])
    );

    #gradientList = document.querySelector(".gradients");
    #gradientMap = new Map(
        Array.from(this.#gradientList.querySelectorAll(".gradient")).map((elem) => [
            elem.getAttribute("color"),
            elem,
        ])
    );

    #shoeMap = new Map(
        Array.from(document.querySelectorAll(".shoe")).map((elem) => [
            elem.getAttribute("color"),
            elem,
        ])
    );

    #sizeList = document.querySelector(".size-container .sizes");
    #sizeMap = new Map(
        Array.from(this.#sizeList.querySelectorAll(".size")).map((elem) => [
            elem.getAttribute("data-size"),
            elem,
        ])
    );

    #sizeMultiplier = new Map([
        ["38", 1.1],
        ["39", 1.2],
        ["40", 1.3],
        ["41", 1.6],
        ["42", 1.7],
        ["43", 1.8],
    ]);

    #basket = [];
    #isShowSale = false;

    constructor() {
        this.init();
    }

    getSelectedColor() {
        return this.#colorList.querySelector(".active").getAttribute("color");
    }
    resetColors() {
        document.querySelector(".shoe.show").classList.remove("show");
        this.#gradientList.querySelector(".gradient.second").classList.remove("second");
        this.#colorList.querySelector(".color.active").classList.remove("active");
    }
    setColor(color) {
        this.resetColors();
        this.#shoeMap.get(color).classList.add("show");
        this.#gradientMap.get(color).classList.add("second");
        this.#colorMap.get(color).classList.add("active");
    }

    getSelectedSize() {
        return this.#sizeList.querySelector(".active").getAttribute("data-size");
    }
    resetSizes() {
        this.#sizeList.querySelector(".size.active").classList.remove("active");
    }
    setSize(size) {
        this.resetSizes();
        this.#sizeMap.get(size).classList.add("active");
    }

    getCurrentColorPrice() {
        return Number.parseInt(this.#colorMap.get(this.getSelectedColor()).dataset.price);
    }
    getCurrentGradientPrice() {
        return Number.parseInt(this.#gradientMap.get(this.getSelectedColor()).dataset.price);
    }
    getCurrentSizeMultiplier() {
        return this.#sizeMultiplier.get(this.#sizeMap.get(this.getSelectedSize()).dataset.size);
    }

    getPriceShoe(isSale) {
        if (!isSale) {
            return Math.round((this.getCurrentColorPrice() + this.getCurrentGradientPrice()) * this.getCurrentSizeMultiplier());
        } else {
            const lowerPrice = this.getCurrentColorPrice() > this.getCurrentGradientPrice()
                ? this.getCurrentGradientPrice()
                : this.getCurrentColorPrice();
            return Math.round(lowerPrice * this.getCurrentSizeMultiplier());
        }
    }

    getPriceAllTotal() {
        return this.#basket.reduce((a, b) => a + b, 0);
    }

    init() {
        document.getElementById("btnShowSale").addEventListener("click", (event) => {
            this.#isShowSale
                ? this.#isShowSale = false
                : this.#isShowSale = true;
            this.showPriceOfShoe();
        });

        this.#colorList.addEventListener("click", (event) => {
            if (!event.target.dataset.price) return;
            this.setColor(event.target.getAttribute("color"));
            this.showPriceOfShoe();
        });

        this.#sizeList.addEventListener("click", (event) => {
            if (!event.target.dataset.size) return;
            this.setSize(event.target.getAttribute("data-size"));
            this.showPriceOfShoe();
        });

        document.getElementById("btnAddToCard").addEventListener("click", (event) => {
            document.querySelector(".add-counter").style.visibility = "visible";
            document.querySelector(".price-total").style.visibility = "visible";
            this.#basket.push(this.getPriceShoe(this.#isShowSale));
            document.getElementById("counter-shoes").innerHTML = `x ${this.#basket.length}`;
            console.log(this.#basket);
            this.showPriceTotal();
        });

        document.getElementById("btnRemoveItemShoes").addEventListener("click", (event) => {
            if (this.#basket.length === 0) return;
            this.#basket.pop();
            document.getElementById("counter-shoes").innerHTML = `x ${this.#basket.length}`;
            if (this.#basket.length === 0) {
                document.querySelector(".add-counter").style.visibility = "hidden";
                document.querySelector(".price-total").style.visibility = "hidden";
            }
            console.log(this.#basket);
            this.showPriceTotal();
        });
        
        this.showPriceOfShoe();
    }

    renderShowSale() {
        if (this.#isShowSale) {
            if (document.getElementById("outprice").classList.contains("sale-price")) return;
            document.getElementById("btnShowSale").innerHTML = "Hide sale";
            document.getElementById("btnShowSale").style.backgroundColor = "#29b864";
            document.getElementById("outprice").classList.add("sale-price");
            const oldPrice = document.createElement("s");
            oldPrice.textContent = document.getElementById("outprice").innerHTML;
            oldPrice.setAttribute("id", "outprice-old");
            document.getElementById("outprice").innerHTML = "";
            document.getElementById("outprice").append(oldPrice);
            const newPrice = document.createElement("h1");
            newPrice.setAttribute("id", "outprice-sale");
            document.querySelector(".price-container").append(newPrice);
        } else {
            document.getElementById("btnShowSale").innerHTML = "Show sale";
            document.getElementById("btnShowSale").style.backgroundColor = "#f84848";
            if (document.getElementById("outprice-old"))
                document.getElementById("outprice-old").remove();
            if (document.getElementById("outprice-sale"))
                document.getElementById("outprice-sale").remove();
            if (document.getElementById("outprice").classList.contains("sale-price"))
                document.getElementById("outprice").classList.remove("sale-price");
        }
    }

    showPriceOfShoe() {
        if (this.#isShowSale) {
            this.renderShowSale();
            document.getElementById("outprice-old").innerText = `${this.getPriceShoe(!this.#isShowSale)} $`;
            document.getElementById("outprice-sale").innerText = `${"\xa0".repeat(2)} ${this.getPriceShoe(this.#isShowSale)} $`;
        } else {
            this.renderShowSale();
            document.getElementById("outprice").innerText = `${this.getPriceShoe(this.#isShowSale)} $`;
        }
    }

    showPriceTotal() {
        if (this.#basket.length > 0) {
            document.getElementById("outprice-total").innerText = `${this.getPriceAllTotal()} $`;
        }
    }
}

const shoesComponent = new ShoesComponent();
document.querySelector(".add-counter").style.visibility = "hidden";
document.querySelector(".price-total").style.visibility = "hidden";
