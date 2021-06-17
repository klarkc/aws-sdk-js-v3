import { __extends } from "tslib";
import { GetInsightImpactGraphRequest, GetInsightImpactGraphResult } from "../models/models_0";
import { deserializeAws_restJson1GetInsightImpactGraphCommand, serializeAws_restJson1GetInsightImpactGraphCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightImpactGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightImpactGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightImpactGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightImpactGraphCommandInput} for command's `input` shape.
 * @see {@link GetInsightImpactGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightImpactGraphCommand = /** @class */ (function (_super) {
    __extends(GetInsightImpactGraphCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightImpactGraphCommand(input) {
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
    GetInsightImpactGraphCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetInsightImpactGraphCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightImpactGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightImpactGraphResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightImpactGraphCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInsightImpactGraphCommand(input, context);
    };
    GetInsightImpactGraphCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInsightImpactGraphCommand(output, context);
    };
    return GetInsightImpactGraphCommand;
}($Command));
export { GetInsightImpactGraphCommand };
//# sourceMappingURL=GetInsightImpactGraphCommand.js.map