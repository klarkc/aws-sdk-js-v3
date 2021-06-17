import { __extends } from "tslib";
import { RotateEncryptionKeyMessage, RotateEncryptionKeyResult } from "../models/models_1";
import { deserializeAws_queryRotateEncryptionKeyCommand, serializeAws_queryRotateEncryptionKeyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rotates the encryption keys for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RotateEncryptionKeyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RotateEncryptionKeyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RotateEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link RotateEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RotateEncryptionKeyCommand = /** @class */ (function (_super) {
    __extends(RotateEncryptionKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RotateEncryptionKeyCommand(input) {
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
    RotateEncryptionKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RotateEncryptionKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RotateEncryptionKeyMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RotateEncryptionKeyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RotateEncryptionKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRotateEncryptionKeyCommand(input, context);
    };
    RotateEncryptionKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRotateEncryptionKeyCommand(output, context);
    };
    return RotateEncryptionKeyCommand;
}($Command));
export { RotateEncryptionKeyCommand };
//# sourceMappingURL=RotateEncryptionKeyCommand.js.map