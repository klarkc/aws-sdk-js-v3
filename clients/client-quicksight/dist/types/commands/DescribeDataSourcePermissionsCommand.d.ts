import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDataSourcePermissionsRequest, DescribeDataSourcePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataSourcePermissionsCommandInput extends DescribeDataSourcePermissionsRequest {
}
export interface DescribeDataSourcePermissionsCommandOutput extends DescribeDataSourcePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Describes the resource permissions for a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataSourcePermissionsCommand extends $Command<DescribeDataSourcePermissionsCommandInput, DescribeDataSourcePermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeDataSourcePermissionsCommandInput;
    constructor(input: DescribeDataSourcePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSourcePermissionsCommandInput, DescribeDataSourcePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
