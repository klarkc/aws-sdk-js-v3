import { __extends } from "tslib";
import { GetTraceGraphRequest, GetTraceGraphResult } from "../models/models_0";
import { deserializeAws_restJson1GetTraceGraphCommand, serializeAws_restJson1GetTraceGraphCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a service graph for one or more specific trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTraceGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTraceGraphCommandInput} for command's `input` shape.
 * @see {@link GetTraceGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTraceGraphCommand = /** @class */ (function (_super) {
    __extends(GetTraceGraphCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTraceGraphCommand(input) {
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
    GetTraceGraphCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetTraceGraphCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTraceGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTraceGraphResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTraceGraphCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTraceGraphCommand(input, context);
    };
    GetTraceGraphCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTraceGraphCommand(output, context);
    };
    return GetTraceGraphCommand;
}($Command));
export { GetTraceGraphCommand };
//# sourceMappingURL=GetTraceGraphCommand.js.map