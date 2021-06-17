import { __extends } from "tslib";
import { EnableVolumeIORequest } from "../models/models_4";
import { deserializeAws_ec2EnableVolumeIOCommand, serializeAws_ec2EnableVolumeIOCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables I/O operations for a volume that had I/O operations disabled because the data on
 *       the volume was potentially inconsistent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVolumeIOCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVolumeIOCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVolumeIOCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableVolumeIOCommandInput} for command's `input` shape.
 * @see {@link EnableVolumeIOCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableVolumeIOCommand = /** @class */ (function (_super) {
    __extends(EnableVolumeIOCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableVolumeIOCommand(input) {
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
    EnableVolumeIOCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableVolumeIOCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableVolumeIORequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableVolumeIOCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableVolumeIOCommand(input, context);
    };
    EnableVolumeIOCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableVolumeIOCommand(output, context);
    };
    return EnableVolumeIOCommand;
}($Command));
export { EnableVolumeIOCommand };
//# sourceMappingURL=EnableVolumeIOCommand.js.map