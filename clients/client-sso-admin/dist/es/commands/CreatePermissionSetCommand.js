import { __extends } from "tslib";
import { CreatePermissionSetRequest, CreatePermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreatePermissionSetCommand, serializeAws_json1_1CreatePermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a permission set within a specified SSO instance.</p>
 *          <note>
 *             <p>To grant users and groups access to AWS account resources, use <code>
 *                   <a>CreateAccountAssignment</a>
 *                </code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreatePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreatePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreatePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePermissionSetCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePermissionSetCommand = /** @class */ (function (_super) {
    __extends(CreatePermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePermissionSetCommand(input) {
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
    CreatePermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "CreatePermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePermissionSetCommand(input, context);
    };
    CreatePermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePermissionSetCommand(output, context);
    };
    return CreatePermissionSetCommand;
}($Command));
export { CreatePermissionSetCommand };
//# sourceMappingURL=CreatePermissionSetCommand.js.map