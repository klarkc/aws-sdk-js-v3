import { __extends } from "tslib";
import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1ImportSshPublicKeyCommand, serializeAws_json1_1ImportSshPublicKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
 *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
 *       identified by <code>ServerId</code>.</p>
 *
 *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
 *       the name of the <code>SshPublicKeyId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ImportSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link ImportSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportSshPublicKeyCommand = /** @class */ (function (_super) {
    __extends(ImportSshPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportSshPublicKeyCommand(input) {
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
    ImportSshPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "ImportSshPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportSshPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportSshPublicKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportSshPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportSshPublicKeyCommand(input, context);
    };
    ImportSshPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportSshPublicKeyCommand(output, context);
    };
    return ImportSshPublicKeyCommand;
}($Command));
export { ImportSshPublicKeyCommand };
//# sourceMappingURL=ImportSshPublicKeyCommand.js.map