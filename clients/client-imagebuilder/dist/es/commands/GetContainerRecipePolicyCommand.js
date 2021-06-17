import { __extends } from "tslib";
import { GetContainerRecipePolicyRequest, GetContainerRecipePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetContainerRecipePolicyCommand, serializeAws_restJson1GetContainerRecipePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the policy for a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerRecipePolicyCommand = /** @class */ (function (_super) {
    __extends(GetContainerRecipePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerRecipePolicyCommand(input) {
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
    GetContainerRecipePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetContainerRecipePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerRecipePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerRecipePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerRecipePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetContainerRecipePolicyCommand(input, context);
    };
    GetContainerRecipePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetContainerRecipePolicyCommand(output, context);
    };
    return GetContainerRecipePolicyCommand;
}($Command));
export { GetContainerRecipePolicyCommand };
//# sourceMappingURL=GetContainerRecipePolicyCommand.js.map