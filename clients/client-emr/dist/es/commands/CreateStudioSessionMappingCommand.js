import { __extends } from "tslib";
import { CreateStudioSessionMappingInput } from "../models/models_0";
import { deserializeAws_json1_1CreateStudioSessionMappingCommand, serializeAws_json1_1CreateStudioSessionMappingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and
 *          applies a session policy to refine Studio permissions for that user or group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CreateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CreateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CreateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link CreateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStudioSessionMappingCommand = /** @class */ (function (_super) {
    __extends(CreateStudioSessionMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStudioSessionMappingCommand(input) {
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
    CreateStudioSessionMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "CreateStudioSessionMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStudioSessionMappingInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStudioSessionMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateStudioSessionMappingCommand(input, context);
    };
    CreateStudioSessionMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateStudioSessionMappingCommand(output, context);
    };
    return CreateStudioSessionMappingCommand;
}($Command));
export { CreateStudioSessionMappingCommand };
//# sourceMappingURL=CreateStudioSessionMappingCommand.js.map