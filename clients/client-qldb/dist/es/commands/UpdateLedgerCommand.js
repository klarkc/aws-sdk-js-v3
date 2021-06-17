import { __extends } from "tslib";
import { UpdateLedgerRequest, UpdateLedgerResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLedgerCommand, serializeAws_restJson1UpdateLedgerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates properties on a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new UpdateLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLedgerCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLedgerCommand = /** @class */ (function (_super) {
    __extends(UpdateLedgerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLedgerCommand(input) {
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
    UpdateLedgerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "UpdateLedgerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLedgerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLedgerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLedgerCommand(input, context);
    };
    UpdateLedgerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLedgerCommand(output, context);
    };
    return UpdateLedgerCommand;
}($Command));
export { UpdateLedgerCommand };
//# sourceMappingURL=UpdateLedgerCommand.js.map