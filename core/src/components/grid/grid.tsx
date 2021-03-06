import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ion-grid',
  styleUrl: 'grid.scss',
  shadow: true
})
export class Grid {

  /**
   * If true, the grid will have a fixed width based on the screen size. Defaults to `false`.
   */
  @Prop() fixed = false;

  hostData() {
    return {
      class: {
        'grid-fixed': this.fixed
      }
    };
  }

  render() {
    return <slot></slot>;
  }
}
