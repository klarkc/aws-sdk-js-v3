import { __extends } from "tslib";
import { BeginTransactionRequest, BeginTransactionResponse } from "../models/models_0";
import { deserializeAws_restJson1BeginTransactionCommand, serializeAws_restJson1BeginTransactionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a SQL transaction.</p>
 *
 *         <important>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
 *                 rolled back automatically after 24 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes.
 *                 If a transaction times out before it's committed, it's rolled back
 *                 automatically.</p>
 *             <p>DDL statements inside a transaction cause an implicit commit. We recommend
 *                 that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
 *                 <code>continueAfterTimeout</code> enabled.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BeginTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BeginTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new BeginTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BeginTransactionCommandInput} for command's `input` shape.
 * @see {@link BeginTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BeginTransactionCommand = /** @class */ (function (_super) {
    __extends(BeginTransactionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BeginTransactionCommand(input) {
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
    BeginTransactionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSDataClient";
        var commandName = "BeginTransactionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BeginTransactionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BeginTransactionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BeginTransactionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BeginTransactionCommand(input, context);
    };
    BeginTransactionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BeginTransactionCommand(output, context);
    };
    return BeginTransactionCommand;
}($Command));
export { BeginTransactionCommand };
//# sourceMappingURL=BeginTransactionCommand.js.map