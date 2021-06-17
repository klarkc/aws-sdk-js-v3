import { __extends } from "tslib";
import { StartAccessLoggingInput, StartAccessLoggingOutput } from "../models/models_0";
import { deserializeAws_json1_1StartAccessLoggingCommand, serializeAws_json1_1StartAccessLoggingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StartAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StartAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new StartAccessLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StartAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAccessLoggingCommand = /** @class */ (function (_super) {
    __extends(StartAccessLoggingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAccessLoggingCommand(input) {
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
    StartAccessLoggingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "StartAccessLoggingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAccessLoggingInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartAccessLoggingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAccessLoggingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAccessLoggingCommand(input, context);
    };
    StartAccessLoggingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAccessLoggingCommand(output, context);
    };
    return StartAccessLoggingCommand;
}($Command));
export { StartAccessLoggingCommand };
//# sourceMappingURL=StartAccessLoggingCommand.js.map