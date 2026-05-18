export const WHATSAPP_NUMBER = "5511984251388";
export const WHATSAPP_DISPLAY = "(11) 98425-1388";
export const PHONE_DISPLAY = "(11) 3565-1505";
export const EMAIL = "contato@djrent.com.br";
export const ADDRESS = "Alameda Terracota, 215, Torre Union, Sala 802 — São Caetano do Sul, SP. CEP 09531-190";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
