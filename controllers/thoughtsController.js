const { thoughts, user } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thought = await thoughts.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thoughts = await thoughts.findOne({ _id: req.params.courseId })
        .select('-__v');

      if (!thoughts) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Thought
  async createThought(req, res) {
    try {
      const thoughts = await thoughts.create(req.body);
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a Thought
  async deleteThought(req, res) {
    try {
      const thoughts = await thoughts.findOneAndDelete({ _id: req.params.courseId });

      if (!thoughts) {
        res.status(404).json({ message: 'No course with that ID' });
      }

      await user.deleteMany({ _id: { $in: course.users } });
      res.json({ message: 'Thoughts and Users deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a Thought
  async updateThought(req, res) {
    try {
      const thoughts = await thoughts.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thoughts) {
        res.status(404).json({ message: 'No course with this id!' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createReaction(req, res) {
    try {
      const thoughts = await thoughts.create(req.body);
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
      const thought = await thoughts.findByIdAndRemove(req.params.reactionId);
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
