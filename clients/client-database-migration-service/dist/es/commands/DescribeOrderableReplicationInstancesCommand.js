import { __extends } from "tslib";
import { DescribeOrderableReplicationInstancesMessage, DescribeOrderableReplicationInstancesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand, serializeAws_json1_1DescribeOrderableReplicationInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the replication instance types that can be created in the
 *          specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrderableReplicationInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeOrderableReplicationInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrderableReplicationInstancesCommand(input) {
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
    DescribeOrderableReplicationInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeOrderableReplicationInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrderableReplicationInstancesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrderableReplicationInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrderableReplicationInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrderableReplicationInstancesCommand(input, context);
    };
    DescribeOrderableReplicationInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand(output, context);
    };
    return DescribeOrderableReplicationInstancesCommand;
}($Command));
export { DescribeOrderableReplicationInstancesCommand };
//# sourceMappingURL=DescribeOrderableReplicationInstancesCommand.js.map