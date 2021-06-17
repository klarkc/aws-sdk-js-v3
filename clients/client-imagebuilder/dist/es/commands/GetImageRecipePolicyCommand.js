import { __extends } from "tslib";
import { GetImageRecipePolicyRequest, GetImageRecipePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImageRecipePolicyCommand, serializeAws_restJson1GetImageRecipePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets an image recipe policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImageRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImageRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImageRecipePolicyCommand = /** @class */ (function (_super) {
    __extends(GetImageRecipePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImageRecipePolicyCommand(input) {
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
    GetImageRecipePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetImageRecipePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImageRecipePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImageRecipePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImageRecipePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImageRecipePolicyCommand(input, context);
    };
    GetImageRecipePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImageRecipePolicyCommand(output, context);
    };
    return GetImageRecipePolicyCommand;
}($Command));
export { GetImageRecipePolicyCommand };
//# sourceMappingURL=GetImageRecipePolicyCommand.js.map