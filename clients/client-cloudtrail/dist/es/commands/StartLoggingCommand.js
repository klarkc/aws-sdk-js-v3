import { __extends } from "tslib";
import { StartLoggingRequest, StartLoggingResponse } from "../models/models_0";
import { deserializeAws_json1_1StartLoggingCommand, serializeAws_json1_1StartLoggingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartLoggingCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartLoggingCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StartLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLoggingCommandInput} for command's `input` shape.
 * @see {@link StartLoggingCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartLoggingCommand = /** @class */ (function (_super) {
    __extends(StartLoggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartLoggingCommand(input) {
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
    StartLoggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "StartLoggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartLoggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartLoggingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartLoggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartLoggingCommand(input, context);
    };
    StartLoggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartLoggingCommand(output, context);
    };
    return StartLoggingCommand;
}($Command));
export { StartLoggingCommand };
//# sourceMappingURL=StartLoggingCommand.js.map