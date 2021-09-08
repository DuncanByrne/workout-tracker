const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  day:{
    type: Date,
    default: Date.now
  },
  excercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true
      },
      name:{
        type: String,
        required: true
      },

      duration:{
        type: Number,
        required: true
      },
      distance:{
        type: Number
      },
      weight:{
        type: Number
      },
      reps: {
        type: Number
      },
      sets:{
        type: Number
      }
    },
  ]

},{ toJSON: { virtuals: true} });

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.excercises.reduce((total, excercise) =>{
    return total + excercise.duration
  }, 0);
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;