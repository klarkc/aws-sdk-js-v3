import { __extends } from "tslib";
import { GetIdInput, GetIdResponse } from "../models/models_0";
import { deserializeAws_json1_1GetIdCommand, serializeAws_json1_1GetIdCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an
 *          implicit linked account.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetIdCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetIdCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdCommandInput} for command's `input` shape.
 * @see {@link GetIdCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIdCommand = /** @class */ (function (_super) {
    __extends(GetIdCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIdCommand(input) {
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
    GetIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "GetIdCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIdInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIdCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetIdCommand(input, context);
    };
    GetIdCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetIdCommand(output, context);
    };
    return GetIdCommand;
}($Command));
export { GetIdCommand };
//# sourceMappingURL=GetIdCommand.js.map