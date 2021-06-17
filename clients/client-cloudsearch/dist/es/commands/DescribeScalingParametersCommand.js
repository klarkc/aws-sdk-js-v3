import { __extends } from "tslib";
import { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/models_0";
import { deserializeAws_queryDescribeScalingParametersCommand, serializeAws_queryDescribeScalingParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeScalingParametersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeScalingParametersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeScalingParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingParametersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeScalingParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScalingParametersCommand(input) {
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
    DescribeScalingParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeScalingParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScalingParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScalingParametersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScalingParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeScalingParametersCommand(input, context);
    };
    DescribeScalingParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeScalingParametersCommand(output, context);
    };
    return DescribeScalingParametersCommand;
}($Command));
export { DescribeScalingParametersCommand };
//# sourceMappingURL=DescribeScalingParametersCommand.js.map