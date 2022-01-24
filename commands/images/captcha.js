module.exports = {
    name: "captcha",
    code: `$title[Captcha]
    $author[picazoid]
    $color[c201ff]
    $thumbnail[https://cdn.tixte.com/uploads/samosaman.likes.cash/kptkljp9h9a.png]
    $image[https://api.cool-img-api.ml/captcha?text=$replaceText[$message; ;+]]
    $log[$userTag used $commandName]`
}