import { __extends } from "tslib";
import { ModifyFpgaImageAttributeRequest, ModifyFpgaImageAttributeResult } from "../models/models_4";
import { deserializeAws_ec2ModifyFpgaImageAttributeCommand, serializeAws_ec2ModifyFpgaImageAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyFpgaImageAttributeCommand = /** @class */ (function (_super) {
    __extends(ModifyFpgaImageAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyFpgaImageAttributeCommand(input) {
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
    ModifyFpgaImageAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyFpgaImageAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyFpgaImageAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyFpgaImageAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyFpgaImageAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyFpgaImageAttributeCommand(input, context);
    };
    ModifyFpgaImageAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyFpgaImageAttributeCommand(output, context);
    };
    return ModifyFpgaImageAttributeCommand;
}($Command));
export { ModifyFpgaImageAttributeCommand };
//# sourceMappingURL=ModifyFpgaImageAttributeCommand.js.map