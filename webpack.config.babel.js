import path from 'path'
import glob from 'glob'

const rules = [{
	loader: 'babel-loader',
	test: /\.js$/,
	exclude :/node_modules/
}]

const library = name => ({
	mode: 'production',
	plugins:[],
	entry 	:`./${name}/index.js`,
	externals :{ 'jails-js':'jails-js' },
	module	:{ rules },
	output  :{
		path:`${__dirname}/${name}`,
		filename :`./dist/index.js`,
		libraryTarget:'umd',
		library:name,
		umdNamedDefine :true
	}	
})

export default glob.sync('./!(node_modules)/index.js').map( file => {
	let name = path.basename(path.dirname(file))
	return library(name)
})
