import { __extends } from "tslib";
import { CreateStreamingImageRequest, CreateStreamingImageResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateStreamingImageCommand, serializeAws_restJson1CreateStreamingImageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a streaming image resource in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStreamingImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingImageCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamingImageCommand = /** @class */ (function (_super) {
    __extends(CreateStreamingImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStreamingImageCommand(input) {
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
    CreateStreamingImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "CreateStreamingImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStreamingImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStreamingImageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStreamingImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateStreamingImageCommand(input, context);
    };
    CreateStreamingImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateStreamingImageCommand(output, context);
    };
    return CreateStreamingImageCommand;
}($Command));
export { CreateStreamingImageCommand };
//# sourceMappingURL=CreateStreamingImageCommand.js.map