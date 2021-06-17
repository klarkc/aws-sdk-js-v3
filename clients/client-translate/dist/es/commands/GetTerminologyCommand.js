import { __extends } from "tslib";
import { GetTerminologyRequest, GetTerminologyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetTerminologyCommand, serializeAws_json1_1GetTerminologyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a custom terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, GetTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, GetTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new GetTerminologyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTerminologyCommandInput} for command's `input` shape.
 * @see {@link GetTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTerminologyCommand = /** @class */ (function (_super) {
    __extends(GetTerminologyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTerminologyCommand(input) {
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
    GetTerminologyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranslateClient";
        var commandName = "GetTerminologyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTerminologyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTerminologyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTerminologyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTerminologyCommand(input, context);
    };
    GetTerminologyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTerminologyCommand(output, context);
    };
    return GetTerminologyCommand;
}($Command));
export { GetTerminologyCommand };
//# sourceMappingURL=GetTerminologyCommand.js.map