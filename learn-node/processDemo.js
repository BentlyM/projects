//argv good for the terminal mostly

const access = 3 // does not have to be 3 used to access the NEXT arg in whatever

console.log(process.argv); // "write node [directory location] import -s" for example 
console.log(process.argv[access])

//process,env
console.log(process.env.LOGNAME); // (process.env) used for system variables for example LOGNAME

console.log(process.pid);

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`about to exit with code: ${code}`);
})

//exit()
process.exit(0); // exits process from the rest of files under it
console.log('Hello world from after exit')