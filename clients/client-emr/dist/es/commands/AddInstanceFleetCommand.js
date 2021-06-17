import { __extends } from "tslib";
import { AddInstanceFleetInput, AddInstanceFleetOutput } from "../models/models_0";
import { deserializeAws_json1_1AddInstanceFleetCommand, serializeAws_json1_1AddInstanceFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an instance fleet to a running cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddInstanceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link AddInstanceFleetCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddInstanceFleetCommand = /** @class */ (function (_super) {
    __extends(AddInstanceFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddInstanceFleetCommand(input) {
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
    AddInstanceFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "AddInstanceFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddInstanceFleetInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddInstanceFleetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddInstanceFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddInstanceFleetCommand(input, context);
    };
    AddInstanceFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddInstanceFleetCommand(output, context);
    };
    return AddInstanceFleetCommand;
}($Command));
export { AddInstanceFleetCommand };
//# sourceMappingURL=AddInstanceFleetCommand.js.map