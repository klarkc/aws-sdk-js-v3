import { __extends } from "tslib";
import { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLifecyclePolicyCommand, serializeAws_json1_1GetLifecyclePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the lifecycle policy for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ECRClient";
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
        return serializeAws_json1_1GetLifecyclePolicyCommand(input, context);
    };
    GetLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLifecyclePolicyCommand(output, context);
    };
    return GetLifecyclePolicyCommand;
}($Command));
export { GetLifecyclePolicyCommand };
//# sourceMappingURL=GetLifecyclePolicyCommand.js.map