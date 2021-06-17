import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGroupCommandInput extends DescribeGroupRequest {
}
export interface DescribeGroupCommandOutput extends DescribeGroupResponse, __MetadataBearer {
}
/**
 * <p>Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeGroupCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeGroupCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGroupCommand extends $Command<DescribeGroupCommandInput, DescribeGroupCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeGroupCommandInput;
    constructor(input: DescribeGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGroupCommandInput, DescribeGroupCommandOutput>;
    private serialize;
    private deserialize;
}
