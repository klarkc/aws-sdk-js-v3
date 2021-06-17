import { __extends } from "tslib";
import { CreateListenerInput, CreateListenerOutput } from "../models/models_0";
import { deserializeAws_queryCreateListenerCommand, serializeAws_queryCreateListenerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
 *       Gateway Load Balancer.</p>
 *
 *
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for
 *             your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for
 *             your Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your
 *             Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple listeners with the same settings, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new CreateListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateListenerCommandInput} for command's `input` shape.
 * @see {@link CreateListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateListenerCommand = /** @class */ (function (_super) {
    __extends(CreateListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateListenerCommand(input) {
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
    CreateListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "CreateListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateListenerInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateListenerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateListenerCommand(input, context);
    };
    CreateListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateListenerCommand(output, context);
    };
    return CreateListenerCommand;
}($Command));
export { CreateListenerCommand };
//# sourceMappingURL=CreateListenerCommand.js.map