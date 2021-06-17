import { __extends } from "tslib";
import { ListMitigationActionsRequest, ListMitigationActionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListMitigationActionsCommand, serializeAws_restJson1ListMitigationActionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMitigationActionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMitigationActionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListMitigationActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMitigationActionsCommandInput} for command's `input` shape.
 * @see {@link ListMitigationActionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMitigationActionsCommand = /** @class */ (function (_super) {
    __extends(ListMitigationActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMitigationActionsCommand(input) {
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
    ListMitigationActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListMitigationActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMitigationActionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMitigationActionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMitigationActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMitigationActionsCommand(input, context);
    };
    ListMitigationActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMitigationActionsCommand(output, context);
    };
    return ListMitigationActionsCommand;
}($Command));
export { ListMitigationActionsCommand };
//# sourceMappingURL=ListMitigationActionsCommand.js.map