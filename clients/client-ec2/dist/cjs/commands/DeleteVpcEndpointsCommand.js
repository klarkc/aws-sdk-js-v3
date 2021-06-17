"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVpcEndpointsCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes one or more specified VPC endpoints. You can delete any of the following types of VPC endpoints.  </p>
 *         <ul>
 *             <li>
 *                <p>Gateway endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Interface endpoint</p>
 *             </li>
 *          </ul>
 *         <p>The following rules apply when you delete a VPC endpoint:</p>
 *         <ul>
 *             <li>
 *                 <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables that are associated with the endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete a Gateway Load Balancer endpoint, we delete the endpoint network interfaces. </p>
 *                 <p>You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete an interface endpoint, we delete the  endpoint network interfaces.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteVpcEndpointsCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteVpcEndpointsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DeleteVpcEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DeleteVpcEndpointsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DeleteVpcEndpointsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DeleteVpcEndpointsCommand(output, context);
    }
}
exports.DeleteVpcEndpointsCommand = DeleteVpcEndpointsCommand;
//# sourceMappingURL=DeleteVpcEndpointsCommand.js.map