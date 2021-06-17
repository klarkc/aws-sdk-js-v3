import { __extends } from "tslib";
import { AcceptDomainTransferFromAnotherAwsAccountRequest, AcceptDomainTransferFromAnotherAwsAccountResponse, } from "../models/models_0";
import { deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand, serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 		</p>
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
 * import { Route53DomainsClient, AcceptDomainTransferFromAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, AcceptDomainTransferFromAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new AcceptDomainTransferFromAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptDomainTransferFromAnotherAwsAccountCommand = /** @class */ (function (_super) {
    __extends(AcceptDomainTransferFromAnotherAwsAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptDomainTransferFromAnotherAwsAccountCommand(input) {
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
    AcceptDomainTransferFromAnotherAwsAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "AcceptDomainTransferFromAnotherAwsAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptDomainTransferFromAnotherAwsAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptDomainTransferFromAnotherAwsAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptDomainTransferFromAnotherAwsAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand(input, context);
    };
    AcceptDomainTransferFromAnotherAwsAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand(output, context);
    };
    return AcceptDomainTransferFromAnotherAwsAccountCommand;
}($Command));
export { AcceptDomainTransferFromAnotherAwsAccountCommand };
//# sourceMappingURL=AcceptDomainTransferFromAnotherAwsAccountCommand.js.map