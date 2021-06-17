import { __extends } from "tslib";
import { StartUserImportJobRequest, StartUserImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartUserImportJobCommand, serializeAws_json1_1StartUserImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the user import.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StartUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StartUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new StartUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartUserImportJobCommandInput} for command's `input` shape.
 * @see {@link StartUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartUserImportJobCommand = /** @class */ (function (_super) {
    __extends(StartUserImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartUserImportJobCommand(input) {
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
    StartUserImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "StartUserImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartUserImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartUserImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartUserImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartUserImportJobCommand(input, context);
    };
    StartUserImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartUserImportJobCommand(output, context);
    };
    return StartUserImportJobCommand;
}($Command));
export { StartUserImportJobCommand };
//# sourceMappingURL=StartUserImportJobCommand.js.map