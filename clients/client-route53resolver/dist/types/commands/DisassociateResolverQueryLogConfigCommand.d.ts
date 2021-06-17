import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateResolverQueryLogConfigRequest, DisassociateResolverQueryLogConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateResolverQueryLogConfigCommandInput extends DisassociateResolverQueryLogConfigRequest {
}
export interface DisassociateResolverQueryLogConfigCommandOutput extends DisassociateResolverQueryLogConfigResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a VPC from a query logging configuration.</p>
 *
 * 		       <note>
 * 			         <p>Before you can delete a query logging configuration, you must first disassociate all VPCs
 * 				from the configuration. If you used AWS Resource Access Manager (AWS RAM) to share a
 * 				query logging configuration with other accounts, VPCs can be disassociated from the
 * 				configuration in the following ways:</p>
 * 			         <ul>
 *                <li>
 *                   <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p>
 *                </li>
 *                <li>
 *                   <p>You can stop sharing the configuration.</p>
 *                </li>
 *             </ul>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateResolverQueryLogConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverQueryLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverQueryLogConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverQueryLogConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateResolverQueryLogConfigCommand extends $Command<DisassociateResolverQueryLogConfigCommandInput, DisassociateResolverQueryLogConfigCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DisassociateResolverQueryLogConfigCommandInput;
    constructor(input: DisassociateResolverQueryLogConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResolverQueryLogConfigCommandInput, DisassociateResolverQueryLogConfigCommandOutput>;
    private serialize;
    private deserialize;
}
