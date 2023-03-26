import React, { useState } from 'react'
import { Button, ButtonContainer, CustomCard, Modal, ModelContent } from './Card.styled'
import { URL } from '../core-utils/constt';

import { MdDriveFileMove } from 'react-icons/md'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
import { MenuItem, Select, Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Form, Input } from './bucket.styled';
export const Card = ({
    checkArray,
    setcheckArray,
    intitalizeData,
    category,
    id,
    name,
    link
}) => {
    const [moveCardIsoprn, setMoveCardIsoprn] = useState(false);
    const [isIram, setisIram] = useState(false);
    const [isUpdateOpen, setisUpdateOpen] = useState(false)
    const [NewName, setNewName] = useState(name);
    const [cardLink, setCardLink] = useState(link);
    const [newCat, setnewCat] = useState(category);
    const togglePopup = () => {
        setMoveCardIsoprn(!moveCardIsoprn);
    }
    const toggleUpdate = () => {
        setisUpdateOpen(!isUpdateOpen);
    }
    const handleUpdate = async(e) => {
        toggleUpdate();
        e.preventDefault();
        await axios.put(`${URL}${newCat}/${id}`,
            {
                id: id,
                name: NewName,
                link: cardLink,
                category: newCat,
            }
        ).then((res) => {
            intitalizeData();
        }).catch((err) => {
            console.log("unable to hit post req: ", err)
        });

    }
    const openifram = async (e) => {
        setisIram(!isIram);
        e.preventDefault();
        if (isIram) {

            await axios.post(`${URL}history`,
                {
                    id: new Date().valueOf(),
                    name: name,
                    link: link,
                    category: category,
                    lastSeenAt: new Date().toISOString()
                }
            ).then((res) => {
            }).catch((err) => {
                console.log("unable to hit post req: ", err)
            });
        }
    }
    const setArray = (e) => {
        console.log(e.target.checked);
        if (e.target.checked === true) {
            let newarray = checkArray;
            newarray.push(id);
            setcheckArray(newarray);
        } else {
            let newarray = [];
            checkArray.map((data) => {
                if (data !== id) newarray.push(data);
            })
            setcheckArray(newarray);
        }
    }
    const handeleDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`${URL}${category}/${id}`
        ).then((res) => {
            intitalizeData();
            console.log(res)
        }).catch((err) => {
            console.log("unable to hit post req: ", err)
        });
    };
    const handleMove = async (e) => {
        console.log("move");
        togglePopup();
        e.preventDefault();
        await axios.post(`${URL}${newCat}`,
            {
                id: new Date().valueOf(),
                name: name,
                link: link,
                category: newCat
            }
        ).then((res) => {
            // intitalizeData();
            // console.log(res)
        }).catch((err) => {
            console.log("unable to hit post req: ", err)
        });

        await axios.delete(`${URL}${category}/${id}`
        ).then((res) => {
            intitalizeData();
            console.log(res)
        }).catch((err) => {
            console.log("unable to hit post req: ", err)
        });


    }
    return (

        <CustomCard>
            {isUpdateOpen ?
                <Modal>
                    <ModelContent>
                        <Form>
                            <Input placeholder="Name"
                                onChange={(e) => setNewName(e.target.value)} />
                            <Input placeholder="Link"
                                onChange={(e) => setCardLink(e.target.value)} />
                            <Button onClick={handleUpdate} >Submit</Button>
                            <Button onClick={toggleUpdate} >Close</Button>
                        </Form>
                    </ModelContent>
                </Modal>
                : null}
            {isIram ?
                <Modal>
                    <ModelContent>
                        <iframe src={link} title={name} style={{ height: "15rem", width: "30rem" }} ></iframe>
                        <Button onClick={openifram} >CLOSE</Button>
                    </ModelContent>
                </Modal>
                : null}
            {moveCardIsoprn ?
                <Modal>
                    <ModelContent>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={newCat}
                            label="Age"
                            sx={{ width: 200, border: " 1px solid black" }}
                            onChange={(e) => {
                                setnewCat(e.target.value);
                            }}
                        >
                            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
                            <MenuItem value={"education"}>Education</MenuItem>
                            <MenuItem value={"motivation"}>Motivation</MenuItem>
                        </Select>
                        <Button style={{ display: "inline", margin: "1rem" }} onClick={handleMove} >Submit</Button>
                        <Button style={{ display: "inline", margin: "1rem" }} onClick={togglePopup} >Close</Button>
                    </ModelContent>
                </Modal>
                : null}

            <p>{name}</p>
            <ButtonContainer>
                <Button onClick={openifram}>
                    <PlayArrowIcon />
                </Button>

                <Button onClick={togglePopup} >
                    <DriveFileMoveIcon />
                </Button>
                <Button>
                    <EditIcon onClick={toggleUpdate} />
                </Button>
                <Button onClick={handeleDelete}>
                    <DeleteIcon />
                </Button>
                <Button>

                    <Checkbox
                        sx={{ margin: 0, padding: 0 }}
                        //   checked={}
                        onChange={(e) => {
                            setArray(e);
                        }}
                    />
                </Button>
            </ButtonContainer>
        </CustomCard>
    )
}

