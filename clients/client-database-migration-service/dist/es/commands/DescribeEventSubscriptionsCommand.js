import { __extends } from "tslib";
import { DescribeEventSubscriptionsMessage, DescribeEventSubscriptionsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventSubscriptionsCommand, serializeAws_json1_1DescribeEventSubscriptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the event subscriptions for a customer account. The description of a
 *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
 *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
 *             <code>CreationTime</code>, and <code>Status</code>. </p>
 *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
 *          subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventSubscriptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeEventSubscriptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventSubscriptionsCommand(input) {
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
    DescribeEventSubscriptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeEventSubscriptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventSubscriptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventSubscriptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventSubscriptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventSubscriptionsCommand(input, context);
    };
    DescribeEventSubscriptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventSubscriptionsCommand(output, context);
    };
    return DescribeEventSubscriptionsCommand;
}($Command));
export { DescribeEventSubscriptionsCommand };
//# sourceMappingURL=DescribeEventSubscriptionsCommand.js.map