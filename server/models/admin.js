var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var adminSchema = new mongoose.Schema({

name: { type: String, required: true},
email: { type: String, required: true},
password: {
  type:String,
  required: true,
  minlength: 8,
  maxlength: 32,
  validate: {
    validator: function(value) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
    },
    message: "Password failed validation, you must have at least 1 number, uppercase and special characte"
  }
},
});

mongoose.model('Admin', adminSchema);
