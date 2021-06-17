import { __extends } from "tslib";
import { CreateScheduleRequest, CreateScheduleResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateScheduleCommand, serializeAws_restJson1CreateScheduleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific
 *             date and time, or at regular intervals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateScheduleCommand = /** @class */ (function (_super) {
    __extends(CreateScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateScheduleCommand(input) {
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
    CreateScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "CreateScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateScheduleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateScheduleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateScheduleCommand(input, context);
    };
    CreateScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateScheduleCommand(output, context);
    };
    return CreateScheduleCommand;
}($Command));
export { CreateScheduleCommand };
//# sourceMappingURL=CreateScheduleCommand.js.map