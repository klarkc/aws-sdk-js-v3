import { __extends } from "tslib";
import { GetCognitoEventsRequest, GetCognitoEventsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCognitoEventsCommand, serializeAws_restJson1GetCognitoEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetCognitoEventsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetCognitoEventsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new GetCognitoEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCognitoEventsCommandInput} for command's `input` shape.
 * @see {@link GetCognitoEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCognitoEventsCommand = /** @class */ (function (_super) {
    __extends(GetCognitoEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCognitoEventsCommand(input) {
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
    GetCognitoEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "GetCognitoEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCognitoEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCognitoEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCognitoEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCognitoEventsCommand(input, context);
    };
    GetCognitoEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCognitoEventsCommand(output, context);
    };
    return GetCognitoEventsCommand;
}($Command));
export { GetCognitoEventsCommand };
//# sourceMappingURL=GetCognitoEventsCommand.js.map