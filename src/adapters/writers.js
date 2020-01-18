import mongooseWriter from "./writer.mongoose.js";

const writers = {
  mongoose: mongooseWriter
};

export const render = (schemaName, writer) => content => {
  const renderer = writers[writer];
  if (!renderer) throw new Error(`Invalid Render Adapter Specified: ${writer}`);

  return renderer.render(schemaName, content);
};