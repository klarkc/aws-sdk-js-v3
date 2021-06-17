import { __extends } from "tslib";
import { DisassociateGlobalReplicationGroupMessage, DisassociateGlobalReplicationGroupResult, } from "../models/models_0";
import { deserializeAws_queryDisassociateGlobalReplicationGroupCommand, serializeAws_queryDisassociateGlobalReplicationGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that AWS region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DisassociateGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DisassociateGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DisassociateGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateGlobalReplicationGroupCommand = /** @class */ (function (_super) {
    __extends(DisassociateGlobalReplicationGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateGlobalReplicationGroupCommand(input) {
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
    DisassociateGlobalReplicationGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DisassociateGlobalReplicationGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateGlobalReplicationGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateGlobalReplicationGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateGlobalReplicationGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDisassociateGlobalReplicationGroupCommand(input, context);
    };
    DisassociateGlobalReplicationGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDisassociateGlobalReplicationGroupCommand(output, context);
    };
    return DisassociateGlobalReplicationGroupCommand;
}($Command));
export { DisassociateGlobalReplicationGroupCommand };
//# sourceMappingURL=DisassociateGlobalReplicationGroupCommand.js.map