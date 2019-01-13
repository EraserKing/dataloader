import { CreateElement, VNode } from 'vue';

export interface ObjectDefinition {
  fieldName: string;
  type: 'panel' | 'group' | 'textfield' | 'search' | 'checkbox' | 'combobox' | 'grid' | 'text';
  label?: string;
  model?: string;
  format?: string;
  colspan?: number;
  children?: ObjectDefinition[];
}

const ComponentMap = {
  panel: 'div',
  group: 'div',
  grid: 'a-table',
  text: 'h2'
}

export class Render {
  constructor(protected createElement: CreateElement) {}

  render(data: object[]) {
    return this.createElement('div', this.processData(data as ObjectDefinition[]));
  }

  private processData(data: ObjectDefinition[] | undefined): VNode[] {
    if (!data) return [];
    return data.map((item) => this.createNode(item));
  }

  private createNode(data: ObjectDefinition) {
    const children = this.processData(data.children);

    switch (data.type) {
      case 'panel':
        return this.createElement(
          ComponentMap[data.type],
          [
            this.createElement('h3', [ data.label || '' ]),
            this.createElement(
              'a-row',
              { 
                attrs: {
                  gutter: 16
                } 
              }, 
              [ children ]
            ),
            this.createElement('a-divider')
          ]
        );
      case 'group':
        return this.createElement(
          ComponentMap[data.type],
          { style: { 'padding-left': '8px' } },
          [ 
            this.createElement(
              'a-row', 
              { 
                attrs: {
                  span: 24,
                  gutter: 16
                } 
              },
              [ children ]
            ) 
          ]
        );
      case 'grid':
        return this.createElement('div', [ this.createElement(ComponentMap[data.type]) ]);
      case 'text':
        return this.createElement(ComponentMap[data.type], [ data.label || '' ]);
      default:
        return this.createElement(
          'a-col',
          { attrs: { span: 4 } },
          [
            /*this.createElement(
              'a-form-item',
              {
                attrs: { label: data.type === 'checkbox' ? '' : data.label || '' },
                props: { span: 5, colon: false },
              },
              [
                this.createElement(
                  ComponentMap[data.type],
                  {
                    props: { value: data.model },
                    style: { width: '100%' }
                  },
                  data.type === 'checkbox' ? data.label || '' : children
                )
              ]
            )*/
            this.createElement(
              'ScreenObject',
              { props: { props: data } }
            )
          ]
        );
    }
  }
}
