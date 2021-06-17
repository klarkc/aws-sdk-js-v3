import { __extends } from "tslib";
import { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/models_1";
import { deserializeAws_queryDownloadDBLogFilePortionCommand, serializeAws_queryDownloadDBLogFilePortionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDBLogFilePortionCommandInput} for command's `input` shape.
 * @see {@link DownloadDBLogFilePortionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DownloadDBLogFilePortionCommand = /** @class */ (function (_super) {
    __extends(DownloadDBLogFilePortionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DownloadDBLogFilePortionCommand(input) {
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
    DownloadDBLogFilePortionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DownloadDBLogFilePortionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DownloadDBLogFilePortionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DownloadDBLogFilePortionDetails.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DownloadDBLogFilePortionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDownloadDBLogFilePortionCommand(input, context);
    };
    DownloadDBLogFilePortionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDownloadDBLogFilePortionCommand(output, context);
    };
    return DownloadDBLogFilePortionCommand;
}($Command));
export { DownloadDBLogFilePortionCommand };
//# sourceMappingURL=DownloadDBLogFilePortionCommand.js.map