import { __extends } from "tslib";
import { ListSAMLProviderTagsRequest, ListSAMLProviderTagsResponse } from "../models/models_0";
import { deserializeAws_queryListSAMLProviderTagsCommand, serializeAws_queryListSAMLProviderTagsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that are attached to the specified Security Assertion Markup Language
 *       (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSAMLProviderTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSAMLProviderTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSAMLProviderTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSAMLProviderTagsCommandInput} for command's `input` shape.
 * @see {@link ListSAMLProviderTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSAMLProviderTagsCommand = /** @class */ (function (_super) {
    __extends(ListSAMLProviderTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSAMLProviderTagsCommand(input) {
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
    ListSAMLProviderTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListSAMLProviderTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSAMLProviderTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSAMLProviderTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSAMLProviderTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListSAMLProviderTagsCommand(input, context);
    };
    ListSAMLProviderTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListSAMLProviderTagsCommand(output, context);
    };
    return ListSAMLProviderTagsCommand;
}($Command));
export { ListSAMLProviderTagsCommand };
//# sourceMappingURL=ListSAMLProviderTagsCommand.js.map