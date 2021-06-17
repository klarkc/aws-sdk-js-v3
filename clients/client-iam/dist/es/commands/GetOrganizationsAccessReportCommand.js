import { __extends } from "tslib";
import { GetOrganizationsAccessReportRequest, GetOrganizationsAccessReportResponse } from "../models/models_0";
import { deserializeAws_queryGetOrganizationsAccessReportCommand, serializeAws_queryGetOrganizationsAccessReportCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated
 *             using the <code>
 *                <a>GenerateOrganizationsAccessReport</a>
 *             </code> operation.
 *             This operation retrieves the status of your report job and the report contents.</p>
 *         <p>Depending on the parameters that you passed when you generated the report, the data
 *             returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p>
 *         <p>To call this operation, you must be signed in to the management account in your
 *             organization. SCPs must be enabled for your organization root. You must have permissions
 *             to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining permissions using
 *                 service last accessed data</a> in the
 *             <i>IAM User Guide</i>.</p>
 *         <p>For each service that principals in an account (root users, IAM users, or IAM
 *             roles) could access using SCPs, the operation returns details about the most recent
 *             access attempt. If there was no attempt, the service is listed without details about the
 *             most recent attempt to access the service. If the operation fails, it returns the reason
 *             that it failed.</p>
 *         <p>By default, the list is sorted by service namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOrganizationsAccessReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOrganizationsAccessReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetOrganizationsAccessReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationsAccessReportCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationsAccessReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOrganizationsAccessReportCommand = /** @class */ (function (_super) {
    __extends(GetOrganizationsAccessReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOrganizationsAccessReportCommand(input) {
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
    GetOrganizationsAccessReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetOrganizationsAccessReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOrganizationsAccessReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOrganizationsAccessReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOrganizationsAccessReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetOrganizationsAccessReportCommand(input, context);
    };
    GetOrganizationsAccessReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetOrganizationsAccessReportCommand(output, context);
    };
    return GetOrganizationsAccessReportCommand;
}($Command));
export { GetOrganizationsAccessReportCommand };
//# sourceMappingURL=GetOrganizationsAccessReportCommand.js.map