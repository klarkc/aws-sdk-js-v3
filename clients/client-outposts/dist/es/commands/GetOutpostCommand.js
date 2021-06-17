import { __extends } from "tslib";
import { GetOutpostInput, GetOutpostOutput } from "../models/models_0";
import { deserializeAws_restJson1GetOutpostCommand, serializeAws_restJson1GetOutpostCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetOutpostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutpostCommandInput} for command's `input` shape.
 * @see {@link GetOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOutpostCommand = /** @class */ (function (_super) {
    __extends(GetOutpostCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOutpostCommand(input) {
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
    GetOutpostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OutpostsClient";
        var commandName = "GetOutpostCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOutpostInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetOutpostOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOutpostCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetOutpostCommand(input, context);
    };
    GetOutpostCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetOutpostCommand(output, context);
    };
    return GetOutpostCommand;
}($Command));
export { GetOutpostCommand };
//# sourceMappingURL=GetOutpostCommand.js.map