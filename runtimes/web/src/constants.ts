export const WIDTH = 160;
export const HEIGHT = 160;

export const STORAGE_SIZE = 1024;

export const CRASH_TITLE = "WASM-4";

// Default palette
export const COLORS = [
    0xe0f8cf,
    0x86c06c,
    0x306850,
    0x071821,
];

// Memory layout
export const ADDR_PALETTE = 0x04;
export const ADDR_DRAW_COLORS = 0x14;
export const ADDR_GAMEPAD1 = 0x16;
export const ADDR_GAMEPAD2 = 0x17;
export const ADDR_GAMEPAD3 = 0x18;
export const ADDR_GAMEPAD4 = 0x19;
export const ADDR_MOUSE_X = 0x1a;
export const ADDR_MOUSE_Y = 0x1c;
export const ADDR_MOUSE_BUTTONS = 0x1e;
export const ADDR_SYSTEM_FLAGS = 0x1f;
export const ADDR_NETPLAY = 0x20;
export const ADDR_FRAMEBUFFER = 0xa0;

export const BUTTON_X = 1;
export const BUTTON_Z = 2;
// export const BUTTON_RESERVED = 4;
// export const BUTTON_RESERVED = 8;
export const BUTTON_LEFT = 16;
export const BUTTON_RIGHT = 32;
export const BUTTON_UP = 64;
export const BUTTON_DOWN = 128;

export const MOUSE_LEFT = 1;
export const MOUSE_RIGHT = 2;
export const MOUSE_MIDDLE = 4;

export const SYSTEM_PRESERVE_FRAMEBUFFER = 1;
export const SYSTEM_HIDE_GAMEPAD_OVERLAY = 2;

// Flags for Runtime.pauseState
export const PAUSE_CRASHED = 1;
export const PAUSE_REBOOTING = 2;

