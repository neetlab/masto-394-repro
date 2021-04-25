import { login } from 'masto';

(async () => {
  const masto = await login({
    url: 'https://mastodon.social',
    accessToken: process.env.MASTODON_TOKEN,
  });

  const ctx = await masto.statuses.fetchContext('102836762060424941');
  console.log(ctx.descendants[0].inReplyToId);
})();
