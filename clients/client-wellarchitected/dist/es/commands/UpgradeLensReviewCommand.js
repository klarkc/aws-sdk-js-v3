import { __extends } from "tslib";
import { UpgradeLensReviewInput } from "../models/models_0";
import { deserializeAws_restJson1UpgradeLensReviewCommand, serializeAws_restJson1UpgradeLensReviewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Upgrade lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpgradeLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpgradeLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpgradeLensReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpgradeLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpgradeLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpgradeLensReviewCommand = /** @class */ (function (_super) {
    __extends(UpgradeLensReviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpgradeLensReviewCommand(input) {
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
    UpgradeLensReviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "UpgradeLensReviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpgradeLensReviewInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpgradeLensReviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpgradeLensReviewCommand(input, context);
    };
    UpgradeLensReviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpgradeLensReviewCommand(output, context);
    };
    return UpgradeLensReviewCommand;
}($Command));
export { UpgradeLensReviewCommand };
//# sourceMappingURL=UpgradeLensReviewCommand.js.map