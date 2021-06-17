import { __extends } from "tslib";
import { StopUserImportJobRequest, StopUserImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StopUserImportJobCommand, serializeAws_json1_1StopUserImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the user import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StopUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StopUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new StopUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopUserImportJobCommandInput} for command's `input` shape.
 * @see {@link StopUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopUserImportJobCommand = /** @class */ (function (_super) {
    __extends(StopUserImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopUserImportJobCommand(input) {
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
    StopUserImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "StopUserImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopUserImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopUserImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopUserImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopUserImportJobCommand(input, context);
    };
    StopUserImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopUserImportJobCommand(output, context);
    };
    return StopUserImportJobCommand;
}($Command));
export { StopUserImportJobCommand };
//# sourceMappingURL=StopUserImportJobCommand.js.map