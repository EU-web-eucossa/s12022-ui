/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 05:38:41
 * @ Description:
 */
/* eslint-disable @typescript-eslint/naming-convention */

const { VITE_PAYPAL_CLIENT_ID, VITE_PAYPAL_CLIENT_SECRET } = import.meta.env;

export const config = {
	paypalClientId: VITE_PAYPAL_CLIENT_ID as unknown as string,
	paypalClientSecret: VITE_PAYPAL_CLIENT_SECRET as unknown as string
};
