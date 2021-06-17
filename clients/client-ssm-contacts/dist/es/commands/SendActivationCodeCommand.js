import { __extends } from "tslib";
import { SendActivationCodeRequest, SendActivationCodeResult } from "../models/models_0";
import { deserializeAws_json1_1SendActivationCodeCommand, serializeAws_json1_1SendActivationCodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends an activation code to a contact channel. The contact can use this code to activate
 *          the contact channel in the console or with the <code>ActivateChannel</code> action.
 *          Incident Manager can't engage a contact channel until it has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, SendActivationCodeCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, SendActivationCodeCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new SendActivationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendActivationCodeCommandInput} for command's `input` shape.
 * @see {@link SendActivationCodeCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendActivationCodeCommand = /** @class */ (function (_super) {
    __extends(SendActivationCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendActivationCodeCommand(input) {
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
    SendActivationCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "SendActivationCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendActivationCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendActivationCodeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendActivationCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendActivationCodeCommand(input, context);
    };
    SendActivationCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendActivationCodeCommand(output, context);
    };
    return SendActivationCodeCommand;
}($Command));
export { SendActivationCodeCommand };
//# sourceMappingURL=SendActivationCodeCommand.js.map