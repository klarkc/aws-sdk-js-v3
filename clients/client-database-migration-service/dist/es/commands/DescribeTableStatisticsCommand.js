import { __extends } from "tslib";
import { DescribeTableStatisticsMessage, DescribeTableStatisticsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTableStatisticsCommand, serializeAws_json1_1DescribeTableStatisticsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns table statistics on the database migration task, including table name, rows
 *          inserted, rows updated, and rows deleted.</p>
 *          <p>Note that the "last updated" column the DMS console only indicates the time that AWS DMS
 *          last updated the table statistics record for a table. It does not indicate the time of the
 *          last update to the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeTableStatisticsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTableStatisticsCommand = /** @class */ (function (_super) {
    __extends(DescribeTableStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTableStatisticsCommand(input) {
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
    DescribeTableStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeTableStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTableStatisticsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTableStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTableStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTableStatisticsCommand(input, context);
    };
    DescribeTableStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTableStatisticsCommand(output, context);
    };
    return DescribeTableStatisticsCommand;
}($Command));
export { DescribeTableStatisticsCommand };
//# sourceMappingURL=DescribeTableStatisticsCommand.js.map