import { getTemplate } from "mock/templates/data";
import { sleep } from "mock/utils/sleep";
import { getRxApp } from "./appResolvers";
import appsData from "./data";

function getRxPage(id:string){
  for(var i = 0; i < appsData.length; i++){
    const app = appsData[i];
    for(var j = 0; j < app.pages.length; j++){
      if(id === app.pages[j].id){
        return app.pages[j];
      }
    }
  }
}

function doRemoveRxPage(id:string){
  for(var i = 0; i < appsData.length; i++){
    const app = appsData[i];
    for(var j = 0; j < app.pages.length; j++){
      const page =  app.pages[j];
      if(id === page.id){
        app.pages = app.pages.filter(pg => page.id !== pg.id)
        return page;
      }
    }
  }
}


export const rxPage = async (parent:any, args:any, context:any, info:any)=>{
  await sleep(500);
  console.log('mock rxPage', args);
  return getRxPage(args.id)
}

export const removeRxPage = async (parent:any, args:any, context:any, info:any)=>{
  await sleep(500);
  console.log('removeRxPage', args)
  return doRemoveRxPage(args.id)
}

export const saveRxPage = async (parent:any, args:any, context:any, info:any)=>{
  await sleep(500);

  console.log('Server received RxPage data:', args);
  const oldRxApp = getRxPage(args.id)
  let rxPage = {...oldRxApp, ...args.rxPage};
  return rxPage;
}

export const createRxPage = async (parent:any, args:any, context:any, info:any)=>{
  await sleep(500);
  const app = getRxApp(args.appId)
  const template = getTemplate(args.templateId);
  let page = {id:args.pageId, name:args.name, schema:template?.schema} as any;
  console.log('Server createPage:', args);
  if(app){
    app.pages = [...app.pages, page];
  }

  return page;
}

export const pageQueryResolvers = {
  rxPage,
}

export const pageMutationResolvers = {
  removeRxPage,
  saveRxPage,
  createRxPage
}