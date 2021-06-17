import { __extends } from "tslib";
import { CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateLifecyclePolicyCommand, serializeAws_restJson1CreateLifecyclePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a policy to manage the lifecycle of the specified AWS resources. You can
 * 			create up to 100 lifecycle policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, CreateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, CreateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLifecyclePolicyCommand = /** @class */ (function (_super) {
    __extends(CreateLifecyclePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLifecyclePolicyCommand(input) {
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
    CreateLifecyclePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DLMClient";
        var commandName = "CreateLifecyclePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLifecyclePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLifecyclePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLifecyclePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateLifecyclePolicyCommand(input, context);
    };
    CreateLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateLifecyclePolicyCommand(output, context);
    };
    return CreateLifecyclePolicyCommand;
}($Command));
export { CreateLifecyclePolicyCommand };
//# sourceMappingURL=CreateLifecyclePolicyCommand.js.map