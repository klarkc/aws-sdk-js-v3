import { __extends } from "tslib";
import { GetApplicationPolicyRequest, GetApplicationPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApplicationPolicyCommand, serializeAws_restJson1GetApplicationPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the policy for the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new GetApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetApplicationPolicyCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApplicationPolicyCommand = /** @class */ (function (_super) {
    __extends(GetApplicationPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApplicationPolicyCommand(input) {
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
    GetApplicationPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "GetApplicationPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApplicationPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetApplicationPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApplicationPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetApplicationPolicyCommand(input, context);
    };
    GetApplicationPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetApplicationPolicyCommand(output, context);
    };
    return GetApplicationPolicyCommand;
}($Command));
export { GetApplicationPolicyCommand };
//# sourceMappingURL=GetApplicationPolicyCommand.js.map