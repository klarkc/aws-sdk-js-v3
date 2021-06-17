import { __extends } from "tslib";
import { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLifecyclePolicyCommand, serializeAws_restJson1GetLifecyclePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets detailed information about the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLifecyclePolicyCommand = /** @class */ (function (_super) {
    __extends(GetLifecyclePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLifecyclePolicyCommand(input) {
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
    GetLifecyclePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DLMClient";
        var commandName = "GetLifecyclePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLifecyclePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLifecyclePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLifecyclePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLifecyclePolicyCommand(input, context);
    };
    GetLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLifecyclePolicyCommand(output, context);
    };
    return GetLifecyclePolicyCommand;
}($Command));
export { GetLifecyclePolicyCommand };
//# sourceMappingURL=GetLifecyclePolicyCommand.js.map