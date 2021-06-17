import { __extends } from "tslib";
import { EnableDomainTransferLockRequest, EnableDomainTransferLockResponse } from "../models/models_0";
import { deserializeAws_json1_1EnableDomainTransferLockCommand, serializeAws_json1_1EnableDomainTransferLockCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status)
 * 			to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new EnableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link EnableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableDomainTransferLockCommand = /** @class */ (function (_super) {
    __extends(EnableDomainTransferLockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableDomainTransferLockCommand(input) {
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
    EnableDomainTransferLockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "EnableDomainTransferLockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableDomainTransferLockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableDomainTransferLockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableDomainTransferLockCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableDomainTransferLockCommand(input, context);
    };
    EnableDomainTransferLockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableDomainTransferLockCommand(output, context);
    };
    return EnableDomainTransferLockCommand;
}($Command));
export { EnableDomainTransferLockCommand };
//# sourceMappingURL=EnableDomainTransferLockCommand.js.map