import { __extends } from "tslib";
import { DeletePlaybackKeyPairRequest, DeletePlaybackKeyPairResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePlaybackKeyPairCommand, serializeAws_restJson1DeletePlaybackKeyPairCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified authorization key pair. This invalidates future viewer tokens
 *       generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private
 *         Channels</a> in the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeletePlaybackKeyPairCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeletePlaybackKeyPairCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new DeletePlaybackKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaybackKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackKeyPairCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlaybackKeyPairCommand = /** @class */ (function (_super) {
    __extends(DeletePlaybackKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlaybackKeyPairCommand(input) {
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
    DeletePlaybackKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "DeletePlaybackKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlaybackKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePlaybackKeyPairResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlaybackKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePlaybackKeyPairCommand(input, context);
    };
    DeletePlaybackKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePlaybackKeyPairCommand(output, context);
    };
    return DeletePlaybackKeyPairCommand;
}($Command));
export { DeletePlaybackKeyPairCommand };
//# sourceMappingURL=DeletePlaybackKeyPairCommand.js.map