import { __extends } from "tslib";
import { GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLifecyclePoliciesCommand, serializeAws_restJson1GetLifecyclePoliciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets summary information about all or the specified data lifecycle policies.</p>
 * 		       <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePoliciesCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePoliciesCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new GetLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePoliciesCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLifecyclePoliciesCommand = /** @class */ (function (_super) {
    __extends(GetLifecyclePoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLifecyclePoliciesCommand(input) {
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
    GetLifecyclePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DLMClient";
        var commandName = "GetLifecyclePoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLifecyclePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLifecyclePoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLifecyclePoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLifecyclePoliciesCommand(input, context);
    };
    GetLifecyclePoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLifecyclePoliciesCommand(output, context);
    };
    return GetLifecyclePoliciesCommand;
}($Command));
export { GetLifecyclePoliciesCommand };
//# sourceMappingURL=GetLifecyclePoliciesCommand.js.map