import { __extends } from "tslib";
import { RetryDataReplicationRequest, SourceServer } from "../models/models_0";
import { deserializeAws_restJson1RetryDataReplicationCommand, serializeAws_restJson1RetryDataReplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, RetryDataReplicationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, RetryDataReplicationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new RetryDataReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryDataReplicationCommandInput} for command's `input` shape.
 * @see {@link RetryDataReplicationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetryDataReplicationCommand = /** @class */ (function (_super) {
    __extends(RetryDataReplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetryDataReplicationCommand(input) {
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
    RetryDataReplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "RetryDataReplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetryDataReplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetryDataReplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RetryDataReplicationCommand(input, context);
    };
    RetryDataReplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RetryDataReplicationCommand(output, context);
    };
    return RetryDataReplicationCommand;
}($Command));
export { RetryDataReplicationCommand };
//# sourceMappingURL=RetryDataReplicationCommand.js.map