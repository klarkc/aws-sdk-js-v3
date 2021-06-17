import { __extends } from "tslib";
import { CreateLagRequest, Lag } from "../models/models_0";
import { deserializeAws_json1_1CreateLagCommand, serializeAws_json1_1CreateLagCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a link aggregation group (LAG) with the specified number of bundled
 *       physical dedicated connections between the customer network and a specific AWS Direct Connect location.
 *       A LAG is a logical interface that uses the Link Aggregation Control Protocol
 *       (LACP) to aggregate multiple interfaces, enabling you to treat them as a single
 *       interface.</p>
 *         <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same AWS Direct Connect endpoint.</p>
 *          <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you
 *       request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is
 *       created.</p>
 *          <p>You can specify an existing physical dedicated connection or interconnect to include in
 *       the LAG (which counts towards the total number of connections). Doing so interrupts the
 *       current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG
 *       will be created on the same AWS Direct Connect endpoint to which the dedicated connection terminates. Any
 *       virtual interfaces associated with the dedicated connection are automatically disassociated
 *       and re-associated with the LAG. The connection ID does not change.</p>
 *          <p>If the AWS account used to create a LAG is a registered AWS Direct Connect Partner, the LAG is
 *       automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual
 *       interfaces cannot be directly configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLagCommandInput} for command's `input` shape.
 * @see {@link CreateLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLagCommand = /** @class */ (function (_super) {
    __extends(CreateLagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLagCommand(input) {
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
    CreateLagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreateLagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Lag.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLagCommand(input, context);
    };
    CreateLagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLagCommand(output, context);
    };
    return CreateLagCommand;
}($Command));
export { CreateLagCommand };
//# sourceMappingURL=CreateLagCommand.js.map