import { __extends } from "tslib";
import { StartKeyPhrasesDetectionJobRequest, StartKeyPhrasesDetectionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand, serializeAws_json1_1StartKeyPhrasesDetectionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an asynchronous key phrase detection job for a collection of documents. Use the
 *          operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartKeyPhrasesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartKeyPhrasesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartKeyPhrasesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartKeyPhrasesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartKeyPhrasesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartKeyPhrasesDetectionJobCommand = /** @class */ (function (_super) {
    __extends(StartKeyPhrasesDetectionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartKeyPhrasesDetectionJobCommand(input) {
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
    StartKeyPhrasesDetectionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "StartKeyPhrasesDetectionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartKeyPhrasesDetectionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartKeyPhrasesDetectionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartKeyPhrasesDetectionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartKeyPhrasesDetectionJobCommand(input, context);
    };
    StartKeyPhrasesDetectionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand(output, context);
    };
    return StartKeyPhrasesDetectionJobCommand;
}($Command));
export { StartKeyPhrasesDetectionJobCommand };
//# sourceMappingURL=StartKeyPhrasesDetectionJobCommand.js.map