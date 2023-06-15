import { Router } from "express";
const router = Router();

import { PrismaClient } from "@prisma/client";
import { Keeper } from "../dto/keeper";
const prisma = new PrismaClient();

router.get("/", async (_, res) => {
  try {
    const response = await prisma.keeper.findMany();
    res.status(200).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await prisma.keeper.findUnique({ where: { id } });
    res.status(200).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body as Keeper;
    const response = await prisma.keeper.create({ data: body });
    res.status(201).json(response);
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body as Partial<Keeper>;
    const response = await prisma.keeper.update({
      where: { id },
      data: body,
    });
    res.status(200).json(response);
  } catch (error: unknown) {
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
  } catch (error: unknown) {
    res.status(500).json({ error });
  }
});

export default router;
