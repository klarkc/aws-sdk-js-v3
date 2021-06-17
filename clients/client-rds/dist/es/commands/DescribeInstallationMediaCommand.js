import { __extends } from "tslib";
import { DescribeInstallationMediaMessage, InstallationMediaMessage } from "../models/models_1";
import { deserializeAws_queryDescribeInstallationMediaCommand, serializeAws_queryDescribeInstallationMediaCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available installation media for a DB engine that requires an
 *           on-premises customer provided license, such as Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeInstallationMediaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeInstallationMediaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeInstallationMediaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstallationMediaCommandInput} for command's `input` shape.
 * @see {@link DescribeInstallationMediaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstallationMediaCommand = /** @class */ (function (_super) {
    __extends(DescribeInstallationMediaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstallationMediaCommand(input) {
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
    DescribeInstallationMediaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeInstallationMediaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstallationMediaMessage.filterSensitiveLog,
            outputFilterSensitiveLog: InstallationMediaMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstallationMediaCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeInstallationMediaCommand(input, context);
    };
    DescribeInstallationMediaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeInstallationMediaCommand(output, context);
    };
    return DescribeInstallationMediaCommand;
}($Command));
export { DescribeInstallationMediaCommand };
//# sourceMappingURL=DescribeInstallationMediaCommand.js.map