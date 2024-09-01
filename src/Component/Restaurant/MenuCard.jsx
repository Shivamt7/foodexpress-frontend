import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

const demo = [
  {
    category: "Nuts & seeds",
    ingrediants: ["Cashews"],
  },
  {
    category: "Protein",
    ingrediants: ["Ground Beef", "Bacon strips"],
  },
  {
    category: "Bread",
    ingrediants: ["Hamburger Buns"],
  },
  {
    category: "Vegetable",
    ingrediants: ["Lettuce"],
  },
];

const MenuCard = () => {
    
    
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }



  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="burger image"
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p className="text-gray-400">Nice Food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingrediants.map((item) => (
                    <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
                {
                    true?"Add to Cart":"Out of Stock"
                }
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
