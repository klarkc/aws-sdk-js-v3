import { __extends } from "tslib";
import { StartCutoverRequest, StartCutoverResponse } from "../models/models_0";
import { deserializeAws_restJson1StartCutoverCommand, serializeAws_restJson1StartCutoverCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartCutoverCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartCutoverCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new StartCutoverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCutoverCommandInput} for command's `input` shape.
 * @see {@link StartCutoverCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartCutoverCommand = /** @class */ (function (_super) {
    __extends(StartCutoverCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartCutoverCommand(input) {
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
    StartCutoverCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "StartCutoverCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartCutoverRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartCutoverResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartCutoverCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartCutoverCommand(input, context);
    };
    StartCutoverCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartCutoverCommand(output, context);
    };
    return StartCutoverCommand;
}($Command));
export { StartCutoverCommand };
//# sourceMappingURL=StartCutoverCommand.js.map