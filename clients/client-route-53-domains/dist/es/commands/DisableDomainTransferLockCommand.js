import { __extends } from "tslib";
import { DisableDomainTransferLockRequest, DisableDomainTransferLockResponse } from "../models/models_0";
import { deserializeAws_json1_1DisableDomainTransferLockCommand, serializeAws_json1_1DisableDomainTransferLockCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation removes the transfer lock on the domain (specifically the
 * 			<code>clientTransferProhibited</code> status) to allow domain transfers. We recommend
 * 			you refrain from performing this action unless you intend to transfer the domain to a
 * 			different registrar. Successful submission returns an operation ID that you can use to track
 * 			the progress and completion of the action. If the request is not completed successfully, the
 * 			domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DisableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link DisableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableDomainTransferLockCommand = /** @class */ (function (_super) {
    __extends(DisableDomainTransferLockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableDomainTransferLockCommand(input) {
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
    DisableDomainTransferLockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "DisableDomainTransferLockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableDomainTransferLockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableDomainTransferLockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableDomainTransferLockCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableDomainTransferLockCommand(input, context);
    };
    DisableDomainTransferLockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableDomainTransferLockCommand(output, context);
    };
    return DisableDomainTransferLockCommand;
}($Command));
export { DisableDomainTransferLockCommand };
//# sourceMappingURL=DisableDomainTransferLockCommand.js.map