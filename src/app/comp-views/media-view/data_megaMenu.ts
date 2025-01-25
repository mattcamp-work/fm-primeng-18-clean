
const menu:any = [
      {
        label: 'Documents',
        items: [{
            label: 'New',
            icon: 'pi pi-plus'
          },
          {
            label: 'Search',
            icon: 'pi pi-search'
          }
        ]
      },
      {
        label: 'Profile',
        items: [{
            label: 'Settings',
            icon: 'pi pi-cog'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out'
          }
        ]
      }
]


const menuBar:any = [

      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [{
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [{
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    
]

const panelMenu:any = [
            {
                label: 'Files',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Documents',
                        icon: 'pi pi-file',
                        items: [
                            {
                                label: 'Invoices',
                                icon: 'pi pi-file-pdf',
                                items: [
                                    {
                                        label: 'Pending',
                                        icon: 'pi pi-stop'
                                    },
                                    {
                                        label: 'Paid',
                                        icon: 'pi pi-check-circle'
                                    }
                                ]
                            },
                            {
                                label: 'Clients',
                                icon: 'pi pi-users'
                            }
                        ]
                    },
                    {
                        label: 'Images',
                        icon: 'pi pi-image',
                        items: [
                            {
                                label: 'Logos',
                                icon: 'pi pi-image'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Cloud',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Upload',
                        icon: 'pi pi-cloud-upload'
                    },
                    {
                        label: 'Download',
                        icon: 'pi pi-cloud-download'
                    },
                    {
                        label: 'Sync',
                        icon: 'pi pi-refresh'
                    }
                ]
            },
            {
                label: 'Devices',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Phone',
                        icon: 'pi pi-mobile'
                    },
                    {
                        label: 'Desktop',
                        icon: 'pi pi-desktop'
                    },
                    {
                        label: 'Tablet',
                        icon: 'pi pi-tablet'
                    }
                ]
            }
        ]



const megaMenu: any = [{
		label: 'Furniture',
		icon: 'pi pi-box',
		items: [
			[{
				label: 'Living Room',
				items: [
					{ label: 'Accessories' },
					{ label: 'Armchair' },
					{ label: 'Coffee Table' },
					{ label: 'Couch' },
					{ label: 'TV Stand' },
				],
			}, ],
			[{
					label: 'Kitchen',
					items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
				},
				{
					label: 'Bathroom',
					items: [{ label: 'Accessories' }],
				},
			],
			[{
				label: 'Bedroom',
				items: [
					{ label: 'Bed' },
					{ label: 'Chaise lounge' },
					{ label: 'Cupboard' },
					{ label: 'Dresser' },
					{ label: 'Wardrobe' },
				],
			}, ],
			[{
				label: 'Office',
				items: [
					{ label: 'Bookcase' },
					{ label: 'Cabinet' },
					{ label: 'Chair' },
					{ label: 'Desk' },
					{ label: 'Executive Chair' },
				],
			}, ],
		],
	},
	{
		label: 'Electronics',
		icon: 'pi pi-mobile',
		items: [
			[{
				label: 'Computer',
				items: [
					{ label: 'Monitor' },
					{ label: 'Mouse' },
					{ label: 'Notebook' },
					{ label: 'Keyboard' },
					{ label: 'Printer' },
					{ label: 'Storage' },
				],
			}, ],
			[{
				label: 'Home Theater',
				items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
			}, ],
			[{
				label: 'Gaming',
				items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
			}, ],
			[{
				label: 'Appliances',
				items: [
					{ label: 'Coffee Machine' },
					{ label: 'Fridge' },
					{ label: 'Oven' },
					{ label: 'Vaccum Cleaner' },
					{ label: 'Washing Machine' },
				],
			}, ],
		],
	},
	{
		label: 'Sports',
		icon: 'pi pi-clock',
		items: [
			[{
				label: 'Football',
				items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
			}, ],
			[{
				label: 'Running',
				items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
			}, ],
			[{
				label: 'Swimming',
				items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
			}, ],
			[{
				label: 'Tennis',
				items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
			}, ],
		],
	},
];

const tieredMenu:any = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }];

export const MenuData: any = {megaMenu,panelMenu,menuBar,menu,tieredMenu}
