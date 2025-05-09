import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import BaseChip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Chip = styled(BaseChip)(({ theme }) => ({
  backgroundColor: theme.palette.button.fillAccent, // background color
  color: theme.palette.background.default, // text color
}));

function CollapsibleWorkDetails({ tasks = [], title, company, skills = [] }) {
  // Accepts tasks as a prop
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters // Removes internal margins
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:before": { display: "none" },
        m: 0,
        p: 0,
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{ color: theme.palette.text.textPrimary.light }}
          />
        }
        sx={{
          color: theme.palette.text.textPrimary.light,
          p: 0,
          m: 0,
          transition:
            "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
          "&:hover": {
            color: theme.palette.text.textSecondary.main,
          },
        }}
      >
        <Box>
          <Typography variant="h3" color="text.textPrimary.light">
            {company}
          </Typography>
          <Typography variant="h4" color="text.textPrimary.light">
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: 3,
              gap: 1, // both row and column gap
            }}
          >
            {skills.map((text, index) => (
              <Chip key={index} label={text} />
            ))}
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {tasks.map((text, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemIcon
                sx={{
                  minWidth: "unset",
                  marginRight: 2,
                  paddingTop: 0.4,
                }}
              >
                <HorizontalRuleIcon
                  sx={{
                    color: theme.palette.text.textPrimary.main,
                    fontSize: "0.5rem",
                    padding: 0,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: theme.palette.text.textPrimary.main }}
                lineHeight={1.6}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default CollapsibleWorkDetails;
