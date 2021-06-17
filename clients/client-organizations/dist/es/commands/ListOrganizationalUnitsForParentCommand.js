import { __extends } from "tslib";
import { ListOrganizationalUnitsForParentRequest, ListOrganizationalUnitsForParentResponse } from "../models/models_0";
import { deserializeAws_json1_1ListOrganizationalUnitsForParentCommand, serializeAws_json1_1ListOrganizationalUnitsForParentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p>
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
 * import { OrganizationsClient, ListOrganizationalUnitsForParentCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListOrganizationalUnitsForParentCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListOrganizationalUnitsForParentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationalUnitsForParentCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationalUnitsForParentCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOrganizationalUnitsForParentCommand = /** @class */ (function (_super) {
    __extends(ListOrganizationalUnitsForParentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOrganizationalUnitsForParentCommand(input) {
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
    ListOrganizationalUnitsForParentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListOrganizationalUnitsForParentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOrganizationalUnitsForParentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOrganizationalUnitsForParentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOrganizationalUnitsForParentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOrganizationalUnitsForParentCommand(input, context);
    };
    ListOrganizationalUnitsForParentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOrganizationalUnitsForParentCommand(output, context);
    };
    return ListOrganizationalUnitsForParentCommand;
}($Command));
export { ListOrganizationalUnitsForParentCommand };
//# sourceMappingURL=ListOrganizationalUnitsForParentCommand.js.map