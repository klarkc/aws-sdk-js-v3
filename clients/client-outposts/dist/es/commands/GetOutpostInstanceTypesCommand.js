import { __extends } from "tslib";
import { GetOutpostInstanceTypesInput, GetOutpostInstanceTypesOutput } from "../models/models_0";
import { deserializeAws_restJson1GetOutpostInstanceTypesCommand, serializeAws_restJson1GetOutpostInstanceTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the instance types for the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostInstanceTypesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostInstanceTypesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetOutpostInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutpostInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link GetOutpostInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOutpostInstanceTypesCommand = /** @class */ (function (_super) {
    __extends(GetOutpostInstanceTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOutpostInstanceTypesCommand(input) {
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
    GetOutpostInstanceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OutpostsClient";
        var commandName = "GetOutpostInstanceTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOutpostInstanceTypesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetOutpostInstanceTypesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOutpostInstanceTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetOutpostInstanceTypesCommand(input, context);
    };
    GetOutpostInstanceTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetOutpostInstanceTypesCommand(output, context);
    };
    return GetOutpostInstanceTypesCommand;
}($Command));
export { GetOutpostInstanceTypesCommand };
//# sourceMappingURL=GetOutpostInstanceTypesCommand.js.map