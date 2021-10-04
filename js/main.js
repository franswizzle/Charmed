//Global variables/constants
const body = document.querySelector("body");
const income = document.querySelector(".income-left__mobile");
const setBudget = document.querySelector(".set-budget");
const header = document.querySelector("header img");
const budgetHeader = document.querySelector(".budget-header");
const sectionHeader = document.querySelector(".section-header");
const addBudget = document.querySelector(".add-budget");
const budgetList = document.querySelector("ul");
const addNewBudget = document.querySelector(".add-new-budget");
const nextTransaction = document.querySelector(".next-transaction");
const nextTransactionArrow = document.querySelector(".button-animation");

let budgetLeft = "";
const allBudgetItems = [];

//Page loader: The initial animations on loading the app

// Loader shows up if page not fully loaded
document.onreadystatechange = function () {
  const loader = document.querySelector(".loader");
  if (document.readyState !== "complete") {
    body.style.visibility = "hidden";
    loader.style.visibility = "visible";
    loader.style.opacity = "100%";
  } else {
    //wait two seconds before displaying the body
    setTimeout(() => {
      sectionHeader.style.opacity = "0%";
      sectionHeader.visibility = "hidden";
      budgetHeader.style.opacity = "0%";
      budgetHeader.visibility = "hidden";
      body.style.visibility = "visible";
      body.style.opacity = "0%";
    }, 2000);
    // 3 seconds later the body changes styling, becomes fully visible
    setTimeout(() => {
      body.style.justifyContent = "flex-start";
      body.style.opacity = "100%";
      body.style.visibility = "visible";
      header.style.width = "100px";
      loader.style.display = "none";
      loader.style.visibility = "hidden";
      loader.style.opacity = "0%";
    }, 5000);
    //brings up the other pieces of content in phase one
    setTimeout(() => {
      income.style.visibility = "visible";
      income.style.opacity = "100%";
    }, 6000);
    setTimeout(() => {
      setBudget.style.opacity = "100%";
      setBudget.style.visibility = "visible";
      sectionHeader.style.visibility = "visible";
      sectionHeader.style.opacity = "100%";
      budgetHeader.style.visibility = "visible";
      budgetHeader.style.opacity = "100%";
      nextTransaction.style.visibility = "visible";
      nextTransaction.style.opacity = "20%";
    }, 7000);
  }
};

//function declarations
function goToTransactions() {
  setBudget.style.opacity = "0%";
  setBudget.style.visibility = "hidden";
  nextTransaction.style.opacity = "0%";
  nextTransaction.style.visibility = "hidden";
  income.style.opacity = "0%";
  income.style.visibility = "hidden";
  sectionHeader.style.opacity = "0%";
  budgetHeader.style.visibility = "hidden";

  setTimeout(() => {
    income.style.display = "none";
    setBudget.style.display = "none";
    nextTransaction.style.display = "none";
    sectionHeader.style.display = "none";
    budgetHeader.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionHeader.style.display = "flex";
    transactionHeader.style.display = "flex";
    transactionSection.style.display = "flex";
    backBudgets.style.display = "flex";
    transactionList.style.display = "grid";
    nextGraphs.style.display = "block";
    transactionForm.style.display = "block";
  }, 1000);

  setTimeout(() => {
    transactionHeader.style.visibility = "visible";
    transactionHeader.style.opacity = "100%";
    transactionSection.style.visibility = "visible";
    transactionSection.style.opacity = "100%";
    backBudgets.style.visibility = "visible";
    backBudgets.style.opacity = "100%";
    transactionList.style.visibility = "visible";
    transactionList.style.opacity = "100%";
    nextGraphs.style.visibility = "visible";
    nextGraphs.style.opacity = "100%";
    transactionForm.style.opacity = "100%";
    transactionForm.style.visibility = "visible";
  }, 2000);
}

