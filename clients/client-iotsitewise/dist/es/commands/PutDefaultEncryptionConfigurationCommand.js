import { __extends } from "tslib";
import { PutDefaultEncryptionConfigurationRequest, PutDefaultEncryptionConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand, serializeAws_restJson1PutDefaultEncryptionConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the default encryption configuration for the AWS
 *       account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a>
 *       in the <i>AWS IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, PutDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, PutDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new PutDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDefaultEncryptionConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutDefaultEncryptionConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDefaultEncryptionConfigurationCommand(input) {
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
    PutDefaultEncryptionConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "PutDefaultEncryptionConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDefaultEncryptionConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDefaultEncryptionConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDefaultEncryptionConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutDefaultEncryptionConfigurationCommand(input, context);
    };
    PutDefaultEncryptionConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand(output, context);
    };
    return PutDefaultEncryptionConfigurationCommand;
}($Command));
export { PutDefaultEncryptionConfigurationCommand };
//# sourceMappingURL=PutDefaultEncryptionConfigurationCommand.js.map