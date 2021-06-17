import { __extends } from "tslib";
import { ListInferenceSchedulersRequest, ListInferenceSchedulersResponse } from "../models/models_0";
import { deserializeAws_json1_0ListInferenceSchedulersCommand, serializeAws_json1_0ListInferenceSchedulersCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of all inference schedulers currently available for your account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, ListInferenceSchedulersCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, ListInferenceSchedulersCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new ListInferenceSchedulersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInferenceSchedulersCommandInput} for command's `input` shape.
 * @see {@link ListInferenceSchedulersCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInferenceSchedulersCommand = /** @class */ (function (_super) {
    __extends(ListInferenceSchedulersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInferenceSchedulersCommand(input) {
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
    ListInferenceSchedulersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "ListInferenceSchedulersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInferenceSchedulersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInferenceSchedulersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInferenceSchedulersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListInferenceSchedulersCommand(input, context);
    };
    ListInferenceSchedulersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListInferenceSchedulersCommand(output, context);
    };
    return ListInferenceSchedulersCommand;
}($Command));
export { ListInferenceSchedulersCommand };
//# sourceMappingURL=ListInferenceSchedulersCommand.js.map