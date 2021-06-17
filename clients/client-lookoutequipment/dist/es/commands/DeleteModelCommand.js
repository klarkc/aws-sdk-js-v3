import { __extends } from "tslib";
import { DeleteModelRequest } from "../models/models_0";
import { deserializeAws_json1_0DeleteModelCommand, serializeAws_json1_0DeleteModelCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from
 *          being used with an inference scheduler, even one that is already set up. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteModelCommand = /** @class */ (function (_super) {
    __extends(DeleteModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteModelCommand(input) {
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
    DeleteModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "DeleteModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteModelCommand(input, context);
    };
    DeleteModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteModelCommand(output, context);
    };
    return DeleteModelCommand;
}($Command));
export { DeleteModelCommand };
//# sourceMappingURL=DeleteModelCommand.js.map