var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  technology: {type: String, required: true},
  comparison: {type: String, required: true},
  story:      {type: String, required: true}
})

var Story = mongoose.model('Story', storySchema);

module.exports = mongoose.model('Story', storySchema)
