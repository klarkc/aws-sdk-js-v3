import { __extends } from "tslib";
import { SubmitFeedbackRequest } from "../models/models_0";
import { deserializeAws_json1_1SubmitFeedbackCommand, serializeAws_json1_1SubmitFeedbackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables you to provide feedback to Amazon Kendra to improve the
 *             performance of the service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, SubmitFeedbackCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, SubmitFeedbackCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new SubmitFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitFeedbackCommandInput} for command's `input` shape.
 * @see {@link SubmitFeedbackCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SubmitFeedbackCommand = /** @class */ (function (_super) {
    __extends(SubmitFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SubmitFeedbackCommand(input) {
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
    SubmitFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "SubmitFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubmitFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubmitFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SubmitFeedbackCommand(input, context);
    };
    SubmitFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SubmitFeedbackCommand(output, context);
    };
    return SubmitFeedbackCommand;
}($Command));
export { SubmitFeedbackCommand };
//# sourceMappingURL=SubmitFeedbackCommand.js.map