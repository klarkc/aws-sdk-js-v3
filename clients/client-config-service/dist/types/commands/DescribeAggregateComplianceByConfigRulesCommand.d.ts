import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeAggregateComplianceByConfigRulesRequest, DescribeAggregateComplianceByConfigRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAggregateComplianceByConfigRulesCommandInput extends DescribeAggregateComplianceByConfigRulesRequest {
}
export interface DescribeAggregateComplianceByConfigRulesCommandOutput extends DescribeAggregateComplianceByConfigRulesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of compliant and noncompliant rules with the
 * 			number of resources for compliant and noncompliant rules.
 * 			</p>
 * 		       <note>
 * 			         <p>The results can return an empty result page, but if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregateComplianceByConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAggregateComplianceByConfigRulesCommand extends $Command<DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeAggregateComplianceByConfigRulesCommandInput;
    constructor(input: DescribeAggregateComplianceByConfigRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput>;
    private serialize;
    private deserialize;
}
