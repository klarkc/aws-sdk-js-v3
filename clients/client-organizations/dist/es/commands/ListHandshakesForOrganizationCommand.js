import { __extends } from "tslib";
import { ListHandshakesForOrganizationRequest, ListHandshakesForOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1ListHandshakesForOrganizationCommand, serializeAws_json1_1ListHandshakesForOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the handshakes that are associated with the organization that the requesting
 *             user is part of. The <code>ListHandshakesForOrganization</code> operation returns a list
 *             of handshake structures. Each structure contains details and status about a
 *             handshake.</p>
 *         <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> appear in the results of this API for only 30 days after
 *             changing to that state. After that, they're deleted and no longer accessible.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListHandshakesForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHandshakesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHandshakesForOrganizationCommand = /** @class */ (function (_super) {
    __extends(ListHandshakesForOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHandshakesForOrganizationCommand(input) {
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
    ListHandshakesForOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListHandshakesForOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHandshakesForOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHandshakesForOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHandshakesForOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListHandshakesForOrganizationCommand(input, context);
    };
    ListHandshakesForOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListHandshakesForOrganizationCommand(output, context);
    };
    return ListHandshakesForOrganizationCommand;
}($Command));
export { ListHandshakesForOrganizationCommand };
//# sourceMappingURL=ListHandshakesForOrganizationCommand.js.map