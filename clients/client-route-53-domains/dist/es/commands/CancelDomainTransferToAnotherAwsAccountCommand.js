import { __extends } from "tslib";
import { CancelDomainTransferToAnotherAwsAccountRequest, CancelDomainTransferToAnotherAwsAccountResponse, } from "../models/models_0";
import { deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand, serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 		</p>
 *
 * 		       <important>
 * 			         <p>You must cancel the transfer before the other AWS account accepts the transfer using
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p>
 * 		       </important>
 *
 * 		       <p>Use either
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to determine whether the operation succeeded.
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CancelDomainTransferToAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CancelDomainTransferToAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CancelDomainTransferToAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDomainTransferToAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link CancelDomainTransferToAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelDomainTransferToAnotherAwsAccountCommand = /** @class */ (function (_super) {
    __extends(CancelDomainTransferToAnotherAwsAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelDomainTransferToAnotherAwsAccountCommand(input) {
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
    CancelDomainTransferToAnotherAwsAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "CancelDomainTransferToAnotherAwsAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelDomainTransferToAnotherAwsAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelDomainTransferToAnotherAwsAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelDomainTransferToAnotherAwsAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand(input, context);
    };
    CancelDomainTransferToAnotherAwsAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand(output, context);
    };
    return CancelDomainTransferToAnotherAwsAccountCommand;
}($Command));
export { CancelDomainTransferToAnotherAwsAccountCommand };
//# sourceMappingURL=CancelDomainTransferToAnotherAwsAccountCommand.js.map