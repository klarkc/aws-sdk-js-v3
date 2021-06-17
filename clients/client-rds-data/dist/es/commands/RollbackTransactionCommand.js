import { __extends } from "tslib";
import { RollbackTransactionRequest, RollbackTransactionResponse } from "../models/models_0";
import { deserializeAws_restJson1RollbackTransactionCommand, serializeAws_restJson1RollbackTransactionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Performs a rollback of a transaction. Rolling back a transaction cancels its changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, RollbackTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, RollbackTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new RollbackTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackTransactionCommandInput} for command's `input` shape.
 * @see {@link RollbackTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RollbackTransactionCommand = /** @class */ (function (_super) {
    __extends(RollbackTransactionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RollbackTransactionCommand(input) {
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
    RollbackTransactionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSDataClient";
        var commandName = "RollbackTransactionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RollbackTransactionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RollbackTransactionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RollbackTransactionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RollbackTransactionCommand(input, context);
    };
    RollbackTransactionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RollbackTransactionCommand(output, context);
    };
    return RollbackTransactionCommand;
}($Command));
export { RollbackTransactionCommand };
//# sourceMappingURL=RollbackTransactionCommand.js.map