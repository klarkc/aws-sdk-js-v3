import { __extends } from "tslib";
import { GetPlanRequest, GetPlanResponse } from "../models/models_1";
import { deserializeAws_json1_1GetPlanCommand, serializeAws_json1_1GetPlanCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets code to perform a specified mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPlanCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPlanCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlanCommandInput} for command's `input` shape.
 * @see {@link GetPlanCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPlanCommand = /** @class */ (function (_super) {
    __extends(GetPlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPlanCommand(input) {
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
    GetPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetPlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPlanRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPlanResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPlanCommand(input, context);
    };
    GetPlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPlanCommand(output, context);
    };
    return GetPlanCommand;
}($Command));
export { GetPlanCommand };
//# sourceMappingURL=GetPlanCommand.js.map