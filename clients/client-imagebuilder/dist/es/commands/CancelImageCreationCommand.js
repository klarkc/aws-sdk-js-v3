import { __extends } from "tslib";
import { CancelImageCreationRequest, CancelImageCreationResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelImageCreationCommand, serializeAws_restJson1CancelImageCreationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>CancelImageCreation cancels the creation of Image. This operation can only be used on
 *       images in a non-terminal state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelImageCreationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CancelImageCreationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CancelImageCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelImageCreationCommandInput} for command's `input` shape.
 * @see {@link CancelImageCreationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelImageCreationCommand = /** @class */ (function (_super) {
    __extends(CancelImageCreationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelImageCreationCommand(input) {
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
    CancelImageCreationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ImagebuilderClient";
        var commandName = "CancelImageCreationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelImageCreationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelImageCreationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelImageCreationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelImageCreationCommand(input, context);
    };
    CancelImageCreationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelImageCreationCommand(output, context);
    };
    return CancelImageCreationCommand;
}($Command));
export { CancelImageCreationCommand };
//# sourceMappingURL=CancelImageCreationCommand.js.map