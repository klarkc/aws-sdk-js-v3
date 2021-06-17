import { __extends } from "tslib";
import { GetComponentPolicyRequest, GetComponentPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetComponentPolicyCommand, serializeAws_restJson1GetComponentPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets a component policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetComponentPolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetComponentPolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetComponentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetComponentPolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetComponentPolicyCommand = /** @class */ (function (_super) {
    __extends(GetComponentPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetComponentPolicyCommand(input) {
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
    GetComponentPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetComponentPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetComponentPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetComponentPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetComponentPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetComponentPolicyCommand(input, context);
    };
    GetComponentPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetComponentPolicyCommand(output, context);
    };
    return GetComponentPolicyCommand;
}($Command));
export { GetComponentPolicyCommand };
//# sourceMappingURL=GetComponentPolicyCommand.js.map