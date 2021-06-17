import { __extends } from "tslib";
import { CreateTriggerRequest, CreateTriggerResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateTriggerCommand, serializeAws_json1_1CreateTriggerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new trigger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTriggerCommandInput} for command's `input` shape.
 * @see {@link CreateTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTriggerCommand = /** @class */ (function (_super) {
    __extends(CreateTriggerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTriggerCommand(input) {
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
    CreateTriggerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateTriggerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTriggerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTriggerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTriggerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTriggerCommand(input, context);
    };
    CreateTriggerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTriggerCommand(output, context);
    };
    return CreateTriggerCommand;
}($Command));
export { CreateTriggerCommand };
//# sourceMappingURL=CreateTriggerCommand.js.map