import { __extends } from "tslib";
import { UpdateAcceleratorAttributesRequest, UpdateAcceleratorAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateAcceleratorAttributesCommand, serializeAws_json1_1UpdateAcceleratorAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the attributes for an accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAcceleratorAttributesCommand = /** @class */ (function (_super) {
    __extends(UpdateAcceleratorAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAcceleratorAttributesCommand(input) {
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
    UpdateAcceleratorAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateAcceleratorAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAcceleratorAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAcceleratorAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAcceleratorAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAcceleratorAttributesCommand(input, context);
    };
    UpdateAcceleratorAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAcceleratorAttributesCommand(output, context);
    };
    return UpdateAcceleratorAttributesCommand;
}($Command));
export { UpdateAcceleratorAttributesCommand };
//# sourceMappingURL=UpdateAcceleratorAttributesCommand.js.map