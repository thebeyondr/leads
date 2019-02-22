function deleteLead (leadId) {
  $.ajax({
    url: `/leads/${leadId}/delete-json`,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify({ leadId }),
    type: 'POST',
    success: res => {
      console.log('Result: ', res)
      $('#' + leadId).remove()
    },
    error: err => console.log(err)
  })
}
