import { __extends } from "tslib";
import { GetServiceGraphRequest, GetServiceGraphResult } from "../models/models_0";
import { deserializeAws_restJson1GetServiceGraphCommand, serializeAws_restJson1GetServiceGraphCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a document that describes services that process incoming requests, and
 *       downstream services that they call as a result. Root services process incoming requests and
 *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">AWS X-Ray SDK</a>.
 *       Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL
 *       databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetServiceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetServiceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetServiceGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceGraphCommandInput} for command's `input` shape.
 * @see {@link GetServiceGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServiceGraphCommand = /** @class */ (function (_super) {
    __extends(GetServiceGraphCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServiceGraphCommand(input) {
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
    GetServiceGraphCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetServiceGraphCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceGraphResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceGraphCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetServiceGraphCommand(input, context);
    };
    GetServiceGraphCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetServiceGraphCommand(output, context);
    };
    return GetServiceGraphCommand;
}($Command));
export { GetServiceGraphCommand };
//# sourceMappingURL=GetServiceGraphCommand.js.map