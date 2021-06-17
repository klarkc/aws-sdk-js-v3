import { __extends } from "tslib";
import { ListLensesInput, ListLensesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListLensesCommand, serializeAws_restJson1ListLensesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the available lenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensesCommandInput} for command's `input` shape.
 * @see {@link ListLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLensesCommand = /** @class */ (function (_super) {
    __extends(ListLensesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLensesCommand(input) {
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
    ListLensesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListLensesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLensesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListLensesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLensesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLensesCommand(input, context);
    };
    ListLensesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLensesCommand(output, context);
    };
    return ListLensesCommand;
}($Command));
export { ListLensesCommand };
//# sourceMappingURL=ListLensesCommand.js.map