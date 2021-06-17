import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDataSetsCommandInput extends ListDataSetsRequest {
}
export interface ListDataSetsCommandOutput extends ListDataSetsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the datasets belonging to the current AWS account in an AWS Region.</p>
 * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDataSetsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDataSetsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataSetsCommand extends $Command<ListDataSetsCommandInput, ListDataSetsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListDataSetsCommandInput;
    constructor(input: ListDataSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataSetsCommandInput, ListDataSetsCommandOutput>;
    private serialize;
    private deserialize;
}
