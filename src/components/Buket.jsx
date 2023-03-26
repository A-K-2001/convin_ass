import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal, ModelContent, Form, Input, Box, Heading, PBox } from './bucket.styled';
import { Card } from './Card';
import { URL } from '../core-utils/constt';
import { Grid } from "@mui/material";
export const Buket = ({
    intitalizeData,
    data,
    BucketName,
}) => {
    const [name, setname] = useState("");
    const [checkArray, setcheckArray] = useState([]);
    const [cardLink, setCardLink] = useState("");
    const [addCardIsoprn, setAddCardIsoprn] = useState(false);
    const togglePopup = () => {
        setAddCardIsoprn(!addCardIsoprn);
    }
    console.log(checkArray);
    const handleDelete = async(e)=>{
        e.preventDefault();
            for(let i=0;i<checkArray?.length;i++){
                await axios.delete(`${URL}${BucketName}/${checkArray[i]}`
                ).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log("unable to hit post req: ", err)
                });
            }
            intitalizeData();
        
       
    }
    const handelSubmit = async (e) => {
        togglePopup();
        e.preventDefault();
        await axios.post(`${URL}${BucketName}`,
            {
                id: new Date().valueOf(),
                name: name,
                link: cardLink,
                category: BucketName
            }
        ).then((res) => {
            intitalizeData();
            // console.log(res)
        }).catch((err) => {
            console.log("unable to hit post req: ", err)
        });


    };
    return (
        <PBox>
            <Heading>{BucketName}</Heading>
            <Button onClick={togglePopup}>Add card</Button>
            <Button onClick={handleDelete}>Delete All</Button>
        <Box>
            {addCardIsoprn ?
                <Modal>
                    <ModelContent>
                        <Form>
                            <Input placeholder="Name"
                                onChange={(e) => setname(e.target.value)} />
                            <Input placeholder="Link"
                                onChange={(e) => setCardLink(e.target.value)} />
                            <Button onClick={handelSubmit} >Submit</Button>
                            <Button onClick={togglePopup} >Close</Button>
                        </Form>
                    </ModelContent>
                </Modal>
                : null}
            <Grid container spacing={4}>
                {data?.map((data) => {
                    return (
                        <Grid item key={data?.id}>
                            <Card
                            checkArray={checkArray}
                            setcheckArray={setcheckArray}
                            intitalizeData={intitalizeData}
                            category={data?.category}
                            id={data?.id}
                            link={data?.link}
                            name={data?.name} />
                        </Grid>
                    )
                })}
            </Grid>
            </Box>
        </PBox>
    )
}
