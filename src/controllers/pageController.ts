import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Todos os Produtos",
      background: "banner.jpg",
    },
  });
};

export const vestidos = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Vestidos",
      background: "roupas.jpg",
    },
  });
};

export const sapatos = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Sapatos",
      background: "sapatos.jpg",
    },
  });
};

export const joias = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Joias",
      background: "joias.jpg",
    },
  });
};
