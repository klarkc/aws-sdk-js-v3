import { __extends } from "tslib";
import { GetSessionEmbedUrlRequest, GetSessionEmbedUrlResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSessionEmbedUrlCommand, serializeAws_restJson1GetSessionEmbedUrlCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a session URL and authorization code that you can use to embed the Amazon
 *             QuickSight console in your web server code. Use <code>GetSessionEmbedUrl</code> where
 *             you want to provide an authoring portal that allows users to create data sources,
 *             datasets, analyses, and dashboards. The users who access an embedded QuickSight console
 *             need belong to the author or admin security cohort. If you want to restrict permissions
 *             to some of these features, add a custom permissions profile to the user with the
 *             <code>
 *                <a>UpdateUser</a>
 *             </code> API operation. Use <code>
 *                <a>RegisterUser</a>
 *             </code> API operation to add a new user with a custom permission profile attached. For more
 *             information, see the following sections in the <i>Amazon QuickSight User
 *             Guide</i>:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-the-quicksight-console.html">Embedding the Amazon QuickSight Console</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetSessionEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetSessionEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GetSessionEmbedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetSessionEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSessionEmbedUrlCommand = /** @class */ (function (_super) {
    __extends(GetSessionEmbedUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSessionEmbedUrlCommand(input) {
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
    GetSessionEmbedUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "GetSessionEmbedUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSessionEmbedUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSessionEmbedUrlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSessionEmbedUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSessionEmbedUrlCommand(input, context);
    };
    GetSessionEmbedUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSessionEmbedUrlCommand(output, context);
    };
    return GetSessionEmbedUrlCommand;
}($Command));
export { GetSessionEmbedUrlCommand };
//# sourceMappingURL=GetSessionEmbedUrlCommand.js.map