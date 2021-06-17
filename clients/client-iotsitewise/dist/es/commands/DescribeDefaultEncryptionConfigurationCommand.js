import { __extends } from "tslib";
import { DescribeDefaultEncryptionConfigurationRequest, DescribeDefaultEncryptionConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand, serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the default encryption configuration for the
 *       AWS account in the default or specified region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a>
 *       in the <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDefaultEncryptionConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeDefaultEncryptionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDefaultEncryptionConfigurationCommand(input) {
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
    DescribeDefaultEncryptionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DescribeDefaultEncryptionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDefaultEncryptionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDefaultEncryptionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDefaultEncryptionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand(input, context);
    };
    DescribeDefaultEncryptionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand(output, context);
    };
    return DescribeDefaultEncryptionConfigurationCommand;
}($Command));
export { DescribeDefaultEncryptionConfigurationCommand };
//# sourceMappingURL=DescribeDefaultEncryptionConfigurationCommand.js.map