import { rest } from 'msw';

import test1 from 'assets/images/test1.jpg';
import test2 from 'assets/images/test2.png';
import test3 from 'assets/images/test3.png';
import test4 from 'assets/images/test4.jpg';
import test5 from 'assets/images/test5.png';

const hotRollingPaperList = [
  {
    profileUrl: test1,
    name: '김기역',
  },
  {
    profileUrl: test2,
    name: '이상해씨',
  },
  {
    profileUrl: test3,
    name: '최디귿',
  },
  {
    profileUrl: test4,
    name: '박산다라마바사',
  },
  {
    profileUrl: test5,
    name: '한동글동글',
  },
];

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),

  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          erroeMessage: 'Not authorized',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),


  rest.get('/hot-rolling-paper-list', (req, res, ctx) => {
    
    return res(
      ctx.status(200),
      ctx.json(hotRollingPaperList)
    )
  }),
];
