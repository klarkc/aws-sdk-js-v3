import { __extends } from "tslib";
import { PutImageRecipePolicyRequest, PutImageRecipePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1PutImageRecipePolicyCommand, serializeAws_restJson1PutImageRecipePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API
 *         <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to
 *       all principals with whom the resource is shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutImageRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutImageRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new PutImageRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutImageRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link PutImageRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutImageRecipePolicyCommand = /** @class */ (function (_super) {
    __extends(PutImageRecipePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutImageRecipePolicyCommand(input) {
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
    PutImageRecipePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "PutImageRecipePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutImageRecipePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutImageRecipePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutImageRecipePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutImageRecipePolicyCommand(input, context);
    };
    PutImageRecipePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutImageRecipePolicyCommand(output, context);
    };
    return PutImageRecipePolicyCommand;
}($Command));
export { PutImageRecipePolicyCommand };
//# sourceMappingURL=PutImageRecipePolicyCommand.js.map