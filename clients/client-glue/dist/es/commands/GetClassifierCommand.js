import { __extends } from "tslib";
import { GetClassifierRequest, GetClassifierResponse } from "../models/models_0";
import { deserializeAws_json1_1GetClassifierCommand, serializeAws_json1_1GetClassifierCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve a classifier by name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassifierCommandInput} for command's `input` shape.
 * @see {@link GetClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetClassifierCommand = /** @class */ (function (_super) {
    __extends(GetClassifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetClassifierCommand(input) {
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
    GetClassifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetClassifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetClassifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetClassifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetClassifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetClassifierCommand(input, context);
    };
    GetClassifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetClassifierCommand(output, context);
    };
    return GetClassifierCommand;
}($Command));
export { GetClassifierCommand };
//# sourceMappingURL=GetClassifierCommand.js.map