"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListJournalS3ExportsForLedger = void 0;
const QLDB_1 = require("../QLDB");
const QLDBClient_1 = require("../QLDBClient");
const ListJournalS3ExportsForLedgerCommand_1 = require("../commands/ListJournalS3ExportsForLedgerCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListJournalS3ExportsForLedgerCommand_1.ListJournalS3ExportsForLedgerCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listJournalS3ExportsForLedger(input, ...args);
};
async function* paginateListJournalS3ExportsForLedger(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof QLDB_1.QLDB) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof QLDBClient_1.QLDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected QLDB | QLDBClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListJournalS3ExportsForLedger = paginateListJournalS3ExportsForLedger;
//# sourceMappingURL=ListJournalS3ExportsForLedgerPaginator.js.map