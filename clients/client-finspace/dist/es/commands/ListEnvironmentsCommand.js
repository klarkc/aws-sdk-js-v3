import { __extends } from "tslib";
import { ListEnvironmentsRequest, ListEnvironmentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEnvironmentsCommand, serializeAws_restJson1ListEnvironmentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of all of your FinSpace environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListEnvironmentsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListEnvironmentsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEnvironmentsCommand = /** @class */ (function (_super) {
    __extends(ListEnvironmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEnvironmentsCommand(input) {
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
    ListEnvironmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceClient";
        var commandName = "ListEnvironmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEnvironmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEnvironmentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEnvironmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEnvironmentsCommand(input, context);
    };
    ListEnvironmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEnvironmentsCommand(output, context);
    };
    return ListEnvironmentsCommand;
}($Command));
export { ListEnvironmentsCommand };
//# sourceMappingURL=ListEnvironmentsCommand.js.map