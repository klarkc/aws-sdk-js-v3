import { __extends } from "tslib";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_1";
import { deserializeAws_json1_1PutRetentionConfigurationCommand, serializeAws_json1_1PutRetentionConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that AWS Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRetentionConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutRetentionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRetentionConfigurationCommand(input) {
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
    PutRetentionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutRetentionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRetentionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRetentionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRetentionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRetentionConfigurationCommand(input, context);
    };
    PutRetentionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRetentionConfigurationCommand(output, context);
    };
    return PutRetentionConfigurationCommand;
}($Command));
export { PutRetentionConfigurationCommand };
//# sourceMappingURL=PutRetentionConfigurationCommand.js.map