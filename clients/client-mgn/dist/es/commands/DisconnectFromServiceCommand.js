import { __extends } from "tslib";
import { DisconnectFromServiceRequest, SourceServer } from "../models/models_0";
import { deserializeAws_restJson1DisconnectFromServiceCommand, serializeAws_restJson1DisconnectFromServiceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DisconnectFromServiceCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DisconnectFromServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DisconnectFromServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectFromServiceCommandInput} for command's `input` shape.
 * @see {@link DisconnectFromServiceCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisconnectFromServiceCommand = /** @class */ (function (_super) {
    __extends(DisconnectFromServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisconnectFromServiceCommand(input) {
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
    DisconnectFromServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DisconnectFromServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisconnectFromServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisconnectFromServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisconnectFromServiceCommand(input, context);
    };
    DisconnectFromServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisconnectFromServiceCommand(output, context);
    };
    return DisconnectFromServiceCommand;
}($Command));
export { DisconnectFromServiceCommand };
//# sourceMappingURL=DisconnectFromServiceCommand.js.map