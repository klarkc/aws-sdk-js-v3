import { __extends } from "tslib";
import { GetServiceLastAccessedDetailsWithEntitiesRequest, GetServiceLastAccessedDetailsWithEntitiesResponse, } from "../models/models_0";
import { deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand, serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>After you generate a group or policy report using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
 *                 <code>JobId</code> parameter in
 *                 <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the
 *             status of your report job and a list of entities that could have used group or policy
 *             permissions to access the specified service.</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Group</b> – For a group report, this
 *                     operation returns a list of users in the group that could have used the group’s
 *                     policies in an attempt to access the service.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Policy</b> – For a policy report, this
 *                     operation returns a list of entities (users or roles) that could have used the
 *                     policy in an attempt to access the service.</p>
 *             </li>
 *          </ul>
 *         <p>You can also use this operation for user or role reports to retrieve details about
 *             those entities.</p>
 *         <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
 *             operation returns the reason that it failed.</p>
 *         <p>By default, the list of associated entities is sorted by date, with the most recent
 *             access listed first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServiceLastAccessedDetailsWithEntitiesCommand = /** @class */ (function (_super) {
    __extends(GetServiceLastAccessedDetailsWithEntitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServiceLastAccessedDetailsWithEntitiesCommand(input) {
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
    GetServiceLastAccessedDetailsWithEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetServiceLastAccessedDetailsWithEntitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceLastAccessedDetailsWithEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceLastAccessedDetailsWithEntitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceLastAccessedDetailsWithEntitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(input, context);
    };
    GetServiceLastAccessedDetailsWithEntitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand(output, context);
    };
    return GetServiceLastAccessedDetailsWithEntitiesCommand;
}($Command));
export { GetServiceLastAccessedDetailsWithEntitiesCommand };
//# sourceMappingURL=GetServiceLastAccessedDetailsWithEntitiesCommand.js.map