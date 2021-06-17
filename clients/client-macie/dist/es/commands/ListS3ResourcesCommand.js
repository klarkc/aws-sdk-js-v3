import { __extends } from "tslib";
import { ListS3ResourcesRequest, ListS3ResourcesResult } from "../models/models_0";
import { deserializeAws_json1_1ListS3ResourcesCommand, serializeAws_json1_1ListS3ResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the S3 resources associated with Amazon Macie Classic. If memberAccountId
 *       isn't specified, the action lists the S3 resources associated with Macie Classic for
 *       the current Macie Classic administrator account. If memberAccountId is specified, the action lists the S3 resources
 *       associated with Macie Classic for the specified member account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new ListS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link ListS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListS3ResourcesCommand = /** @class */ (function (_super) {
    __extends(ListS3ResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListS3ResourcesCommand(input) {
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
    ListS3ResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MacieClient";
        var commandName = "ListS3ResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListS3ResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListS3ResourcesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListS3ResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListS3ResourcesCommand(input, context);
    };
    ListS3ResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListS3ResourcesCommand(output, context);
    };
    return ListS3ResourcesCommand;
}($Command));
export { ListS3ResourcesCommand };
//# sourceMappingURL=ListS3ResourcesCommand.js.map