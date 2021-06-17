import { __extends } from "tslib";
import { GetOpenIDConnectProviderRequest, GetOpenIDConnectProviderResponse } from "../models/models_0";
import { deserializeAws_queryGetOpenIDConnectProviderCommand, serializeAws_queryGetOpenIDConnectProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object
 *             in IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link GetOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOpenIDConnectProviderCommand = /** @class */ (function (_super) {
    __extends(GetOpenIDConnectProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOpenIDConnectProviderCommand(input) {
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
    GetOpenIDConnectProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetOpenIDConnectProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpenIDConnectProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpenIDConnectProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpenIDConnectProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetOpenIDConnectProviderCommand(input, context);
    };
    GetOpenIDConnectProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetOpenIDConnectProviderCommand(output, context);
    };
    return GetOpenIDConnectProviderCommand;
}($Command));
export { GetOpenIDConnectProviderCommand };
//# sourceMappingURL=GetOpenIDConnectProviderCommand.js.map