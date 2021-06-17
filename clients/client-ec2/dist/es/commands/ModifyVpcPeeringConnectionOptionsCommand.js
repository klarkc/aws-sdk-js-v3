import { __extends } from "tslib";
import { ModifyVpcPeeringConnectionOptionsRequest, ModifyVpcPeeringConnectionOptionsResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand, serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ModifyVpcPeeringConnectionOptionsCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcPeeringConnectionOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcPeeringConnectionOptionsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ModifyVpcPeeringConnectionOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcPeeringConnectionOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcPeeringConnectionOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpcPeeringConnectionOptionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcPeeringConnectionOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(input, context);
    };
    ModifyVpcPeeringConnectionOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(output, context);
    };
    return ModifyVpcPeeringConnectionOptionsCommand;
}($Command));
export { ModifyVpcPeeringConnectionOptionsCommand };
//# sourceMappingURL=ModifyVpcPeeringConnectionOptionsCommand.js.map