import { BATCH_REMOVE_LIST_VIEW_RECORDS, BATCH_UPDATE_LIST_VIEW_RECORDS } from "Base/Action/PageAction";

export default {
  name:'ListView',
  props:{
    variant:'outlined',
    query:'posts',
    remove:'removePosts',
    update:{
      name:'updatePosts',
      variableType:'PostInput',
      variableName:'postFragment',
    }
  },
  children:[
    {
      name:'ListViewToolbar',
      children:[
        {
          name:'ListViewFilters',
          children:[
            {
              name:'ListViewKeywordFilter',
              props:{
                size:'small',
              }
            },
            {
              name:'ListViewEnumFilter',
              props:{
                marginLeft:2,
                size:'small',
                //helperText:'提示消息',
                label:'状态',
                width:'120px',
                field:'status',
                metas:[
                  {
                    value:'DRAFT',
                    name:'草稿',
                  },
                  {
                    value:'PUBLISHED',
                    name:'已发布',
                  },
                ]
              }
            }
          ]
        },
        {
          name:'ListViewBatchActions',
          children:[
            {
              name:'Button',              
              props:{
                rxText:'删除',
                //size:'small',
                variant:"contained",
                startIcon:'mdi-delete',
                color:'secondary',
                onClick:{
                  name: BATCH_REMOVE_LIST_VIEW_RECORDS,
                  confirmMessage:'删除后将不可恢复，您确定要删除吗？',
                }
              }
            },
            {
              name:'Button',              
              props:{
                rxText:'发布',
                marginLeft:2,
                //size:'small',
                variant:"contained",
                startIcon:'mdi-publish',
                onClick:{
                  name: BATCH_UPDATE_LIST_VIEW_RECORDS,
                  field:'status',
                  value:'PUBLISHED',
                }
              }
            }

          ]
        }
      ]
    },
    {
      name:'ListViewBody',
      selfRenderChildren:true,
      children:[
        {
          name:'TableColumn',
          props:{
            label:'图片',                  
          },
          children:[{
            name:'MediaView',
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
          props:{
            label:'标题',
            field:'title',
            searchable:true,
            sortable:true,
            width:'200px',
          },
    
          children:[{
            name:'TextView',
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
          children:[{
            name:'EnumView',
            props:{
              field:'status',
              metas:[
                {
                  value:'PUBLISHED',
                  color:'default',
                  name:'已发布'
                },
                {
                  value:'DRAFT',
                  color:'secondary',
                  name:'草稿'
                }
              ]
            }
          }]
        },
        {
          name:'TableColumn',
          props:{
            label:'时间',
            field:'created_at',
            searchable:true,
            sortable:true,
          },
          children:[{
            name:'DayView',
            props:{
              field:'created_at',
            }
          }],
        },
        {
          name:'TableColumn',
          props:{
            label:'',
            align:'right',
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
    },
    {
      name:'ListViewPagination',
    }
  ],      
}
