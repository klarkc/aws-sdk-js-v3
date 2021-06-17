import { __extends } from "tslib";
import { PutParameterRequest, PutParameterResult } from "../models/models_1";
import { deserializeAws_json1_1PutParameterCommand, serializeAws_json1_1PutParameterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add a parameter to the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutParameterCommandInput} for command's `input` shape.
 * @see {@link PutParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutParameterCommand = /** @class */ (function (_super) {
    __extends(PutParameterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutParameterCommand(input) {
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
    PutParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "PutParameterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutParameterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutParameterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutParameterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutParameterCommand(input, context);
    };
    PutParameterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutParameterCommand(output, context);
    };
    return PutParameterCommand;
}($Command));
export { PutParameterCommand };
//# sourceMappingURL=PutParameterCommand.js.map