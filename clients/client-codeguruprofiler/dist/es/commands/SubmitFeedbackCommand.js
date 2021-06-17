import { __extends } from "tslib";
import { SubmitFeedbackRequest, SubmitFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1SubmitFeedbackCommand, serializeAws_restJson1SubmitFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is
 *             useful or not.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, SubmitFeedbackCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, SubmitFeedbackCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new SubmitFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitFeedbackCommandInput} for command's `input` shape.
 * @see {@link SubmitFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CodeGuruProfilerClient";
        var commandName = "SubmitFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubmitFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SubmitFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubmitFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SubmitFeedbackCommand(input, context);
    };
    SubmitFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SubmitFeedbackCommand(output, context);
    };
    return SubmitFeedbackCommand;
}($Command));
export { SubmitFeedbackCommand };
//# sourceMappingURL=SubmitFeedbackCommand.js.map