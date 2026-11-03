/**
 * Demo rewards API.
 *
 * NOTE: This project has no backend. This module simulates an authenticated
 * rewards claim endpoint purely for demonstration. It is clearly labeled as a
 * demo and never represents that a real reward has been issued.
 */
export const IS_DEMO = true;

const DELAY_MS = 1500;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Simulates a server-side eligibility validation + claim.
 * Resolves with { ok: boolean, reward, reason?, requiresAuth? }.
 * Roughly 70% success to demonstrate both success and failure feedback paths.
 */
export async function claimRewardDemo(rewardId) {
  await sleep(DELAY_MS);

  if (!navigator || !navigator.cookieEnabled) {
    return { ok: false, rewardId, reason: 'Cookies must be enabled to claim rewards.' };
  }

  const ok = Math.random() < 0.7;

  if (ok) {
    return {
      ok: true,
      rewardId,
      claimedAt: new Date().toISOString(),
      message: 'Reward claimed successfully (demo).',
    };
  }

  return {
    ok: false,
    rewardId,
    reason: 'You are not eligible for this reward at this time. Please check the eligibility requirements.',
  };
}
