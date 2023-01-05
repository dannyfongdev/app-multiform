const Step3 = () => {
  const clickHandler = () => {};
  return (
    <div className="container max-w-lg mx-auto">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        <div className="container max-w-lg mx-autoflex flex flex-col space-y-4 mt-8">
          {/* box 1 */}
          <div className="flex justify-between items-center p-4 border border-purple-500 rounded">
            <div className="flex space-x-4 items-center">
              <div>
                <input id="online" name="online" type="checkbox" />
              </div>
              <div>
                <h2>Online service</h2> <p>Access to multiplayer games</p>
              </div>
            </div>
            <div>+$1/mo</div>
          </div>
          {/* box 2 */}
          <div className="flex justify-between items-center p-4 border border-purple-500 rounded">
            <div className="flex space-x-4 items-center">
              <div>
                <input id="online" name="online" type="checkbox" />
              </div>
              <div>
                <h2>Larger storage</h2> <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <div>+$2/mo</div>
          </div>
          {/* box 3 */}
          <div className="flex justify-between items-center p-4 border border-purple-500 rounded">
            <div className="flex space-x-4 items-center">
              <div>
                <input id="online" name="online" type="checkbox" />
              </div>
              <div>
                <h2>Customizable Profile</h2>{" "}
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <div>+$2/mo</div>
          </div>
        </div>
      </form>
      <div className="flex justify-between p-4">
        <button className="py-2" onClick={clickHandler}>
          Go Back
        </button>

        <button
          className="px-6 py-2 bg-blue-900 text-white rounded"
          onClick={clickHandler}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
