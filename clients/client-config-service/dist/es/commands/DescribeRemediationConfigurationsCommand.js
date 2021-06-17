import { __extends } from "tslib";
import { DescribeRemediationConfigurationsRequest, DescribeRemediationConfigurationsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeRemediationConfigurationsCommand, serializeAws_json1_1DescribeRemediationConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of one or more remediation configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRemediationConfigurationsCommand = /** @class */ (function (_super) {
    __extends(DescribeRemediationConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRemediationConfigurationsCommand(input) {
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
    DescribeRemediationConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeRemediationConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRemediationConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRemediationConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRemediationConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRemediationConfigurationsCommand(input, context);
    };
    DescribeRemediationConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRemediationConfigurationsCommand(output, context);
    };
    return DescribeRemediationConfigurationsCommand;
}($Command));
export { DescribeRemediationConfigurationsCommand };
//# sourceMappingURL=DescribeRemediationConfigurationsCommand.js.map