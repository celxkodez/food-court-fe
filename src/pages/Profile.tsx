import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons";
import Happy from "../assets/images/happyicon.png";
import Star from "../assets/images/star.png";
import Star2 from "../assets/images/star2.png";
import {gql, useQuery} from "@apollo/client";

const Profile = () => {

    const { loading, error, data } = useQuery(gql `
        query ExampleQuery {
          company {
            ceo
            cto
            name
          }
        }
    `);

    return (
        <>
            <div className="col-md-7 mx-2">
                <div className="card ps-5 py-5">
                    <div className="ps-5">
                        <div className={'row d-flex justify-content-start align-items-center'}>
                            <div  style={{
                                background: '#FEE7EA',
                                width: '62px',
                                height: '62px',

                            }} className="col-4 border border-success rounded-circle d-flex justify-content-center align-items-center me-3">
                                <p className={'text-center mt-3 text-success fw-semibold'}>CN</p>
                            </div>

                            <div className="col-8">
                                <h2 className={'d-inline'}>
                                    {!loading && data?.company?.name}
                                </h2>
                            </div>
                        </div>

                        <div className={'mt-5'}>
                            <div style={{
                                lineHeight: '4px'
                            }}>
                                <p className="ceo">CEO</p>
                                <p>{!loading && data?.company?.ceo}</p>
                            </div>

                            <div className={'mt-5'} style={{
                                lineHeight: '4px'
                            }}>
                                <p className="ceo">CTO</p>
                                <p>{!loading && data?.company?.cto}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Profile.layout = 'dashboard';
export default Profile;