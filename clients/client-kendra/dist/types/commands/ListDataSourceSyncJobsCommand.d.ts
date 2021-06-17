import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListDataSourceSyncJobsRequest, ListDataSourceSyncJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDataSourceSyncJobsCommandInput extends ListDataSourceSyncJobsRequest {
}
export interface ListDataSourceSyncJobsCommandOutput extends ListDataSourceSyncJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets statistics about synchronizing Amazon Kendra with a data
 *       source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListDataSourceSyncJobsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListDataSourceSyncJobsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListDataSourceSyncJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSourceSyncJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceSyncJobsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataSourceSyncJobsCommand extends $Command<ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput, KendraClientResolvedConfig> {
    readonly input: ListDataSourceSyncJobsCommandInput;
    constructor(input: ListDataSourceSyncJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput>;
    private serialize;
    private deserialize;
}
