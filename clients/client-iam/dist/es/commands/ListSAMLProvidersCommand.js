import { __extends } from "tslib";
import { ListSAMLProvidersRequest, ListSAMLProvidersResponse } from "../models/models_0";
import { deserializeAws_queryListSAMLProvidersCommand, serializeAws_queryListSAMLProvidersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the SAML provider resource objects defined in IAM in the account.
 *             IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p>
 *         <important>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSAMLProvidersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSAMLProvidersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSAMLProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSAMLProvidersCommandInput} for command's `input` shape.
 * @see {@link ListSAMLProvidersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSAMLProvidersCommand = /** @class */ (function (_super) {
    __extends(ListSAMLProvidersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSAMLProvidersCommand(input) {
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
    ListSAMLProvidersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListSAMLProvidersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSAMLProvidersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSAMLProvidersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSAMLProvidersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListSAMLProvidersCommand(input, context);
    };
    ListSAMLProvidersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListSAMLProvidersCommand(output, context);
    };
    return ListSAMLProvidersCommand;
}($Command));
export { ListSAMLProvidersCommand };
//# sourceMappingURL=ListSAMLProvidersCommand.js.map