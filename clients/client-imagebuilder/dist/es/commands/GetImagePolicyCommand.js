import { __extends } from "tslib";
import { GetImagePolicyRequest, GetImagePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImagePolicyCommand, serializeAws_restJson1GetImagePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Gets an image policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImagePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImagePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImagePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImagePolicyCommand = /** @class */ (function (_super) {
    __extends(GetImagePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImagePolicyCommand(input) {
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
    GetImagePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "GetImagePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImagePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImagePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImagePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImagePolicyCommand(input, context);
    };
    GetImagePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImagePolicyCommand(output, context);
    };
    return GetImagePolicyCommand;
}($Command));
export { GetImagePolicyCommand };
//# sourceMappingURL=GetImagePolicyCommand.js.map