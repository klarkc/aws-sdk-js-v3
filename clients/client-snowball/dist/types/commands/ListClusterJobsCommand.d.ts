import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListClusterJobsRequest, ListClusterJobsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListClusterJobsCommandInput extends ListClusterJobsRequest {
}
export interface ListClusterJobsCommandOutput extends ListClusterJobsResult, __MetadataBearer {
}
/**
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
 *       state, a job's ID, and other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClusterJobsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClusterJobsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterJobsCommandInput} for command's `input` shape.
 * @see {@link ListClusterJobsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListClusterJobsCommand extends $Command<ListClusterJobsCommandInput, ListClusterJobsCommandOutput, SnowballClientResolvedConfig> {
    readonly input: ListClusterJobsCommandInput;
    constructor(input: ListClusterJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClusterJobsCommandInput, ListClusterJobsCommandOutput>;
    private serialize;
    private deserialize;
}
