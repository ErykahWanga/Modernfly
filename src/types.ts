/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DemoCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  accentColor: string;
  bgGradient: string;
}

export interface InnerPageCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type SelectedCategory = 'smartphone' | 'tablet' | 'cloud' | 'globe';
