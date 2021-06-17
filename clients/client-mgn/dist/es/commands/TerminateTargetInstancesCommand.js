import { __extends } from "tslib";
import { TerminateTargetInstancesRequest, TerminateTargetInstancesResponse } from "../models/models_0";
import { deserializeAws_restJson1TerminateTargetInstancesCommand, serializeAws_restJson1TerminateTargetInstancesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, TerminateTargetInstancesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, TerminateTargetInstancesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new TerminateTargetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateTargetInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateTargetInstancesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateTargetInstancesCommand = /** @class */ (function (_super) {
    __extends(TerminateTargetInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateTargetInstancesCommand(input) {
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
    TerminateTargetInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "TerminateTargetInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateTargetInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateTargetInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateTargetInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TerminateTargetInstancesCommand(input, context);
    };
    TerminateTargetInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TerminateTargetInstancesCommand(output, context);
    };
    return TerminateTargetInstancesCommand;
}($Command));
export { TerminateTargetInstancesCommand };
//# sourceMappingURL=TerminateTargetInstancesCommand.js.map