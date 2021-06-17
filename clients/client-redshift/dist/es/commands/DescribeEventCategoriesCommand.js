import { __extends } from "tslib";
import { DescribeEventCategoriesMessage, EventCategoriesMessage } from "../models/models_0";
import { deserializeAws_queryDescribeEventCategoriesCommand, serializeAws_queryDescribeEventCategoriesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays a list of event categories for all event source types, or for a specified
 *             source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event
 *                 Notifications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RedshiftClient";
        var commandName = "DescribeEventCategoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventCategoriesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EventCategoriesMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventCategoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEventCategoriesCommand(input, context);
    };
    DescribeEventCategoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEventCategoriesCommand(output, context);
    };
    return DescribeEventCategoriesCommand;
}($Command));
export { DescribeEventCategoriesCommand };
//# sourceMappingURL=DescribeEventCategoriesCommand.js.map