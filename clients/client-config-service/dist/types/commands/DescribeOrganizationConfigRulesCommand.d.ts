import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConfigRulesRequest, DescribeOrganizationConfigRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrganizationConfigRulesCommandInput extends DescribeOrganizationConfigRulesRequest {
}
export interface DescribeOrganizationConfigRulesCommandOutput extends DescribeOrganizationConfigRulesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of organization config rules. </p>
 *
 * 		       <note>
 *             <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization config rule names.
 * 			It is only applicable, when you request all the organization config rules.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrganizationConfigRulesCommand extends $Command<DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConfigRulesCommandInput;
    constructor(input: DescribeOrganizationConfigRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput>;
    private serialize;
    private deserialize;
}
