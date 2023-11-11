select t."from",
    (t."num_trans_deposit" + t."num_trans_transfer" + t."num_trans_withdraw" + t."num_trans_payment") as "num_trans",
    (t."total_amount_deposit" + t."total_amount_transfer" + t."total_amount_withdraw" + t."total_amount_payment") as "total_amount",
    t."num_trans_deposit", t."total_amount_deposit",
    t."num_trans_transfer", t."total_amount_transfer",
    t."num_trans_withdraw", t."total_amount_withdraw",
    t."num_trans_payment", t."total_amount_payment",
    b."available_money",
    b."freezed_money"
from "customer" c, "balance" b,
    (select t."from",
        sum(case t."type" when 'DEPOSIT' then 1 else 0 end) as "num_trans_deposit",
        sum(case t."type" when 'DEPOSIT' then t."amount" else 0 end) as "total_amount_deposit",
        sum(case t."type" when 'TRANSFER' then 1 else 0 end) as "num_trans_transfer",
        sum(case t."type" when 'TRANSFER' then t."amount" + t."fee" else 0 end) as "total_amount_transfer",
        sum(case t."type" when 'WITHDRAW' then 1 else 0 end) as "num_trans_withdraw",
        sum(case t."type" when 'WITHDRAW' then t."amount" + t."fee" else 0 end) as "total_amount_withdraw",
        sum(case t."type" when 'PAYMENT' then 1 else 0 end) as "num_trans_payment",
        sum(case t."type" when 'PAYMENT' then t."amount" + t."fee" else 0 end) as "total_amount_payment"
    from "transaction" t
    where t."type" in ('DEPOSIT', 'TRANSFER', 'WITHDRAW', 'PAYMENT')
        and t."source_account_type" = 'NORMAL'
        AND t."status" = 'SUCCESS'
    GROUP BY t."from") t
where c."phone_number" = t."from"
and b."customer_id" = c."id"
order by c."phone_number";