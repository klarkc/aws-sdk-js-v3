import { __extends } from "tslib";
import { ListDelegatedServicesForAccountRequest, ListDelegatedServicesForAccountResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDelegatedServicesForAccountCommand, serializeAws_json1_1ListDelegatedServicesForAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the AWS services for which the specified account is a delegated
 *             administrator.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListDelegatedServicesForAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListDelegatedServicesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListDelegatedServicesForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDelegatedServicesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedServicesForAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDelegatedServicesForAccountCommand = /** @class */ (function (_super) {
    __extends(ListDelegatedServicesForAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDelegatedServicesForAccountCommand(input) {
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
    ListDelegatedServicesForAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListDelegatedServicesForAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDelegatedServicesForAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDelegatedServicesForAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDelegatedServicesForAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDelegatedServicesForAccountCommand(input, context);
    };
    ListDelegatedServicesForAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDelegatedServicesForAccountCommand(output, context);
    };
    return ListDelegatedServicesForAccountCommand;
}($Command));
export { ListDelegatedServicesForAccountCommand };
//# sourceMappingURL=ListDelegatedServicesForAccountCommand.js.map