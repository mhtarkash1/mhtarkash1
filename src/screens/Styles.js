const styles = {
    body: {
        backgroundColor: "#000",
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column'

    },
    main: {
        backgroundColor: "#f00",
        color: "#fff",
        flex: 1,
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',

    },
    footer: {
        backgroundColor: "#F0f",
        height: 40
    },
    header: {
        backgroundColor: "gray",
        height: 60,
        display: 'flex',
        flexDirection: 'cloumn', //'row-reverse',
        justifyContent: 'space-evenly', //'flex-end' , //' flex-stsrt', //'space-around',//'space-between',
        alignItems: 'center',
    },
    right: {
        backgroundColor: "#fff",
        height: 10,
        width : 100
    },
    center: {
        backgroundColor: "#0f0",
        height: 10, 
        width : 350
    },
    left: {
        backgroundColor: "#f0f",
        height: 40,
        width : 100
    },
    form: {
        backgroundColor: "#FFF",
        height: 400,
        width : 400,
        borderRadius: 10,
        boxShadow:"2px 2px 10px #000"
    }

}

export default styles