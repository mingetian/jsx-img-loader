import path from 'path';

import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

function jsxImgLoader(source){
	const options = getOptions(this);
	const defaultSource = './static/img'; let {imgSource} = options;
	validateOptions(schema, options, {
		name: 'IMG_JSX_LOADER',
		baseDataPath: 'options',
	});
	if(!imgSource){
		imgSource = defaultSource;
	}
	const rootDir = this.rootContext;
	const rootPath = path.resolve(rootDir,imgSource).replace(/\\/g,'/');
	const reg = /(<[\s\S]*)?(?:'|")@\/?([^'"]*)(png|jpg|jpeg|gif|svg)(?:'|")/g;
	const newSource = source.replace(reg,(_,b,c,d)=>{
		let code;
		if(b){
			code = `${b}{require("${rootPath}/${c+d}")}`;
		}else{
			code = `require("${rootPath}/${c+d}")`;
		}
		return code;
	})
	return newSource;
}

export default jsxImgLoader;