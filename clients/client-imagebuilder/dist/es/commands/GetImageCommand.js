import { __extends } from "tslib";
import { GetImageRequest, GetImageResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImageCommand, serializeAws_restJson1GetImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImageCommandInput} for command's `input` shape.
 * @see {@link GetImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImageCommand = /** @class */ (function (_super) {
    __extends(GetImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImageCommand(input) {
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
    GetImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImageCommand(input, context);
    };
    GetImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImageCommand(output, context);
    };
    return GetImageCommand;
}($Command));
export { GetImageCommand };
//# sourceMappingURL=GetImageCommand.js.map