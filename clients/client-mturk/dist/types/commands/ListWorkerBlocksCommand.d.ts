import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorkerBlocksCommandInput extends ListWorkerBlocksRequest {
}
export interface ListWorkerBlocksCommandOutput extends ListWorkerBlocksResponse, __MetadataBearer {
}
/**
 * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkerBlocksCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkerBlocksCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListWorkerBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkerBlocksCommandInput} for command's `input` shape.
 * @see {@link ListWorkerBlocksCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkerBlocksCommand extends $Command<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListWorkerBlocksCommandInput;
    constructor(input: ListWorkerBlocksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput>;
    private serialize;
    private deserialize;
}
