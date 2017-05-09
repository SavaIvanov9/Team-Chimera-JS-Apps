const variables = {
    $mycanvas: $('#gameCanvas')[0],
    ctx: $('#gameCanvas')[0].getContext('2d'),
    defaultSize: 10,
    $width: $("#gameCanvas").width(),
    $height: $("#gameCanvas").height(),
    score: 0,
    snake: undefined,
    food: undefined,
    direction: undefined
}

export { variables };