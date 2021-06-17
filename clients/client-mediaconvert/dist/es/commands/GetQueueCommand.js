import { __extends } from "tslib";
import { GetQueueRequest, GetQueueResponse } from "../models/models_1";
import { deserializeAws_restJson1GetQueueCommand, serializeAws_restJson1GetQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve the JSON for a specific queue.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueueCommandInput} for command's `input` shape.
 * @see {@link GetQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQueueCommand = /** @class */ (function (_super) {
    __extends(GetQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQueueCommand(input) {
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
    GetQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "GetQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQueueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetQueueCommand(input, context);
    };
    GetQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetQueueCommand(output, context);
    };
    return GetQueueCommand;
}($Command));
export { GetQueueCommand };
//# sourceMappingURL=GetQueueCommand.js.map