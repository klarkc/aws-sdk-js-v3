import { __extends } from "tslib";
import { ListHandshakesForAccountRequest, ListHandshakesForAccountResponse } from "../models/models_0";
import { deserializeAws_json1_1ListHandshakesForAccountCommand, serializeAws_json1_1ListHandshakesForAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the current handshakes that are associated with the account of the requesting
 *             user.</p>
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
 *         <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListHandshakesForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHandshakesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHandshakesForAccountCommand = /** @class */ (function (_super) {
    __extends(ListHandshakesForAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHandshakesForAccountCommand(input) {
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
    ListHandshakesForAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListHandshakesForAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHandshakesForAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHandshakesForAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHandshakesForAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListHandshakesForAccountCommand(input, context);
    };
    ListHandshakesForAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListHandshakesForAccountCommand(output, context);
    };
    return ListHandshakesForAccountCommand;
}($Command));
export { ListHandshakesForAccountCommand };
//# sourceMappingURL=ListHandshakesForAccountCommand.js.map