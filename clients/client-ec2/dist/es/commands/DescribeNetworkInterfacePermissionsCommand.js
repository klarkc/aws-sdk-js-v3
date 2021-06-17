import { __extends } from "tslib";
import { DescribeNetworkInterfacePermissionsRequest, DescribeNetworkInterfacePermissionsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeNetworkInterfacePermissionsCommand, serializeAws_ec2DescribeNetworkInterfacePermissionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the permissions for your network interfaces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfacePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfacePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNetworkInterfacePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfacePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNetworkInterfacePermissionsCommand(input) {
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
    DescribeNetworkInterfacePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNetworkInterfacePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNetworkInterfacePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNetworkInterfacePermissionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNetworkInterfacePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNetworkInterfacePermissionsCommand(input, context);
    };
    DescribeNetworkInterfacePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNetworkInterfacePermissionsCommand(output, context);
    };
    return DescribeNetworkInterfacePermissionsCommand;
}($Command));
export { DescribeNetworkInterfacePermissionsCommand };
//# sourceMappingURL=DescribeNetworkInterfacePermissionsCommand.js.map