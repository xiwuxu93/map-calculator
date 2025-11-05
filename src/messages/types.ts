import type enMessages from './en';

export type AppMessages = typeof enMessages;

export type PageMessages<K extends keyof AppMessages['pages']> = AppMessages['pages'][K];
