import { __extends } from "tslib";
import { FinalizeCutoverRequest, SourceServer } from "../models/models_0";
import { deserializeAws_restJson1FinalizeCutoverCommand, serializeAws_restJson1FinalizeCutoverCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, FinalizeCutoverCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, FinalizeCutoverCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new FinalizeCutoverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FinalizeCutoverCommandInput} for command's `input` shape.
 * @see {@link FinalizeCutoverCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var FinalizeCutoverCommand = /** @class */ (function (_super) {
    __extends(FinalizeCutoverCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function FinalizeCutoverCommand(input) {
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
    FinalizeCutoverCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "FinalizeCutoverCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FinalizeCutoverRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FinalizeCutoverCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1FinalizeCutoverCommand(input, context);
    };
    FinalizeCutoverCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1FinalizeCutoverCommand(output, context);
    };
    return FinalizeCutoverCommand;
}($Command));
export { FinalizeCutoverCommand };
//# sourceMappingURL=FinalizeCutoverCommand.js.map