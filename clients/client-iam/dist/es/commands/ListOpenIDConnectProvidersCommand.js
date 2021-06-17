import { __extends } from "tslib";
import { ListOpenIDConnectProvidersRequest, ListOpenIDConnectProvidersResponse } from "../models/models_0";
import { deserializeAws_queryListOpenIDConnectProvidersCommand, serializeAws_queryListOpenIDConnectProvidersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects
 *             defined in the AWS account.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProvidersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProvidersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListOpenIDConnectProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpenIDConnectProvidersCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProvidersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOpenIDConnectProvidersCommand = /** @class */ (function (_super) {
    __extends(ListOpenIDConnectProvidersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOpenIDConnectProvidersCommand(input) {
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
    ListOpenIDConnectProvidersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListOpenIDConnectProvidersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpenIDConnectProvidersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpenIDConnectProvidersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpenIDConnectProvidersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListOpenIDConnectProvidersCommand(input, context);
    };
    ListOpenIDConnectProvidersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListOpenIDConnectProvidersCommand(output, context);
    };
    return ListOpenIDConnectProvidersCommand;
}($Command));
export { ListOpenIDConnectProvidersCommand };
//# sourceMappingURL=ListOpenIDConnectProvidersCommand.js.map