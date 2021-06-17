import { __extends } from "tslib";
import { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeSecurityConfigurationCommand, serializeAws_json1_1DescribeSecurityConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the details of a security configuration by returning the configuration
 *          JSON.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSecurityConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeSecurityConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSecurityConfigurationCommand(input) {
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
    DescribeSecurityConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "DescribeSecurityConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSecurityConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSecurityConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSecurityConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSecurityConfigurationCommand(input, context);
    };
    DescribeSecurityConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSecurityConfigurationCommand(output, context);
    };
    return DescribeSecurityConfigurationCommand;
}($Command));
export { DescribeSecurityConfigurationCommand };
//# sourceMappingURL=DescribeSecurityConfigurationCommand.js.map