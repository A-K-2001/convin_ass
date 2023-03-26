import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Buket } from '../components/Buket';
import { URL } from '../core-utils/constt';
import { Navebar } from '../components/Navebar';
export const Home = () => {
    const [data, setData] = useState({});
    const intitalizeData = async () => {
        let entertainment = axios.get(`${URL}entertainment`);
        let education = axios.get(`${URL}education`);
        let motivation = axios.get(`${URL}motivation`);

        await Promise.all([entertainment, education, motivation])
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        intitalizeData();
    }, []);

    return (
        <div>
        <Navebar/>
            <Buket
                intitalizeData={intitalizeData}
                data={data[0]?.data}
                BucketName={"Entertainment"}></Buket>
            <Buket
                intitalizeData={intitalizeData}
                data={data[1]?.data}
                BucketName={"Education"}></Buket>
            <Buket
                intitalizeData={intitalizeData}
                data={data[2]?.data}
                BucketName={"Motivation"}></Buket>
        </div>
    )
}
