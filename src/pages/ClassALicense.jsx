import Aos from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'

export default function ClassALicense() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <section className='container' style={{ marginTop: '10em' }}>
                <div className="sec-title    wow " data-aos="fade-up" data-wow-duration='1500ms' data-wow-delay='000ms mt-5'>
                    <div className="text-center align-items-center justify-content-center align-content-center  ">

                        <h3 className="sec-title__title">
                            <i className="icon-left-arrow sec-title__img"></i>
                            Full Class A licence
                            <i className="icon-right-arrow sec-title__img"></i>
                        </h3>
                        <p style={{ fontSize: "17px", paddingTop: '20px' }}> The full Class A truck licence is the only licence
                            that covers full air
                            brake systems on both
                            tractors and trailers </p>
                    </div>
                    <div className="ms-5">

                        <ol type="1" className="">
                            <li style={{ fontSize: "18px" }} className="m-3">
                                A <a href="" style={{ color: '#5155be' }}><b> mandatory entry-level training course </b></a> must
                                be successfully completed before
                                attempting the Class A road test.
                            </li>
                            <li style={{ fontSize: "18px" }} className="m-3">

                                As of July 1, 2022, <a href="" style={{ color: '#5155be' }}><b>the type of transmission in the
                                    vehicle you use for your road test </b></a> will
                                determine what types of Class A trucks you can drive in Ontario.
                            </li>
                        </ol>


                    </div>

                    <p className='text-center' style={{ color: '#00B2D2' }}>What you can drive</p>
                    <div className="ms-5">
                        <p style={{ fontSize: "18px" }}>A full Class AZ (air brake endorsement) truck licence lets you drive:
                        </p>
                        <ol type="1">
                            <li style={{ fontSize: "17px" }}> any truck/tractor trailer combination </li>
                            <li style={{ fontSize: "17px" }}>a combination of motor vehicle and towed vehicles where the towed
                                vehicles exceed a</li>
                            <li style={{ fontSize: "17px" }}>total gross weight of 4,600 kg (10,000 lbs) and has air brakes</li>
                            <li style={{ fontSize: "17px" }}>a vehicle pulling double trailers a car or light truck covered by a
                                Class G licence</li>
                            <li style={{ fontSize: "17px" }}>heavy trucks covered by the Class D truck licence</li>
                            <li style={{ fontSize: "17px" }}>any vehicle covered under a restricted Class A truck licence</li>
                        </ol>
                        <p style={{ fontSize: "20px" }}>A Class A licence does not allow you to drive a bus carrying passengers,
                            a motorcycle or a
                            moped.
                        </p>


                        <p style={{ fontSize: "18px" }}>For your road test, your vehicle must have:
                        </p>
                        <ol type="1">

                            <li style={{ fontSize: "17px" }}>
                                a trailer with a Manufacturer’s Gross Vehicle Weight Rating of at least 4,600 kg</li>
                            <li style={{ fontSize: "17px" }}>a full air brake system on both the truck/tractor and trailer</li>
                            <li style={{ fontSize: "17px" }}>manual transmission that consists of at least eight forward gears
                                with a high-low range
                            </li>
                        </ol>
                    </div>



                </div>
            </section>
            <section className='container' style={{ marginTop: '100px' }}>
                <div className="sec-title    wow fadeInUp" data-aos="fade-up" data-wow-duration='1500ms' data-wow-delay='000ms mt-5'>
                    <div className="text-center align-items-center justify-content-center align-content-center  ">

                        <h3 className="sec-title__title">
                            <i className="icon-left-arrow sec-title__img"></i>
                            Class A manual transmission restriction
                            <i className="icon-right-arrow sec-title__img"></i>
                        </h3>
                        <p style={{ fontSize: "20px", paddingTop: '20px' }}> As of July 1, 2022, you must complete your Class A
                            or Class A restricted (AR) road test in a
                            vehicle with a manual transmission that consists of at least eight forward gears with a high-low
                            range or you will get a restriction on your licence. If you have a restriction, you cannot
                            operate
                            Class A/ARvehicles with a manual transmission in Ontario. You can only operate automatic,
                            semi-automatic or automated-manual transmission Class A/AR vehicles. </p>

                    </div>

                    <div className="ms-5">
                        <p style={{ fontSize: "18px" }}>A motor vehicle is considered to have a manual transmission if it has:
                        </p>
                        <ul type="1" className="">
                            <li style={{ fontSize: "18px" }} className="m-3">
                                a driver-operated clutch that is activated by a pedal or lever
                            </li>
                            <li style={{ fontSize: "18px" }} className="m-3">


                                a driver operated gear-shift mechanism (operated by hand or foot and does not use the
                                assistance of automation)
                            </li>
                            <p style={{ fontSize: "18px" }}>The restriction will be noted on your driver record and driver’s
                                licence. It will not apply when
                                operating lower-class vehicles such as Class G or D.
                            </p>
                            <p style={{ fontSize: "18px" }}>This restriction does not apply to anyone who completed their Class
                                A/AR road test before
                                July 1, 2022.
                            </p>
                        </ul>


                    </div>


                </div>
            </section>
            <section className='container' style={{ marginTop: '100px' }}>
                <div className="sec-title    wow " data-aos="fade-up" data-wow-duration='1500ms' data-wow-delay='000ms mt-5'>
                    <div className="text-center align-items-center justify-content-center align-content-center  ">

                        <h3 className="sec-title__title">
                            <i className="icon-left-arrow sec-title__img"></i>
                            Getting a Restricted Class A licence
                            <i className="icon-right-arrow sec-title__img"></i>
                        </h3>
                        <p style={{ fontSize: "17px", paddingTop: '20px' }}> You <b>do not have to complete mandatory entry-level
                            training </b> to get a Restricted Class A
                            (AR) licence. If you want to upgrade from an AR to a full Class A licence, you will have to
                            complete the training at that time and take a road test in a full Class A vehicle. </p>

                        <p style={{ fontSize: "17px", paddingTop: '20px' }}> As of July 1, 2022, the type of transmission in the
                            vehicle you use for your road test will
                            determine what types of Class AR vehicles you can drive in Ontario.
                        </p>

                    </div>




                </div>
            </section>
        </>
    )
}
