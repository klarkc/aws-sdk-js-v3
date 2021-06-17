import { __extends } from "tslib";
import { UpdateHostInput, UpdateHostOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateHostCommand, serializeAws_json1_0UpdateHostCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a specified host with the provided configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, UpdateHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new UpdateHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHostCommandInput} for command's `input` shape.
 * @see {@link UpdateHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateHostCommand = /** @class */ (function (_super) {
    __extends(UpdateHostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateHostCommand(input) {
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
    UpdateHostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarConnectionsClient";
        var commandName = "UpdateHostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateHostInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateHostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateHostCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateHostCommand(input, context);
    };
    UpdateHostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateHostCommand(output, context);
    };
    return UpdateHostCommand;
}($Command));
export { UpdateHostCommand };
//# sourceMappingURL=UpdateHostCommand.js.map