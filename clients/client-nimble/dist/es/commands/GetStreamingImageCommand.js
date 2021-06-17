import { __extends } from "tslib";
import { GetStreamingImageRequest, GetStreamingImageResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStreamingImageCommand, serializeAws_restJson1GetStreamingImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStreamingImageCommandInput} for command's `input` shape.
 * @see {@link GetStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStreamingImageCommand = /** @class */ (function (_super) {
    __extends(GetStreamingImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStreamingImageCommand(input) {
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
    GetStreamingImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetStreamingImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStreamingImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStreamingImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStreamingImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStreamingImageCommand(input, context);
    };
    GetStreamingImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStreamingImageCommand(output, context);
    };
    return GetStreamingImageCommand;
}($Command));
export { GetStreamingImageCommand };
//# sourceMappingURL=GetStreamingImageCommand.js.map