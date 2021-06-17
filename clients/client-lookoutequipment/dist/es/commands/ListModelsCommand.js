import { __extends } from "tslib";
import { ListModelsRequest, ListModelsResponse } from "../models/models_0";
import { deserializeAws_json1_0ListModelsCommand, serializeAws_json1_0ListModelsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a list of all models in the account, including model name and ARN, dataset,
 *          and status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListModelsCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListModelsCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelsCommandInput} for command's `input` shape.
 * @see {@link ListModelsCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListModelsCommand = /** @class */ (function (_super) {
    __extends(ListModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListModelsCommand(input) {
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
    ListModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "ListModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListModelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListModelsCommand(input, context);
    };
    ListModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListModelsCommand(output, context);
    };
    return ListModelsCommand;
}($Command));
export { ListModelsCommand };
//# sourceMappingURL=ListModelsCommand.js.map