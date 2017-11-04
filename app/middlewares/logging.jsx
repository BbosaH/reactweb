export const StateLogging =({getState,dispatch})=>next=>action=>{
	next(action)
	console.log(getState())
}
export const ActionLogging =({getState,dispatch})=>next=>action=>{
	console.log(action)
	next(action)
}
//export default Logging;