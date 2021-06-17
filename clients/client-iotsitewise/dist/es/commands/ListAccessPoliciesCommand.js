import { __extends } from "tslib";
import { ListAccessPoliciesRequest, ListAccessPoliciesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAccessPoliciesCommand, serializeAws_restJson1ListAccessPoliciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of access policies for an identity (an AWS SSO user, an AWS SSO
 *       group, or an IAM user) or an AWS IoT SiteWise Monitor resource (a portal or project).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAccessPoliciesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAccessPoliciesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccessPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListAccessPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccessPoliciesCommand(input) {
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
    ListAccessPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListAccessPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccessPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccessPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccessPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAccessPoliciesCommand(input, context);
    };
    ListAccessPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAccessPoliciesCommand(output, context);
    };
    return ListAccessPoliciesCommand;
}($Command));
export { ListAccessPoliciesCommand };
//# sourceMappingURL=ListAccessPoliciesCommand.js.map