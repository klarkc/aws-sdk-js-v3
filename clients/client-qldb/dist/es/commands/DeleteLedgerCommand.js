import { __extends } from "tslib";
import { DeleteLedgerRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteLedgerCommand, serializeAws_restJson1DeleteLedgerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a ledger and all of its contents. This action is irreversible.</p>
 *          <p>If deletion protection is enabled, you must first disable it before you can delete the
 *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
 *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
 *          console disables deletion protection for you when you use it to delete a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DeleteLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DeleteLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DeleteLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLedgerCommandInput} for command's `input` shape.
 * @see {@link DeleteLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLedgerCommand = /** @class */ (function (_super) {
    __extends(DeleteLedgerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLedgerCommand(input) {
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
    DeleteLedgerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "DeleteLedgerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLedgerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLedgerCommand(input, context);
    };
    DeleteLedgerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLedgerCommand(output, context);
    };
    return DeleteLedgerCommand;
}($Command));
export { DeleteLedgerCommand };
//# sourceMappingURL=DeleteLedgerCommand.js.map