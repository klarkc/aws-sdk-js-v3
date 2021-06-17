import { __extends } from "tslib";
import { BatchDeleteRequest, BatchDeleteResponse } from "../models/models_1";
import { deserializeAws_restJson1BatchDeleteCommand, serializeAws_restJson1BatchDeleteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Starts delete of resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchDeleteCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchDeleteCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchDeleteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteCommand(input) {
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
    BatchDeleteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "BatchDeleteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteCommand(input, context);
    };
    BatchDeleteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteCommand(output, context);
    };
    return BatchDeleteCommand;
}($Command));
export { BatchDeleteCommand };
//# sourceMappingURL=BatchDeleteCommand.js.map