import { __extends } from "tslib";
import { StopLoggingRequest, StopLoggingResponse } from "../models/models_0";
import { deserializeAws_json1_1StopLoggingCommand, serializeAws_json1_1StopLoggingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Suspends the recording of AWS API calls and log file delivery for the specified trail.
 *          Under most circumstances, there is no need to use this action. You can update a trail
 *          without stopping it first. This action is the only way to stop recording. For a trail
 *          enabled in all regions, this operation must be called from the region in which the trail
 *          was created, or an <code>InvalidHomeRegionException</code> will occur. This operation
 *          cannot be called on the shadow trails (replicated trails in other regions) of a trail
 *          enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StopLoggingCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StopLoggingCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StopLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLoggingCommandInput} for command's `input` shape.
 * @see {@link StopLoggingCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopLoggingCommand = /** @class */ (function (_super) {
    __extends(StopLoggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopLoggingCommand(input) {
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
    StopLoggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "StopLoggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopLoggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopLoggingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopLoggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopLoggingCommand(input, context);
    };
    StopLoggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopLoggingCommand(output, context);
    };
    return StopLoggingCommand;
}($Command));
export { StopLoggingCommand };
//# sourceMappingURL=StopLoggingCommand.js.map