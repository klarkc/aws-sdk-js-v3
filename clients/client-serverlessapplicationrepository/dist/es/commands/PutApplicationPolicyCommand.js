import { __extends } from "tslib";
import { PutApplicationPolicyRequest, PutApplicationPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1PutApplicationPolicyCommand, serializeAws_restJson1PutApplicationPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the permission policy for an application. For the list of actions supported for this operation, see
 *  <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
 *  Permissions</a>
 *  .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, PutApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new PutApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutApplicationPolicyCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutApplicationPolicyCommand = /** @class */ (function (_super) {
    __extends(PutApplicationPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutApplicationPolicyCommand(input) {
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
    PutApplicationPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "PutApplicationPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutApplicationPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutApplicationPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutApplicationPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutApplicationPolicyCommand(input, context);
    };
    PutApplicationPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutApplicationPolicyCommand(output, context);
    };
    return PutApplicationPolicyCommand;
}($Command));
export { PutApplicationPolicyCommand };
//# sourceMappingURL=PutApplicationPolicyCommand.js.map