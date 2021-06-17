import { __extends } from "tslib";
import { CreateUserImportJobRequest, CreateUserImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateUserImportJobCommand, serializeAws_json1_1CreateUserImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the user import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CreateUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new CreateUserImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserImportJobCommand = /** @class */ (function (_super) {
    __extends(CreateUserImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserImportJobCommand(input) {
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
    CreateUserImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "CreateUserImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUserImportJobCommand(input, context);
    };
    CreateUserImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUserImportJobCommand(output, context);
    };
    return CreateUserImportJobCommand;
}($Command));
export { CreateUserImportJobCommand };
//# sourceMappingURL=CreateUserImportJobCommand.js.map