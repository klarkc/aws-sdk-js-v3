import { __extends } from "tslib";
import { TerminateSessionRequest, TerminateSessionResponse } from "../models/models_1";
import { deserializeAws_json1_1TerminateSessionCommand, serializeAws_json1_1TerminateSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently ends a session and closes the data connection between the Session Manager client and
 *    SSM Agent on the instance. A terminated session cannot be resumed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, TerminateSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, TerminateSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateSessionCommand = /** @class */ (function (_super) {
    __extends(TerminateSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateSessionCommand(input) {
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
    TerminateSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "TerminateSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TerminateSessionCommand(input, context);
    };
    TerminateSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TerminateSessionCommand(output, context);
    };
    return TerminateSessionCommand;
}($Command));
export { TerminateSessionCommand };
//# sourceMappingURL=TerminateSessionCommand.js.map