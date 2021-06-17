import { __extends } from "tslib";
import { GetMilestoneInput, GetMilestoneOutput } from "../models/models_0";
import { deserializeAws_restJson1GetMilestoneCommand, serializeAws_restJson1GetMilestoneCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a milestone for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetMilestoneCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetMilestoneCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetMilestoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMilestoneCommandInput} for command's `input` shape.
 * @see {@link GetMilestoneCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMilestoneCommand = /** @class */ (function (_super) {
    __extends(GetMilestoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMilestoneCommand(input) {
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
    GetMilestoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "GetMilestoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMilestoneInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMilestoneOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMilestoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMilestoneCommand(input, context);
    };
    GetMilestoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMilestoneCommand(output, context);
    };
    return GetMilestoneCommand;
}($Command));
export { GetMilestoneCommand };
//# sourceMappingURL=GetMilestoneCommand.js.map