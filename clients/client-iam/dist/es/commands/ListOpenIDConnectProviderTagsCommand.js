import { __extends } from "tslib";
import { ListOpenIDConnectProviderTagsRequest, ListOpenIDConnectProviderTagsResponse } from "../models/models_0";
import { deserializeAws_queryListOpenIDConnectProviderTagsCommand, serializeAws_queryListOpenIDConnectProviderTagsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that are attached to the specified OpenID Connect (OIDC)-compatible
 *       identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProviderTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProviderTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListOpenIDConnectProviderTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpenIDConnectProviderTagsCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProviderTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOpenIDConnectProviderTagsCommand = /** @class */ (function (_super) {
    __extends(ListOpenIDConnectProviderTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOpenIDConnectProviderTagsCommand(input) {
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
    ListOpenIDConnectProviderTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListOpenIDConnectProviderTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpenIDConnectProviderTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpenIDConnectProviderTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpenIDConnectProviderTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListOpenIDConnectProviderTagsCommand(input, context);
    };
    ListOpenIDConnectProviderTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListOpenIDConnectProviderTagsCommand(output, context);
    };
    return ListOpenIDConnectProviderTagsCommand;
}($Command));
export { ListOpenIDConnectProviderTagsCommand };
//# sourceMappingURL=ListOpenIDConnectProviderTagsCommand.js.map