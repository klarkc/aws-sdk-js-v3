import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetAggregateConformancePackComplianceSummaryRequest, GetAggregateConformancePackComplianceSummaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAggregateConformancePackComplianceSummaryCommandInput extends GetAggregateConformancePackComplianceSummaryRequest {
}
export interface GetAggregateConformancePackComplianceSummaryCommandOutput extends GetAggregateConformancePackComplianceSummaryResponse, __MetadataBearer {
}
/**
 * <p>Returns the count of compliant and noncompliant conformance packs across all AWS Accounts and AWS Regions in an aggregator. You can filter based on AWS Account ID or AWS Region.</p>
 * 		       <note>
 *             <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAggregateConformancePackComplianceSummaryCommand extends $Command<GetAggregateConformancePackComplianceSummaryCommandInput, GetAggregateConformancePackComplianceSummaryCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetAggregateConformancePackComplianceSummaryCommandInput;
    constructor(input: GetAggregateConformancePackComplianceSummaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAggregateConformancePackComplianceSummaryCommandInput, GetAggregateConformancePackComplianceSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
