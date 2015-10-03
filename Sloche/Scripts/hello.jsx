var HelloWorld = React.createClass({
  render: function() {
  return (
    <p>
        Hello, <input type="text" placeholder="Your name should be spelled right!" />
        It is {this.props.date.toTimeString()}
    </p>
    );
  }
});

React.render(
  <HelloWorld date={new Date()} />,
  document.getElementById('example')
);

// setInterval(function() {
//     React.render(
//         <HelloWorld date={new Date()} />,
//         document.getElementById('example')
//     );
// }, 500);
