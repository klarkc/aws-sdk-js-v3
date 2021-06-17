import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListFlowsRequest, ListFlowsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFlowsCommandInput extends ListFlowsRequest {
}
export interface ListFlowsCommandOutput extends ListFlowsResponse, __MetadataBearer {
}
/**
 * Displays a list of flows that are associated with this account. This request returns a paginated result.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListFlowsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListFlowsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new ListFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowsCommandInput} for command's `input` shape.
 * @see {@link ListFlowsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFlowsCommand extends $Command<ListFlowsCommandInput, ListFlowsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: ListFlowsCommandInput;
    constructor(input: ListFlowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFlowsCommandInput, ListFlowsCommandOutput>;
    private serialize;
    private deserialize;
}
