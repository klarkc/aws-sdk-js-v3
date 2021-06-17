"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDownloadDBLogFilePortion = void 0;
const RDS_1 = require("../RDS");
const RDSClient_1 = require("../RDSClient");
const DownloadDBLogFilePortionCommand_1 = require("../commands/DownloadDBLogFilePortionCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new DownloadDBLogFilePortionCommand_1.DownloadDBLogFilePortionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.downloadDBLogFilePortion(input, ...args);
};
async function* paginateDownloadDBLogFilePortion(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.Marker
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["NumberOfLines"] = config.pageSize;
        if (config.client instanceof RDS_1.RDS) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof RDSClient_1.RDSClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected RDS | RDSClient");
        }
        yield page;
        token = page.Marker;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateDownloadDBLogFilePortion = paginateDownloadDBLogFilePortion;
//# sourceMappingURL=DownloadDBLogFilePortionPaginator.js.map