import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetConformancePackComplianceSummaryRequest, GetConformancePackComplianceSummaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetConformancePackComplianceSummaryCommandInput extends GetConformancePackComplianceSummaryRequest {
}
export interface GetConformancePackComplianceSummaryCommandOutput extends GetConformancePackComplianceSummaryResponse, __MetadataBearer {
}
/**
 * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConformancePackComplianceSummaryCommand extends $Command<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetConformancePackComplianceSummaryCommandInput;
    constructor(input: GetConformancePackComplianceSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConformancePackComplianceSummaryCommandInput, GetConformancePackComplianceSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
