import { __extends } from "tslib";
import { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateDataSetCommand, serializeAws_restJson1UpdateDataSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataSetCommand = /** @class */ (function (_super) {
    __extends(UpdateDataSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDataSetCommand(input) {
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
    UpdateDataSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateDataSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDataSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDataSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDataSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDataSetCommand(input, context);
    };
    UpdateDataSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDataSetCommand(output, context);
    };
    return UpdateDataSetCommand;
}($Command));
export { UpdateDataSetCommand };
//# sourceMappingURL=UpdateDataSetCommand.js.map