import { __extends } from "tslib";
import { UpdateLensReviewInput, UpdateLensReviewOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateLensReviewCommand, serializeAws_restJson1UpdateLensReviewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateLensReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpdateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLensReviewCommand = /** @class */ (function (_super) {
    __extends(UpdateLensReviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLensReviewCommand(input) {
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
    UpdateLensReviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "UpdateLensReviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLensReviewInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLensReviewOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLensReviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLensReviewCommand(input, context);
    };
    UpdateLensReviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLensReviewCommand(output, context);
    };
    return UpdateLensReviewCommand;
}($Command));
export { UpdateLensReviewCommand };
//# sourceMappingURL=UpdateLensReviewCommand.js.map