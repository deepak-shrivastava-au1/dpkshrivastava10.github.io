'use strict';

var postPortfolioRoute = function(request, response) {

    var DB = request.app.locals.DB;

    var name = request.body.name;

    var portfolio = {
        name: name,
        // CMP: CMP
    }

    DB.collection("portfolio").insertOne(portfolio, function(error, result) {

        if(error) {
            console.log("Error adding scripp to portfolio collection");
        }

        var data = {
            portfolio: portfolio
        }

        response.render("virtualpage.hbs", data);
    })

}

exports.postPortfolioRoute = postPortfolioRoute;

