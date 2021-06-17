import { __extends } from "tslib";
import { AssociateRouteTableRequest, AssociateRouteTableResult } from "../models/models_0";
import { deserializeAws_ec2AssociateRouteTableCommand, serializeAws_ec2AssociateRouteTableCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway
 *             attached to your VPC with a route table in your VPC. This association causes traffic
 *             from the subnet or gateway to be routed according to the routes in the route table. The
 *             action returns an association ID, which you need in order to disassociate the route
 *             table later. A route table can be associated with multiple subnets.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateRouteTableCommand = /** @class */ (function (_super) {
    __extends(AssociateRouteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateRouteTableCommand(input) {
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
    AssociateRouteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateRouteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateRouteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateRouteTableResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateRouteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateRouteTableCommand(input, context);
    };
    AssociateRouteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateRouteTableCommand(output, context);
    };
    return AssociateRouteTableCommand;
}($Command));
export { AssociateRouteTableCommand };
//# sourceMappingURL=AssociateRouteTableCommand.js.map