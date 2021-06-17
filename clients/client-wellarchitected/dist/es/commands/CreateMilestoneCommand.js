import { __extends } from "tslib";
import { CreateMilestoneInput, CreateMilestoneOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateMilestoneCommand, serializeAws_restJson1CreateMilestoneCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a milestone for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateMilestoneCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateMilestoneCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateMilestoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMilestoneCommandInput} for command's `input` shape.
 * @see {@link CreateMilestoneCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMilestoneCommand = /** @class */ (function (_super) {
    __extends(CreateMilestoneCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMilestoneCommand(input) {
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
    CreateMilestoneCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "CreateMilestoneCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMilestoneInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMilestoneOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMilestoneCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMilestoneCommand(input, context);
    };
    CreateMilestoneCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMilestoneCommand(output, context);
    };
    return CreateMilestoneCommand;
}($Command));
export { CreateMilestoneCommand };
//# sourceMappingURL=CreateMilestoneCommand.js.map