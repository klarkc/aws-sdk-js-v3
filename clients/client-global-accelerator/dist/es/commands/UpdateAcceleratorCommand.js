import { __extends } from "tslib";
import { UpdateAcceleratorRequest, UpdateAcceleratorResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateAcceleratorCommand, serializeAws_json1_1UpdateAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update an accelerator. </p>
 *
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAcceleratorCommand = /** @class */ (function (_super) {
    __extends(UpdateAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAcceleratorCommand(input) {
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
    UpdateAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAcceleratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAcceleratorCommand(input, context);
    };
    UpdateAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAcceleratorCommand(output, context);
    };
    return UpdateAcceleratorCommand;
}($Command));
export { UpdateAcceleratorCommand };
//# sourceMappingURL=UpdateAcceleratorCommand.js.map