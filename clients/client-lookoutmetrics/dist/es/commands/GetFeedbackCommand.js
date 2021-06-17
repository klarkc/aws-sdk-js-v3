import { __extends } from "tslib";
import { GetFeedbackRequest, GetFeedbackResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFeedbackCommand, serializeAws_restJson1GetFeedbackCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get feedback for an anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetFeedbackCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetFeedbackCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFeedbackCommandInput} for command's `input` shape.
 * @see {@link GetFeedbackCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFeedbackCommand = /** @class */ (function (_super) {
    __extends(GetFeedbackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFeedbackCommand(input) {
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
    GetFeedbackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "GetFeedbackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFeedbackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFeedbackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFeedbackCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFeedbackCommand(input, context);
    };
    GetFeedbackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFeedbackCommand(output, context);
    };
    return GetFeedbackCommand;
}($Command));
export { GetFeedbackCommand };
//# sourceMappingURL=GetFeedbackCommand.js.map