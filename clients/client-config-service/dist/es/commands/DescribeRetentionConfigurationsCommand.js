import { __extends } from "tslib";
import { DescribeRetentionConfigurationsRequest, DescribeRetentionConfigurationsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRetentionConfigurationsCommand, serializeAws_json1_1DescribeRetentionConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of one or more retention configurations. If
 * 			the retention configuration name is not specified, this action
 * 			returns the details for all the retention configurations for that
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRetentionConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRetentionConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRetentionConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRetentionConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRetentionConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRetentionConfigurationsCommand = /** @class */ (function (_super) {
    __extends(DescribeRetentionConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRetentionConfigurationsCommand(input) {
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
    DescribeRetentionConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeRetentionConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRetentionConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRetentionConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRetentionConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRetentionConfigurationsCommand(input, context);
    };
    DescribeRetentionConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRetentionConfigurationsCommand(output, context);
    };
    return DescribeRetentionConfigurationsCommand;
}($Command));
export { DescribeRetentionConfigurationsCommand };
//# sourceMappingURL=DescribeRetentionConfigurationsCommand.js.map