import { __extends } from "tslib";
import { DeleteContainerServiceRequest, DeleteContainerServiceResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteContainerServiceCommand, serializeAws_json1_1DeleteContainerServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes your Amazon Lightsail container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteContainerServiceCommand = /** @class */ (function (_super) {
    __extends(DeleteContainerServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteContainerServiceCommand(input) {
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
    DeleteContainerServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteContainerServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteContainerServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteContainerServiceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteContainerServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteContainerServiceCommand(input, context);
    };
    DeleteContainerServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteContainerServiceCommand(output, context);
    };
    return DeleteContainerServiceCommand;
}($Command));
export { DeleteContainerServiceCommand };
//# sourceMappingURL=DeleteContainerServiceCommand.js.map