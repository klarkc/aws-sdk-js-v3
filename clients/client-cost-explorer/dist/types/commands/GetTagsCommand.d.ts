import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetTagsRequest, GetTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTagsCommandInput extends GetTagsRequest {
}
export interface GetTagsCommandOutput extends GetTagsResponse, __MetadataBearer {
}
/**
 * <p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetTagsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetTagsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTagsCommandInput} for command's `input` shape.
 * @see {@link GetTagsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTagsCommand extends $Command<GetTagsCommandInput, GetTagsCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetTagsCommandInput;
    constructor(input: GetTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTagsCommandInput, GetTagsCommandOutput>;
    private serialize;
    private deserialize;
}
