import { __extends } from "tslib";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/models_1";
import { deserializeAws_json1_1ResumeSessionCommand, serializeAws_json1_1ResumeSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reconnects a session to an instance after it has been disconnected. Connections can be
 *    resumed for disconnected sessions, but not terminated sessions.</p>
 *          <note>
 *             <p>This command is primarily for use by client machines to automatically reconnect during
 *     intermittent network issues. It is not intended for any other use.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResumeSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResumeSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ResumeSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeSessionCommandInput} for command's `input` shape.
 * @see {@link ResumeSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeSessionCommand = /** @class */ (function (_super) {
    __extends(ResumeSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResumeSessionCommand(input) {
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
    ResumeSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ResumeSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResumeSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResumeSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResumeSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResumeSessionCommand(input, context);
    };
    ResumeSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResumeSessionCommand(output, context);
    };
    return ResumeSessionCommand;
}($Command));
export { ResumeSessionCommand };
//# sourceMappingURL=ResumeSessionCommand.js.map