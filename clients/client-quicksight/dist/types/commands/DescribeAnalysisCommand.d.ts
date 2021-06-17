import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeAnalysisRequest, DescribeAnalysisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAnalysisCommandInput extends DescribeAnalysisRequest {
}
export interface DescribeAnalysisCommandOutput extends DescribeAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Provides a summary of the metadata for an analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAnalysisCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAnalysisCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAnalysisCommand extends $Command<DescribeAnalysisCommandInput, DescribeAnalysisCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DescribeAnalysisCommandInput;
    constructor(input: DescribeAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnalysisCommandInput, DescribeAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
