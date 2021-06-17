import { __extends } from "tslib";
import { DescribeConfigurationRecordersRequest, DescribeConfigurationRecordersResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeConfigurationRecordersCommand, serializeAws_json1_1DescribeConfigurationRecordersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details for the specified configuration recorders.
 * 			If the configuration recorder is not specified, this action returns
 * 			the details for all configuration recorders associated with the
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecordersCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecordersCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigurationRecordersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRecordersCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecordersCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigurationRecordersCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigurationRecordersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigurationRecordersCommand(input) {
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
    DescribeConfigurationRecordersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConfigurationRecordersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigurationRecordersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConfigurationRecordersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigurationRecordersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConfigurationRecordersCommand(input, context);
    };
    DescribeConfigurationRecordersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConfigurationRecordersCommand(output, context);
    };
    return DescribeConfigurationRecordersCommand;
}($Command));
export { DescribeConfigurationRecordersCommand };
//# sourceMappingURL=DescribeConfigurationRecordersCommand.js.map