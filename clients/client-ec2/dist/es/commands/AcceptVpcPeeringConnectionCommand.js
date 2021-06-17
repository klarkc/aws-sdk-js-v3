import { __extends } from "tslib";
import { AcceptVpcPeeringConnectionRequest, AcceptVpcPeeringConnectionResult } from "../models/models_0";
import { deserializeAws_ec2AcceptVpcPeeringConnectionCommand, serializeAws_ec2AcceptVpcPeeringConnectionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var AcceptVpcPeeringConnectionCommand = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptVpcPeeringConnectionCommand(input) {
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
    AcceptVpcPeeringConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AcceptVpcPeeringConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptVpcPeeringConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptVpcPeeringConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptVpcPeeringConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AcceptVpcPeeringConnectionCommand(input, context);
    };
    AcceptVpcPeeringConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AcceptVpcPeeringConnectionCommand(output, context);
    };
    return AcceptVpcPeeringConnectionCommand;
}($Command));
export { AcceptVpcPeeringConnectionCommand };
//# sourceMappingURL=AcceptVpcPeeringConnectionCommand.js.map