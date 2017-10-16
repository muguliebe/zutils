module.exports = {
  createReservation: (passenger, flight) => {
    return {
      passengerInfo: passenger,
      flightInfo: flight
    }
  },

  test: d => d * 2
}
