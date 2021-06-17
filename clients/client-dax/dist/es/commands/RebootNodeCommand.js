import { __extends } from "tslib";
import { RebootNodeRequest, RebootNodeResponse } from "../models/models_0";
import { deserializeAws_json1_1RebootNodeCommand, serializeAws_json1_1RebootNodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reboots a single node of a DAX cluster. The reboot action takes place
 *             as soon as possible. During the
 *             reboot, the node status is set to REBOOTING.</p>
 *         <note>
 *             <p>
 *                <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache.  </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, RebootNodeCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, RebootNodeCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new RebootNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootNodeCommandInput} for command's `input` shape.
 * @see {@link RebootNodeCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootNodeCommand = /** @class */ (function (_super) {
    __extends(RebootNodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootNodeCommand(input) {
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
    RebootNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "RebootNodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootNodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RebootNodeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootNodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RebootNodeCommand(input, context);
    };
    RebootNodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RebootNodeCommand(output, context);
    };
    return RebootNodeCommand;
}($Command));
export { RebootNodeCommand };
//# sourceMappingURL=RebootNodeCommand.js.map