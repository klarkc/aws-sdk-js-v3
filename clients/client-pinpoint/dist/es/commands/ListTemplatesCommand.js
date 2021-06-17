import { __extends } from "tslib";
import { ListTemplatesRequest, ListTemplatesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTemplatesCommand, serializeAws_restJson1ListTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, ListTemplatesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, ListTemplatesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTemplatesCommand(input) {
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
    ListTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "ListTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTemplatesCommand(input, context);
    };
    ListTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTemplatesCommand(output, context);
    };
    return ListTemplatesCommand;
}($Command));
export { ListTemplatesCommand };
//# sourceMappingURL=ListTemplatesCommand.js.map