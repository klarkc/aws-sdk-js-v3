import { __extends } from "tslib";
import { DescribeResourcePoliciesRequest, DescribeResourcePoliciesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeResourcePoliciesCommand, serializeAws_json1_1DescribeResourcePoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resource policies in this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeResourcePoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeResourcePoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourcePoliciesCommand = /** @class */ (function (_super) {
    __extends(DescribeResourcePoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourcePoliciesCommand(input) {
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
    DescribeResourcePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DescribeResourcePoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourcePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourcePoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourcePoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeResourcePoliciesCommand(input, context);
    };
    DescribeResourcePoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeResourcePoliciesCommand(output, context);
    };
    return DescribeResourcePoliciesCommand;
}($Command));
export { DescribeResourcePoliciesCommand };
//# sourceMappingURL=DescribeResourcePoliciesCommand.js.map