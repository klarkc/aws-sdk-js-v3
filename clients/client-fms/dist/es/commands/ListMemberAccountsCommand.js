import { __extends } from "tslib";
import { ListMemberAccountsRequest, ListMemberAccountsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListMemberAccountsCommand, serializeAws_json1_1ListMemberAccountsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
 *       administrator's AWS organization.</p>
 *          <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the
 *       AWS Firewall Manager administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListMemberAccountsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListMemberAccountsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMemberAccountsCommand = /** @class */ (function (_super) {
    __extends(ListMemberAccountsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMemberAccountsCommand(input) {
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
    ListMemberAccountsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "ListMemberAccountsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMemberAccountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMemberAccountsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMemberAccountsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMemberAccountsCommand(input, context);
    };
    ListMemberAccountsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMemberAccountsCommand(output, context);
    };
    return ListMemberAccountsCommand;
}($Command));
export { ListMemberAccountsCommand };
//# sourceMappingURL=ListMemberAccountsCommand.js.map