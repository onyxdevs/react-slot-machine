class Logger {
    private logs: object[];

    constructor() {
        this.logs = [];
    }

    /**
     * Runs only on development environment
     * @returns {void}
     */
    debug(...args: any[]) {
        if (process.env.NODE_ENV !== 'development') return;

        // Convert arguments to cleaned array
        const newArgs = [...args];

        const filePath = newArgs[0];
        // const fileName = filePath.replace(/^.*[\\/]/, '');
        const fileName = filePath;

        newArgs[0] = '%c' + fileName;
        newArgs.splice(1, 0, 'color: #1c6ef7; font-weight: bold;');

        this.logs.push({
            type: 'DEBUG',
            date: new Date(Date.now()).toISOString(),
            log: newArgs
        });

        console.log(...newArgs);
    }

    /**
     * Runs only on production environment
     * @returns {void}
     */
    silly(...args: any[]) {
        if (process.env.NODE_ENV !== 'production') return;

        // Convert arguments to cleaned array
        const newArgs = [...args];

        const filePath = newArgs[0];
        // const fileName = filePath.replace(/^.*[\\/]/, '');
        const fileName = filePath;

        newArgs[0] = '%c' + fileName;
        newArgs.splice(1, 0, 'color: #1c6ef7; font-weight: bold;');

        this.logs.push({
            type: 'DEBUG',
            date: new Date(Date.now()).toISOString(),
            log: newArgs
        });

        console.log(...newArgs);
    }

    /**
     * Runs anywhere
     * @returns {void}
     */
    error(...args: any[]) {
        // Convert arguments to cleaned array
        const newArgs = [...args];

        newArgs[0] = '%c' + newArgs[0];
        newArgs.splice(1, 0, 'color: red; font-weight: bold;');

        this.logs.push({
            type: 'ERROR',
            date: new Date(Date.now()).toISOString(),
            log: newArgs
        });

        console.error(...newArgs);
    }
}
export const logger = new Logger();
