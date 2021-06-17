import { __extends } from "tslib";
import { DisassociateS3ResourcesRequest, DisassociateS3ResourcesResult } from "../models/models_0";
import { deserializeAws_json1_1DisassociateS3ResourcesCommand, serializeAws_json1_1DisassociateS3ResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes specified S3 resources from being monitored by Amazon Macie Classic. If
 *       memberAccountId isn't specified, the action removes specified S3 resources from Macie Classic
 *       for the current Macie Classic administrator account. If memberAccountId is specified, the action removes specified
 *       S3 resources from Macie Classic for the specified member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, DisassociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, DisassociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new DisassociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link DisassociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateS3ResourcesCommand = /** @class */ (function (_super) {
    __extends(DisassociateS3ResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateS3ResourcesCommand(input) {
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
    DisassociateS3ResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MacieClient";
        var commandName = "DisassociateS3ResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateS3ResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateS3ResourcesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateS3ResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateS3ResourcesCommand(input, context);
    };
    DisassociateS3ResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateS3ResourcesCommand(output, context);
    };
    return DisassociateS3ResourcesCommand;
}($Command));
export { DisassociateS3ResourcesCommand };
//# sourceMappingURL=DisassociateS3ResourcesCommand.js.map