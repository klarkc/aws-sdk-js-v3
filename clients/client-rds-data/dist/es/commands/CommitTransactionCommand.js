import { __extends } from "tslib";
import { CommitTransactionRequest, CommitTransactionResponse } from "../models/models_0";
import { deserializeAws_restJson1CommitTransactionCommand, serializeAws_restJson1CommitTransactionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
 *             commits the changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, CommitTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, CommitTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new CommitTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CommitTransactionCommandInput} for command's `input` shape.
 * @see {@link CommitTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CommitTransactionCommand = /** @class */ (function (_super) {
    __extends(CommitTransactionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CommitTransactionCommand(input) {
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
    CommitTransactionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSDataClient";
        var commandName = "CommitTransactionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CommitTransactionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CommitTransactionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CommitTransactionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CommitTransactionCommand(input, context);
    };
    CommitTransactionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CommitTransactionCommand(output, context);
    };
    return CommitTransactionCommand;
}($Command));
export { CommitTransactionCommand };
//# sourceMappingURL=CommitTransactionCommand.js.map