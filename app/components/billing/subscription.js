import Component from '@ember/component';
import { reads, bool } from '@ember/object/computed';

export default Component.extend({
  account: null,
  newSubscriptionProcess: false,

  subscription: reads('account.subscription'),
  hasExpiredStripeSubscription: bool('account.expiredStripeSubscription'),
});
