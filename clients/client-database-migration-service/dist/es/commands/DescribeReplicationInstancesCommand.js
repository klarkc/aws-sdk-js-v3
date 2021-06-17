import { __extends } from "tslib";
import { DescribeReplicationInstancesMessage, DescribeReplicationInstancesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationInstancesCommand, serializeAws_json1_1DescribeReplicationInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about replication instances for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationInstancesCommand(input) {
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
    DescribeReplicationInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationInstancesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationInstancesCommand(input, context);
    };
    DescribeReplicationInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationInstancesCommand(output, context);
    };
    return DescribeReplicationInstancesCommand;
}($Command));
export { DescribeReplicationInstancesCommand };
//# sourceMappingURL=DescribeReplicationInstancesCommand.js.map