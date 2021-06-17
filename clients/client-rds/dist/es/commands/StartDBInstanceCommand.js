import { __extends } from "tslib";
import { StartDBInstanceMessage, StartDBInstanceResult } from "../models/models_1";
import { deserializeAws_queryStartDBInstanceCommand, serializeAws_queryStartDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Starts an Amazon RDS DB instance that was stopped using the AWS console, the stop-db-instance AWS CLI command, or the StopDBInstance action.
 *         </p>
 *
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html">
 *                 Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the
 *             <i>Amazon RDS User Guide.</i>
 *          </p>
 *
 *         <note>
 *             <p>
 *             This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.
 *             For Aurora DB clusters, use <code>StartDBCluster</code> instead.
 *           </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBInstanceCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDBInstanceCommand = /** @class */ (function (_super) {
    __extends(StartDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDBInstanceCommand(input) {
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
    StartDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StartDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartDBInstanceCommand(input, context);
    };
    StartDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartDBInstanceCommand(output, context);
    };
    return StartDBInstanceCommand;
}($Command));
export { StartDBInstanceCommand };
//# sourceMappingURL=StartDBInstanceCommand.js.map