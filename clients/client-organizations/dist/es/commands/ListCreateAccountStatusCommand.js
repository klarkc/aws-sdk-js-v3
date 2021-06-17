import { __extends } from "tslib";
import { ListCreateAccountStatusRequest, ListCreateAccountStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1ListCreateAccountStatusCommand, serializeAws_json1_1ListCreateAccountStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the account creation requests that match the specified status that is currently
 *             being tracked for the organization.</p>
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
 * import { OrganizationsClient, ListCreateAccountStatusCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListCreateAccountStatusCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCreateAccountStatusCommandInput} for command's `input` shape.
 * @see {@link ListCreateAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCreateAccountStatusCommand = /** @class */ (function (_super) {
    __extends(ListCreateAccountStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCreateAccountStatusCommand(input) {
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
    ListCreateAccountStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListCreateAccountStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCreateAccountStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCreateAccountStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCreateAccountStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCreateAccountStatusCommand(input, context);
    };
    ListCreateAccountStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCreateAccountStatusCommand(output, context);
    };
    return ListCreateAccountStatusCommand;
}($Command));
export { ListCreateAccountStatusCommand };
//# sourceMappingURL=ListCreateAccountStatusCommand.js.map