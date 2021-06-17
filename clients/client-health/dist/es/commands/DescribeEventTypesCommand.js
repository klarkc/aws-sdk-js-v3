import { __extends } from "tslib";
import { DescribeEventTypesRequest, DescribeEventTypesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventTypesCommand, serializeAws_json1_1DescribeEventTypesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the event types that meet the specified filter criteria. You can use this API
 *          operation to find information about the AWS Health event, such as the category, AWS
 *          service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p>
 *          <p>If you don't specify a filter criteria, the API operation returns all event types, in no
 *          particular order.  </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventTypesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventTypesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTypesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventTypesCommand = /** @class */ (function (_super) {
    __extends(DescribeEventTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventTypesCommand(input) {
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
    DescribeEventTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeEventTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventTypesCommand(input, context);
    };
    DescribeEventTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventTypesCommand(output, context);
    };
    return DescribeEventTypesCommand;
}($Command));
export { DescribeEventTypesCommand };
//# sourceMappingURL=DescribeEventTypesCommand.js.map