import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

export const expect = chai.expect;
export const assert = chai.assert;
export default chai;
