
/*
In here you can create functions for setting/getting values in between test suites because 
when persist_globals are set to false, values will be deleted so it must be used when you need
dynamic value/parameter in between several suites. Also you can use arrays, hashmaps if needed here.
MORE ABOUT persist_globals in README.
**/

module.exports = {
    searchSetter: function (value) {
        this.searchValue = value
    },
    searchGetter: function () {
        return this.searchValue
    },
}
