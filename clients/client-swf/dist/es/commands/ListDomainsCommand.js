import { __extends } from "tslib";
import { DomainInfos, ListDomainsInput } from "../models/models_0";
import { deserializeAws_json1_0ListDomainsCommand, serializeAws_json1_0ListDomainsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of domains registered in the account. The results may be split into
 *       multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken
 *       returned by the initial call.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
 *          </note>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains. The element must be set to
 *             <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is
 *           the account ID, with no dashes.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, ListDomainsCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListDomainsCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainsCommand = /** @class */ (function (_super) {
    __extends(ListDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDomainsCommand(input) {
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
    ListDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SWFClient";
        var commandName = "ListDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDomainsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DomainInfos.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListDomainsCommand(input, context);
    };
    ListDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListDomainsCommand(output, context);
    };
    return ListDomainsCommand;
}($Command));
export { ListDomainsCommand };
//# sourceMappingURL=ListDomainsCommand.js.map