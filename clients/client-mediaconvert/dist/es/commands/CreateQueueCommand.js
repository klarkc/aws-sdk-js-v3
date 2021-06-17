import { __extends } from "tslib";
import { CreateQueueRequest, CreateQueueResponse } from "../models/models_1";
import { deserializeAws_restJson1CreateQueueCommand, serializeAws_restJson1CreateQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreateQueueCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreateQueueCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQueueCommand = /** @class */ (function (_super) {
    __extends(CreateQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateQueueCommand(input) {
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
    CreateQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "CreateQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateQueueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateQueueCommand(input, context);
    };
    CreateQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateQueueCommand(output, context);
    };
    return CreateQueueCommand;
}($Command));
export { CreateQueueCommand };
//# sourceMappingURL=CreateQueueCommand.js.map