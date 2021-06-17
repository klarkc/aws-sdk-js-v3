import { __extends } from "tslib";
import { GetTriggersRequest, GetTriggersResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTriggersCommand, serializeAws_json1_1GetTriggersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all the triggers associated with a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTriggersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTriggersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTriggersCommandInput} for command's `input` shape.
 * @see {@link GetTriggersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTriggersCommand = /** @class */ (function (_super) {
    __extends(GetTriggersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTriggersCommand(input) {
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
    GetTriggersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTriggersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTriggersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTriggersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTriggersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTriggersCommand(input, context);
    };
    GetTriggersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTriggersCommand(output, context);
    };
    return GetTriggersCommand;
}($Command));
export { GetTriggersCommand };
//# sourceMappingURL=GetTriggersCommand.js.map