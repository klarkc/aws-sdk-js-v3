import { __extends } from "tslib";
import { DescribeVpcEndpointConnectionNotificationsRequest, DescribeVpcEndpointConnectionNotificationsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand, serializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the connection notifications for VPC endpoints and VPC endpoint
 *             services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionNotificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionNotificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointConnectionNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointConnectionNotificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionNotificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcEndpointConnectionNotificationsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcEndpointConnectionNotificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcEndpointConnectionNotificationsCommand(input) {
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
    DescribeVpcEndpointConnectionNotificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcEndpointConnectionNotificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcEndpointConnectionNotificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcEndpointConnectionNotificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcEndpointConnectionNotificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand(input, context);
    };
    DescribeVpcEndpointConnectionNotificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcEndpointConnectionNotificationsCommand(output, context);
    };
    return DescribeVpcEndpointConnectionNotificationsCommand;
}($Command));
export { DescribeVpcEndpointConnectionNotificationsCommand };
//# sourceMappingURL=DescribeVpcEndpointConnectionNotificationsCommand.js.map