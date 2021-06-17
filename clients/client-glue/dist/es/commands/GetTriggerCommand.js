import { __extends } from "tslib";
import { GetTriggerRequest, GetTriggerResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTriggerCommand, serializeAws_json1_1GetTriggerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the definition of a trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTriggerCommandInput} for command's `input` shape.
 * @see {@link GetTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTriggerCommand = /** @class */ (function (_super) {
    __extends(GetTriggerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTriggerCommand(input) {
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
    GetTriggerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTriggerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTriggerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTriggerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTriggerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTriggerCommand(input, context);
    };
    GetTriggerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTriggerCommand(output, context);
    };
    return GetTriggerCommand;
}($Command));
export { GetTriggerCommand };
//# sourceMappingURL=GetTriggerCommand.js.map