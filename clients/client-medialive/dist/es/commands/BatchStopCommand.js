import { __extends } from "tslib";
import { BatchStopRequest, BatchStopResponse } from "../models/models_1";
import { deserializeAws_restJson1BatchStopCommand, serializeAws_restJson1BatchStopCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Stops running resources
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchStopCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchStopCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchStopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopCommandInput} for command's `input` shape.
 * @see {@link BatchStopCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchStopCommand = /** @class */ (function (_super) {
    __extends(BatchStopCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchStopCommand(input) {
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
    BatchStopCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "BatchStopCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchStopRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchStopResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchStopCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchStopCommand(input, context);
    };
    BatchStopCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchStopCommand(output, context);
    };
    return BatchStopCommand;
}($Command));
export { BatchStopCommand };
//# sourceMappingURL=BatchStopCommand.js.map