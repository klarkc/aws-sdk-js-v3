"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateClientVpnTargetNetworkCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the
 * 			last target network from a Client VPN, the following happens:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The route that was automatically added for the VPC is deleted</p>
 * 			         </li>
 *             <li>
 * 				           <p>All active client connections are terminated</p>
 * 			         </li>
 *             <li>
 * 				           <p>New client connections are disallowed</p>
 * 			         </li>
 *             <li>
 * 				           <p>The Client VPN endpoint's status changes to <code>pending-associate</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link DisassociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisassociateClientVpnTargetNetworkCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "DisassociateClientVpnTargetNetworkCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.DisassociateClientVpnTargetNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.DisassociateClientVpnTargetNetworkResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DisassociateClientVpnTargetNetworkCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand(output, context);
    }
}
exports.DisassociateClientVpnTargetNetworkCommand = DisassociateClientVpnTargetNetworkCommand;
//# sourceMappingURL=DisassociateClientVpnTargetNetworkCommand.js.map