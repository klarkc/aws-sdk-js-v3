import { __extends } from "tslib";
import { GetRepositoryPermissionsPolicyRequest, GetRepositoryPermissionsPolicyResult } from "../models/models_0";
import { deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand, serializeAws_restJson1GetRepositoryPermissionsPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns the resource policy that is set on a repository.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRepositoryPermissionsPolicyCommand = /** @class */ (function (_super) {
    __extends(GetRepositoryPermissionsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRepositoryPermissionsPolicyCommand(input) {
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
    GetRepositoryPermissionsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "GetRepositoryPermissionsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRepositoryPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRepositoryPermissionsPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRepositoryPermissionsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRepositoryPermissionsPolicyCommand(input, context);
    };
    GetRepositoryPermissionsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand(output, context);
    };
    return GetRepositoryPermissionsPolicyCommand;
}($Command));
export { GetRepositoryPermissionsPolicyCommand };
//# sourceMappingURL=GetRepositoryPermissionsPolicyCommand.js.map