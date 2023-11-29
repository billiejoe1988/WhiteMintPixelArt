import Form from 'react-bootstrap/Form';

function SideForm() {
  return (
    <Form className='bg-transparent pt-2'>
      <Form.Group className="mb-3 px-3 text-white" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 px-3 text-white" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your query here"/>
      </Form.Group>
      <div className='p-4'>
          <button id="contactame" className="button" type="submit">Send</button>
      </div>
    </Form>
  );
}

export default SideForm; 