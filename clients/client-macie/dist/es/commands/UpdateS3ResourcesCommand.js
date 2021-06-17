import { __extends } from "tslib";
import { UpdateS3ResourcesRequest, UpdateS3ResourcesResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateS3ResourcesCommand, serializeAws_json1_1UpdateS3ResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the classification types for the specified S3 resources. If memberAccountId
 *       isn't specified, the action updates the classification types of the S3 resources associated
 *       with Amazon Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified, the
 *       action updates the classification types of the S3 resources associated with Macie
 *       Classic for the specified member account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, UpdateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, UpdateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new UpdateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link UpdateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateS3ResourcesCommand = /** @class */ (function (_super) {
    __extends(UpdateS3ResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateS3ResourcesCommand(input) {
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
    UpdateS3ResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MacieClient";
        var commandName = "UpdateS3ResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateS3ResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateS3ResourcesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateS3ResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateS3ResourcesCommand(input, context);
    };
    UpdateS3ResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateS3ResourcesCommand(output, context);
    };
    return UpdateS3ResourcesCommand;
}($Command));
export { UpdateS3ResourcesCommand };
//# sourceMappingURL=UpdateS3ResourcesCommand.js.map