import { __extends } from "tslib";
import { ResetFpgaImageAttributeRequest, ResetFpgaImageAttributeResult } from "../models/models_5";
import { deserializeAws_ec2ResetFpgaImageAttributeCommand, serializeAws_ec2ResetFpgaImageAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value.
 * 		    You can only reset the load permission attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetFpgaImageAttributeCommand = /** @class */ (function (_super) {
    __extends(ResetFpgaImageAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetFpgaImageAttributeCommand(input) {
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
    ResetFpgaImageAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ResetFpgaImageAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetFpgaImageAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetFpgaImageAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetFpgaImageAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ResetFpgaImageAttributeCommand(input, context);
    };
    ResetFpgaImageAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ResetFpgaImageAttributeCommand(output, context);
    };
    return ResetFpgaImageAttributeCommand;
}($Command));
export { ResetFpgaImageAttributeCommand };
//# sourceMappingURL=ResetFpgaImageAttributeCommand.js.map