export const FONT = Uint8Array.of(
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xc7, 0xc7, 0xc7, 0xcf, 0xcf, 0xff, 0xcf, 0xff,
    0x93, 0x93, 0x93, 0xff, 0xff, 0xff, 0xff, 0xff,
    0x93, 0x01, 0x93, 0x93, 0x93, 0x01, 0x93, 0xff,
    0xef, 0x83, 0x2f, 0x83, 0xe9, 0x03, 0xef, 0xff,
    0x9d, 0x5b, 0x37, 0xef, 0xd9, 0xb5, 0x73, 0xff,
    0x8f, 0x27, 0x27, 0x8f, 0x25, 0x33, 0x81, 0xff,
    0xcf, 0xcf, 0xcf, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xf3, 0xe7, 0xcf, 0xcf, 0xcf, 0xe7, 0xf3, 0xff,
    0x9f, 0xcf, 0xe7, 0xe7, 0xe7, 0xcf, 0x9f, 0xff,
    0xff, 0x93, 0xc7, 0x01, 0xc7, 0x93, 0xff, 0xff,
    0xff, 0xe7, 0xe7, 0x81, 0xe7, 0xe7, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xcf, 0xcf, 0x9f,
    0xff, 0xff, 0xff, 0x81, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xcf, 0xcf, 0xff,
    0xfd, 0xfb, 0xf7, 0xef, 0xdf, 0xbf, 0x7f, 0xff,
    0xc7, 0xb3, 0x39, 0x39, 0x39, 0x9b, 0xc7, 0xff,
    0xe7, 0xc7, 0xe7, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0x83, 0x39, 0xf1, 0xc3, 0x87, 0x1f, 0x01, 0xff,
    0x81, 0xf3, 0xe7, 0xc3, 0xf9, 0x39, 0x83, 0xff,
    0xe3, 0xc3, 0x93, 0x33, 0x01, 0xf3, 0xf3, 0xff,
    0x03, 0x3f, 0x03, 0xf9, 0xf9, 0x39, 0x83, 0xff,
    0xc3, 0x9f, 0x3f, 0x03, 0x39, 0x39, 0x83, 0xff,
    0x01, 0x39, 0xf3, 0xe7, 0xcf, 0xcf, 0xcf, 0xff,
    0x87, 0x3b, 0x1b, 0x87, 0x61, 0x79, 0x83, 0xff,
    0x83, 0x39, 0x39, 0x81, 0xf9, 0xf3, 0x87, 0xff,
    0xff, 0xcf, 0xcf, 0xff, 0xcf, 0xcf, 0xff, 0xff,
    0xff, 0xcf, 0xcf, 0xff, 0xcf, 0xcf, 0x9f, 0xff,
    0xf3, 0xe7, 0xcf, 0x9f, 0xcf, 0xe7, 0xf3, 0xff,
    0xff, 0xff, 0x01, 0xff, 0x01, 0xff, 0xff, 0xff,
    0x9f, 0xcf, 0xe7, 0xf3, 0xe7, 0xcf, 0x9f, 0xff,
    0x83, 0x01, 0x39, 0xf3, 0xc7, 0xff, 0xc7, 0xff,
    0x83, 0x7d, 0x45, 0x55, 0x41, 0x7f, 0x83, 0xff,
    0xc7, 0x93, 0x39, 0x39, 0x01, 0x39, 0x39, 0xff,
    0x03, 0x39, 0x39, 0x03, 0x39, 0x39, 0x03, 0xff,
    0xc3, 0x99, 0x3f, 0x3f, 0x3f, 0x99, 0xc3, 0xff,
    0x07, 0x33, 0x39, 0x39, 0x39, 0x33, 0x07, 0xff,
    0x01, 0x3f, 0x3f, 0x03, 0x3f, 0x3f, 0x01, 0xff,
    0x01, 0x3f, 0x3f, 0x03, 0x3f, 0x3f, 0x3f, 0xff,
    0xc1, 0x9f, 0x3f, 0x31, 0x39, 0x99, 0xc1, 0xff,
    0x39, 0x39, 0x39, 0x01, 0x39, 0x39, 0x39, 0xff,
    0x81, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0xf9, 0xf9, 0xf9, 0xf9, 0xf9, 0x39, 0x83, 0xff,
    0x39, 0x33, 0x27, 0x0f, 0x07, 0x23, 0x31, 0xff,
    0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x9f, 0x81, 0xff,
    0x39, 0x11, 0x01, 0x01, 0x29, 0x39, 0x39, 0xff,
    0x39, 0x19, 0x09, 0x01, 0x21, 0x31, 0x39, 0xff,
    0x83, 0x39, 0x39, 0x39, 0x39, 0x39, 0x83, 0xff,
    0x03, 0x39, 0x39, 0x39, 0x03, 0x3f, 0x3f, 0xff,
    0x83, 0x39, 0x39, 0x39, 0x21, 0x33, 0x85, 0xff,
    0x03, 0x39, 0x39, 0x31, 0x07, 0x23, 0x31, 0xff,
    0x87, 0x33, 0x3f, 0x83, 0xf9, 0x39, 0x83, 0xff,
    0x81, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xff,
    0x39, 0x39, 0x39, 0x39, 0x39, 0x39, 0x83, 0xff,
    0x39, 0x39, 0x39, 0x11, 0x83, 0xc7, 0xef, 0xff,
    0x39, 0x39, 0x29, 0x01, 0x01, 0x11, 0x39, 0xff,
    0x39, 0x11, 0x83, 0xc7, 0x83, 0x11, 0x39, 0xff,
    0x99, 0x99, 0x99, 0xc3, 0xe7, 0xe7, 0xe7, 0xff,
    0x01, 0xf1, 0xe3, 0xc7, 0x8f, 0x1f, 0x01, 0xff,
    0xc3, 0xcf, 0xcf, 0xcf, 0xcf, 0xcf, 0xc3, 0xff,
    0x7f, 0xbf, 0xdf, 0xef, 0xf7, 0xfb, 0xfd, 0xff,
    0x87, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0x87, 0xff,
    0xc7, 0x93, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01,
    0xef, 0xf7, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0x3f, 0x3f, 0x03, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xff, 0xff, 0x81, 0x3f, 0x3f, 0x3f, 0x81, 0xff,
    0xf9, 0xf9, 0x81, 0x39, 0x39, 0x39, 0x81, 0xff,
    0xff, 0xff, 0x83, 0x39, 0x01, 0x3f, 0x83, 0xff,
    0xf1, 0xe7, 0x81, 0xe7, 0xe7, 0xe7, 0xe7, 0xff,
    0xff, 0xff, 0x81, 0x39, 0x39, 0x81, 0xf9, 0x83,
    0x3f, 0x3f, 0x03, 0x39, 0x39, 0x39, 0x39, 0xff,
    0xe7, 0xff, 0xc7, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0xf3, 0xff, 0xe3, 0xf3, 0xf3, 0xf3, 0xf3, 0x87,
    0x3f, 0x3f, 0x31, 0x03, 0x07, 0x23, 0x31, 0xff,
    0xc7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0xff, 0xff, 0x03, 0x49, 0x49, 0x49, 0x49, 0xff,
    0xff, 0xff, 0x03, 0x39, 0x39, 0x39, 0x39, 0xff,
    0xff, 0xff, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xff, 0xff, 0x03, 0x39, 0x39, 0x03, 0x3f, 0x3f,
    0xff, 0xff, 0x81, 0x39, 0x39, 0x81, 0xf9, 0xf9,
    0xff, 0xff, 0x91, 0x8f, 0x9f, 0x9f, 0x9f, 0xff,
    0xff, 0xff, 0x83, 0x3f, 0x83, 0xf9, 0x03, 0xff,
    0xe7, 0xe7, 0x81, 0xe7, 0xe7, 0xe7, 0xe7, 0xff,
    0xff, 0xff, 0x39, 0x39, 0x39, 0x39, 0x81, 0xff,
    0xff, 0xff, 0x99, 0x99, 0x99, 0xc3, 0xe7, 0xff,
    0xff, 0xff, 0x49, 0x49, 0x49, 0x49, 0x81, 0xff,
    0xff, 0xff, 0x39, 0x01, 0xc7, 0x01, 0x39, 0xff,
    0xff, 0xff, 0x39, 0x39, 0x39, 0x81, 0xf9, 0x83,
    0xff, 0xff, 0x01, 0xe3, 0xc7, 0x8f, 0x01, 0xff,
    0xf3, 0xe7, 0xe7, 0xcf, 0xe7, 0xe7, 0xf3, 0xff,
    0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xe7, 0xff,
    0x9f, 0xcf, 0xcf, 0xe7, 0xcf, 0xcf, 0x9f, 0xff,
    0xff, 0xff, 0x8f, 0x45, 0xe3, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0x93, 0x93, 0xff,
    0x83, 0x29, 0x29, 0x11, 0x29, 0x29, 0x83, 0xff,
    0x83, 0x39, 0x09, 0x11, 0x21, 0x39, 0x83, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0x83, 0x11, 0x21, 0x7d, 0x21, 0x11, 0x83, 0xff,
    0x83, 0x11, 0x09, 0x7d, 0x09, 0x11, 0x83, 0xff,
    0x83, 0x11, 0x39, 0x55, 0x11, 0x11, 0x83, 0xff,
    0x83, 0x11, 0x11, 0x55, 0x39, 0x11, 0x83, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xe7, 0xff, 0xe7, 0xe7, 0xc7, 0xc7, 0xc7, 0xff,
    0xef, 0x83, 0x29, 0x2f, 0x29, 0x83, 0xef, 0xff,
    0xc3, 0x99, 0x9f, 0x03, 0x9f, 0x9f, 0x01, 0xff,
    0xff, 0xa5, 0xdb, 0xdb, 0xdb, 0xa5, 0xff, 0xff,
    0x99, 0x99, 0xc3, 0x81, 0xe7, 0x81, 0xe7, 0xff,
    0xe7, 0xe7, 0xe7, 0xff, 0xe7, 0xe7, 0xe7, 0xff,
    0xc3, 0x99, 0x87, 0xdb, 0xe1, 0x99, 0xc3, 0xff,
    0x93, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xc3, 0xbd, 0x66, 0x5e, 0x5e, 0x66, 0xbd, 0xc3,
    0x87, 0xc3, 0x93, 0xc3, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xc9, 0x93, 0x27, 0x93, 0xc9, 0xff, 0xff,
    0xff, 0xff, 0x81, 0xf9, 0xf9, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xc3, 0xbd, 0x46, 0x5a, 0x46, 0x5a, 0xbd, 0xc3,
    0x83, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xef, 0xd7, 0xef, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xe7, 0xe7, 0x81, 0xe7, 0xe7, 0xff, 0x81, 0xff,
    0xc7, 0xf3, 0xe7, 0xc3, 0xff, 0xff, 0xff, 0xff,
    0xc3, 0xe7, 0xf3, 0xc7, 0xff, 0xff, 0xff, 0xff,
    0xf7, 0xef, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0x33, 0x33, 0x33, 0x33, 0x09, 0x3f,
    0xc1, 0x95, 0xb5, 0x95, 0xc1, 0xf5, 0xf5, 0xff,
    0xff, 0xff, 0xff, 0xcf, 0xcf, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xf7, 0xcf,
    0xe7, 0xc7, 0xe7, 0xc3, 0xff, 0xff, 0xff, 0xff,
    0xc7, 0x93, 0x93, 0xc7, 0xff, 0xff, 0xff, 0xff,
    0xff, 0x27, 0x93, 0xc9, 0x93, 0x27, 0xff, 0xff,
    0xbd, 0x3b, 0xb7, 0xad, 0xd9, 0xb1, 0x7d, 0xff,
    0xbd, 0x3b, 0xb7, 0xa9, 0xdd, 0xbb, 0x71, 0xff,
    0x1d, 0xbb, 0xd7, 0x2d, 0xd9, 0xb1, 0x7d, 0xff,
    0xc7, 0xff, 0xc7, 0x9f, 0x39, 0x01, 0x83, 0xff,
    0xdf, 0xef, 0xc7, 0x93, 0x39, 0x01, 0x39, 0xff,
    0xf7, 0xef, 0xc7, 0x93, 0x39, 0x01, 0x39, 0xff,
    0xc7, 0x93, 0xc7, 0x93, 0x39, 0x01, 0x39, 0xff,
    0xcb, 0xa7, 0xc7, 0x93, 0x39, 0x01, 0x39, 0xff,
    0x93, 0xff, 0xc7, 0x93, 0x39, 0x01, 0x39, 0xff,
    0xef, 0xd7, 0xc7, 0x93, 0x39, 0x01, 0x39, 0xff,
    0xc1, 0x87, 0x27, 0x21, 0x07, 0x27, 0x21, 0xff,
    0xc3, 0x99, 0x3f, 0x3f, 0x99, 0xc3, 0xf7, 0xcf,
    0xdf, 0xef, 0x01, 0x3f, 0x03, 0x3f, 0x01, 0xff,
    0xf7, 0xef, 0x01, 0x3f, 0x03, 0x3f, 0x01, 0xff,
    0xc7, 0x93, 0x01, 0x3f, 0x03, 0x3f, 0x01, 0xff,
    0x93, 0xff, 0x01, 0x3f, 0x03, 0x3f, 0x01, 0xff,
    0xef, 0xf7, 0x81, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0xf7, 0xef, 0x81, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0xe7, 0xc3, 0x81, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0x99, 0xff, 0x81, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0x87, 0x93, 0x99, 0x09, 0x99, 0x93, 0x87, 0xff,
    0xcb, 0xa7, 0x19, 0x09, 0x01, 0x21, 0x31, 0xff,
    0xdf, 0xef, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xf7, 0xef, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xc7, 0x93, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xcb, 0xa7, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0x93, 0xff, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xff, 0xbb, 0xd7, 0xef, 0xd7, 0xbb, 0xff, 0xff,
    0x83, 0x39, 0x31, 0x29, 0x19, 0x39, 0x83, 0xff,
    0xdf, 0xef, 0x39, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xf7, 0xef, 0x39, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xc7, 0x93, 0xff, 0x39, 0x39, 0x39, 0x83, 0xff,
    0x93, 0xff, 0x39, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xf7, 0xef, 0x99, 0x99, 0xc3, 0xe7, 0xe7, 0xff,
    0x3f, 0x03, 0x39, 0x39, 0x39, 0x03, 0x3f, 0xff,
    0xc3, 0x99, 0x99, 0x93, 0x99, 0x89, 0x93, 0xff,
    0xdf, 0xef, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0xf7, 0xef, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0xc7, 0x93, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0xcb, 0xa7, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0x93, 0xff, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0xef, 0xd7, 0x83, 0xf9, 0x81, 0x39, 0x81, 0xff,
    0xff, 0xff, 0x83, 0xe9, 0x81, 0x2f, 0x83, 0xff,
    0xff, 0xff, 0x81, 0x3f, 0x3f, 0x81, 0xf7, 0xcf,
    0xdf, 0xef, 0x83, 0x39, 0x01, 0x3f, 0x83, 0xff,
    0xf7, 0xef, 0x83, 0x39, 0x01, 0x3f, 0x83, 0xff,
    0xc7, 0x93, 0x83, 0x39, 0x01, 0x3f, 0x83, 0xff,
    0x93, 0xff, 0x83, 0x39, 0x01, 0x3f, 0x83, 0xff,
    0xdf, 0xef, 0xff, 0xc7, 0xe7, 0xe7, 0x81, 0xff,
    0xf7, 0xef, 0xff, 0xc7, 0xe7, 0xe7, 0x81, 0xff,
    0xc7, 0x93, 0xff, 0xc7, 0xe7, 0xe7, 0x81, 0xff,
    0x93, 0xff, 0xc7, 0xe7, 0xe7, 0xe7, 0x81, 0xff,
    0x9b, 0x87, 0x67, 0x83, 0x39, 0x39, 0x83, 0xff,
    0xcb, 0xa7, 0x03, 0x39, 0x39, 0x39, 0x39, 0xff,
    0xdf, 0xef, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xf7, 0xef, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xc7, 0x93, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xcb, 0xa7, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0x93, 0xff, 0x83, 0x39, 0x39, 0x39, 0x83, 0xff,
    0xff, 0xe7, 0xff, 0x81, 0xff, 0xe7, 0xff, 0xff,
    0xff, 0xff, 0x83, 0x31, 0x29, 0x19, 0x83, 0xff,
    0xdf, 0xef, 0x39, 0x39, 0x39, 0x39, 0x81, 0xff,
    0xf7, 0xef, 0x39, 0x39, 0x39, 0x39, 0x81, 0xff,
    0xc7, 0x93, 0xff, 0x39, 0x39, 0x39, 0x81, 0xff,
    0x93, 0xff, 0x39, 0x39, 0x39, 0x39, 0x81, 0xff,
    0xf7, 0xef, 0x39, 0x39, 0x39, 0x81, 0xf9, 0x83,
    0x3f, 0x3f, 0x03, 0x39, 0x39, 0x03, 0x3f, 0x3f,
    0x93, 0xff, 0x39, 0x39, 0x39, 0x81, 0xf9, 0x83
);

export const showDevToolsQueryKey = 'devtools-open';