function goToGraphs() {
  transactionHeader.style.visibility = "hidden";
  transactionHeader.style.opacity = "0%";
  transactionSection.style.visibility = "hidden";
  transactionSection.style.opacity = "0%";
  backBudgets.style.visibility = "hidden";
  backBudgets.style.opacity = "0%";
  transactionList.style.visibility = "hidden";
  transactionList.style.opacity = "0%";
  nextGraphs.style.visibility = "hidden";
  nextGraphs.style.opacity = "0%";
  transactionForm.style.visibility = "hidden";
  transactionForm.style.opacity = "0%";

  setTimeout(() => {
    sectionHeader.style.display = "none";
    transactionHeader.style.display = "none";
    transactionSection.style.display = "none";
    backBudgets.style.display = "none";
    transactionList.style.display = "none";
    nextGraphs.style.display = "none";
    transactionForm.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionHeader.style.display = "flex";
    graphsHeader.style.display = "flex";
    graphs.style.display = "flex";
    backTransactions.style.display = "flex";
    backBudgetsTwo.style.display = "flex";
    graphList.style.display = "grid";
  }, 1000);

  setTimeout(() => {
    graphsHeader.style.visibility = "visible";
    graphsHeader.style.opacity = "100%";
    graphs.style.visibility = "visible";
    graphs.style.opacity = "100%";
    backTransactions.style.visibility = "visible";
    backTransactions.style.opacity = "100%";
    graphList.style.visibility = "visible";
    graphList.style.opacity = "100%";
    backBudgetsTwo.style.visibility = "visible";
    backBudgetsTwo.style.opacity = "100%";
  }, 2000);
}

//create class that makes an object for budgets
class BudgetItem {
  constructor(name, amount, budgetLeft, id) {
    this.name = name;
    this.amount = amount;
    this.budgetLeft = budgetLeft;
    this.id = "_" + Math.random().toString(36).substr(2, 9);
  }

  get generateId() {
    return this.id;
  }

  set setName(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setAmount(amount) {
    this.amount = amount;
  }

  get getAmount() {
    return this.amount;
  }

  set setBudgetLeft(budgetLeft) {
    this.budgetLeft = budgetLeft;
  }

  get getBudgetLeft() {
    return this.budgetLeft;
  }
}
//transaction class
class Transaction {
  constructor(date, vendor, category, amount) {
    this.date = date;
    this.vendor = vendor;
    this.category = category;
    this.amount = amount;
  }

  set setDate(date) {
    this.date = date;
  }

  get getDate() {
    return this.date;
  }

  set setVendor(vendor) {
    this.vendor = vendor;
  }

  get getVendor() {
    return this.vendor;
  }

  set setAmount(amount) {
    this.amount = amount;
  }

  get getAmount() {
    return this.amount;
  }

  set setCategory(category) {
    this.category = category;
  }

  get getCategory() {
    return this.category;
  }
}

// format numbers to currency
let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

//Dedining function for formatting currency

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === "") {
    return;
  }

  // original length
  var original_len = input_val.length;

  // initial caret position
  var caret_pos = input.prop("selectionStart");

  // check for decimal
  if (input_val.indexOf(".") >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;

    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

//Set event listener on the plus icon for budgets
addBudget.addEventListener("click", () => {
  let newBudgetItem = new BudgetItem("", "", "");
  allBudgetItems.push(newBudgetItem);
  let budgetPosition = allBudgetItems.length;
  //create li
  const newLi = document.createElement("li");
  // insert content into the new li
  newLi.innerHTML = `
  <fieldset>
    <input type="text" name="budget${budgetPosition}" placeholder="Budget Item" id="budget-item"  autofocus>
    <input type="text" data-type="currency" name="budget-amount${budgetPosition}" placeholder="$" id="budget-amount" autofocus>
  </fieldset>
  `;

  //Append new li to to ul list
  budgetList.insertBefore(newLi, addNewBudget);

  //Add budget formatting introduced in code after DOM loaded
  // Jquery Dependency - Sorry!
  $("input[data-type='currency']").on({
    keyup: function () {
      formatCurrency($(this));
    },
    blur: function () {
      formatCurrency($(this), "blur");
    }
  });
});

//Add "budget left" variable to the page
//create li
const budgetLeftPre = document.querySelector(".budget-left");
const budgetLeftElement = document.createElement("span");
budgetLeftElement.classList.add("budget-left-amount");
// insert content into the new span, in this case, the budget variable

//Append span to the DOM
budgetLeftPre.appendChild(budgetLeftElement);

//Get value of yearly income
const yearlyIncomeForm = document.getElementById("yearly-income-form");
let yearlyIncome = document.querySelector("#yearly-income");
let yearlyIncomeValue = "";

//Get update button to work
yearlyIncomeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let budgetItemFields = document.querySelectorAll("#budget-item");
  let budgetAmountFields = document.querySelectorAll("#budget-amount");

  for (let i = 0; i < budgetItemFields.length; i++) {
    allBudgetItems[i].setName = budgetItemFields[i].value;
    allBudgetItems[i].setAmount = Number(
      budgetAmountFields[i].value.replace(/[^0-9.-]+/g, "")
    );
  }

  let budgetSum = 0;

  for (let i = 0; i < allBudgetItems.length; i++) {
    budgetSum += allBudgetItems[i].amount;
  }

  yearlyIncomeValue = Number(yearlyIncome.value.replace(/[^0-9.-]+/g, ""));

  budgetLeft = formatter.format(yearlyIncomeValue - budgetSum);
  budgetLeftElement.innerHTML = `
  ${budgetLeft}
`;

  // When budget Left is exactly 0, we want users to go to next stage

  if (budgetLeft === "$0.00") {
    nextTransaction.style.opacity = "100%";
    nextTransactionArrow.style.opacity = "100%";
    nextTransaction.classList.add("bounce");
    nextTransaction.addEventListener("click", goToTransactions);
  } else if (budgetLeft !== "$0.00") {
    nextTransaction.style.opacity = "20%";
    nextTransaction.classList.remove("bounce");
    nextTransaction.removeEventListener("click", goToTransactions);
  }
});

