import Story from "../models/Story.js";


export const home_controller = async (req, res) => {
      console.log(Story.getAll());

      const stories = await Story.getAll();

      console.log(stories)
};