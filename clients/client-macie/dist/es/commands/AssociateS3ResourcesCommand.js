import { __extends } from "tslib";
import { AssociateS3ResourcesRequest, AssociateS3ResourcesResult } from "../models/models_0";
import { deserializeAws_json1_1AssociateS3ResourcesCommand, serializeAws_json1_1AssociateS3ResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates specified S3 resources with Amazon Macie Classic for monitoring and data
 *       classification. If memberAccountId isn't specified, the action associates specified S3
 *       resources with Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified,
 *       the action associates specified S3 resources with Macie Classic for the specified member
 *       account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new AssociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link AssociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateS3ResourcesCommand = /** @class */ (function (_super) {
    __extends(AssociateS3ResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateS3ResourcesCommand(input) {
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
    AssociateS3ResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MacieClient";
        var commandName = "AssociateS3ResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateS3ResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateS3ResourcesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateS3ResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateS3ResourcesCommand(input, context);
    };
    AssociateS3ResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateS3ResourcesCommand(output, context);
    };
    return AssociateS3ResourcesCommand;
}($Command));
export { AssociateS3ResourcesCommand };
//# sourceMappingURL=AssociateS3ResourcesCommand.js.map