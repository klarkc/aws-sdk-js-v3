import { __extends } from "tslib";
import { UpdateCanaryRequest, UpdateCanaryResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateCanaryCommand, serializeAws_restJson1UpdateCanaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to change the settings of a canary that has
 *          already been created.</p>
 *          <p>You can't use this operation to update the tags of an existing canary. To
 *          change the tags of an existing canary, use
 *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, UpdateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, UpdateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new UpdateCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCanaryCommandInput} for command's `input` shape.
 * @see {@link UpdateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCanaryCommand = /** @class */ (function (_super) {
    __extends(UpdateCanaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCanaryCommand(input) {
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
    UpdateCanaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "UpdateCanaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCanaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCanaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCanaryCommand(input, context);
    };
    UpdateCanaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCanaryCommand(output, context);
    };
    return UpdateCanaryCommand;
}($Command));
export { UpdateCanaryCommand };
//# sourceMappingURL=UpdateCanaryCommand.js.map