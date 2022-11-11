const {
    VITE_PAYPAL_CLIENT_ID,
    VITE_PAYPAL_CLIENT_SECRET,
} = import.meta.env;

export const config = {
    paypalClientId: VITE_PAYPAL_CLIENT_ID as unknown as string,
    paypalClientSecret:VITE_PAYPAL_CLIENT_SECRET as unknown as string,
}