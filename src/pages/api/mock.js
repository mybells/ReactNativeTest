import Mock from 'mockjs';

Mock.setup({timeout: '5000-10000'});

function getData(url, params) {
  return Mock.mock(url, {
    'dataSource|5': [params],
  });
}

export {getData};
