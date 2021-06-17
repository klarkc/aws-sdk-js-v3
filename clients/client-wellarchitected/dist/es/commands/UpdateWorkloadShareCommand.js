import { __extends } from "tslib";
import { UpdateWorkloadShareInput, UpdateWorkloadShareOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateWorkloadShareCommand, serializeAws_restJson1UpdateWorkloadShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a workload share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkloadShareCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkloadShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkloadShareCommand(input) {
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
    UpdateWorkloadShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "UpdateWorkloadShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkloadShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkloadShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkloadShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateWorkloadShareCommand(input, context);
    };
    UpdateWorkloadShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateWorkloadShareCommand(output, context);
    };
    return UpdateWorkloadShareCommand;
}($Command));
export { UpdateWorkloadShareCommand };
//# sourceMappingURL=UpdateWorkloadShareCommand.js.map