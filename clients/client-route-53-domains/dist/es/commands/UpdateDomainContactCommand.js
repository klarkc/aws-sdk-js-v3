import { __extends } from "tslib";
import { UpdateDomainContactRequest, UpdateDomainContactResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateDomainContactCommand, serializeAws_json1_1UpdateDomainContactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact:
 * 			registrant, administrator, or technical.</p>
 * 		       <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action.
 * 			If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainContactCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateDomainContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainContactCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainContactCommand = /** @class */ (function (_super) {
    __extends(UpdateDomainContactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDomainContactCommand(input) {
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
    UpdateDomainContactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "UpdateDomainContactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDomainContactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDomainContactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDomainContactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDomainContactCommand(input, context);
    };
    UpdateDomainContactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDomainContactCommand(output, context);
    };
    return UpdateDomainContactCommand;
}($Command));
export { UpdateDomainContactCommand };
//# sourceMappingURL=UpdateDomainContactCommand.js.map