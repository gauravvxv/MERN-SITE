const express = require("express");
const Data = require("../models/dataModel");
const app = express();

app.use(express.json());


const getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: "Data is not responding", error: error })
    }
}

const getDataById = async(req,res)=> {
    try {
        const {id}  = req.params;
      const idData =  await Data.findById(id);

      if(!idData) {
        res.status(404).json({message: "Data  not found"})
      }

        res.status(200).json(idData)
    } catch (error) {
        res.status(500).json({ message: "Data is not responding", error: error })
        
    }
}

const postData = async (req, res) => {
    try {
        const data = req.body;
        await Data.insertMany(data);
        res.status(200).json({ message: "Data is added successfully", data: data })

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error })
    }
}

const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        await Data.findByIdAndUpdate(id, update);

        res.status(200).json("Data is updated successfully")
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error })
    }
}

const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
    await Data.findByIdAndDelete(id);
    res.status(200).json({message: `This ${id} Data is deleted successfully`})
    
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error })
        
    }
}

module.exports = { getData, getDataById , postData, updateData , deleteData }