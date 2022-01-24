module.exports = {
    name: "weather",
    code: `$title[Weather]
    $author[picazoid]
    $color[c201ff]
    $thumbnail[https://cdn.tixte.com/uploads/samosaman.likes.cash/kptkljp9h9a.png]
    $image[https://api.cool-img-api.ml/weather-card?location=$replaceText[$message; ;+]&background=https://cdn.tixte.com/uploads/samosaman.likes.cash/kptpatqxj9a.jpg]
    $log[$userTag used $commandName]`
}