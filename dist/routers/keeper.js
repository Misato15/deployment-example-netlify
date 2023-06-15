"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
router.get("/", async (_, res) => {
    try {
        const response = await prisma.keeper.findMany();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.keeper.findUnique({ where: { id } });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.post("/", async (req, res) => {
    try {
        const body = req.body;
        const response = await prisma.keeper.create({ data: body });
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await prisma.keeper.update({
            where: { id },
            data: body,
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.keeper.delete({
            where: { id },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=keeper.js.map