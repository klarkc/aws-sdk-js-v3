import { __extends } from "tslib";
import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/models_1";
import { deserializeAws_json1_1StartAssociationsOnceCommand, serializeAws_json1_1StartAssociationsOnceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this API action to run an association immediately and only one time. This action can be
 *    helpful when troubleshooting associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAssociationsOnceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartAssociationsOnceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAssociationsOnceCommandInput} for command's `input` shape.
 * @see {@link StartAssociationsOnceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAssociationsOnceCommand = /** @class */ (function (_super) {
    __extends(StartAssociationsOnceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAssociationsOnceCommand(input) {
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
    StartAssociationsOnceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartAssociationsOnceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAssociationsOnceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAssociationsOnceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAssociationsOnceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAssociationsOnceCommand(input, context);
    };
    StartAssociationsOnceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAssociationsOnceCommand(output, context);
    };
    return StartAssociationsOnceCommand;
}($Command));
export { StartAssociationsOnceCommand };
//# sourceMappingURL=StartAssociationsOnceCommand.js.map