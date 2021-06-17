import { __extends } from "tslib";
import { UpdateStreamingImageRequest, UpdateStreamingImageResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateStreamingImageCommand, serializeAws_restJson1UpdateStreamingImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, UpdateStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, UpdateStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new UpdateStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamingImageCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStreamingImageCommand = /** @class */ (function (_super) {
    __extends(UpdateStreamingImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStreamingImageCommand(input) {
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
    UpdateStreamingImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "UpdateStreamingImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStreamingImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStreamingImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStreamingImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateStreamingImageCommand(input, context);
    };
    UpdateStreamingImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateStreamingImageCommand(output, context);
    };
    return UpdateStreamingImageCommand;
}($Command));
export { UpdateStreamingImageCommand };
//# sourceMappingURL=UpdateStreamingImageCommand.js.map