import { __extends } from "tslib";
import { PutFeedbackRequest, PutFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1PutFeedbackCommand, serializeAws_restJson1PutFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add feedback for an anomalous metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, PutFeedbackCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, PutFeedbackCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFeedbackCommand = /** @class */ (function (_super) {
    __extends(PutFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFeedbackCommand(input) {
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
    PutFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "PutFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutFeedbackCommand(input, context);
    };
    PutFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutFeedbackCommand(output, context);
    };
    return PutFeedbackCommand;
}($Command));
export { PutFeedbackCommand };
//# sourceMappingURL=PutFeedbackCommand.js.map