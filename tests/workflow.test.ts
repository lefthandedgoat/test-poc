import { test, expect } from 'vitest';
import { test_Review } from './test_Data/all';
import { eq, exist, workflow } from './helpers/helpers';

// ── Categories ────────────────────────────────────────────
    // ── Products ─────────────────────────────────────────────
        
// ── Customers ────────────────────────────────────────────
    // ── Shipping Addresses ───────────────────────────────────
    // ── Orders ───────────────────────────────────────────────
        // ── Order Items ──────────────────────────────────────────
        // ── Payments ─────────────────────────────────────────────
    // ── Shopping Carts ───────────────────────────────────────

// Product + Customer
    // ── Reviews ──────────────────────────────────────────────


workflow('review', 'default values present', undefined, (data) => {
    // do stuff
    eq(data.customer?.id, 1);
});

workflow('review', 'customized values present', 
  [{customer: {id: 311}}], (data) => {
    // do stuff
    eq(data.customer?.id, 311);
    eq(data.review?.customerId, 311);
    exist(data.category?.id);
});

workflow('checked out', 'process refund',
  [{payment: {paymentMethod: 'visa'}},
   {payment: {paymentMethod: 'amex'}}], (data) => {
    // process the refund & validate
    // console.log(data);
});
