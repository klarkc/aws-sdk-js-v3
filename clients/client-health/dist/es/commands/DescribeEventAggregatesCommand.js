import { __extends } from "tslib";
import { DescribeEventAggregatesRequest, DescribeEventAggregatesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventAggregatesCommand, serializeAws_json1_1DescribeEventAggregatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the number of events of each event type (issue, scheduled change, and account
 *          notification). If no filter is specified, the counts of all events in each category are
 *          returned.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventAggregatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventAggregatesCommand = /** @class */ (function (_super) {
    __extends(DescribeEventAggregatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventAggregatesCommand(input) {
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
    DescribeEventAggregatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeEventAggregatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventAggregatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventAggregatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventAggregatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventAggregatesCommand(input, context);
    };
    DescribeEventAggregatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventAggregatesCommand(output, context);
    };
    return DescribeEventAggregatesCommand;
}($Command));
export { DescribeEventAggregatesCommand };
//# sourceMappingURL=DescribeEventAggregatesCommand.js.map