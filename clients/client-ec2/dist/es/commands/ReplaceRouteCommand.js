import { __extends } from "tslib";
import { ReplaceRouteRequest } from "../models/models_4";
import { deserializeAws_ec2ReplaceRouteCommand, serializeAws_ec2ReplaceRouteCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces an existing route within a route table in a VPC. You must provide only one of
 *             the following: internet gateway, virtual private gateway, NAT instance, NAT gateway, VPC
 *             peering connection, network interface, egress-only internet gateway, or transit
 *             gateway.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceRouteCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceRouteCommand = /** @class */ (function (_super) {
    __extends(ReplaceRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceRouteCommand(input) {
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
    ReplaceRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReplaceRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReplaceRouteCommand(input, context);
    };
    ReplaceRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReplaceRouteCommand(output, context);
    };
    return ReplaceRouteCommand;
}($Command));
export { ReplaceRouteCommand };
//# sourceMappingURL=ReplaceRouteCommand.js.map