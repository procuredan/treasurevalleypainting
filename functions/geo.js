// Cloudflare Pages Function — returns the visitor's coarse location from Cloudflare's
// edge (request.cf). Used by the client geo script to localize headlines. No PII stored.
export function onRequest(context){
  var cf=(context.request&&context.request.cf)||{};
  var body=JSON.stringify({city:cf.city||"",region:cf.region||"",country:cf.country||""});
  return new Response(body,{headers:{"content-type":"application/json","cache-control":"no-store"}});
}
