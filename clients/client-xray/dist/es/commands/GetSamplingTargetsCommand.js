import { __extends } from "tslib";
import { GetSamplingTargetsRequest, GetSamplingTargetsResult } from "../models/models_0";
import { deserializeAws_restJson1GetSamplingTargetsCommand, serializeAws_restJson1GetSamplingTargetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a sampling quota for rules that the service is using to sample requests.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingTargetsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingTargetsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingTargetsCommandInput} for command's `input` shape.
 * @see {@link GetSamplingTargetsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSamplingTargetsCommand = /** @class */ (function (_super) {
    __extends(GetSamplingTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSamplingTargetsCommand(input) {
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
    GetSamplingTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetSamplingTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSamplingTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSamplingTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSamplingTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSamplingTargetsCommand(input, context);
    };
    GetSamplingTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSamplingTargetsCommand(output, context);
    };
    return GetSamplingTargetsCommand;
}($Command));
export { GetSamplingTargetsCommand };
//# sourceMappingURL=GetSamplingTargetsCommand.js.map