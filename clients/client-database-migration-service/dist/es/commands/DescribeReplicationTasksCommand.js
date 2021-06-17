import { __extends } from "tslib";
import { DescribeReplicationTasksMessage, DescribeReplicationTasksResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationTasksCommand, serializeAws_json1_1DescribeReplicationTasksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about replication tasks for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTasksCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationTasksCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationTasksCommand(input) {
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
    DescribeReplicationTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationTasksMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationTasksCommand(input, context);
    };
    DescribeReplicationTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationTasksCommand(output, context);
    };
    return DescribeReplicationTasksCommand;
}($Command));
export { DescribeReplicationTasksCommand };
//# sourceMappingURL=DescribeReplicationTasksCommand.js.map