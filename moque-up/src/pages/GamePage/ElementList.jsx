import { Button, Box, Avatar, Card } from "@mui/material";

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
        id: "dr2",
        content: (
            <Button variant="outlined" onClick={() => {}}>
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
                    height: 200,
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
];
export default InitialElems;
