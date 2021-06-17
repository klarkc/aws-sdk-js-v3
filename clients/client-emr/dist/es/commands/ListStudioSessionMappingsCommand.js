import { __extends } from "tslib";
import { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListStudioSessionMappingsCommand, serializeAws_json1_1ListStudioSessionMappingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all user or group session mappings for the Amazon EMR Studio specified by
 *             <code>StudioId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudioSessionMappingsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudioSessionMappingsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStudioSessionMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioSessionMappingsCommandInput} for command's `input` shape.
 * @see {@link ListStudioSessionMappingsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStudioSessionMappingsCommand = /** @class */ (function (_super) {
    __extends(ListStudioSessionMappingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStudioSessionMappingsCommand(input) {
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
    ListStudioSessionMappingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListStudioSessionMappingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStudioSessionMappingsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListStudioSessionMappingsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStudioSessionMappingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListStudioSessionMappingsCommand(input, context);
    };
    ListStudioSessionMappingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListStudioSessionMappingsCommand(output, context);
    };
    return ListStudioSessionMappingsCommand;
}($Command));
export { ListStudioSessionMappingsCommand };
//# sourceMappingURL=ListStudioSessionMappingsCommand.js.map