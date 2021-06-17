import { __extends } from "tslib";
import { RejectVpcPeeringConnectionRequest, RejectVpcPeeringConnectionResult } from "../models/models_4";
import { deserializeAws_ec2RejectVpcPeeringConnectionCommand, serializeAws_ec2RejectVpcPeeringConnectionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the
 * 				<code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request
 * 			to view your outstanding VPC peering connection requests. To delete an active VPC peering
 * 			connection, or to delete a VPC peering connection request that you initiated, use	<a>DeleteVpcPeeringConnection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectVpcPeeringConnectionCommand = /** @class */ (function (_super) {
    __extends(RejectVpcPeeringConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectVpcPeeringConnectionCommand(input) {
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
    RejectVpcPeeringConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RejectVpcPeeringConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectVpcPeeringConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RejectVpcPeeringConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectVpcPeeringConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RejectVpcPeeringConnectionCommand(input, context);
    };
    RejectVpcPeeringConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RejectVpcPeeringConnectionCommand(output, context);
    };
    return RejectVpcPeeringConnectionCommand;
}($Command));
export { RejectVpcPeeringConnectionCommand };
//# sourceMappingURL=RejectVpcPeeringConnectionCommand.js.map