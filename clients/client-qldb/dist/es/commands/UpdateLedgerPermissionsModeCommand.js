import { __extends } from "tslib";
import { UpdateLedgerPermissionsModeRequest, UpdateLedgerPermissionsModeResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLedgerPermissionsModeCommand, serializeAws_restJson1UpdateLedgerPermissionsModeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the permissions mode of a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerPermissionsModeCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerPermissionsModeCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new UpdateLedgerPermissionsModeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLedgerPermissionsModeCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerPermissionsModeCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLedgerPermissionsModeCommand = /** @class */ (function (_super) {
    __extends(UpdateLedgerPermissionsModeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLedgerPermissionsModeCommand(input) {
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
    UpdateLedgerPermissionsModeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "UpdateLedgerPermissionsModeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLedgerPermissionsModeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLedgerPermissionsModeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLedgerPermissionsModeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLedgerPermissionsModeCommand(input, context);
    };
    UpdateLedgerPermissionsModeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLedgerPermissionsModeCommand(output, context);
    };
    return UpdateLedgerPermissionsModeCommand;
}($Command));
export { UpdateLedgerPermissionsModeCommand };
//# sourceMappingURL=UpdateLedgerPermissionsModeCommand.js.map