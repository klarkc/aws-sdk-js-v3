import { __extends } from "tslib";
import { ListStreamingImagesRequest, ListStreamingImagesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListStreamingImagesCommand, serializeAws_restJson1ListStreamingImagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by AWS, as well as streaming images that you have created in your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingImagesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingImagesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStreamingImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingImagesCommandInput} for command's `input` shape.
 * @see {@link ListStreamingImagesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStreamingImagesCommand = /** @class */ (function (_super) {
    __extends(ListStreamingImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStreamingImagesCommand(input) {
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
    ListStreamingImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListStreamingImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStreamingImagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStreamingImagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStreamingImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListStreamingImagesCommand(input, context);
    };
    ListStreamingImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListStreamingImagesCommand(output, context);
    };
    return ListStreamingImagesCommand;
}($Command));
export { ListStreamingImagesCommand };
//# sourceMappingURL=ListStreamingImagesCommand.js.map