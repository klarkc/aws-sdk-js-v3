import { __extends } from "tslib";
import { PutContainerRecipePolicyRequest, PutContainerRecipePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1PutContainerRecipePolicyCommand, serializeAws_restJson1PutContainerRecipePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, PutContainerRecipePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, PutContainerRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new PutContainerRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutContainerRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link PutContainerRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutContainerRecipePolicyCommand = /** @class */ (function (_super) {
    __extends(PutContainerRecipePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutContainerRecipePolicyCommand(input) {
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
    PutContainerRecipePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "PutContainerRecipePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutContainerRecipePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutContainerRecipePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutContainerRecipePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutContainerRecipePolicyCommand(input, context);
    };
    PutContainerRecipePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutContainerRecipePolicyCommand(output, context);
    };
    return PutContainerRecipePolicyCommand;
}($Command));
export { PutContainerRecipePolicyCommand };
//# sourceMappingURL=PutContainerRecipePolicyCommand.js.map