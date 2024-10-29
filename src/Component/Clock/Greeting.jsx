

const Greeting = () => {
    const time = new Date()

    //Code of greeting functionlity
    const timeHours = time.getHours()
    let greeting = ""
    const css = {}
    let image = ""

    if (timeHours >= 4 && timeHours < 12) {
        greeting = "Good Morning"
        css.color = "green",
            image = "https://img.freepik.com/premium-psd/sunrise-fluffy-cloud_53876-485371.jpg?w=996"

    } else if (timeHours >= 12 && timeHours < 16) {
        greeting = "Good Afternoon"
        css.color = "red",
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kZ_J9MvBiHuevAxinItZsyJTthIvWX3hAQ&s"

    } else if (timeHours >= 16 && timeHours < 20) {
        greeting = "Good Evening"
        css.color = "orange"
        image = "https://img.freepik.com/premium-psd/realistic-fluffy-white-cloud-illustration_53876-469656.jpg?w=740"
    } else {
        greeting = "Good Night"
        css.color = "grey"
        image = "https://img.freepik.com/free-vector/glossy-crescents-wich-stars-white-glossy-clouds-isolated-white-background-realistic-d-vector_145391-1335.jpg"
    }
    
    return (
        <>
            <div className="container text-center">
                <h2>Hello <span style={css}>{greeting}</span></h2>
                <img src={image} alt="image" height="50px" />
            </div>
        </>
    )
}

export default Greeting
