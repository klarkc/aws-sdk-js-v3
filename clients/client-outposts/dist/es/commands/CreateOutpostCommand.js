import { __extends } from "tslib";
import { CreateOutpostInput, CreateOutpostOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateOutpostCommand, serializeAws_restJson1CreateOutpostCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new CreateOutpostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOutpostCommandInput} for command's `input` shape.
 * @see {@link CreateOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOutpostCommand = /** @class */ (function (_super) {
    __extends(CreateOutpostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOutpostCommand(input) {
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
    CreateOutpostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OutpostsClient";
        var commandName = "CreateOutpostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOutpostInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOutpostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOutpostCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateOutpostCommand(input, context);
    };
    CreateOutpostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateOutpostCommand(output, context);
    };
    return CreateOutpostCommand;
}($Command));
export { CreateOutpostCommand };
//# sourceMappingURL=CreateOutpostCommand.js.map