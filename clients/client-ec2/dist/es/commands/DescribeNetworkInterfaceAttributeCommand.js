import { __extends } from "tslib";
import { DescribeNetworkInterfaceAttributeRequest, DescribeNetworkInterfaceAttributeResult } from "../models/models_3";
import { deserializeAws_ec2DescribeNetworkInterfaceAttributeCommand, serializeAws_ec2DescribeNetworkInterfaceAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNetworkInterfaceAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfaceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNetworkInterfaceAttributeCommand(input) {
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
    DescribeNetworkInterfaceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNetworkInterfaceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNetworkInterfaceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNetworkInterfaceAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNetworkInterfaceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNetworkInterfaceAttributeCommand(input, context);
    };
    DescribeNetworkInterfaceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNetworkInterfaceAttributeCommand(output, context);
    };
    return DescribeNetworkInterfaceAttributeCommand;
}($Command));
export { DescribeNetworkInterfaceAttributeCommand };
//# sourceMappingURL=DescribeNetworkInterfaceAttributeCommand.js.map