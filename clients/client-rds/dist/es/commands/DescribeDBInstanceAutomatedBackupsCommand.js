import { __extends } from "tslib";
import { DBInstanceAutomatedBackupMessage, DescribeDBInstanceAutomatedBackupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand, serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays backups for both current and deleted
 *             instances. For example, use this operation to
 *             find details about automated backups for previously deleted instances. Current instances
 *             with retention periods greater than zero (0) are returned for both the
 *             <code>DescribeDBInstanceAutomatedBackups</code> and
 *             <code>DescribeDBInstances</code> operations.</p>
 * 	        <p>All parameters are optional.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBInstanceAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBInstanceAutomatedBackupsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBInstanceAutomatedBackupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBInstanceAutomatedBackupsCommand(input) {
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
    DescribeDBInstanceAutomatedBackupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBInstanceAutomatedBackupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBInstanceAutomatedBackupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBInstanceAutomatedBackupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBInstanceAutomatedBackupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(input, context);
    };
    DescribeDBInstanceAutomatedBackupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(output, context);
    };
    return DescribeDBInstanceAutomatedBackupsCommand;
}($Command));
export { DescribeDBInstanceAutomatedBackupsCommand };
//# sourceMappingURL=DescribeDBInstanceAutomatedBackupsCommand.js.map