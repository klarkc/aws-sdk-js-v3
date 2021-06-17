import { __extends } from "tslib";
import { GetStudioSessionMappingInput, GetStudioSessionMappingOutput } from "../models/models_0";
import { deserializeAws_json1_1GetStudioSessionMappingCommand, serializeAws_json1_1GetStudioSessionMappingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Fetches mapping details for the specified Amazon EMR Studio and identity (user or
 *          group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link GetStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStudioSessionMappingCommand = /** @class */ (function (_super) {
    __extends(GetStudioSessionMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStudioSessionMappingCommand(input) {
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
    GetStudioSessionMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "GetStudioSessionMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStudioSessionMappingInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetStudioSessionMappingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStudioSessionMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetStudioSessionMappingCommand(input, context);
    };
    GetStudioSessionMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetStudioSessionMappingCommand(output, context);
    };
    return GetStudioSessionMappingCommand;
}($Command));
export { GetStudioSessionMappingCommand };
//# sourceMappingURL=GetStudioSessionMappingCommand.js.map