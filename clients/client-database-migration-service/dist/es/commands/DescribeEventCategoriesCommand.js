import { __extends } from "tslib";
import { DescribeEventCategoriesMessage, DescribeEventCategoriesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventCategoriesCommand, serializeAws_json1_1DescribeEventCategoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists categories for all event source types, or, if specified, for a specified source
 *          type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events
 *             and Notifications</a> in the <i>AWS Database Migration Service User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventCategoriesCommand = /** @class */ (function (_super) {
    __extends(DescribeEventCategoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventCategoriesCommand(input) {
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
    DescribeEventCategoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeEventCategoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventCategoriesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventCategoriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventCategoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventCategoriesCommand(input, context);
    };
    DescribeEventCategoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventCategoriesCommand(output, context);
    };
    return DescribeEventCategoriesCommand;
}($Command));
export { DescribeEventCategoriesCommand };
//# sourceMappingURL=DescribeEventCategoriesCommand.js.map