import { __extends } from "tslib";
import { TerminateAppRequest, TerminateAppResponse } from "../models/models_0";
import { deserializeAws_json1_1TerminateAppCommand, serializeAws_json1_1TerminateAppCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Terminates the stack for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, TerminateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, TerminateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new TerminateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateAppCommandInput} for command's `input` shape.
 * @see {@link TerminateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateAppCommand = /** @class */ (function (_super) {
    __extends(TerminateAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateAppCommand(input) {
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
    TerminateAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "TerminateAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TerminateAppCommand(input, context);
    };
    TerminateAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TerminateAppCommand(output, context);
    };
    return TerminateAppCommand;
}($Command));
export { TerminateAppCommand };
//# sourceMappingURL=TerminateAppCommand.js.map