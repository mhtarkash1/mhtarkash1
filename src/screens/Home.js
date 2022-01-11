import react from "react";
import styles from "./Styles";
import "./css/home.css"
import Mybtn from "../component/mybtn";
import Mytime from "../component/Mytime";
import MyInput from "../component/MyInput";
const internalstyles = {
    main: {
        backgroundColor: "#f00",
        color: "#fff",
        padding: 20,
        height: 100

    }
}

class Home extends react.Component {
    //// inline
    // render() {
    //     return (
    //         <div>
    //             <div style={{ backgroundColor: "#f00", color: "#fff", padding: 20, height: 100 }}>home11 : first app</div>
    //             <div>home2 : first app</div>
    //         </div>
    //     )
    // }


    // //// internal
    // render() {
    //     return (
    //         <div>
    //             <div style={internalstyles.main}>home11 : first app</div>
    //             <div>home2 : first app</div>
    //         </div>
    //     )
    // }


    //// external
    render() {
        return (
            <div style={styles.body} >
                <div style={styles.header}>
                    <div style={styles.right}></div>
                    <div style={styles.center}></div>
                    <div style={styles.left}>
                        <Mytime></Mytime>

                    </div>
                </div>
                <div style={styles.main}>
                    <div style={styles.form}>
                        <MyInput regex={/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/} errortext="فرمت ایمیل اشتباه است" />
                        <MyInput regex={/^[0-9]*$/} errortext="فرمت باید عددی باشد."></MyInput>
                        <MyInput regex={/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/} errortext="شماره موبایل"></MyInput>
             
                        <Mybtn tet="ورود"></Mybtn>
                        <Mybtn txt="خروج" backcolor="#E57373" ></Mybtn>
                    </div>
                </div>
                <div style={styles.footer} >footer</div>
            </div>
        )
    }

    //// loade from css
    // render() {
    //     return (
    //         <div className="body" >
    //             <div className="header">
    //                 <div style={styles.right}></div>
    //                 <div style={styles.center}></div>
    //                 <div style={styles.left}></div>
    //             </div>
    //             <div style={styles.main}>
    //                 <div style={styles.form}>
    //                 </div>
    //             </div>
    //             <div style={styles.footer} >footer</div>
    //         </div>
    //     )
    // }


}
export default Home

