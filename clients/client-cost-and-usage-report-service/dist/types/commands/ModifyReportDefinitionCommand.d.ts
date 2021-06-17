import { CostAndUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostAndUsageReportServiceClient";
import { ModifyReportDefinitionRequest, ModifyReportDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyReportDefinitionCommandInput extends ModifyReportDefinitionRequest {
}
export interface ModifyReportDefinitionCommandOutput extends ModifyReportDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Allows you to programatically update your report preferences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, ModifyReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, ModifyReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new ModifyReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link ModifyReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyReportDefinitionCommand extends $Command<ModifyReportDefinitionCommandInput, ModifyReportDefinitionCommandOutput, CostAndUsageReportServiceClientResolvedConfig> {
    readonly input: ModifyReportDefinitionCommandInput;
    constructor(input: ModifyReportDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostAndUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReportDefinitionCommandInput, ModifyReportDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
