import { __extends } from "tslib";
import { PromoteReadReplicaMessage, PromoteReadReplicaResult } from "../models/models_1";
import { deserializeAws_queryPromoteReadReplicaCommand, serializeAws_queryPromoteReadReplicaCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Promotes a read replica DB instance to a standalone DB instance.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Backup duration is a function of the amount of changes to the database since the previous
 *                         backup. If you plan to promote a read replica to a standalone instance, we
 *                         recommend that you enable backups and complete at least one backup prior to
 *                         promotion. In addition, a read replica cannot be promoted to a standalone
 *                         instance when it is in the <code>backing-up</code> status. If you have
 *                         enabled backups on your read replica, configure the automated backup window
 *                         so that daily backups do not interfere with read replica
 *                         promotion.</p>
 *                </li>
 *                <li>
 *                   <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.</p>
 *                </li>
 *             </ul>
 *
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PromoteReadReplicaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PromoteReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new PromoteReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteReadReplicaCommandInput} for command's `input` shape.
 * @see {@link PromoteReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PromoteReadReplicaCommand = /** @class */ (function (_super) {
    __extends(PromoteReadReplicaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PromoteReadReplicaCommand(input) {
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
    PromoteReadReplicaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "PromoteReadReplicaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PromoteReadReplicaMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PromoteReadReplicaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PromoteReadReplicaCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPromoteReadReplicaCommand(input, context);
    };
    PromoteReadReplicaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPromoteReadReplicaCommand(output, context);
    };
    return PromoteReadReplicaCommand;
}($Command));
export { PromoteReadReplicaCommand };
//# sourceMappingURL=PromoteReadReplicaCommand.js.map