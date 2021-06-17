import { __extends } from "tslib";
import { UpdateAgentRequest, UpdateAgentResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateAgentCommand, serializeAws_json1_1UpdateAgentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name of an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new UpdateAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAgentCommand = /** @class */ (function (_super) {
    __extends(UpdateAgentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAgentCommand(input) {
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
    UpdateAgentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "UpdateAgentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAgentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAgentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAgentCommand(input, context);
    };
    UpdateAgentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAgentCommand(output, context);
    };
    return UpdateAgentCommand;
}($Command));
export { UpdateAgentCommand };
//# sourceMappingURL=UpdateAgentCommand.js.map