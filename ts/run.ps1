Get-ChildItem ./src/ -Directory | ForEach-Object {
    & npm run node -- ./.build/$($_.Name)/client.js
}
