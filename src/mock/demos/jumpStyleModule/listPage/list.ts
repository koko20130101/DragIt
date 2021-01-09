export default {
  name:'ListView',
  withActions:true,
  selfRenderChildren:true,
  designProps:{
    isDeisgning:true,
    query:null,
  },
  props:{
    variant:'outlined',
    //elevation:6,
    rowsPerPageOptions:'10,25,50',
    defalutRowsPerPage:10,
    filters:[
      {
        slug:'gender',
        label:'性别',
        searchable:true,
        conditions:[
          {
            slug:'male',
            label:'男'
          },
          {
            slug:'female',
            label:'女'
          },
        ]
      },
      {
        slug:'publish',
        label:'已发布',
        conditions:[
          {
            slug:'published',
            label:'已发布男'
          },
          {
            slug:'not-published',
            label:'未发布'
          },
        ]

      }
    ],
    batchCommands:[
      {
        slug:"publish",
        label:"发布",
        icon:"mdi-publish",
      },
      {
        slug:"check",
        label:"审核",
        icon:"mdi-check-bold",
      },
      {
        slug:"delete",
        label:"删除",
        icon:"mdi-delete",
        confirmMessage:"删除后将不可恢复，您确定要删除吗？",
      },
    ],
    rowCommands:[
      {
        slug:"edit",
        label:"编辑",
        icon:"mdi-pencil",
        jumpToPage:{
          //name: JUMP_TO_PAGE_ACidTION,
          pageId:'1012',
          param:'id',
          paramField:'id',
        }
      },
      {
        slug:"publish",
        label:"发布",
        icon:"mdi-publish",
      },
      {
        slug:"check",
        label:"审核",
        icon:"mdi-check-bold",
      },
      {
        slug:"delete",
        label:"删除",
        icon:"mdi-delete",
        confirmMessage:"删除后将不可恢复，您确定要删除吗？",
      },
    ],
    query:'posts',
    mutation: 'updatePosts',
  },
  children:[
    {
      name:'TableColumn',
      props:{
        label:'图片',                  
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'MediaView',
        designProps:{
          isDeisgning:true,
        },

        props:{
          field:'feathureImage',
          graphiQL:`$field{
            id 
            thumbnail
          } `,          
          width:'60px',
        }
      }]
    },
    {
      name:'TableColumn',
      designProps:{
        isDeisgning:true,
      }, 
      props:{
        label:'标题',
        field:'title',
        sortable:true,
        width:'200px',
      },

      children:[{
        name:'TextView',
        designProps:{
          isDeisgning:true,
        }, 
        props:{
          field:'title',
          variant:'outlined',
          size:'small',
        }
      }]
    },
    {
      name:'TableColumn',
      props:{
        label:'状态',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'EnumView',
        props:{
          field:'status',
          metas:[
            {
              name:'PUBLISHED',
              value:'default',
              label:'已发布'
            },
            {
              name:'DRAFT',
              value:'secondary',
              label:'草稿'
            }
          ]
        }
      }]
    },
    {
      name:'TableColumn',
      props:{
        label:'时间',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'TextView',
        designProps:{
          isDeisgning:true,
        }, 
        props:{
          field:'created_at',
        }
      }],
    },
    {
      name:'TableColumn',
      props:{
        label:'操作',
      },
      designProps:{
        isDeisgning:true,
      }, 
      children:[{
        name:'TextBox',
        props:{
          variant:'outlined',
          size:'small',
        }
      }]
    },
  ],             

}
