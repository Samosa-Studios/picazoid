module.exports = {
    name: "prefix",
    code: `$author[picazoid]
    $title[Prefix]
    $description[Prefix has been changed to \`$message\`!]
    $setServerVar[prefix;$message]
    $color[c201ff]
    $thumbnail[https://cdn.tixte.com/uploads/samosaman.likes.cash/kptkljp9h9a.png]
    $log[$userTag used $commandName]
    $onlyPerms[admin;Only server admins can use this.]
    $changeNickname[853202988512575539;\[$message\] picazoid]`
}