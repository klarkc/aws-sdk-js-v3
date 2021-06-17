"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVpcPeeringConnectionOptionsCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable/disable communication over the peering connection between an EC2-Classic instance that's linked to your VPC (using ClassicLink) and instances in the peer VPC.</p>
 *             </li>
 *             <li>
 *                <p>Enable/disable communication over the peering connection between instances in your VPC and an EC2-Classic instance that's linked to the peer VPC.</p>
 *             </li>
 *             <li>
 *                <p>Enable/disable the ability to resolve public DNS hostnames to private IP
 *                     addresses when queried from instances in the peer VPC.</p>
 *             </li>
 *          </ul>
 *          <p>If the peered VPCs are in the same AWS account, you can enable DNS resolution for queries
 *             from the local VPC. This ensures that queries from the local VPC resolve to private IP
 *             addresses in the peer VPC. This option is not available if the peered VPCs are in
 *             different AWS accounts or different Regions. For peered VPCs in different AWS accounts,
 *             each AWS account owner must initiate a separate request to modify the peering connection
 *             options. For inter-region peering connections, you must use the Region for the requester
 *             VPC to modify the requester VPC peering options and the Region for the accepter VPC to
 *             modify the accepter VPC peering options. To verify which VPCs are the accepter and the
 *             requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcPeeringConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcPeeringConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcPeeringConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcPeeringConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcPeeringConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVpcPeeringConnectionOptionsCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyVpcPeeringConnectionOptionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVpcPeeringConnectionOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyVpcPeeringConnectionOptionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(output, context);
    }
}
exports.ModifyVpcPeeringConnectionOptionsCommand = ModifyVpcPeeringConnectionOptionsCommand;
//# sourceMappingURL=ModifyVpcPeeringConnectionOptionsCommand.js.map