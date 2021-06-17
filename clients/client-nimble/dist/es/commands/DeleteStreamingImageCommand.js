import { __extends } from "tslib";
import { DeleteStreamingImageRequest, DeleteStreamingImageResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteStreamingImageCommand, serializeAws_restJson1DeleteStreamingImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingImageCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStreamingImageCommand = /** @class */ (function (_super) {
    __extends(DeleteStreamingImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStreamingImageCommand(input) {
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
    DeleteStreamingImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteStreamingImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStreamingImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStreamingImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStreamingImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteStreamingImageCommand(input, context);
    };
    DeleteStreamingImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteStreamingImageCommand(output, context);
    };
    return DeleteStreamingImageCommand;
}($Command));
export { DeleteStreamingImageCommand };
//# sourceMappingURL=DeleteStreamingImageCommand.js.map