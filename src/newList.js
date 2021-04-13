
import { List, Typography } from 'antd';
import react from 'react';


const data = [
  'aaadfsas',
  'bbbdfssdfasb',
  'dfasfvdfssaafghf'
];

class NewList extends react.Component {
  render() {
    return(
        <react.Fragment>
          <List
              style={{
                marginLeft:20,
                marginTop:10,
                marginRight:20
              }}
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
              )}
          />
        </react.Fragment>

        )

  }
}

export default NewList;
