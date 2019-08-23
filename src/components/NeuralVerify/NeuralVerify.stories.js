import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import NeuralVerify from './index.js';

const Wrapper = styled.div`
  height: 30px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('Components', module)
  .addWithChapters(
    'NeuralVerify',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {NeuralVerify} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: Normal verified',
              sectionFn: () => (
                  <Wrapper>
                   <NeuralVerify
                    neuralData={
                      {
                        state: 1,
                        detail: {
                          verifiedDate: "2019-08-05 17:28:34",
                          verifiedReason: "recent_positive",
                          verifiedReasonDetail: "2019-08-05 17:28:34",
                        },
                      }
                    }
                    allowOverflow={true}
                    />
                  </Wrapper>
              )
            },
            {
              title: 'Example: Super verified',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: 1,
                        detail: {
                          verifiedDate: "2019-06-17 12:05:33",
                          verifiedReason: "super_verified",
                          verifiedReasonDetail: "2019-06-17 12:05:33"
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Corporate Number',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: 0,
                        detail: {
                          verifiedReason: "gate_keeper",
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Previously Verified',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: 0,
                        detail: {
                          verifiedDate: "2019-06-17 12:05:33",
                          verifiedReason: "previously_verified",
                          verifiedReasonDetail: "2019-06-17 12:05:33"
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Matching',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: 0,
                        detail: {
                          verifiedReason: "previously_prospected",
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Not Matching',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: -1,
                        detail: {
                          verifiedReason: "not_answered",
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Stale Phone / Email',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: -1,
                        detail: {
                          verifiedReason: "bounce_list",
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Fax Number',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: -1,
                        detail: {
                          verifiedReason: "fax_number",
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Verified Bad Email / Phone',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: -1,
                        detail: {
                          verifiedDate: "2019-06-17 12:05:33",
                          verifiedReason: "",
                          verifiedReasonDetail: "2019-06-17 12:05:33"
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Mobile Number',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: 1,
                        carrier: 'mobile',
                        detail: {
                          verifiedDate: "2019-06-17 12:05:33",
                          verifiedReason: "recent_positive",
                          verifiedReasonDetail: "2019-06-17 12:05:33"
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Verified Mobile Number',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: 1,
                        carrier: 'mobile',
                        detail: {
                          verifiedDate: "2019-06-17 12:05:33",
                          verifiedReason: "super_positive",
                          verifiedReasonDetail: "2019-06-17 12:05:33"
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            },{
              title: 'Example: Mobile, Not Answered',
              sectionFn: () => (
                <Wrapper>
                  <NeuralVerify
                    neuralData={
                      {
                        state: -1,
                        carrier: 'mobile',
                        detail: {
                          verifiedDate: "2019-06-17 12:05:33",
                          verifiedReason: "not_answered",
                          verifiedReasonDetail: "2019-06-17 12:05:33"
                        }
                      }
                    }
                    allowOverflow={true}
                  />
                </Wrapper>
              )
            }, {
              title: 'Example: Verify Icon with no Flyout',
              sectionFn: () => (
                  <Wrapper>
                   <NeuralVerify
                    neuralData={
                      {
                        state: 1,
                        detail: {
                          verifiedDate: "2019-08-05 17:28:34",
                          verifiedReason: "recent_positive",
                          verifiedReasonDetail: "2019-08-05 17:28:34",
                        },
                      }
                    }
                    allowOverflow={false}
                    />
                  </Wrapper>
              )
            }
          ],
        }
      ]
    }
  )