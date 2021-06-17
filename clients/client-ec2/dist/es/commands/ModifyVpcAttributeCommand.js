import { __extends } from "tslib";
import { ModifyVpcAttributeRequest } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcAttributeCommand, serializeAws_ec2ModifyVpcAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified attribute of the specified VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpcAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcAttributeCommand(input) {
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
    ModifyVpcAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcAttributeCommand(input, context);
    };
    ModifyVpcAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcAttributeCommand(output, context);
    };
    return ModifyVpcAttributeCommand;
}($Command));
export { ModifyVpcAttributeCommand };
//# sourceMappingURL=ModifyVpcAttributeCommand.js.map