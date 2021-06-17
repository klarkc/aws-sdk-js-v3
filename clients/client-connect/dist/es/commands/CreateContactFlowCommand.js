import { __extends } from "tslib";
import { CreateContactFlowRequest, CreateContactFlowResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateContactFlowCommand, serializeAws_restJson1CreateContactFlowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a contact flow for the specified Amazon Connect instance.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactFlowCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateContactFlowCommand = /** @class */ (function (_super) {
    __extends(CreateContactFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateContactFlowCommand(input) {
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
    CreateContactFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateContactFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateContactFlowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateContactFlowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateContactFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateContactFlowCommand(input, context);
    };
    CreateContactFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateContactFlowCommand(output, context);
    };
    return CreateContactFlowCommand;
}($Command));
export { CreateContactFlowCommand };
//# sourceMappingURL=CreateContactFlowCommand.js.map