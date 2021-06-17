import { __extends } from "tslib";
import { GetMatchesRequest, GetMatchesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMatchesCommand, serializeAws_restJson1GetMatchesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and subject to change.</p>
 *          <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or
 *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
 *          enable identity resolution: set <code>Matching</code> to true.</p>
 *          <p>GetMatches returns potentially matching profiles, based on the results of the latest run
 *          of a machine learning process. </p>
 *          <important>
 *             <p>Amazon Connect runs a batch process every Saturday at 12AM UTC to identify matching profiles.
 *             The results are returned up to seven days after the Saturday run.</p>
 *          </important>
 *
 *          <p>Amazon Connect uses the following profile attributes to identify matches:</p>
 *          <ul>
 *             <li>
 *                <p>PhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>HomePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>BusinessPhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>MobilePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>EmailAddress</p>
 *             </li>
 *             <li>
 *                <p>PersonalEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>BusinessEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>FullName</p>
 *             </li>
 *             <li>
 *                <p>BusinessName</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetMatchesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetMatchesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetMatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMatchesCommandInput} for command's `input` shape.
 * @see {@link GetMatchesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMatchesCommand = /** @class */ (function (_super) {
    __extends(GetMatchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMatchesCommand(input) {
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
    GetMatchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "GetMatchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMatchesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMatchesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMatchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMatchesCommand(input, context);
    };
    GetMatchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMatchesCommand(output, context);
    };
    return GetMatchesCommand;
}($Command));
export { GetMatchesCommand };
//# sourceMappingURL=GetMatchesCommand.js.map