import { __extends } from "tslib";
import { ChangeServerLifeCycleStateRequest, SourceServer } from "../models/models_0";
import { deserializeAws_restJson1ChangeServerLifeCycleStateCommand, serializeAws_restJson1ChangeServerLifeCycleStateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ChangeServerLifeCycleStateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ChangeServerLifeCycleStateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new ChangeServerLifeCycleStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeServerLifeCycleStateCommandInput} for command's `input` shape.
 * @see {@link ChangeServerLifeCycleStateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ChangeServerLifeCycleStateCommand = /** @class */ (function (_super) {
    __extends(ChangeServerLifeCycleStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ChangeServerLifeCycleStateCommand(input) {
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
    ChangeServerLifeCycleStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "ChangeServerLifeCycleStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ChangeServerLifeCycleStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ChangeServerLifeCycleStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ChangeServerLifeCycleStateCommand(input, context);
    };
    ChangeServerLifeCycleStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ChangeServerLifeCycleStateCommand(output, context);
    };
    return ChangeServerLifeCycleStateCommand;
}($Command));
export { ChangeServerLifeCycleStateCommand };
//# sourceMappingURL=ChangeServerLifeCycleStateCommand.js.map