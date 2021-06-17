import { __extends } from "tslib";
import { GetOperationsRequest, GetOperationsResult } from "../models/models_1";
import { deserializeAws_json1_1GetOperationsCommand, serializeAws_json1_1GetOperationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all operations.</p>
 *          <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged
 *       by making each subsequent call to <code>GetOperations</code> use the maximum (last)
 *         <code>statusChangedAt</code> value from the previous request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetOperationsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetOperationsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOperationsCommandInput} for command's `input` shape.
 * @see {@link GetOperationsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOperationsCommand = /** @class */ (function (_super) {
    __extends(GetOperationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOperationsCommand(input) {
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
    GetOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetOperationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOperationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOperationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOperationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOperationsCommand(input, context);
    };
    GetOperationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOperationsCommand(output, context);
    };
    return GetOperationsCommand;
}($Command));
export { GetOperationsCommand };
//# sourceMappingURL=GetOperationsCommand.js.map