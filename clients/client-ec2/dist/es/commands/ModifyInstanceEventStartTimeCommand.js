import { __extends } from "tslib";
import { ModifyInstanceEventStartTimeRequest, ModifyInstanceEventStartTimeResult } from "../models/models_4";
import { deserializeAws_ec2ModifyInstanceEventStartTimeCommand, serializeAws_ec2ModifyInstanceEventStartTimeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceEventStartTimeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceEventStartTimeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceEventStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceEventStartTimeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceEventStartTimeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyInstanceEventStartTimeCommand = /** @class */ (function (_super) {
    __extends(ModifyInstanceEventStartTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyInstanceEventStartTimeCommand(input) {
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
    ModifyInstanceEventStartTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyInstanceEventStartTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyInstanceEventStartTimeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyInstanceEventStartTimeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyInstanceEventStartTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyInstanceEventStartTimeCommand(input, context);
    };
    ModifyInstanceEventStartTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyInstanceEventStartTimeCommand(output, context);
    };
    return ModifyInstanceEventStartTimeCommand;
}($Command));
export { ModifyInstanceEventStartTimeCommand };
//# sourceMappingURL=ModifyInstanceEventStartTimeCommand.js.map