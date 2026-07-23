const {Op} = require('sequelize');
const {Rooms, Branches} = require('../models');
const validateRooms = require('../validations/rooms.Validation');


exports.createRooms = async (req, res) => {
    const { error } = validateRooms(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const rooms = await Rooms.create(req.body);
        res.status(201).send(rooms);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getRooms = async (req, res) => {
    try {
        const rooms = await Rooms.findAll();

        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getRoomsById = async (req, res) => {
    try {
        const rooms = await Rooms.findByPk(req.params.id,{
            include: [
                {model: Branches, as: 'Branches'}
            ]
        });

        if (!rooms) return res.status(404).send('Rooms not found');
        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateRooms = async (req, res) => {
    const { error } = validateRooms(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const rooms = await Rooms.findByPk(req.params.id);
        if (!rooms) return res.status(404).send('Rooms not found');
        await rooms.update(req.body);

        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deleteRooms = async (req, res) => {
    try {
        const rooms = await Rooms.findByPk(req.params.id);
        if (!rooms) return res.status(404).send('Rooms not found');

        const roomsData = rooms.toJSON();

        await rooms.destroy();
        res.status(200).send(roomsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchRooms = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const rooms = await Rooms.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }, 
                    { capacity: { [Op.iLike]: `%${query}%` }}
                ],
            },
        });
        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).send(error.message);
    }
}