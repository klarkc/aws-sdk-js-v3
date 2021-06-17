import { __extends } from "tslib";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateTokenCommand, serializeAws_json1_1CreateTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a long-lived token.</p>
 *          <p>A refresh token is a JWT token used to get an access token. With an access token,
 *           you can call AssumeRoleWithWebIdentity to get role credentials that you can use to
 *           call License Manager to manage the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTokenCommandInput} for command's `input` shape.
 * @see {@link CreateTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTokenCommand = /** @class */ (function (_super) {
    __extends(CreateTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTokenCommand(input) {
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
    CreateTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CreateTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTokenCommand(input, context);
    };
    CreateTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTokenCommand(output, context);
    };
    return CreateTokenCommand;
}($Command));
export { CreateTokenCommand };
//# sourceMappingURL=CreateTokenCommand.js.map