import { __extends } from "tslib";
import { ListDelegatedAdministratorsRequest, ListDelegatedAdministratorsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDelegatedAdministratorsCommand, serializeAws_json1_1ListDelegatedAdministratorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS accounts that are designated as delegated administrators in this
 *             organization.</p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListDelegatedAdministratorsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListDelegatedAdministratorsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListDelegatedAdministratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDelegatedAdministratorsCommandInput} for command's `input` shape.
 * @see {@link ListDelegatedAdministratorsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDelegatedAdministratorsCommand = /** @class */ (function (_super) {
    __extends(ListDelegatedAdministratorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDelegatedAdministratorsCommand(input) {
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
    ListDelegatedAdministratorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListDelegatedAdministratorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDelegatedAdministratorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDelegatedAdministratorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDelegatedAdministratorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDelegatedAdministratorsCommand(input, context);
    };
    ListDelegatedAdministratorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDelegatedAdministratorsCommand(output, context);
    };
    return ListDelegatedAdministratorsCommand;
}($Command));
export { ListDelegatedAdministratorsCommand };
//# sourceMappingURL=ListDelegatedAdministratorsCommand.js.map