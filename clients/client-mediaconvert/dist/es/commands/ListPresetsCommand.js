import { __extends } from "tslib";
import { ListPresetsRequest, ListPresetsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListPresetsCommand, serializeAws_restJson1ListPresetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListPresetsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ListPresetsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new ListPresetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPresetsCommandInput} for command's `input` shape.
 * @see {@link ListPresetsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPresetsCommand = /** @class */ (function (_super) {
    __extends(ListPresetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPresetsCommand(input) {
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
    ListPresetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "ListPresetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPresetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPresetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPresetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPresetsCommand(input, context);
    };
    ListPresetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPresetsCommand(output, context);
    };
    return ListPresetsCommand;
}($Command));
export { ListPresetsCommand };
//# sourceMappingURL=ListPresetsCommand.js.map