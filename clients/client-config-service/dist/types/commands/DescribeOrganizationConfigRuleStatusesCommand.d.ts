import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConfigRuleStatusesRequest, DescribeOrganizationConfigRuleStatusesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrganizationConfigRuleStatusesCommandInput extends DescribeOrganizationConfigRuleStatusesRequest {
}
export interface DescribeOrganizationConfigRuleStatusesCommandOutput extends DescribeOrganizationConfigRuleStatusesResponse, __MetadataBearer {
}
/**
 * <p>Provides organization config rule deployment status for an organization.</p>
 *
 * 		       <note>
 *             <p>The status is not considered successful until organization config rule is successfully deployed in all the member
 * 			accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization config rule names.
 * 			It is only applicable, when you request all the organization config rules.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConfigRuleStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrganizationConfigRuleStatusesCommand extends $Command<DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConfigRuleStatusesCommandInput;
    constructor(input: DescribeOrganizationConfigRuleStatusesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput>;
    private serialize;
    private deserialize;
}
