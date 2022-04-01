const Device = require('../models/device');
const Intervention = require('../models/intervention');
const Client = require('../models/client');
exports.addDevice = function (req, res) {
  var client = new Client();
  var device = new Device();
  client.Nom = req.body.Nom;
  client.Prenom = req.body.Prenom;
  client.cin_passport = req.body.cin_passport;
  client.num_tel1 = req.body.num_tel1;
  client.num_tel2 = req.body.num_tel2 || '';
  client.email = req.body.email || '';
  device.imei = req.body.imei;
  device.status = req.body.status;
  device.purchase_date = req.body.purchase_date;
  device.nb_return_sav = req.body.nb_return_sav;
  device.insured = req.body.insured;
  device.guarantee = req.body.guarantee;
  client.save(function (err) {
    if (err) {
     throw  err;
    }
    device.client = client._id;
    device.save(function (err2) {
      if (err2) {
        res.send(err2);
      }
      res.json({
        message: 'Device created!'
      });


    });
  });
}
exports.findDevice = function (req, res) {
  Device.find({
    imei: req.params.imei
  }, function (err, device) {
    if (err) {
      return res.send({
        msg: "Device not found"
      });
    }
    return res.json(device);
  });
}
exports.CreateFicheIntervention = function (req, res) {
  Device.findOne({
    imei: req.params.imei
  }, function (err, device) {
    if (err) {
      return res.send({
        msg: "Device not found"
      });
    }

    var intervention = new Intervention();
    intervention.device = device._id;
    intervention.accessoires = req.body.accessoires;
    intervention.type_panne = req.body.type_panne;
    intervention.terminal_pret = req.body.terminal_pret;
    intervention.description = req.body.description;
    intervention.workflow = req.body.workflow;
    intervention.save(function (err) {
      if (err) {
       throw  err;
      }
      Device.findByIdAndUpdate(device._id, {
        $inc: {
          "nb_return_sav": 1
        },
        $push: {
          "intervention": intervention._id
        }
      }, function (err, device) {
        if (err) {
          res.send(err);
        }
      });

      res.json({
        message: 'Intervention created!'
      });
    });
  })
}
exports.getInterventionsData = function (req, res) {
  Device.findOne({
    imei: req.params.imei
  }, function (err, device) {
    if (err) {
      return res.send({
        msg: "Device not found"
      });
    }
    return res.json(device);
  }).populate('client').populate('intervention');
}