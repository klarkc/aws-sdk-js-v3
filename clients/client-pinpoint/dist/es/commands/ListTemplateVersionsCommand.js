import { __extends } from "tslib";
import { ListTemplateVersionsRequest, ListTemplateVersionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTemplateVersionsCommand, serializeAws_restJson1ListTemplateVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all the versions of a specific message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, ListTemplateVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, ListTemplateVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new ListTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTemplateVersionsCommand = /** @class */ (function (_super) {
    __extends(ListTemplateVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTemplateVersionsCommand(input) {
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
    ListTemplateVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "ListTemplateVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTemplateVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTemplateVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTemplateVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTemplateVersionsCommand(input, context);
    };
    ListTemplateVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTemplateVersionsCommand(output, context);
    };
    return ListTemplateVersionsCommand;
}($Command));
export { ListTemplateVersionsCommand };
//# sourceMappingURL=ListTemplateVersionsCommand.js.map