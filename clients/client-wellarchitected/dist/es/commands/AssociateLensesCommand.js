import { __extends } from "tslib";
import { AssociateLensesInput } from "../models/models_0";
import { deserializeAws_restJson1AssociateLensesCommand, serializeAws_restJson1AssociateLensesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate a lens to a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, AssociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, AssociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new AssociateLensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateLensesCommandInput} for command's `input` shape.
 * @see {@link AssociateLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateLensesCommand = /** @class */ (function (_super) {
    __extends(AssociateLensesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateLensesCommand(input) {
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
    AssociateLensesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "AssociateLensesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateLensesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateLensesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateLensesCommand(input, context);
    };
    AssociateLensesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateLensesCommand(output, context);
    };
    return AssociateLensesCommand;
}($Command));
export { AssociateLensesCommand };
//# sourceMappingURL=AssociateLensesCommand.js.map