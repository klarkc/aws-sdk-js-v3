import { __extends } from "tslib";
import { StopAccessLoggingInput, StopAccessLoggingOutput } from "../models/models_0";
import { deserializeAws_json1_1StopAccessLoggingCommand, serializeAws_json1_1StopAccessLoggingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StopAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StopAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new StopAccessLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StopAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopAccessLoggingCommand = /** @class */ (function (_super) {
    __extends(StopAccessLoggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopAccessLoggingCommand(input) {
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
    StopAccessLoggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "StopAccessLoggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopAccessLoggingInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopAccessLoggingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopAccessLoggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopAccessLoggingCommand(input, context);
    };
    StopAccessLoggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopAccessLoggingCommand(output, context);
    };
    return StopAccessLoggingCommand;
}($Command));
export { StopAccessLoggingCommand };
//# sourceMappingURL=StopAccessLoggingCommand.js.map