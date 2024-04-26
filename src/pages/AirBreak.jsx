import React from 'react'

export default function AirBreak() {
    return (
        <div
            className="container My_mx-sm-0"
            style={{
                margin: '10rem 8rem'
            }}
        >
            <h2 className="text-center mb-4">Air Brake Endorsement "Z" (12 Hours):</h2>
            <div className="row">
                <div className="col-md-6">
                    <p className="lead">Led by a certified Ontario Safety League instructor, this comprehensive seminar delves into the intricacies of air brake systems used in tractor-trailer combinations. Students will learn how to conduct an inspection of an air brake system, identifying defects, problems, and abnormalities.</p>
                    <p>They will learn to conduct functional tests of the airbrake system to be able to indicate whether a vehicle is in compliance with safety regulations or if defective conditions are present in the system. The Air Brake Adjustment module will give students knowledge of how the air brakes on a vehicle can be adjusted to operate within the rules. The Air Brake Manual is supplied by us.</p>
                    <p className="mb-0 text-danger ">
                        *This program does not require approval under the Ontario Career Colleges Act, 2005
                    </p>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">You'll gain a thorough understanding of:</li>
                            <li className="list-group-item">
                                <ul>
                                    <li>
                                        <strong>Theory and Operation:</strong> {" "}
                                        Master the principles behind air brake systems, including components like air compressors, reservoirs, valves, and chambers. Learn how these components work together to create the braking force required for a heavy commercial vehicle.
                                    </li>
                                    <li>
                                        <strong>Inspection & troubleshooting:</strong> {" "}
                                        Master the pre-trip inspection process for air brake systems. This includes identifying key components, recognizing signs of wear and tear, and conducting functional tests to ensure proper operation. The seminar will equip you with the skills to troubleshoot common air brake problems, such as low air pressure, uneven braking, and leaks.
                                    </li>
                                    <li>
                                        <strong>Regulations and compliance:</strong> {" "}
                                        Stay up-to-date on relevant regulations governing air brakes as outlined by the Canadian National Safety Code (NSC) Standards for Commercial Vehicles. Learn the importance of maintaining your vehicle's air brake system in compliance with these safety standards to ensure the safe operation of your commercial vehicle.
                                    </li>
                                    <li>
                                        <strong>Adjustment techniques:</strong> {" "} (This module may be included depending on the specific seminar) Gain practical skills in adjusting air brake components to optimize performance and ensure safe operation. This may involve adjusting slack adjusters, stroke valves, and parking brakes.
                                        <br />
                                    </li>
                                </ul>
                                This seminar fulfills the Air Brake Endorsement/Adjustment training requirement and empowers you to confidently handle air brake systems, a critical component of safe and responsible commercial vehicle operation.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
