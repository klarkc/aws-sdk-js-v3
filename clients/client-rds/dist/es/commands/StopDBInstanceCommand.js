import { __extends } from "tslib";
import { StopDBInstanceMessage, StopDBInstanceResult } from "../models/models_1";
import { deserializeAws_queryStopDBInstanceCommand, serializeAws_queryStopDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Stops an Amazon RDS DB instance. When you stop a DB instance, Amazon RDS retains the DB instance's metadata, including its endpoint,
 *             DB parameter group, and option group membership. Amazon RDS also retains the transaction logs so you can do a point-in-time restore if
 *             necessary.
 *         </p>
 *
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html">
 *                 Stopping an Amazon RDS DB Instance Temporarily</a> in the
 *             <i>Amazon RDS User Guide.</i>
 *          </p>
 *
 *         <note>
 *             <p>
 *             This command doesn't apply to Aurora MySQL and Aurora PostgreSQL.
 *             For Aurora clusters, use <code>StopDBCluster</code> instead.
 *           </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBInstanceCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDBInstanceCommand = /** @class */ (function (_super) {
    __extends(StopDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopDBInstanceCommand(input) {
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
    StopDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StopDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StopDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStopDBInstanceCommand(input, context);
    };
    StopDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStopDBInstanceCommand(output, context);
    };
    return StopDBInstanceCommand;
}($Command));
export { StopDBInstanceCommand };
//# sourceMappingURL=StopDBInstanceCommand.js.map