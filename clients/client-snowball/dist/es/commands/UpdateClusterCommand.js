import { __extends } from "tslib";
import { UpdateClusterRequest, UpdateClusterResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateClusterCommand, serializeAws_json1_1UpdateClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code>
 *       state, you can update some of the information associated with a cluster. Once the cluster
 *       changes to a different job state, usually 60 minutes after the cluster being created, this
 *       action is no longer available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterCommand(input) {
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
    UpdateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "UpdateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateClusterCommand(input, context);
    };
    UpdateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateClusterCommand(output, context);
    };
    return UpdateClusterCommand;
}($Command));
export { UpdateClusterCommand };
//# sourceMappingURL=UpdateClusterCommand.js.map