import currencyFormatter from 'currency-formatter';
import PropTypes from 'prop-types';
import moment from 'moment';

function PurchaseSummary({ release }) {
    const { plan } = release;

return (
    <>
    {'You are about to '}
    {plan.amount === 0 ? 'claim' : 'purchase'}
    {' a membership to '}
    {account.name}
    {'. '}

    {(plan.type === 'recurring' && release.trial_period_days && release.initial_fee) && (
        <span>
        {'You will be charged '}
        {currencyFormatter.format(release.initial_fee.amount / 100, { code: plan.currency.toUpperCase() })}
        {' immediately, then after '}
        {release.trial_period_days}
        {' days, you will be billed '}
        {currencyFormatter.format(plan.amount / 100, { code: plan.currency.toUpperCase() })}
        {' every '}
        {plan.recurring.interval_count === 1 ? plan.recurring.interval : `${plan.recurring.interval_count} ${plan.recurring.interval}s`}
        {' until you cancel your subscription.'}
        </span>
    )}

    {(plan.type === 'recurring' && !release.trial_period_days && release.initial_fee) && (
        <span>
        {'You will be billed '}
        {currencyFormatter.format(plan.amount / 100, { code: plan.currency.toUpperCase() })}
        {' every '}
        {plan.recurring.interval_count === 1 ? plan.recurring.interval : `${plan.recurring.interval_count} ${plan.recurring.interval}s`}
        {' until you cancel your subscription, plus an initial fee of '}
        {currencyFormatter.format(release.initial_fee.amount / 100, { code: plan.currency.toUpperCase() })}
        {', which will be billed immediately.'}
        </span>
    )}

    {(plan.type === 'recurring' && release.trial_period_days && !release.initial_fee) && (
        <span>
        {'After a '}
        {release.trial_period_days}
        {' day trial, you will be billed '}
        {currencyFormatter.format(plan.amount / 100, { code: plan.currency.toUpperCase() })}
        {' every '}
        {plan.recurring.interval_count === 1 ? plan.recurring.interval : `${plan.recurring.interval_count} ${plan.recurring.interval}s`}
        {' until you cancel your subscription.'}
        </span>
    )}

    {(plan.type === 'recurring' && !release.trial_period_days && !release.initial_fee) && (
        <span>
        {'You will be billed '}
        {currencyFormatter.format(plan.amount / 100, { code: plan.currency.toUpperCase() })}
        {' every '}
        {plan.recurring.interval_count === 1 ? plan.recurring.interval : `${plan.recurring.interval_count} ${plan.recurring.interval}s`}
        {' until you cancel your subscription.'}
        </span>
    )}

    {plan.type === 'lifetime' && (
        <span>
        {'You will be charged '}
        {currencyFormatter.format(plan.amount / 100, { code: plan.currency.toUpperCase() })}
        {' immediately.'}
        </span>
    )}

    {(plan.type === 'rental' && plan.amount === 0) && (
        <span>
        {'Your membership will expire on '}
        {moment().add(release.trial_period_days, 'days').format('LL')}
        {'.'}
        </span>
    )}

    {(plan.type === 'rental' && plan.amount > 0) && (
        <span>
        {'You will be charged '}
        {currencyFormatter.format(plan.amount / 100, { code: plan.currency.toUpperCase() })}
        {' immediately, and your membership will expire on '}
        {moment().add(release.trial_period_days, 'days').format('LL')}
        {'.'}
        </span>
    )}
    </>
);
}

PurchaseSummary.propTypes = {
    release: PropTypes.any,
};

export default PurchaseSummary;