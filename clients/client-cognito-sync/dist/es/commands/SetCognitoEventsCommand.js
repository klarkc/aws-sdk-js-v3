import { __extends } from "tslib";
import { SetCognitoEventsRequest } from "../models/models_0";
import { deserializeAws_restJson1SetCognitoEventsCommand, serializeAws_restJson1SetCognitoEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SetCognitoEventsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SetCognitoEventsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new SetCognitoEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetCognitoEventsCommandInput} for command's `input` shape.
 * @see {@link SetCognitoEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetCognitoEventsCommand = /** @class */ (function (_super) {
    __extends(SetCognitoEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetCognitoEventsCommand(input) {
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
    SetCognitoEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "SetCognitoEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetCognitoEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetCognitoEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetCognitoEventsCommand(input, context);
    };
    SetCognitoEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetCognitoEventsCommand(output, context);
    };
    return SetCognitoEventsCommand;
}($Command));
export { SetCognitoEventsCommand };
//# sourceMappingURL=SetCognitoEventsCommand.js.map