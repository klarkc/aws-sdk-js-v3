import { __extends } from "tslib";
import { DisassociateLensesInput } from "../models/models_0";
import { deserializeAws_restJson1DisassociateLensesCommand, serializeAws_restJson1DisassociateLensesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociate a lens from a workload.</p>
 *         <note>
 *             <p>The AWS Well-Architected Framework lens (<code>wellarchitected</code>) cannot be
 *                 removed from a workload.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DisassociateLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DisassociateLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new DisassociateLensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLensesCommandInput} for command's `input` shape.
 * @see {@link DisassociateLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateLensesCommand = /** @class */ (function (_super) {
    __extends(DisassociateLensesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateLensesCommand(input) {
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
    DisassociateLensesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "DisassociateLensesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateLensesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateLensesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateLensesCommand(input, context);
    };
    DisassociateLensesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateLensesCommand(output, context);
    };
    return DisassociateLensesCommand;
}($Command));
export { DisassociateLensesCommand };
//# sourceMappingURL=DisassociateLensesCommand.js.map