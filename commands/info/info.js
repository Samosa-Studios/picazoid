module.exports = {
    name: "info",
    code: `$author[picazoid]
    $title[Bot Information]
    $description[Hello! I'm picazoid. See my commands with \`help\`
    
    ▪︎Name: \`picazoid\`
    ▪︎ID: \`$clientID\`
    ▪︎Birthday: \`$creationDate[$clientID]\`
    ▪︎Owner: \`SamosaMan73#4266\`
    ▪︎Prefix: \`$getServerVar[prefix]\`
    ▪︎Total Commands: \`$commandsCount\`
    ▪︎Latency: \`$botPing ms\`
    ▪︎Uptime: \`$uptime\`
    ▪︎Servers: \`$serverCount\`
    ▪︎Users: \`$allMembersCount\`
    ▪︎RAM Usage: \`$ram MB\`
    ▪︎Memory Usage: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`
    
    **__CPU Info__**
    ▪︎CPU Usage: \`$cpu%\`
    ▪︎CPU Model: \`$djsEval[require ('os').cpus()[0].model;yes]\`
    ▪︎CPU Platform: \`$djsEval[require ('os').platform();yes]\`
    
    **__Package Info__**
    ▪︎Aoi.js: \`$packageVersion\`
    ▪︎Node.js: \`$nodeVersion\`]
    $color[c201ff]
    $thumbnail[https://cdn.tixte.com/uploads/samosaman.likes.cash/kptkljp9h9a.png]
    $log[$userTag used $commandName]`
}