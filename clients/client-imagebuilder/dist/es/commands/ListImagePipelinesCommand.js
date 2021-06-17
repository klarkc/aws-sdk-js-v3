import { __extends } from "tslib";
import { ListImagePipelinesRequest, ListImagePipelinesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListImagePipelinesCommand, serializeAws_restJson1ListImagePipelinesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of image pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelinesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelinesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListImagePipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImagePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelinesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListImagePipelinesCommand = /** @class */ (function (_super) {
    __extends(ListImagePipelinesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListImagePipelinesCommand(input) {
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
    ListImagePipelinesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "ListImagePipelinesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListImagePipelinesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListImagePipelinesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListImagePipelinesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListImagePipelinesCommand(input, context);
    };
    ListImagePipelinesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListImagePipelinesCommand(output, context);
    };
    return ListImagePipelinesCommand;
}($Command));
export { ListImagePipelinesCommand };
//# sourceMappingURL=ListImagePipelinesCommand.js.map