import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeAggregateComplianceByConformancePacksRequest, DescribeAggregateComplianceByConformancePacksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAggregateComplianceByConformancePacksCommandInput extends DescribeAggregateComplianceByConformancePacksRequest {
}
export interface DescribeAggregateComplianceByConformancePacksCommandOutput extends DescribeAggregateComplianceByConformancePacksResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant AWS Config rules within each conformance pack.
 * 			Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 * 		       <note>
 *             <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregateComplianceByConformancePacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAggregateComplianceByConformancePacksCommand extends $Command<DescribeAggregateComplianceByConformancePacksCommandInput, DescribeAggregateComplianceByConformancePacksCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeAggregateComplianceByConformancePacksCommandInput;
    constructor(input: DescribeAggregateComplianceByConformancePacksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregateComplianceByConformancePacksCommandInput, DescribeAggregateComplianceByConformancePacksCommandOutput>;
    private serialize;
    private deserialize;
}
