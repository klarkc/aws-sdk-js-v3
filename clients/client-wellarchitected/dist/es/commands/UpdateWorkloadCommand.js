import { __extends } from "tslib";
import { UpdateWorkloadInput, UpdateWorkloadOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateWorkloadCommand, serializeAws_restJson1UpdateWorkloadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateWorkloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkloadCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkloadCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkloadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkloadCommand(input) {
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
    UpdateWorkloadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "UpdateWorkloadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkloadInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkloadOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkloadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateWorkloadCommand(input, context);
    };
    UpdateWorkloadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateWorkloadCommand(output, context);
    };
    return UpdateWorkloadCommand;
}($Command));
export { UpdateWorkloadCommand };
//# sourceMappingURL=UpdateWorkloadCommand.js.map