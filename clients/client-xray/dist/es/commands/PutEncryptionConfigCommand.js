import { __extends } from "tslib";
import { PutEncryptionConfigRequest, PutEncryptionConfigResult } from "../models/models_0";
import { deserializeAws_restJson1PutEncryptionConfigCommand, serializeAws_restJson1PutEncryptionConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link PutEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEncryptionConfigCommand = /** @class */ (function (_super) {
    __extends(PutEncryptionConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEncryptionConfigCommand(input) {
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
    PutEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "PutEncryptionConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEncryptionConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEncryptionConfigResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEncryptionConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutEncryptionConfigCommand(input, context);
    };
    PutEncryptionConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutEncryptionConfigCommand(output, context);
    };
    return PutEncryptionConfigCommand;
}($Command));
export { PutEncryptionConfigCommand };
//# sourceMappingURL=PutEncryptionConfigCommand.js.map