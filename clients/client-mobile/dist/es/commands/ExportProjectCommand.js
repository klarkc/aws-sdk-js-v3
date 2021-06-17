import { __extends } from "tslib";
import { ExportProjectRequest, ExportProjectResult } from "../models/models_0";
import { deserializeAws_restJson1ExportProjectCommand, serializeAws_restJson1ExportProjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Exports project configuration to a snapshot which can be downloaded and shared.
 *             Note that mobile app push credentials are encrypted in exported projects, so they
 *             can only be shared successfully within the same AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ExportProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportProjectCommandInput} for command's `input` shape.
 * @see {@link ExportProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportProjectCommand = /** @class */ (function (_super) {
    __extends(ExportProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportProjectCommand(input) {
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
    ExportProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MobileClient";
        var commandName = "ExportProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ExportProjectCommand(input, context);
    };
    ExportProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ExportProjectCommand(output, context);
    };
    return ExportProjectCommand;
}($Command));
export { ExportProjectCommand };
//# sourceMappingURL=ExportProjectCommand.js.map