module.exports.services = {
  type: 'flex',
  altText: 'services carousel',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'BASIC',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
              weight: 'bold',
            },
            {
              type: 'text',
              text: 'Free',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'filler',
                    },
                  ],
                  width: '0%',
                  backgroundColor: '#0D8186',
                  height: '6px',
                },
              ],
              backgroundColor: '#9FD8E36E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#27ACB2',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'Personal message',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                  align: 'center',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Detail',
                    uri: 'http://linecorp.com/',
                  },
                  style: 'primary',
                  color: '#4eb3ed',
                  margin: 'md',
                  height: 'sm',
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'PRO',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
              weight: 'bold',
            },
            {
              type: 'text',
              text: '$149.90',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'filler',
                    },
                  ],
                  width: '80%',
                  backgroundColor: '#DE5658',
                  height: '6px',
                },
              ],
              backgroundColor: '#FAD2A76E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#FF6B6E',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'Great for small teams',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                  align: 'center',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Detail',
                    uri: 'http://linecorp.com/',
                  },
                  style: 'primary',
                  color: '#4eb3ed',
                  margin: 'md',
                  height: 'sm',
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'BUSINESS',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
              weight: 'bold',
            },
            {
              type: 'text',
              text: '$199.90',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'filler',
                    },
                  ],
                  width: '100%',
                  backgroundColor: '#7D51E4',
                  height: '6px',
                },
              ],
              backgroundColor: '#9FD8E36E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#A17DF5',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'Small businesses',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                  align: 'center',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Detail',
                    uri: 'http://linecorp.com/',
                  },
                  style: 'primary',
                  color: '#4eb3ed',
                  margin: 'md',
                  height: 'sm',
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'Contact Us',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                  align: 'center',
                  weight: 'bold',
                },
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Detail',
                    uri: 'https://liff.line.me/1657062604-GBW3v6V6',
                  },
                  style: 'primary',
                  color: '#42adeb',
                  margin: 'md',
                  height: 'sm',
                },
              ],
              flex: 1,
              justifyContent: 'center',
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
    ],
  },
}
