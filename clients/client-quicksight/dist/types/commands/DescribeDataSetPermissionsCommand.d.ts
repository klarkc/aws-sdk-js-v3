import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDataSetPermissionsRequest, DescribeDataSetPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataSetPermissionsCommandInput extends DescribeDataSetPermissionsRequest {
}
export interface DescribeDataSetPermissionsCommandOutput extends DescribeDataSetPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Describes the permissions on a dataset.</p>
 * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSetPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSetPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSetPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataSetPermissionsCommand extends $Command<DescribeDataSetPermissionsCommandInput, DescribeDataSetPermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeDataSetPermissionsCommandInput;
    constructor(input: DescribeDataSetPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSetPermissionsCommandInput, DescribeDataSetPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
