import { __extends } from "tslib";
import { DescribeConfigurationAggregatorSourcesStatusRequest, DescribeConfigurationAggregatorSourcesStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand, serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns status information for sources within an aggregator.
 * 			The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationAggregatorSourcesStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigurationAggregatorSourcesStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationAggregatorSourcesStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationAggregatorSourcesStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigurationAggregatorSourcesStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorSourcesStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigurationAggregatorSourcesStatusCommand(input) {
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
    DescribeConfigurationAggregatorSourcesStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConfigurationAggregatorSourcesStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigurationAggregatorSourcesStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConfigurationAggregatorSourcesStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigurationAggregatorSourcesStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand(input, context);
    };
    DescribeConfigurationAggregatorSourcesStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand(output, context);
    };
    return DescribeConfigurationAggregatorSourcesStatusCommand;
}($Command));
export { DescribeConfigurationAggregatorSourcesStatusCommand };
//# sourceMappingURL=DescribeConfigurationAggregatorSourcesStatusCommand.js.map