import { __extends } from "tslib";
import { DescribeEventCategoriesMessage, EventCategoriesMessage } from "../models/models_1";
import { deserializeAws_queryDescribeEventCategoriesCommand, serializeAws_queryDescribeEventCategoriesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type.
 *             You can see a list of the event categories and source types
 *             in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">
 *                 Events</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RDSClient";
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