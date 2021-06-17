import { __extends } from "tslib";
import { ModifyNetworkInterfaceAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifyNetworkInterfaceAttributeCommand, serializeAws_ec2ModifyNetworkInterfaceAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified network interface attribute. You can specify only one
 *             attribute at a time. You can use this action to attach and detach security groups from
 *             an existing EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyNetworkInterfaceAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyNetworkInterfaceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyNetworkInterfaceAttributeCommand(input) {
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
    ModifyNetworkInterfaceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyNetworkInterfaceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyNetworkInterfaceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyNetworkInterfaceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyNetworkInterfaceAttributeCommand(input, context);
    };
    ModifyNetworkInterfaceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyNetworkInterfaceAttributeCommand(output, context);
    };
    return ModifyNetworkInterfaceAttributeCommand;
}($Command));
export { ModifyNetworkInterfaceAttributeCommand };
//# sourceMappingURL=ModifyNetworkInterfaceAttributeCommand.js.map