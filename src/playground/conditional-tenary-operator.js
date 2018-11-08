const app = {
    title: 'Indecision App',
    subtitle: 'This is a very cool app!',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h3>{app.subtitle}</h3>} {/* if subtitle is true then show <h3> */}
        {(app.options && app.options.length > 0) ? <p>Here are your options:</p> : <p>No options</p>}
    </div>
);

function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00"); //if isMember is set or true then return $2.00 or else $10.00
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(1));
  // expected output: "$2.00"