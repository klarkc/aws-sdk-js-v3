import { __extends } from "tslib";
import { PutImageScanningConfigurationRequest, PutImageScanningConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutImageScanningConfigurationCommand, serializeAws_json1_1PutImageScanningConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the image scanning configuration for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutImageScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutImageScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutImageScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutImageScanningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutImageScanningConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutImageScanningConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutImageScanningConfigurationCommand(input) {
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
    PutImageScanningConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "PutImageScanningConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutImageScanningConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutImageScanningConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutImageScanningConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutImageScanningConfigurationCommand(input, context);
    };
    PutImageScanningConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutImageScanningConfigurationCommand(output, context);
    };
    return PutImageScanningConfigurationCommand;
}($Command));
export { PutImageScanningConfigurationCommand };
//# sourceMappingURL=PutImageScanningConfigurationCommand.js.map