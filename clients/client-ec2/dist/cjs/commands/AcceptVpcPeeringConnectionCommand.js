"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptVpcPeeringConnectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must
 *       be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC.
 *       Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC
 *       peering connection requests.</p>
 *   	      <p>For an inter-Region VPC peering connection request, you must accept the VPC peering
 *       connection in the Region of the accepter VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AcceptVpcPeeringConnectionCommand extends smithy_client_1.Command {
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
        const commandName = "AcceptVpcPeeringConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AcceptVpcPeeringConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AcceptVpcPeeringConnectionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2AcceptVpcPeeringConnectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2AcceptVpcPeeringConnectionCommand(output, context);
    }
}
exports.AcceptVpcPeeringConnectionCommand = AcceptVpcPeeringConnectionCommand;
//# sourceMappingURL=AcceptVpcPeeringConnectionCommand.js.map