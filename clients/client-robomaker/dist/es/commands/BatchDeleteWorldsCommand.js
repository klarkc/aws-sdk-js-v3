import { __extends } from "tslib";
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteWorldsCommand, serializeAws_restJson1BatchDeleteWorldsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more worlds in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDeleteWorldsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, BatchDeleteWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new BatchDeleteWorldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteWorldsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteWorldsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteWorldsCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteWorldsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteWorldsCommand(input) {
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
    BatchDeleteWorldsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "BatchDeleteWorldsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteWorldsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteWorldsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteWorldsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteWorldsCommand(input, context);
    };
    BatchDeleteWorldsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteWorldsCommand(output, context);
    };
    return BatchDeleteWorldsCommand;
}($Command));
export { BatchDeleteWorldsCommand };
//# sourceMappingURL=BatchDeleteWorldsCommand.js.map