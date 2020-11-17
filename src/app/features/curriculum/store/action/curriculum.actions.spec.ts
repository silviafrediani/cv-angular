import * as fromCurriculum from './curriculum.actions';

describe('loadCurriculums', () => {
  it('should return an action', () => {
    expect(fromCurriculum.loadCurriculums().type).toBe('[Curriculum] Load Curriculums');
  });
});
