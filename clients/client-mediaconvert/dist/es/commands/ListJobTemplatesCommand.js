import { __extends } from "tslib";
import { ListJobTemplatesRequest, ListJobTemplatesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListJobTemplatesCommand, serializeAws_restJson1ListJobTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListJobTemplatesCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ListJobTemplatesCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new ListJobTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListJobTemplatesCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListJobTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobTemplatesCommand(input) {
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
    ListJobTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "ListJobTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobTemplatesCommand(input, context);
    };
    ListJobTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobTemplatesCommand(output, context);
    };
    return ListJobTemplatesCommand;
}($Command));
export { ListJobTemplatesCommand };
//# sourceMappingURL=ListJobTemplatesCommand.js.map