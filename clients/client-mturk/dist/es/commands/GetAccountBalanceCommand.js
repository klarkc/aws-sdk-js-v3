import { __extends } from "tslib";
import { GetAccountBalanceRequest, GetAccountBalanceResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAccountBalanceCommand, serializeAws_json1_1GetAccountBalanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester.
 *             Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing.
 *             Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetAccountBalanceCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetAccountBalanceCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetAccountBalanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountBalanceCommandInput} for command's `input` shape.
 * @see {@link GetAccountBalanceCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountBalanceCommand = /** @class */ (function (_super) {
    __extends(GetAccountBalanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountBalanceCommand(input) {
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
    GetAccountBalanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "GetAccountBalanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccountBalanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccountBalanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountBalanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAccountBalanceCommand(input, context);
    };
    GetAccountBalanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAccountBalanceCommand(output, context);
    };
    return GetAccountBalanceCommand;
}($Command));
export { GetAccountBalanceCommand };
//# sourceMappingURL=GetAccountBalanceCommand.js.map