import { __extends } from "tslib";
import { ListActionsRequest, ListActionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListActionsCommand, serializeAws_restJson1ListActionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the available AWS FIS actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListActionsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListActionsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionsCommandInput} for command's `input` shape.
 * @see {@link ListActionsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListActionsCommand = /** @class */ (function (_super) {
    __extends(ListActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListActionsCommand(input) {
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
    ListActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "ListActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListActionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListActionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListActionsCommand(input, context);
    };
    ListActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListActionsCommand(output, context);
    };
    return ListActionsCommand;
}($Command));
export { ListActionsCommand };
//# sourceMappingURL=ListActionsCommand.js.map