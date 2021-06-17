import { CostAndUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostAndUsageReportServiceClient";
import { PutReportDefinitionRequest, PutReportDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutReportDefinitionCommandInput extends PutReportDefinitionRequest {
}
export interface PutReportDefinitionCommandOutput extends PutReportDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new report using the description that you provide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, PutReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, PutReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new PutReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutReportDefinitionCommand extends $Command<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput, CostAndUsageReportServiceClientResolvedConfig> {
    readonly input: PutReportDefinitionCommandInput;
    constructor(input: PutReportDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostAndUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
