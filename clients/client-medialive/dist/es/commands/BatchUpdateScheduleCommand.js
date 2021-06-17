import { __extends } from "tslib";
import { BatchUpdateScheduleRequest, BatchUpdateScheduleResponse } from "../models/models_1";
import { deserializeAws_restJson1BatchUpdateScheduleCommand, serializeAws_restJson1BatchUpdateScheduleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Update a channel schedule
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchUpdateScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchUpdateScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchUpdateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUpdateScheduleCommand = /** @class */ (function (_super) {
    __extends(BatchUpdateScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchUpdateScheduleCommand(input) {
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
    BatchUpdateScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "BatchUpdateScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpdateScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchUpdateScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpdateScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchUpdateScheduleCommand(input, context);
    };
    BatchUpdateScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchUpdateScheduleCommand(output, context);
    };
    return BatchUpdateScheduleCommand;
}($Command));
export { BatchUpdateScheduleCommand };
//# sourceMappingURL=BatchUpdateScheduleCommand.js.map