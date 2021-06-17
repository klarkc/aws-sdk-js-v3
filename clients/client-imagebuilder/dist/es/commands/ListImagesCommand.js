import { __extends } from "tslib";
import { ListImagesRequest, ListImagesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImagesCommand, serializeAws_restJson1ListImagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the list of images that you have access to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImagesCommand = /** @class */ (function (_super) {
    __extends(ListImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImagesCommand(input) {
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
    ListImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImagesCommand(input, context);
    };
    ListImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImagesCommand(output, context);
    };
    return ListImagesCommand;
}($Command));
export { ListImagesCommand };
//# sourceMappingURL=ListImagesCommand.js.map