import { __extends } from "tslib";
import { DeleteKnownHostKeysRequest, DeleteKnownHostKeysResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteKnownHostKeysCommand, serializeAws_json1_1DeleteKnownHostKeysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or
 *       RDP clients to authenticate an instance. This operation enables the Lightsail browser-based
 *       SSH or RDP clients to connect to the instance after a host key mismatch.</p>
 *          <important>
 *             <p>Perform this operation only if you were expecting the host key or certificate mismatch
 *         or if you are familiar with the new host key or certificate on the instance. For more
 *         information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP
 *           client</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKnownHostKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKnownHostKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteKnownHostKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKnownHostKeysCommandInput} for command's `input` shape.
 * @see {@link DeleteKnownHostKeysCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteKnownHostKeysCommand = /** @class */ (function (_super) {
    __extends(DeleteKnownHostKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteKnownHostKeysCommand(input) {
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
    DeleteKnownHostKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteKnownHostKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteKnownHostKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteKnownHostKeysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteKnownHostKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteKnownHostKeysCommand(input, context);
    };
    DeleteKnownHostKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteKnownHostKeysCommand(output, context);
    };
    return DeleteKnownHostKeysCommand;
}($Command));
export { DeleteKnownHostKeysCommand };
//# sourceMappingURL=DeleteKnownHostKeysCommand.js.map