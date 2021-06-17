import { __extends } from "tslib";
import { ModifySubnetAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifySubnetAttributeCommand, serializeAws_ec2ModifySubnetAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySubnetAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySubnetAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifySubnetAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySubnetAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySubnetAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifySubnetAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifySubnetAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifySubnetAttributeCommand(input) {
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
    ModifySubnetAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifySubnetAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifySubnetAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifySubnetAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifySubnetAttributeCommand(input, context);
    };
    ModifySubnetAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifySubnetAttributeCommand(output, context);
    };
    return ModifySubnetAttributeCommand;
}($Command));
export { ModifySubnetAttributeCommand };
//# sourceMappingURL=ModifySubnetAttributeCommand.js.map