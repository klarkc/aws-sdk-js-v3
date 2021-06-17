import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeAnalysisPermissionsRequest, DescribeAnalysisPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAnalysisPermissionsCommandInput extends DescribeAnalysisPermissionsRequest {
}
export interface DescribeAnalysisPermissionsCommandOutput extends DescribeAnalysisPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Provides the read and write permissions for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAnalysisPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAnalysisPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeAnalysisPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnalysisPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAnalysisPermissionsCommand extends $Command<DescribeAnalysisPermissionsCommandInput, DescribeAnalysisPermissionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeAnalysisPermissionsCommandInput;
    constructor(input: DescribeAnalysisPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnalysisPermissionsCommandInput, DescribeAnalysisPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
