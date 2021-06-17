import { __extends } from "tslib";
import { ExportServerEngineAttributeRequest, ExportServerEngineAttributeResponse } from "../models/models_0";
import { deserializeAws_json1_1ExportServerEngineAttributeCommand, serializeAws_json1_1ExportServerEngineAttributeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
 *       FAILED or DELETING.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, ExportServerEngineAttributeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, ExportServerEngineAttributeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new ExportServerEngineAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportServerEngineAttributeCommandInput} for command's `input` shape.
 * @see {@link ExportServerEngineAttributeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportServerEngineAttributeCommand = /** @class */ (function (_super) {
    __extends(ExportServerEngineAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportServerEngineAttributeCommand(input) {
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
    ExportServerEngineAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksCMClient";
        var commandName = "ExportServerEngineAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportServerEngineAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportServerEngineAttributeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportServerEngineAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ExportServerEngineAttributeCommand(input, context);
    };
    ExportServerEngineAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ExportServerEngineAttributeCommand(output, context);
    };
    return ExportServerEngineAttributeCommand;
}($Command));
export { ExportServerEngineAttributeCommand };
//# sourceMappingURL=ExportServerEngineAttributeCommand.js.map