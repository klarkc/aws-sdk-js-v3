import { __extends } from "tslib";
import { PutRepositoryPermissionsPolicyRequest, PutRepositoryPermissionsPolicyResult } from "../models/models_0";
import { deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand, serializeAws_restJson1PutRepositoryPermissionsPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Sets the resource policy on a repository that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
 *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PutRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRepositoryPermissionsPolicyCommand = /** @class */ (function (_super) {
    __extends(PutRepositoryPermissionsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRepositoryPermissionsPolicyCommand(input) {
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
    PutRepositoryPermissionsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "PutRepositoryPermissionsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRepositoryPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRepositoryPermissionsPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRepositoryPermissionsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutRepositoryPermissionsPolicyCommand(input, context);
    };
    PutRepositoryPermissionsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand(output, context);
    };
    return PutRepositoryPermissionsPolicyCommand;
}($Command));
export { PutRepositoryPermissionsPolicyCommand };
//# sourceMappingURL=PutRepositoryPermissionsPolicyCommand.js.map