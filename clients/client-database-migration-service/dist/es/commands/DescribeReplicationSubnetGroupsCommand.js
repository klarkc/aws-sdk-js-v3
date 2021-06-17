import { __extends } from "tslib";
import { DescribeReplicationSubnetGroupsMessage, DescribeReplicationSubnetGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand, serializeAws_json1_1DescribeReplicationSubnetGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the replication subnet groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationSubnetGroupsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationSubnetGroupsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationSubnetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationSubnetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationSubnetGroupsCommand(input) {
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
    DescribeReplicationSubnetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeReplicationSubnetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationSubnetGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationSubnetGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationSubnetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplicationSubnetGroupsCommand(input, context);
    };
    DescribeReplicationSubnetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplicationSubnetGroupsCommand(output, context);
    };
    return DescribeReplicationSubnetGroupsCommand;
}($Command));
export { DescribeReplicationSubnetGroupsCommand };
//# sourceMappingURL=DescribeReplicationSubnetGroupsCommand.js.map