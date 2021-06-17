import { __extends } from "tslib";
import { GetEncryptionConfigRequest, GetEncryptionConfigResult } from "../models/models_0";
import { deserializeAws_restJson1GetEncryptionConfigCommand, serializeAws_restJson1GetEncryptionConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEncryptionConfigCommand = /** @class */ (function (_super) {
    __extends(GetEncryptionConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEncryptionConfigCommand(input) {
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
    GetEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetEncryptionConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEncryptionConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEncryptionConfigResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEncryptionConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEncryptionConfigCommand(input, context);
    };
    GetEncryptionConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEncryptionConfigCommand(output, context);
    };
    return GetEncryptionConfigCommand;
}($Command));
export { GetEncryptionConfigCommand };
//# sourceMappingURL=GetEncryptionConfigCommand.js.map