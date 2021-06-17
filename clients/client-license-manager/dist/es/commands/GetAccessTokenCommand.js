import { __extends } from "tslib";
import { GetAccessTokenRequest, GetAccessTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAccessTokenCommand, serializeAws_json1_1GetAccessTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
 *           are valid for one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetAccessTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetAccessTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetAccessTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessTokenCommand = /** @class */ (function (_super) {
    __extends(GetAccessTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessTokenCommand(input) {
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
    GetAccessTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "GetAccessTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAccessTokenCommand(input, context);
    };
    GetAccessTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAccessTokenCommand(output, context);
    };
    return GetAccessTokenCommand;
}($Command));
export { GetAccessTokenCommand };
//# sourceMappingURL=GetAccessTokenCommand.js.map