//Format currency inputs loaded in DOM, like yearly income value

// Jquery Dependency - Sorry!

$("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency($(this));
  },
  blur: function () {
    formatCurrency($(this), "blur");
  }
});

// This was just phase one... Now phase two

//Phase 2 variables/constants
const transactionSection = document.querySelector(".transactions");
const transactionHeader = document.querySelector(".transaction-header");
const backBudgets = document.querySelector(".back-budgets");
const nextGraphs = document.querySelector(".next-graphs");
const transactionList = document.querySelector(".transaction-list");
const allTransactionItems = [];
const addNewTransaction = document.querySelector(".add-transaction");
const addNewTransactionText = document.querySelector(".add-new-transaction");
const transactionForm = document.querySelector(".transactions-form");
//Set event listener on the plus icon for transactions
addNewTransaction.addEventListener("click", () => {
  let newTransactionItem = new Transaction("", "", "", "");
  allTransactionItems.push(newTransactionItem);
  let transactionPosition = allTransactionItems.length;
  //create li
  const newLi2 = document.createElement("li");
  // insert content into the new li
  newLi2.innerHTML = `
  <fieldset class="transactions-fieldset">
    <input type="date" name="transaction-date${transactionPosition}" placeholder="Date" id="transaction-date"  autofocus>
    <input type="text" name="transaction-vendor${transactionPosition}" placeholder="Transaction" id="transaction-item"  autofocus>
    <select name="budgets${transactionPosition}" id="budgets">
    <option><strong>Uncategorized</strong></option>
    </select>
    <input type="text" data-type="currency" name="transaction-amount${transactionPosition}" placeholder="$" id="transaction-amount" autofocus>
  </fieldset>
  `;

  //Append new li to to ul list
  transactionList.insertBefore(newLi2, addNewTransactionText);

  //Add budget list from budget array as options in the selection drop down
  let budgetCategorySelectors = document.querySelectorAll("#budgets");

  function createOption(option, label, id) {
    var optionElement = document.createElement("option");
    optionElement.setAttribute("value", option);
    optionElement.setAttribute("id", id);
    optionElement.innerHTML = label;

    return optionElement;
  }

  function buildDropDowns(allBudgetItems) {
    for (
      var i = budgetCategorySelectors.length - 1;
      i < budgetCategorySelectors.length;
      i++
    ) {
      for (var j = 0; j < allBudgetItems.length; j++) {
        budgetCategorySelectors[i].options.add(
          createOption(
            allBudgetItems[j].name,
            allBudgetItems[j].getName,
            allBudgetItems[j].id
          )
        );

        let options = document.querySelectorAll(`#${allBudgetItems[j].id}`);
        //This code updates the older budgets in the DOM if an update is mande to the original budget value
        if (document.querySelector(`#${allBudgetItems[j].id}`)) {
          for (let x = 0; x < options.length; x++) {
            options[x].innerHTML = allBudgetItems[j].name;
            options[x].setAttribute("value", allBudgetItems[j].name);
          }
        }
      }
    }
  }

  buildDropDowns(allBudgetItems);

  $("input[data-type='currency']").on({
    keyup: function () {
      formatCurrency($(this));
    },
    blur: function () {
      formatCurrency($(this), "blur");
    }
  });
});

