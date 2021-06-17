import { __extends } from "tslib";
import { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListOrganizationAdminAccountsCommand, serializeAws_restJson1ListOrganizationAdminAccountsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the delegated Amazon Macie administrator account for an AWS organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOrganizationAdminAccountsCommand = /** @class */ (function (_super) {
    __extends(ListOrganizationAdminAccountsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOrganizationAdminAccountsCommand(input) {
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
    ListOrganizationAdminAccountsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "ListOrganizationAdminAccountsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOrganizationAdminAccountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOrganizationAdminAccountsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOrganizationAdminAccountsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListOrganizationAdminAccountsCommand(input, context);
    };
    ListOrganizationAdminAccountsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListOrganizationAdminAccountsCommand(output, context);
    };
    return ListOrganizationAdminAccountsCommand;
}($Command));
export { ListOrganizationAdminAccountsCommand };
//# sourceMappingURL=ListOrganizationAdminAccountsCommand.js.map