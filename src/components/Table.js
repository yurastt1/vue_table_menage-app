app.component('tablet', {
  template: `
    <div>
    <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    
  </table>
  ${array[0].name}
    </div>
  `,
  data() {
    return {
      array: [
        { 
          name: "yurii",
          surname: "strakhov",
          email: "yrua@gmail.com"
        }
      ]
    }
  }
})
