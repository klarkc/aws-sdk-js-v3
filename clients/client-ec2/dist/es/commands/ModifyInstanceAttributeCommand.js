import { __extends } from "tslib";
import { ModifyInstanceAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifyInstanceAttributeCommand, serializeAws_ec2ModifyInstanceAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified attribute of the specified instance. You can specify only one
 *             attribute at a time.</p>
 *         <p>
 *             <b>Note: </b>Using this action to change the security groups
 *             associated with an elastic network interface (ENI) attached to an instance in a VPC can
 *             result in an error if the instance has more than one ENI. To change the security groups
 *             associated with an ENI attached to an instance that has multiple ENIs, we recommend that
 *             you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p>
 *         <p>To modify some attributes, the instance must be stopped. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modifying attributes of a stopped instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceAttributeCommand(input) {
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
    ModifyInstanceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyInstanceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyInstanceAttributeCommand(input, context);
    };
    ModifyInstanceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyInstanceAttributeCommand(output, context);
    };
    return ModifyInstanceAttributeCommand;
}($Command));
export { ModifyInstanceAttributeCommand };
//# sourceMappingURL=ModifyInstanceAttributeCommand.js.map