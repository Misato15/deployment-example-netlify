"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
router.get("/", async (_, res) => {
    try {
        const response = await prisma.animal.findMany();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await prisma.animal.findUnique({ where: { id } });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.post("/", async (req, res) => {
    try {
        const { keeper_id, gender_id, ...rest } = req.body;
        const response = await prisma.animal.create({
            data: { ...rest, keeper: { connect: { id: keeper_id } } },
        });
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { keeper_id, gender_id, ...rest } = req.body;
        const response = await prisma.animal.update({
            where: { id },
            data: { ...rest, keeper: { connect: { id: keeper_id } } },
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
        const response = await prisma.animal.delete({
            where: { id },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=animal.js.map