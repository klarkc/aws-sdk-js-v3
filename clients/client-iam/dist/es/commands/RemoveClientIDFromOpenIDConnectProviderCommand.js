import { __extends } from "tslib";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/models_0";
import { deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand, serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified client ID (also known as audience) from the list of client IDs
 *             registered for the specified IAM OpenID Connect (OIDC) provider resource
 *             object.</p>
 *         <p>This operation is idempotent; it does not fail or return an error if you try to remove
 *             a client ID that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveClientIDFromOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveClientIDFromOpenIDConnectProviderCommand = /** @class */ (function (_super) {
    __extends(RemoveClientIDFromOpenIDConnectProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveClientIDFromOpenIDConnectProviderCommand(input) {
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
    RemoveClientIDFromOpenIDConnectProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "RemoveClientIDFromOpenIDConnectProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveClientIDFromOpenIDConnectProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveClientIDFromOpenIDConnectProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(input, context);
    };
    RemoveClientIDFromOpenIDConnectProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(output, context);
    };
    return RemoveClientIDFromOpenIDConnectProviderCommand;
}($Command));
export { RemoveClientIDFromOpenIDConnectProviderCommand };
//# sourceMappingURL=RemoveClientIDFromOpenIDConnectProviderCommand.js.map