import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDataSetRequest, DescribeDataSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataSetCommandInput extends DescribeDataSetRequest {
}
export interface DescribeDataSetCommandOutput extends DescribeDataSetResponse, __MetadataBearer {
}
/**
 * <p>Describes a dataset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSetCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataSetCommand extends $Command<DescribeDataSetCommandInput, DescribeDataSetCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeDataSetCommandInput;
    constructor(input: DescribeDataSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSetCommandInput, DescribeDataSetCommandOutput>;
    private serialize;
    private deserialize;
}
