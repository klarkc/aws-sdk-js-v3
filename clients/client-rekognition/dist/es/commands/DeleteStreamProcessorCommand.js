import { __extends } from "tslib";
import { DeleteStreamProcessorRequest, DeleteStreamProcessorResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteStreamProcessorCommand, serializeAws_json1_1DeleteStreamProcessorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the stream processor identified by <code>Name</code>. You assign the value for <code>Name</code> when you create the stream processor with
 *             <a>CreateStreamProcessor</a>. You might not be able to use the same name for a stream processor for a few seconds after calling <code>DeleteStreamProcessor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStreamProcessorCommand = /** @class */ (function (_super) {
    __extends(DeleteStreamProcessorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStreamProcessorCommand(input) {
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
    DeleteStreamProcessorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RekognitionClient";
        var commandName = "DeleteStreamProcessorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStreamProcessorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStreamProcessorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStreamProcessorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteStreamProcessorCommand(input, context);
    };
    DeleteStreamProcessorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteStreamProcessorCommand(output, context);
    };
    return DeleteStreamProcessorCommand;
}($Command));
export { DeleteStreamProcessorCommand };
//# sourceMappingURL=DeleteStreamProcessorCommand.js.map