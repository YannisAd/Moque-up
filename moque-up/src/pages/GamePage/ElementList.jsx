import { Button, Typography, Avatar, Card } from "@mui/material";

const InitialElems = [
    {
        id: "dr1",
        content: (
            <Button variant="contained" onClick={() => {}}>
                Lorem ipsum
            </Button>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 1,
    },
    {
        id: "dr3",
        content: (
            <Card
                variant="outlined"
                sx={{
                    width: 200,
                    height: 900,
                    resize: "both",
                }}
            ></Card>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 1,
    },
    {
        id: "dr4",
        content: (
            <Avatar
                sx={{
                    width: 64,
                    height: 64,
                }}
                alt="Harambe"
                src="https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/03/06/15/Mort-du-gorille-Harambe-la-mere-de-l-enfant-pas-poursuivie.jpg?VersionId=fz.0synzacbZsh3N8oZjhKkRwOp900dK"
            />
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 1,
    },
    {
        id: "dr6",
        content: <Typography variant="h3">Titre</Typography>,
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 1,
    },
    {
        id: "dr7",
        content: <Typography variant="h4">Sous-titre</Typography>,
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 1,
    },
    {
        id: "dr8",
        content: (
            <Typography
                variant="body1"
                sx={{
                    width: 100,
                }}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis earum, velit eveniet eum hic iusto id quo cum at
            </Typography>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
        zIndex: 1,
    },
];
export default InitialElems;
