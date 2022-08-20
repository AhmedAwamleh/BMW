import React from "react";
import Main from "./main";

class CarType extends React.Component {
    render() {
        return (
            <>
                <Main title="BMW E30" imgUrl='https://www.motortrend.com/uploads/sites/11/2018/12/BMW_M3_E30_by_Vilner_Garage_1.jpg' discription="1991" />
                <Main title="BMW E36" imgUrl='https://www.tuningblog.eu/wp-content/uploads/2019/02/US-BMW-E36-M3-Forgestar-M14-Tuning-21-1-e1549010912769.jpg' discription="1995" />
                <Main title="BMW E34" imgUrl='https://i.pinimg.com/originals/1e/51/f2/1e51f2f89cbaa584a16f66a1cb1f8ff1.jpg' discription="1993" />
            </>

        )
    }
}

export default CarType;