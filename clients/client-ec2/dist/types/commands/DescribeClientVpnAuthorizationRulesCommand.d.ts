import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnAuthorizationRulesRequest, DescribeClientVpnAuthorizationRulesResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClientVpnAuthorizationRulesCommandInput extends DescribeClientVpnAuthorizationRulesRequest {
}
export interface DescribeClientVpnAuthorizationRulesCommandOutput extends DescribeClientVpnAuthorizationRulesResult, __MetadataBearer {
}
/**
 * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnAuthorizationRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnAuthorizationRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnAuthorizationRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnAuthorizationRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnAuthorizationRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClientVpnAuthorizationRulesCommand extends $Command<DescribeClientVpnAuthorizationRulesCommandInput, DescribeClientVpnAuthorizationRulesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnAuthorizationRulesCommandInput;
    constructor(input: DescribeClientVpnAuthorizationRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnAuthorizationRulesCommandInput, DescribeClientVpnAuthorizationRulesCommandOutput>;
    private serialize;
    private deserialize;
}
