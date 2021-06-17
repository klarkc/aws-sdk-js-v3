import { __extends } from "tslib";
import { PutDomainPermissionsPolicyRequest, PutDomainPermissionsPolicyResult } from "../models/models_0";
import { deserializeAws_restJson1PutDomainPermissionsPolicyCommand, serializeAws_restJson1PutDomainPermissionsPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Sets a resource policy on a domain that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions.
 *        This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PutDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDomainPermissionsPolicyCommand = /** @class */ (function (_super) {
    __extends(PutDomainPermissionsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDomainPermissionsPolicyCommand(input) {
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
    PutDomainPermissionsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "PutDomainPermissionsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDomainPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDomainPermissionsPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDomainPermissionsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutDomainPermissionsPolicyCommand(input, context);
    };
    PutDomainPermissionsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutDomainPermissionsPolicyCommand(output, context);
    };
    return PutDomainPermissionsPolicyCommand;
}($Command));
export { PutDomainPermissionsPolicyCommand };
//# sourceMappingURL=PutDomainPermissionsPolicyCommand.js.map