import { __extends } from "tslib";
import { GetCSVHeaderRequest, GetCSVHeaderResponse } from "../models/models_0";
import { deserializeAws_json1_1GetCSVHeaderCommand, serializeAws_json1_1GetCSVHeaderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the header information for the .csv file to be used as input for the user import
 *             job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetCSVHeaderCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetCSVHeaderCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetCSVHeaderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCSVHeaderCommandInput} for command's `input` shape.
 * @see {@link GetCSVHeaderCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCSVHeaderCommand = /** @class */ (function (_super) {
    __extends(GetCSVHeaderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCSVHeaderCommand(input) {
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
    GetCSVHeaderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GetCSVHeaderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCSVHeaderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCSVHeaderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCSVHeaderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCSVHeaderCommand(input, context);
    };
    GetCSVHeaderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCSVHeaderCommand(output, context);
    };
    return GetCSVHeaderCommand;
}($Command));
export { GetCSVHeaderCommand };
//# sourceMappingURL=GetCSVHeaderCommand.js.map