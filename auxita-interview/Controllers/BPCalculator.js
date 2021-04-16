exports.bpcalculator = (req, res) =>{
    //res.send('Hello')
    res.json({
        bloodPresure: [
            {SysBP: 120, DiaBP: 90, atDate: '2018/10/31'},
            {SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}
        ]
    })
}
