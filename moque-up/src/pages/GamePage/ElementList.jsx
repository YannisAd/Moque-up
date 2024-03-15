import {
    Button,
    Typography,
    Avatar,
    Card,
    TextField,
    Select,
    MenuItem,
    Chip,
} from "@mui/material";

const InitialElems = [
    {
        id: "dr3",
        content: (
            <Card
                variant="outlined"
                sx={{
                    width: 200,
                    height: 100,
                    resize: "both",
                }}
            ></Card>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr4",
        content: (
            <Card
                variant="outlined"
                sx={{
                    width: 200,
                    height: 100,
                    resize: "both",
                    backgroundColor: "#e0e0e0",
                }}
            ></Card>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr5",
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
    },
    {
        id: "dr6",
        content: <Typography variant="h3">Titre</Typography>,
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr7",
        content: <Typography variant="h4">Sous-titre</Typography>,
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr8",
        content: (
            <Typography
                variant="body1"
                sx={{
                    width: 200,
                    resize: "horizontal",
                    overflow: "auto",
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
    },
    {
        id: "dr12",
        content: (
            <div
                style={{
                    width: 200,
                    aspectRatio: 1.5,
                    resize: "horizontal",
                    overflow: "hidden",
                }}
            >
                <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://cdn.vox-cdn.com/thumbor/4enUu1Jgz_MBSOOuc3I7vNlca_k=/0x0:1080x1080/1200x800/filters:focal(454x454:626x626)/cdn.vox-cdn.com/uploads/chorus_image/image/50423583/13745048_316106668724048_1180140140_n.0.jpg"
                />
            </div>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr1",
        content: (
            <Button
                variant="contained"
                onClick={() => {}}
                sx={{
                    backgroundColor: "black",
                    "&:hover": {
                        backgroundColor: "black",
                    },
                }}
            >
                Lorem ipsum
            </Button>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr2",
        content: (
            <Button
                variant="outlined"
                onClick={() => {}}
                sx={{
                    color: "black",
                    borderColor: "black",
                    "&:hover": {
                        borderColor: "black",
                        background: "none",
                    },
                }}
            >
                Lorem ipsum
            </Button>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr9",
        content: (
            <TextField
                label="Lorem ipsum"
                variant="outlined"
                sx={{ width: 200 }}
            />
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr10",
        content: (
            <Select label="Lorem Select" value={10} sx={{ width: 200 }}>
                <MenuItem value={10}>Lorem Select1</MenuItem>
                <MenuItem value={20}>Lorem Select2</MenuItem>
            </Select>
        ),
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
    {
        id: "dr11",
        content: <Chip label="Lorem chip" />,
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
];
export default InitialElems;
