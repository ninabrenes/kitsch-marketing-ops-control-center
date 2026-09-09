const allowedTabs = new Set([
  'overview',
  'intelligence',
  'commerce',
  'creators',
  'funnel',
  'website',
  'performance',
  'launches',
  'social',
  'search',
  'brand',
  'competitors',
  'operations',
  'sources',
]);

const allowedLenses = new Set(['plain', 'meaning', 'action']);

function clean(value, max = 600) {
  return typeof value === 'string' ? value.slice(0, max) : '';
}

const handler = async (request) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' },
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: 'AI is not configured' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    });
  }

  const body = await request.json().catch(() => ({}));
  const tab = allowedTabs.has(body.tab) ? body.tab : 'overview';
  const lens = allowedLenses.has(body.lens) ? body.lens : 'plain';
  const context = {
    purpose: clean(body.context?.purpose),
    inspect: clean(body.context?.inspect),
    decision: clean(body.context?.decision),
    apply: clean(body.context?.apply),
  };

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_INSIGHT_MODEL || 'gpt-5.4-mini',
      store: false,
      instructions:
        'You are a careful marketing operations analyst. Explain only the supplied dashboard context. Never invent Kitsch revenue, profitability, attribution, customer, employee, or campaign performance. Distinguish observation from interpretation. Use plain language a non-marketer can understand. Return concise structured JSON.',
      input: JSON.stringify({ tab, lens, context }),
      text: {
        format: {
          type: 'json_schema',
          name: 'insight_brief',
          strict: true,
          schema: {
            type: 'object',
            additionalProperties: false,
            properties: {
              headline: { type: 'string' },
              explanation: { type: 'string' },
              limitation: { type: 'string' },
              next_action: { type: 'string' },
            },
            required: ['headline', 'explanation', 'limitation', 'next_action'],
          },
        },
      },
    }),
  });

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: 'Insight generation failed' }),
      {
        status: 502,
        headers: { 'content-type': 'application/json' },
      },
    );
  }

  const result = await response.json();
  const output = JSON.parse(result.output_text || '{}');
  const markdown = `### ${clean(output.headline, 120)}\n\n${clean(output.explanation, 700)}\n\n**What it cannot prove:** ${clean(output.limitation, 500)}\n\n**Do next:** ${clean(output.next_action, 500)}`;

  return new Response(JSON.stringify({ markdown }), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
};

export default handler;
