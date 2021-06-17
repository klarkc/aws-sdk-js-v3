import { __extends } from "tslib";
import { DeleteAccountCustomizationRequest, DeleteAccountCustomizationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAccountCustomizationCommand, serializeAws_restJson1DeleteAccountCustomizationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all Amazon QuickSight customizations in this AWS Region for the specified AWS
 *             account and QuickSight namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteAccountCustomizationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteAccountCustomizationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteAccountCustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountCustomizationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCustomizationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountCustomizationCommand = /** @class */ (function (_super) {
    __extends(DeleteAccountCustomizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccountCustomizationCommand(input) {
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
    DeleteAccountCustomizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteAccountCustomizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccountCustomizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccountCustomizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccountCustomizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAccountCustomizationCommand(input, context);
    };
    DeleteAccountCustomizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAccountCustomizationCommand(output, context);
    };
    return DeleteAccountCustomizationCommand;
}($Command));
export { DeleteAccountCustomizationCommand };
//# sourceMappingURL=DeleteAccountCustomizationCommand.js.map