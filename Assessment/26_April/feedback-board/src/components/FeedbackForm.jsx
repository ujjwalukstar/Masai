function FeedbackForm() {
  return (
    <div>
      <h2>FeedbackForm</h2>

      <form>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div>
          Comment:
          <textarea rows={3} cols={17} required></textarea>
        </div>

        <button>Submit</button>
      </form>

      <script src="./FeedbackForm.js"></script>
    </div>
  );
}
export default FeedbackForm;