//Set event listener on Next Graphs, this will add all the transactions to the transactions array and map the properties to the value submitted by user

nextGraphs.addEventListener("click", (event) => {
  event.preventDefault();

  let transactionDate = document.querySelectorAll("#transaction-date");
  let transactionItem = document.querySelectorAll("#transaction-item");
  let budgetCategory = document.querySelectorAll("#budgets");
  let budgetAmount = document.querySelectorAll("#transaction-amount");

  //Maps the transaction inputs to their proper place in transactions array
  for (let i = 0; i < transactionDate.length; i++) {
    allTransactionItems[i].setDate = transactionDate[i].value;
    allTransactionItems[i].setVendor = transactionItem[i].value;
    allTransactionItems[i].setCategory = budgetCategory[i].value;
    allTransactionItems[i].setAmount = Number(
      budgetAmount[i].value.replace(/[^0-9.-]+/g, "")
    );
  }

  //Let's start putting in the logic for graphs!
  for (let i = 0; i < allBudgetItems.length; i++) {
    let budgetName = allBudgetItems[i].name;
    let budgetAmount = allBudgetItems[i].amount;

    let filteredTransactions = allTransactionItems.filter((el) => {
      return el.getCategory === budgetName;
    });

    let filteredSum = filteredTransactions.reduce(reducer, 0);

    allBudgetItems[i].budgetLeft = allBudgetItems[i].amount - filteredSum;
    let budgetLeft = allBudgetItems[i].budgetLeft;

    let newBudgetGraph = document.createElement("li");

    newBudgetGraph.innerHTML = `
    <section class="budget-container">
      <div class="budget-title">${budgetName}</div>
      <div class="graph-container">
        <div class="number-container">$${budgetLeft} of $${budgetAmount}</div>
        <div class="wrapper">
          <div class="progress progress-${i}">
            <div class="spent-number">$${filteredSum}</div>
          </div>
        </div>
    </div>
  </section>
    `;
    graphList.append(newBudgetGraph);

    let graphProgress = document.querySelector(`.progress-${i}`);

    setTimeout(() => {
      let rawWidth = (filteredSum / budgetAmount) * 100;

      let budgetWidth = rawWidth + "%";

      graphProgress.style.width = budgetWidth;

      if (rawWidth > 80 && rawWidth < 100) {
        graphProgress.style.backgroundColor = "#d97b0f";
        graphProgress.style.color = "#d97b0f";
      } else if (rawWidth === 100) {
        graphProgress.style.color = "#daa8f7";
        graphProgress.style.backgroundColor = "#daa8f7";
      } else if (rawWidth > 100) {
        graphProgress.style.backgroundColor = "red";
        graphProgress.style.color = "white";
      }
    }, 4000);
  }

  goToGraphs();
});

backBudgets.addEventListener("click", () => {
  transactionHeader.style.visibility = "hidden";
  transactionHeader.style.opacity = "0%";
  transactionSection.style.visibility = "hidden";
  transactionSection.style.opacity = "0%";
  backBudgets.style.visibility = "hidden";
  backBudgets.style.opacity = "0%";
  transactionList.style.visibility = "hidden";
  transactionList.style.opacity = "0%";
  nextGraphs.style.visibility = "hidden";
  nextGraphs.style.opacity = "0%";

  setTimeout(() => {
    sectionHeader.style.display = "none";
    transactionHeader.style.display = "none";
    transactionSection.style.display = "none";
    backBudgets.style.display = "none";
    transactionList.style.display = "none";
    nextGraphs.style.display = "none";
    transactionForm.style.display = "none";
  }, 500);

  setTimeout(() => {
    income.style.display = "flex";
    setBudget.style.display = "grid";
    nextTransaction.style.display = "block";
    sectionHeader.style.display = "flex";
    budgetHeader.style.display = "flex";
  }, 2000);

  setTimeout(() => {
    setBudget.style.opacity = "100%";
    setBudget.style.visibility = "visible";
    nextTransaction.style.opacity = "100%";
    nextTransaction.style.visibility = "visible";
    income.style.opacity = "100%";
    income.style.visibility = "visible";
    sectionHeader.style.opacity = "100%";
    budgetHeader.style.visibility = "visible";
  }, 3000);
});

