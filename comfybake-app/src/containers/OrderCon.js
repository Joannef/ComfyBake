import React, {useState} from "react";
import database from '../firebase';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import BorderWrapper from 'react-border-wrapper'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Signup.css";

const db = database.firestore();
const userCollection = db.collection("users");