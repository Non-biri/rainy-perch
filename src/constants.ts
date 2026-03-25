/**
 * サイト全体で共有する定数を一括管理するファイル
 * 変更が必要な場合はこのファイルのみを編集してください。
 */

// ── イベント情報 ──
export const EVENT_NAME = 'Rainy・Perch';
export const EVENT_TAGLINE = '雨降る仮想世界のカフェ';
export const EVENT_DESCRIPTION = '雨の音と、コーヒーの香り。仮想世界で少しだけ、羽を休めませんか。VRChatで営業中のバーチャルカフェイベント「Rainy・Perch」の広報用ファンサイトです。';

// ── 外部リンク ──
export const LINKS = {
    /** 公式 X（旧Twitter）アカウント */
    x: 'https://x.com/RainyPerch',
    /** 事前予約フォーム */
    reservationForm: 'https://forms.gle/fd4SPZUDUaJaL33Y6',
    /** VRChatグループ */
    vrcGroup: 'https://vrc.group/RPNMH.5562',
} as const;

// ── サイト情報 ──
export const SITE = {
    url: 'https://non-biri.github.io/rainy-perch/',
    ogpImage: 'https://non-biri.github.io/rainy-perch/ogp.jpg',
} as const;

// ── 制作者情報 ──
export const AUTHOR = {
    name: 'NON_',
    xHandle: '@Non_Biri_Iko',
} as const;
