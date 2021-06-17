import { __extends } from "tslib";
import { UpdateStudioInput } from "../models/models_0";
import { deserializeAws_json1_1UpdateStudioCommand, serializeAws_json1_1UpdateStudioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, UpdateStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, UpdateStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new UpdateStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStudioCommand = /** @class */ (function (_super) {
    __extends(UpdateStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStudioCommand(input) {
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
    UpdateStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "UpdateStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStudioInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateStudioCommand(input, context);
    };
    UpdateStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateStudioCommand(output, context);
    };
    return UpdateStudioCommand;
}($Command));
export { UpdateStudioCommand };
//# sourceMappingURL=UpdateStudioCommand.js.map