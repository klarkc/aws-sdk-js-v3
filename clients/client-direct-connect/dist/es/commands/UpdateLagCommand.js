import { __extends } from "tslib";
import { Lag, UpdateLagRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateLagCommand, serializeAws_json1_1UpdateLagCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
 *          <p>You can update the following LAG attributes:</p>
 *          <ul>
 *             <li>
 *                <p>The name of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The value for the minimum number of connections that must be operational
 *           for the LAG itself to be operational. </p>
 *             </li>
 *             <li>
 *                <p>The LAG's MACsec encryption mode.</p>
 *                <p>AWS assigns this value to each connection which is part of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The tags</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you adjust the threshold value for the minimum number of operational connections, ensure
 *       that the new value does not cause the LAG to fall below the threshold and become
 *       non-operational.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLagCommandInput} for command's `input` shape.
 * @see {@link UpdateLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLagCommand = /** @class */ (function (_super) {
    __extends(UpdateLagCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLagCommand(input) {
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
    UpdateLagCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "UpdateLagCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLagRequest.filterSensitiveLog,
            outputFilterSensitiveLog: Lag.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLagCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLagCommand(input, context);
    };
    UpdateLagCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLagCommand(output, context);
    };
    return UpdateLagCommand;
}($Command));
export { UpdateLagCommand };
//# sourceMappingURL=UpdateLagCommand.js.map