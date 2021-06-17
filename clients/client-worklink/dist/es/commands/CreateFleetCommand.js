import { __extends } from "tslib";
import { CreateFleetRequest, CreateFleetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFleetCommand, serializeAws_restJson1CreateFleetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a fleet. A fleet consists of resources and the configuration that delivers
 *             associated websites to authorized users who download and set up the Amazon WorkLink app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, CreateFleetCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, CreateFleetCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFleetCommand = /** @class */ (function (_super) {
    __extends(CreateFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFleetCommand(input) {
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
    CreateFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "CreateFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFleetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFleetCommand(input, context);
    };
    CreateFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFleetCommand(output, context);
    };
    return CreateFleetCommand;
}($Command));
export { CreateFleetCommand };
//# sourceMappingURL=CreateFleetCommand.js.map