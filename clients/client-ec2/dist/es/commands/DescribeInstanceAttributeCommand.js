import { __extends } from "tslib";
import { DescribeInstanceAttributeRequest, InstanceAttribute } from "../models/models_2";
import { deserializeAws_ec2DescribeInstanceAttributeCommand, serializeAws_ec2DescribeInstanceAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified attribute of the specified instance. You can specify only one
 *             attribute at a time. Valid attribute values are: <code>instanceType</code> |
 *                 <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> |
 *                 <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code>
 *             | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> |
 *                 <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
 *                 <code>ebsOptimized</code> | <code>sriovNetSupport</code>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceAttributeCommand(input) {
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
    DescribeInstanceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstanceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InstanceAttribute.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstanceAttributeCommand(input, context);
    };
    DescribeInstanceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstanceAttributeCommand(output, context);
    };
    return DescribeInstanceAttributeCommand;
}($Command));
export { DescribeInstanceAttributeCommand };
//# sourceMappingURL=DescribeInstanceAttributeCommand.js.map