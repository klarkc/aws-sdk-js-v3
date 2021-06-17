import { __extends } from "tslib";
import { CreateActionTargetRequest, CreateActionTargetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateActionTargetCommand, serializeAws_restJson1CreateActionTargetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a custom action target in Security Hub.</p>
 *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
 *          in Amazon CloudWatch Events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new CreateActionTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActionTargetCommandInput} for command's `input` shape.
 * @see {@link CreateActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateActionTargetCommand = /** @class */ (function (_super) {
    __extends(CreateActionTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateActionTargetCommand(input) {
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
    CreateActionTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "CreateActionTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateActionTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateActionTargetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateActionTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateActionTargetCommand(input, context);
    };
    CreateActionTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateActionTargetCommand(output, context);
    };
    return CreateActionTargetCommand;
}($Command));
export { CreateActionTargetCommand };
//# sourceMappingURL=CreateActionTargetCommand.js.map