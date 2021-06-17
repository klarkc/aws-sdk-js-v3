import { __extends } from "tslib";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeEndpointsCommand, serializeAws_json1_0DescribeEndpointsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p>
 *          <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture,
 *          including the management and mapping of the service endpoints,
 *          <i>it is not recommended that you use this API unless</i>:</p>
 *          <ul>
 *             <li>
 *                <p>Your application uses a programming language that does not yet have SDK support</p>
 *             </li>
 *             <li>
 *                <p>You require better control over the client-side implementation</p>
 *             </li>
 *          </ul>
 *          <p>For detailed information on how to use DescribeEndpoints,
 *          see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DescribeEndpointsCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DescribeEndpointsCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEndpointsCommand = /** @class */ (function (_super) {
    __extends(DescribeEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEndpointsCommand(input) {
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
    DescribeEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "DescribeEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeEndpointsCommand(input, context);
    };
    DescribeEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeEndpointsCommand(output, context);
    };
    return DescribeEndpointsCommand;
}($Command));
export { DescribeEndpointsCommand };
//# sourceMappingURL=DescribeEndpointsCommand.js.map