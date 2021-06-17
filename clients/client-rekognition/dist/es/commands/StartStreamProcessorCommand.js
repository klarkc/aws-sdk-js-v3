import { __extends } from "tslib";
import { StartStreamProcessorRequest, StartStreamProcessorResponse } from "../models/models_0";
import { deserializeAws_json1_1StartStreamProcessorCommand, serializeAws_json1_1StartStreamProcessorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>.
 *             To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to
 *             <code>CreateStreamProcessor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StartStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartStreamProcessorCommand = /** @class */ (function (_super) {
    __extends(StartStreamProcessorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartStreamProcessorCommand(input) {
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
    StartStreamProcessorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RekognitionClient";
        var commandName = "StartStreamProcessorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartStreamProcessorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartStreamProcessorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartStreamProcessorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartStreamProcessorCommand(input, context);
    };
    StartStreamProcessorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartStreamProcessorCommand(output, context);
    };
    return StartStreamProcessorCommand;
}($Command));
export { StartStreamProcessorCommand };
//# sourceMappingURL=StartStreamProcessorCommand.js.map