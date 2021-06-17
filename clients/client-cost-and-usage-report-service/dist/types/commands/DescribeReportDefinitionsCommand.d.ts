import { CostAndUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostAndUsageReportServiceClient";
import { DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReportDefinitionsCommandInput extends DescribeReportDefinitionsRequest {
}
export interface DescribeReportDefinitionsCommandOutput extends DescribeReportDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the AWS Cost and Usage reports available to this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new DescribeReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReportDefinitionsCommand extends $Command<DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput, CostAndUsageReportServiceClientResolvedConfig> {
    readonly input: DescribeReportDefinitionsCommandInput;
    constructor(input: DescribeReportDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostAndUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
