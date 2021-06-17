"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateResolverQueryLogConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DisassociateResolverQueryLogConfigCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "Route53ResolverClient";
        const commandName = "DisassociateResolverQueryLogConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisassociateResolverQueryLogConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisassociateResolverQueryLogConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DisassociateResolverQueryLogConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand(output, context);
    }
}
exports.DisassociateResolverQueryLogConfigCommand = DisassociateResolverQueryLogConfigCommand;
//# sourceMappingURL=DisassociateResolverQueryLogConfigCommand.js.map