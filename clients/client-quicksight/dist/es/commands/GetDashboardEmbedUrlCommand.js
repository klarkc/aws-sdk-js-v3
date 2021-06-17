import { __extends } from "tslib";
import { GetDashboardEmbedUrlRequest, GetDashboardEmbedUrlResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDashboardEmbedUrlCommand, serializeAws_restJson1GetDashboardEmbedUrlCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a session URL and authorization code that you can use to embed an Amazon
 *             QuickSight read-only dashboard in your web server code. Before you use this command,
 *             make sure that you have configured the dashboards and permissions. </p>
 *         <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
 *             from the user's browser. The following rules apply to the combination of URL and
 *             authorization code:</p>
 *         <ul>
 *             <li>
 *                 <p>They must be used together.</p>
 *             </li>
 *             <li>
 *                 <p>They can be used one time only.</p>
 *             </li>
 *             <li>
 *                 <p>They are valid for 5 minutes after you run this command.</p>
 *             </li>
 *             <li>
 *                 <p>The resulting user session is valid for 10 hours.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetDashboardEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetDashboardEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GetDashboardEmbedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDashboardEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDashboardEmbedUrlCommand = /** @class */ (function (_super) {
    __extends(GetDashboardEmbedUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDashboardEmbedUrlCommand(input) {
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
    GetDashboardEmbedUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "GetDashboardEmbedUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDashboardEmbedUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDashboardEmbedUrlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDashboardEmbedUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDashboardEmbedUrlCommand(input, context);
    };
    GetDashboardEmbedUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDashboardEmbedUrlCommand(output, context);
    };
    return GetDashboardEmbedUrlCommand;
}($Command));
export { GetDashboardEmbedUrlCommand };
//# sourceMappingURL=GetDashboardEmbedUrlCommand.js.map