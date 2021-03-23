module.exports = function () {

    //type a value in input box
    this.type = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                   element.clear();//clear the values
                    if (typeof value !== 'undefined') {
                        element.sendKeys(value);
                    }
                    return this;
                });
            });
        }
    };
    this.fileUpload = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                  // element.clear();//clear the values
                    if (typeof value !== 'undefined') {
                        element.sendKeys(value);
                    }
                    return this;
                });
            });
        }
    };


    //type a value in input box and press enter key
    this.typeAndEnter = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.clear();
                    if (typeof value !== 'undefined') {
                        element.sendKeys(value + '\13');
                    }
                    return this;
                });
            });
        }
    };

    //verify a value in input box
    this.verifyValue = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') {
                        actualValue=element.getAttribute('value').toEqual(value);//get the input values 
                    }
                    return actualValue;
                });
            });
        }
    };
};