import { CostAndUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostAndUsageReportServiceClient";
import { DeleteReportDefinitionRequest, DeleteReportDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReportDefinitionCommandInput extends DeleteReportDefinitionRequest {
}
export interface DeleteReportDefinitionCommandOutput extends DeleteReportDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DeleteReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DeleteReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new DeleteReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReportDefinitionCommand extends $Command<DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput, CostAndUsageReportServiceClientResolvedConfig> {
    readonly input: DeleteReportDefinitionCommandInput;
    constructor(input: DeleteReportDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostAndUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
