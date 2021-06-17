"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVpcPeeringConnectionCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner
 *             of the accepter VPC can delete the VPC peering connection if it's in the
 *                 <code>active</code> state. The owner of the requester VPC can delete a VPC peering
 *             connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering
 *             connection that's in the <code>failed</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteVpcPeeringConnectionCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteVpcPeeringConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DeleteVpcPeeringConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DeleteVpcPeeringConnectionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DeleteVpcPeeringConnectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DeleteVpcPeeringConnectionCommand(output, context);
    }
}
exports.DeleteVpcPeeringConnectionCommand = DeleteVpcPeeringConnectionCommand;
//# sourceMappingURL=DeleteVpcPeeringConnectionCommand.js.map