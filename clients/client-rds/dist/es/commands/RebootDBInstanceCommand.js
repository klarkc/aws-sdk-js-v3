import { __extends } from "tslib";
import { RebootDBInstanceMessage, RebootDBInstanceResult } from "../models/models_1";
import { deserializeAws_queryRebootDBInstanceCommand, serializeAws_queryRebootDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>You might need to reboot your DB instance, usually for maintenance reasons.
 *         For example, if you make certain modifications,
 *         or if you change the DB parameter group associated with the DB instance,
 *         you must reboot the instance for the changes to take effect.
 *     </p>
 *
 *          <p>Rebooting a DB instance restarts the database engine service.
 *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.
 *     </p>
 *
 *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RebootDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RebootDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootDBInstanceCommand = /** @class */ (function (_super) {
    __extends(RebootDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootDBInstanceCommand(input) {
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
    RebootDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RebootDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RebootDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRebootDBInstanceCommand(input, context);
    };
    RebootDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRebootDBInstanceCommand(output, context);
    };
    return RebootDBInstanceCommand;
}($Command));
export { RebootDBInstanceCommand };
//# sourceMappingURL=RebootDBInstanceCommand.js.map