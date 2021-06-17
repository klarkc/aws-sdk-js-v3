import { __extends } from "tslib";
import { DescribeReplicationInstanceTaskLogsMessage, DescribeReplicationInstanceTaskLogsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand, serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the task logs for the specified task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationInstanceTaskLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationInstanceTaskLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstanceTaskLogsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationInstanceTaskLogsCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationInstanceTaskLogsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationInstanceTaskLogsCommand(input) {
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
    DescribeReplicationInstanceTaskLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationInstanceTaskLogsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationInstanceTaskLogsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationInstanceTaskLogsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationInstanceTaskLogsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(input, context);
    };
    DescribeReplicationInstanceTaskLogsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(output, context);
    };
    return DescribeReplicationInstanceTaskLogsCommand;
}($Command));
export { DescribeReplicationInstanceTaskLogsCommand };
//# sourceMappingURL=DescribeReplicationInstanceTaskLogsCommand.js.map