//Phase 3 Variables/constants
let backTransactions = document.querySelector(".back-transactions");
let backBudgetsTwo = document.querySelector(".back-budgets-2");
let graphsHeader = document.querySelector(".graphs-header");
let graphs = document.querySelector(".graphs");
let graphList = document.querySelector(".graph-list");
const reducer = (accumulator, object) => {
  return accumulator + object.amount;
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

backTransactions.addEventListener("click", () => {
  graphsHeader.style.visibility = "hidden";
  graphsHeader.style.opacity = "0%";
  graphs.style.visibility = "hidden";
  graphs.style.opacity = "100%";
  backTransactions.style.visibility = "hidden";
  backTransactions.style.opacity = "0%";
  graphList.style.visibility = "hidden";
  graphList.style.opacity = "0%";
  backBudgetsTwo.style.visibility = "hidden";
  backBudgetsTwo.style.opacity = "0%";

  setTimeout(() => {
    sectionHeader.style.display = "none";
    graphsHeader.style.display = "none";
    graphs.style.display = "none";
    backTransactions.style.display = "none";
    backBudgetsTwo.style.display = "none";
    graphList.style.display = "none";
  }, 500);

  setTimeout(() => {
    sectionHeader.style.display = "flex";
    transactionHeader.style.display = "flex";
    transactionSection.style.display = "flex";
    backBudgets.style.display = "flex";
    transactionList.style.display = "grid";
    nextGraphs.style.display = "block";
    transactionForm.style.display = "block";
  }, 1000);

  setTimeout(() => {
    transactionHeader.style.visibility = "visible";
    transactionHeader.style.opacity = "100%";
    transactionSection.style.visibility = "visible";
    transactionSection.style.opacity = "100%";
    backBudgets.style.visibility = "visible";
    backBudgets.style.opacity = "100%";
    transactionList.style.visibility = "visible";
    transactionList.style.opacity = "100%";
    nextGraphs.style.visibility = "visible";
    nextGraphs.style.opacity = "100%";
    transactionForm.style.opacity = "100%";
    transactionForm.style.visibility = "visible";
  }, 2000);

  removeAllChildNodes(graphList);
});

backBudgetsTwo.addEventListener("click", () => {
  graphsHeader.style.visibility = "hidden";
  graphsHeader.style.opacity = "0%";
  graphs.style.visibility = "hidden";
  graphs.style.opacity = "100%";
  backTransactions.style.visibility = "hidden";
  backTransactions.style.opacity = "0%";
  graphList.style.visibility = "hidden";
  graphList.style.opacity = "0%";
  backBudgetsTwo.style.visibility = "hidden";
  backBudgetsTwo.style.opacity = "0%";

  setTimeout(() => {
    sectionHeader.style.display = "none";
    graphsHeader.style.display = "none";
    graphs.style.display = "none";
    backTransactions.style.display = "none";
    backBudgetsTwo.style.display = "none";
    graphList.style.display = "none";
  }, 500);

  setTimeout(() => {
    income.style.display = "flex";
    setBudget.style.display = "grid";
    nextTransaction.style.display = "block";
    sectionHeader.style.display = "flex";
    budgetHeader.style.display = "flex";
  }, 1000);

  setTimeout(() => {
    setBudget.style.opacity = "100%";
    setBudget.style.visibility = "visible";
    nextTransaction.style.opacity = "100%";
    nextTransaction.style.visibility = "visible";
    income.style.opacity = "100%";
    income.style.visibility = "visible";
    sectionHeader.style.opacity = "100%";
    budgetHeader.style.visibility = "visible";
  }, 2000);

  removeAllChildNodes(graphList);
});
