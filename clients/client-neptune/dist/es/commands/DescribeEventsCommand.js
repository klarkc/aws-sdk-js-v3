import { __extends } from "tslib";
import { DescribeEventsMessage, EventsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeEventsCommand, serializeAws_queryDescribeEventsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter
 *       groups for the past 14 days. Events specific to a particular DB instance, DB security group,
 *       database snapshot, or DB parameter group can be obtained by providing the name as a parameter.
 *       By default, the past hour of events are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeEventsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeEventsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventsCommand = /** @class */ (function (_super) {
    __extends(DescribeEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventsCommand(input) {
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
    DescribeEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EventsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEventsCommand(input, context);
    };
    DescribeEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEventsCommand(output, context);
    };
    return DescribeEventsCommand;
}($Command));
export { DescribeEventsCommand };
//# sourceMappingURL=DescribeEventsCommand.js.map