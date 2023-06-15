import { Router } from "express";
const router = Router();

import { PrismaClient } from "@prisma/client";


import { Animal } from "../dto/animals";
const prisma = new PrismaClient();

router.get("/", async (_, res) => {
  try {
    const response = await prisma.animal.findMany();
    res.status(200).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await prisma.animal.findUnique({ where: { id } });
    res.status(200).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { keeper_id,gender_id, ...rest } = req.body as Animal;


    const response = await prisma.animal.create({
      data: { ...rest, keeper: { connect: { id: keeper_id } } },
   
    });
    res.status(201).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { keeper_id,gender_id, ...rest } = req.body as Partial<Animal>;
    const response = await prisma.animal.update({
      where: { id },
      data: { ...rest, keeper: { connect: { id: keeper_id } } },
    });
    res.status(200).json(response);
  } catch (error: unknown) {
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
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

export default router;
