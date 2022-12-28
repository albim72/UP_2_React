const Button = () => {
    const handleEvent = (event:any) => {
        switch (event.type){
            case 'click':
                console.log('przycisk kliknięto lewym klawiszem myszy')
                break
            case 'dblclick':
                console.log('przycisk kliknięto podwójnie!')
                break
            default:
                console.log('brak akcji',event.type)
        }
    }
    
    return(
        <button onClick={handleEvent} onDoubleClick={handleEvent}>
            Kliknij na przycisku!
        </button>
    )
}

export default Button
